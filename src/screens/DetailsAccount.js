import React from 'react';
import {
  Avatar,
  Box,
  FormControl,
  Input,
  Pressable,
  ScrollView,
  Stack,
  Text,
  VStack,
  Button,
  HStack,
  Spinner,
  useToast,
} from 'native-base';
// import {ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';
import Footer from '../components/Footer';
import {useDispatch, useSelector} from 'react-redux';
import {logoutAction} from '../redux/reducers/auth';
import {clearProfileAction} from '../redux/reducers/profile';
import {getProfileAction} from '../redux/actions/profile';

import YupPassword from 'yup-password';
import {Formik} from 'formik';
import * as Yup from 'yup';
import http from '../helpers/http';
import {TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/dist/Feather';
import {launchImageLibrary} from 'react-native-image-picker';
YupPassword(Yup); // extend yup

const detailsAccountSchema = Yup.object({
  firstName: Yup.string(),
  lastName: Yup.string(),
  phoneNumber: Yup.string(),
  email: Yup.string().email('Invalid email address'),
});

const updatePasswordSchema = Yup.object({
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

const DetailsAccount = () => {
  const [showOne, setShowOne] = React.useState(false);
  const [showTwo, setShowTwo] = React.useState(false);
  const [isLoadingOne, setIsLoadingOne] = React.useState(true);
  const [isLoadingTwo, setIsLoadingTwo] = React.useState(true);
  const [isLoadingPicture, setIsLoadingPicture] = React.useState(true);

  const {user} = useSelector(state => state.profile);
  const {token} = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const toast = useToast();

  const doUpdatePassword = async value => {
    if (value.password === value.confirmPassword) {
      try {
        const form = {
          password: value.password,
          confirmPassword: value.confirmPassword,
        };
        setIsLoadingTwo(false);
        const {data} = await http(token).patch('/profile', form);
        setIsLoadingTwo(true);
        toast.show({
          title: data.message,
          placement: 'top',
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.show({
        title: 'Password and Confirm Password not matches',
        placement: 'top',
      });
    }
  };

  const doUpdateAccount = async value => {
    try {
      const form = {
        firstName: value.firstName,
        lastName: value.lastName,
        phoneNumber: value.phoneNumber,
        email: value.email,
      };
      setIsLoadingOne(false);
      const {data} = await http(token).patch('/profile', form);
      await dispatch(getProfileAction());
      setIsLoadingOne(true);
      toast.show({
        title: data.message,
        placement: 'top',
      });
    } catch (err) {
      throw err.response.data.message;
    }
  };

  const doUpdateProfile = async () => {
    const {assets} = await launchImageLibrary();
    if (assets) {
      const [result] = assets;
      const size = parseInt(result.fileSize);
      if (size <= 400000) {
        try {
          const obj = {
            name: result.fileName,
            type: result.type,
            uri: result.uri,
          };
          const form = new FormData();
          form.append('picture', obj);
          setIsLoadingPicture(false);
          const {data} = await http(token).patch('/profile', form, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          await dispatch(getProfileAction());
          setIsLoadingPicture(true);
          toast.show({
            title: data.message,
            placement: 'top',
          });
        } catch (err) {
          console.log(err.message);
          setIsLoadingPicture(true);
        }
      } else {
        toast.show({
          title: 'Max size 4mb,',
          placement: 'top',
        });
      }
    }
  };

  function actionCreator() {
    dispatch(logoutAction());
    dispatch(clearProfileAction());
  }

  return (
    <Stack direction={'column'} backgroundColor={'#161621'} flex={1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack padding={5} space={4}>
          <VStack backgroundColor={'#0A2647'} padding={5} borderRadius={8}>
            <Text color={'white'} fontSize={18}>
              Info
            </Text>
            <Box alignItems={'center'} mt={7}>
              <TouchableOpacity onPress={() => doUpdateProfile()}>
                <Box position={'relative'}>
                  {user?.picture ? (
                    <Avatar size={'120px'} source={{uri: user.picture}} />
                  ) : (
                    <Avatar size={'120px'} />
                  )}
                  {!isLoadingPicture && (
                    <Spinner
                      size="lg"
                      position={'absolute'}
                      top={'42px'}
                      left={'42px'}
                    />
                  )}
                  <HStack justifyContent={'center'} alignItems={'center'}>
                    <Feather name="edit" size={18} color={'white'} />
                    <Text color={'white'} fontWeight={'500'} marginX={1}>
                      Edit
                    </Text>
                  </HStack>
                </Box>
              </TouchableOpacity>
              <Text color={'white'} fontSize={21} marginTop={5}>
                {user.firstName + ' ' + user.lastName}
              </Text>
              <Text color={'white'} fontSize={15} marginTop={1}>
                Moviegoers
              </Text>
            </Box>
            <Box
              borderBottomWidth={0.8}
              borderBottomColor={'white'}
              marginY={7}
            />
            <Button
              onPress={() => actionCreator()}
              background={'#28907D'}
              borderRadius={8}>
              Logout
            </Button>
          </VStack>

          <VStack my={5}>
            <Text color={'white'} fontSize={18} mb={5}>
              Account Settings
            </Text>

            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
              }}
              validationSchema={detailsAccountSchema}
              onSubmit={doUpdateAccount}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                dirty,
                touched,
              }) => (
                <VStack>
                  <VStack
                    backgroundColor={'#0A2647'}
                    padding={5}
                    borderRadius={8}>
                    <Stack space={5}>
                      <Text color={'white'} fontSize={18}>
                        Details Information
                      </Text>
                      <Box
                        borderBottomWidth={0.8}
                        borderBottomColor={'white'}
                      />
                      <Stack>
                        <FormControl
                          isInvalid={errors.firstName && touched.firstName}>
                          <FormControl.Label fontSize={15}>
                            First Name
                          </FormControl.Label>
                          <Input
                            onChangeText={handleChange('firstName')}
                            onBlur={handleBlur('firstName')}
                            value={values.firstName}
                            variant="outline"
                            p={2}
                            defaultValue={user.firstName}
                            placeholder={user.firstName}
                            placeholderTextColor={'white'}
                            color={'white'}
                            fontSize={15}
                          />
                          {errors.firstName && (
                            <FormControl.ErrorMessage
                              leftIcon={
                                <Icon
                                  name="alert-circle"
                                  size={18}
                                  color="red"
                                />
                              }>
                              {errors.firstName}
                            </FormControl.ErrorMessage>
                          )}
                        </FormControl>
                        <FormControl
                          isInvalid={errors.lastName && touched.lastName}>
                          <FormControl.Label fontSize={15}>
                            Last Name
                          </FormControl.Label>
                          <Input
                            onChangeText={handleChange('lastName')}
                            onBlur={handleBlur('lastName')}
                            value={values.lastName}
                            variant="outline"
                            p={2}
                            defaultValue={user.lastName}
                            placeholder={user.lastName}
                            placeholderTextColor={'white'}
                            color={'white'}
                            fontSize={15}
                          />
                          {errors.lastName && (
                            <FormControl.ErrorMessage
                              leftIcon={
                                <Icon
                                  name="alert-circle"
                                  size={18}
                                  color="red"
                                />
                              }>
                              {errors.lastName}
                            </FormControl.ErrorMessage>
                          )}
                        </FormControl>
                        <FormControl
                          isInvalid={errors.phoneNumber && touched.phoneNumber}>
                          <FormControl.Label fontSize={15}>
                            Phone Number
                          </FormControl.Label>
                          <Input
                            onChangeText={handleChange('phoneNumber')}
                            onBlur={handleBlur('phoneNumber')}
                            value={values.phoneNumber}
                            variant="outline"
                            p={2}
                            defaultValue={user.phoneNumber}
                            placeholder={user.phoneNumber}
                            placeholderTextColor={'white'}
                            color={'white'}
                            fontSize={15}
                          />
                          {errors.phoneNumber && (
                            <FormControl.ErrorMessage
                              leftIcon={
                                <Icon
                                  name="alert-circle"
                                  size={18}
                                  color="red"
                                />
                              }>
                              {errors.phoneNumber}
                            </FormControl.ErrorMessage>
                          )}
                        </FormControl>
                        <FormControl isInvalid={errors.email && touched.email}>
                          <FormControl.Label fontSize={15}>
                            Email
                          </FormControl.Label>
                          <Input
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            variant="outline"
                            p={2}
                            defaultValue={user.email}
                            placeholder={user.email}
                            placeholderTextColor={'white'}
                            color={'white'}
                            fontSize={15}
                          />
                          {errors.email && (
                            <FormControl.ErrorMessage
                              leftIcon={
                                <Icon
                                  name="alert-circle"
                                  size={18}
                                  color="red"
                                />
                              }>
                              {errors.email}
                            </FormControl.ErrorMessage>
                          )}
                        </FormControl>
                      </Stack>
                    </Stack>
                  </VStack>
                  <Box mt={5}>
                    <Button
                      isLoading={!isLoadingOne}
                      onPress={handleSubmit}
                      isDisabled={!dirty || !isLoadingOne}
                      background={'#28907D'}
                      borderRadius={8}>
                      Update
                    </Button>
                  </Box>
                </VStack>
              )}
            </Formik>

            <VStack mt={12}>
              <Formik
                initialValues={{
                  password: '',
                  confirmPassword: '',
                }}
                validationSchema={updatePasswordSchema}
                onSubmit={doUpdatePassword}>
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  dirty,
                  touched,
                }) => (
                  <VStack>
                    <VStack
                      backgroundColor={'#0A2647'}
                      padding={5}
                      borderRadius={8}>
                      <Stack space={5}>
                        <Text color={'white'} fontSize={18}>
                          Details Information
                        </Text>
                        <Box
                          borderBottomWidth={0.8}
                          borderBottomColor={'white'}
                        />
                        <Stack>
                          <FormControl
                            isInvalid={errors.password && touched.password}>
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
                              placeholder="New Password"
                            />
                            {errors.password && (
                              <FormControl.ErrorMessage
                                leftIcon={
                                  <Icon
                                    name="alert-circle"
                                    size={18}
                                    color="red"
                                  />
                                }>
                                {errors.password}
                              </FormControl.ErrorMessage>
                            )}
                          </FormControl>
                          <FormControl
                            isInvalid={
                              errors.confirmPassword && touched.confirmPassword
                            }>
                            <FormControl.Label fontSize={15}>
                              Confirm New Password
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
                              placeholder="Confirm New Password"
                            />
                            {errors.confirmPassword && (
                              <FormControl.ErrorMessage
                                leftIcon={
                                  <Icon
                                    name="alert-circle"
                                    size={18}
                                    color="red"
                                  />
                                }>
                                {errors.confirmPassword}
                              </FormControl.ErrorMessage>
                            )}
                          </FormControl>
                        </Stack>
                      </Stack>
                    </VStack>
                    <Box mt={5}>
                      <Button
                        isLoading={!isLoadingTwo}
                        onPress={handleSubmit}
                        isDisabled={!dirty || !isLoadingTwo}
                        background={'#28907D'}
                        borderRadius={8}>
                        Update
                      </Button>
                    </Box>
                  </VStack>
                )}
              </Formik>
            </VStack>
          </VStack>
        </VStack>

        <Footer />
      </ScrollView>
    </Stack>
  );
};

export default DetailsAccount;
