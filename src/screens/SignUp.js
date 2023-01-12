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
  ScrollView,
} from 'native-base';
import Icon from 'react-native-vector-icons/dist/Feather';
import HeaderAuth from '../components/HeaderAuth';
import {useNavigation} from '@react-navigation/native';

import * as Yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(Yup); // extend yup

import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {registerAction} from '../redux/actions/auth';

const RegisterSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  phoneNumber: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .password()
    .min(6, 'Min length 6')
    .minLowercase(1, 'Min Lowercase 1')
    .minUppercase(1, 'Min uppercase 1')
    .minNumbers(1, 'Min Number 1')
    .minSymbols(1, 'Min Symbol 1')
    .required('Required'),
});

const SignUp = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [showOne, setShowOne] = useState(false);
  const message = useSelector(state => state.auth.message);
  const isLoading = useSelector(state => state.auth.isLoading);

  const doRegister = value => {
    dispatch(registerAction({value}));
  };

  return (
    <View style={[styles.bg, styles.wrapper]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderAuth
          title={'Sign Up'}
          subTitle={'Fill your additional details'}
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
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            password: '',
          }}
          validationSchema={RegisterSchema}
          onSubmit={doRegister}>
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
              <FormControl isInvalid={errors.firstName && touched.firstName}>
                <Stack>
                  <FormControl.Label fontSize={15}>
                    First Name
                  </FormControl.Label>
                  <Input
                    onChangeText={handleChange('firstName')}
                    onBlur={handleBlur('firstName')}
                    value={values.firstName}
                    variant="outline"
                    p={2}
                    placeholder="Write your first name"
                    placeholderTextColor={'white'}
                    color={'white'}
                    fontSize={15}
                  />
                  {errors.firstName && (
                    <FormControl.ErrorMessage
                      leftIcon={
                        <Icon name="alert-circle" size={18} color="red" />
                      }>
                      {errors.firstName}
                    </FormControl.ErrorMessage>
                  )}
                </Stack>
              </FormControl>
              <FormControl isInvalid={errors.lastName && touched.lastName}>
                <Stack>
                  <FormControl.Label fontSize={15}>Last Name</FormControl.Label>
                  <Input
                    onChangeText={handleChange('lastName')}
                    onBlur={handleBlur('lastName')}
                    value={values.lastName}
                    variant="outline"
                    p={2}
                    placeholder="Write your last name"
                    placeholderTextColor={'white'}
                    color={'white'}
                    fontSize={15}
                  />
                  {errors.lastName && (
                    <FormControl.ErrorMessage
                      leftIcon={
                        <Icon name="alert-circle" size={18} color="red" />
                      }>
                      {errors.lastName}
                    </FormControl.ErrorMessage>
                  )}
                </Stack>
              </FormControl>
              <FormControl
                isInvalid={errors.phoneNumber && touched.phoneNumber}>
                <Stack>
                  <FormControl.Label fontSize={15}>
                    Phone Number
                  </FormControl.Label>
                  <Input
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={handleBlur('phoneNumber')}
                    value={values.phoneNumber}
                    variant="outline"
                    p={2}
                    placeholder="Write your phone number"
                    placeholderTextColor={'white'}
                    color={'white'}
                    fontSize={15}
                  />
                  {errors.phoneNumber && (
                    <FormControl.ErrorMessage
                      leftIcon={
                        <Icon name="alert-circle" size={18} color="red" />
                      }>
                      {errors.phoneNumber}
                    </FormControl.ErrorMessage>
                  )}
                </Stack>
              </FormControl>
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
                  <FormControl.Label fontSize={15}>Password</FormControl.Label>
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
                Sign Up
              </Button>
            </VStack>
          )}
        </Formik>

        <View style={styles.bottom}>
          <HStack alignItems={'center'}>
            <Text style={[styles.colorGray, styles.bottomText]}>
              Already have account ?
            </Text>
            <Pressable onPress={() => navigation.navigate('SignIn')}>
              <Text style={[styles.colorPrimary, styles.bottomText]}>
                {' '}
                Sign In
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
  },
});

export default SignUp;
