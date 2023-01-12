import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
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
} from 'native-base';
import Icon from 'react-native-vector-icons/dist/Feather';

import * as Yup from 'yup';
import {Formik} from 'formik';
import http from '../helpers/http';

const forgotPasswordSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
});

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const doForgotPassword = async value => {
    const form = {
      email: value.email,
    };
    try {
      setIsLoading(false);
      const {data} = await http().post('/auth/forgotPassword', form);
      setMessage(data.message);
      setIsLoading(true);
      setTimeout(() => {
        setMessage('');
        navigation.navigate('ResetPassword', {email: value.email});
      }, 1000);
    } catch (error) {
      setMessage(error.response.data.message);
      setIsLoading(true);
    }
  };

  return (
    <View style={[styles.bg, styles.wrapper]}>
      <ScrollView>
        <HeaderAuth
          title={'Forgot Password'}
          subTitle={"we'll send a link to your email shortly"}
        />
        {message && (
          <Box my={5}>
            {message == 'User not found' ? (
              <Alert status={'error'}>
                <Text fontWeight={'bold'}>{message}</Text>
              </Alert>
            ) : (
              <Alert status={'success'}>
                <Text fontWeight={'bold'}>{message}</Text>
              </Alert>
            )}
          </Box>
        )}
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={forgotPasswordSchema}
          onSubmit={doForgotPassword}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            dirty,
            touched,
          }) => (
            <VStack space={5} mt={5}>
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
              <Button
                isLoading={!isLoading}
                onPress={handleSubmit}
                isDisabled={!dirty || !isLoading}
                background={'#28907D'}
                borderRadius={8}>
                Send
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

export default ForgotPassword;
