import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import HeaderAuth from '../components/HeaderAuth';
import {useNavigation} from '@react-navigation/native';

import {
  Pressable,
  Stack,
  FormControl,
  Input,
  Box,
  VStack,
  Button,
  Alert,
  Text,
  ScrollView,
  View,
} from 'native-base';
import Icon from 'react-native-vector-icons/dist/Feather';

import * as Yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(Yup); // extend yup

import {Formik} from 'formik';
import http from '../helpers/http';

const resetPasswordSchema = Yup.object({
  code: Yup.string().required('Required'),
  password: Yup.string()
    .password()
    .min(6, 'Min length 6')
    .minLowercase(1, 'Min Lowercase 1')
    .minUppercase(1, 'Min uppercase 1')
    .minNumbers(1, 'Min Number 1')
    .minSymbols(1, 'Min Symbol 1')
    .required('Required'),
  confirmPassword: Yup.string()
    .password()
    .min(6, 'Min length 6')
    .minLowercase(1, 'Min Lowercase 1')
    .minUppercase(1, 'Min uppercase 1')
    .minNumbers(1, 'Min Number 1')
    .minSymbols(1, 'Min Symbol 1')
    .required('Required'),
});

const ResetPassword = ({route}) => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);

  const navigation = useNavigation();

  const doResetPassword = async value => {
    const form = {
      email: route?.params?.email,
      code: value.code,
      password: value.password,
      confirmPassword: value.confirmPassword,
    };
    console.log(form);
    try {
      setIsLoading(false);
      const {data} = await http().post('/auth/resetPassword', form);
      setMessage(data.message);
      setIsLoading(true);
      setTimeout(() => {
        setMessage('');
        navigation.navigate('SignIn');
      }, 1500);
    } catch (error) {
      setMessage(error.response.data.message);
      setIsLoading(true);
    }
  };

  return (
    <View style={[styles.bg, styles.wrapper]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderAuth title={'Set Password'} subTitle={'set your new password'} />
        {message && (
          <Box my={5}>
            {message === 'Password updated, please relogin' ? (
              <Alert status={'success'}>
                <Text fontWeight={'bold'}>{message}</Text>
              </Alert>
            ) : (
              <Alert status={'error'}>
                <Text fontWeight={'bold'}>{message}</Text>
              </Alert>
            )}
          </Box>
        )}

        <Formik
          initialValues={{
            code: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={resetPasswordSchema}
          onSubmit={doResetPassword}>
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
              <FormControl isInvalid={errors.code && touched.code}>
                <Stack>
                  <FormControl.Label fontSize={15}>Code</FormControl.Label>
                  <Input
                    onChangeText={handleChange('code')}
                    onBlur={handleBlur('code')}
                    value={values.code}
                    variant="outline"
                    p={2}
                    placeholder="Write your code"
                    placeholderTextColor={'white'}
                    color={'white'}
                    fontSize={15}
                  />
                  {errors.code && (
                    <FormControl.ErrorMessage
                      leftIcon={
                        <Icon name="alert-circle" size={18} color="red" />
                      }>
                      {errors.code}
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
              <FormControl
                isInvalid={errors.confirmPassword && touched.confirmPassword}>
                <Stack mb={5}>
                  <FormControl.Label fontSize={15}>
                    Confirm Password
                  </FormControl.Label>
                  <Input
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                    w={{
                      base: '100%',
                      md: '25%',
                    }}
                    type={showTwo ? 'text' : 'password'}
                    InputRightElement={
                      <Pressable onPress={() => setShowTwo(!showTwo)}>
                        <Box mr={3}>
                          <Icon
                            name={showTwo ? 'eye' : 'eye-off'}
                            size={25}
                            color="muted.400"
                          />
                        </Box>
                      </Pressable>
                    }
                    color={'white'}
                    fontSize={15}
                    placeholderTextColor={'white'}
                    placeholder="Write your confirm password"
                  />
                  {errors.confirmPassword && (
                    <FormControl.ErrorMessage
                      leftIcon={
                        <Icon name="alert-circle" size={18} color="red" />
                      }>
                      {errors.confirmPassword}
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
                Reset
              </Button>
            </VStack>
          )}
        </Formik>
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

export default ResetPassword;
