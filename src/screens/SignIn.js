import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Pressable,
  HStack,
  Stack,
  FormControl,
  Input,
  Box,
  VStack,
  Button,
  Alert,
  Text,
} from 'native-base';
import {ScrollView} from 'react-native';
import HeaderAuth from '../components/HeaderAuth';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/Feather';

import * as Yup from 'yup';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from '../redux/actions/auth';

const SignInSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});
const SignIn = () => {
  const dispatch = useDispatch();
  const [showOne, setShowOne] = useState(false);
  const message = useSelector(state => state.auth.message);
  const isLoading = useSelector(state => state.auth.isLoading);

  const navigation = useNavigation();

  const doLogin = value => {
    dispatch(loginAction({value}));
  };

  return (
    <View style={[styles.bg, styles.wrapper]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderAuth
          title={'Sign In'}
          subTitle={
            'Sign in with your data that you entered during your registration'
          }
        />
        {message && (
          <Box my={5}>
            <Alert status={'error'}>
              <Text fontWeight={'bold'}>{message}</Text>
            </Alert>
          </Box>
        )}
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SignInSchema}
          onSubmit={doLogin}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            dirty,
            touched,
          }) => (
            <VStack space={3} mt={5}>
              <FormControl isInvalid={errors.email && touched.email}>
                <Stack>
                  <FormControl.Label fontSize={15}>Email</FormControl.Label>
                  <Input
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    variant="outline"
                    p={2}
                    placeholder="Write your email"
                    placeholderTextColor={'white'}
                    color={'white'}
                    fontSize={15}
                  />
                  {errors.email && (
                    <FormControl.ErrorMessage
                      leftIcon={
                        <Icon name="alert-circle" size={18} color="red" />
                      }>
                      {errors.email}
                    </FormControl.ErrorMessage>
                  )}
                </Stack>
              </FormControl>
              <FormControl isInvalid={errors.password && touched.password}>
                <Stack mb={5}>
                  <FormControl.Label fontSize={15}>
                    New Password
                  </FormControl.Label>
                  <Input
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    w={{
                      base: '100%',
                      md: '25%',
                    }}
                    type={showOne ? 'text' : 'password'}
                    InputRightElement={
                      <Pressable onPress={() => setShowOne(!showOne)}>
                        <Box mr={3}>
                          <Icon
                            name={showOne ? 'eye' : 'eye-off'}
                            size={25}
                            color="muted.400"
                          />
                        </Box>
                      </Pressable>
                    }
                    color={'white'}
                    fontSize={15}
                    placeholderTextColor={'white'}
                    placeholder="Write your password"
                  />
                  {errors.password && (
                    <FormControl.ErrorMessage
                      leftIcon={
                        <Icon name="alert-circle" size={18} color="red" />
                      }>
                      {errors.password}
                    </FormControl.ErrorMessage>
                  )}
                </Stack>
              </FormControl>
              <Button
                isLoading={!isLoading}
                onPress={handleSubmit}
                isDisabled={!dirty || !isLoading}
                background={'#28907D'}
                borderRadius={8}>
                Sign In
              </Button>
            </VStack>
          )}
        </Formik>

        <View style={styles.bottom}>
          <HStack alignItems={'center'}>
            <Text style={[styles.colorGray, styles.bottomText]}>
              Forgot your password?
            </Text>
            <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={[styles.colorPrimary, styles.bottomText]}>
                {' '}
                Reset now
              </Text>
            </Pressable>
          </HStack>
          <HStack alignItems={'center'}>
            <Text style={[styles.colorGray, styles.bottomText]}>
              Don’t have an account?
            </Text>
            <Pressable onPress={() => navigation.navigate('SignUp')}>
              <Text style={[styles.colorPrimary, styles.bottomText]}>
                {' '}
                Sign Up
              </Text>
            </Pressable>
          </HStack>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 40,
  },
  bg: {
    backgroundColor: '#161621',
  },
  colorBlack: {
    color: 'black',
  },
  colorGray: {
    color: '#8692A6',
  },
  colorPrimary: {
    color: '#28907D',
  },
  title: {
    fontSize: 37,
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 10,
  },
  form: {
    marginTop: 40,
  },
  bottom: {
    marginTop: 20,
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 16,
    marginVertical: 5,
  },
});
export default SignIn;
