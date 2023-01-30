import React, {useEffect, useState} from 'react';
import {
  Box,
  Button,
  FormControl,
  HStack,
  Image,
  Input,
  Pressable,
  ScrollView,
  Skeleton,
  Stack,
  Text,
  VStack,
} from 'native-base';
import {ToastAndroid, Alert} from 'react-native';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import http from '../helpers/http';

import Icon from 'react-native-vector-icons/dist/Feather';

import * as Yup from 'yup';
import YupPassword from 'yup-password';
import {Formik} from 'formik';
import {transactionAction} from '../redux/actions/transactions';
import PushNotification from 'react-native-push-notification';
YupPassword(Yup); // extend yup

const personalInfoSchema = Yup.object({
  fullName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  phoneNumber: Yup.string().required('Required'),
});

const Payment = () => {
  const {total} = useSelector(state => state.transactions);
  const {bookingDate} = useSelector(state => state.transactions);
  const {movieId} = useSelector(state => state.transactions);
  const {cinemaId} = useSelector(state => state.transactions);
  const {bookingTime} = useSelector(state => state.transactions);
  const {seatNum} = useSelector(state => state.transactions);
  const {isLoadingBtn} = useSelector(state => state.transactions);

  const [isLoading, setIsLoading] = useState(true);
  const [dataPaymentMethod, setDataPaymentMethods] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [selectedPayment, setSelectedPayment] = useState('');

  const doPay = async value => {
    if (selectedPayment) {
      const dataTrx = {
        bookingDate,
        movieId,
        cinemaId,
        email: value.email,
        fullName: value.fullName,
        paymentMethodId: selectedPayment,
        phoneNumber: value.phoneNumber,
        seatNum: seatNum,
        total,
        bookingTime,
      };
      await dispatch(transactionAction({dataTrx}));
      Alert.alert(
        'Order Success ✔️',
        'You can check your ticket results in the order history section in your profile',
        [
          {
            text: 'Ok',
            onPress: () => navigation.navigate('Profile'),
            style: 'default',
          },
          // {
          //   text: 'Back to home',
          //   onPress: () => navigation.navigate('Home'),
          //   style: 'default',
          // },
        ],
      );
      PushNotification.localNotification({
        channelId: 'global_notif',
        title: 'success',
        message: 'Your seat has been reserved, we wait for you!',
      });
      
    } else {
      ToastAndroid.show('Please choose payment method', ToastAndroid.SHORT);
    }
  };

  const getPaymentMethod = async () => {
    try {
      setIsLoading(false);
      const {data} = await http().get('/paymentMethod');
      setIsLoading(true);
      setDataPaymentMethods(data.results);
    } catch (error) {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    getPaymentMethod();
  }, []);

  return (
    <Stack direction={'column'} backgroundColor={'#161621'} flex={1}>
      <HStack backgroundColor={'#28907D'} padding={4} borderBottomRadius={15}>
        <Text flex={1} color={'white'} fontSize={18}>
          Total Payment
        </Text>
        <Text color={'white'} fontSize={18} fontWeight={'bold'}>
          {`Rp.${Intl.NumberFormat('id-ID', {
            currency: 'IDR',
          }).format(total)}`}
        </Text>
      </HStack>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack padding={5} space={4}>
          <Text color={'white'} fontSize={18}>
            Payment Method
          </Text>
          <VStack backgroundColor={'#0A2647'} padding={3} borderRadius={8}>
            <HStack flexWrap={'wrap'} ml={'10px'} mt={2}>
              {!isLoading ? (
                <HStack space={4}>
                  <Skeleton w={'90px'} h={'40px'} borderRadius={8} />
                  <Skeleton w={'90px'} h={'40px'} borderRadius={8} />
                  <Skeleton w={'90px'} h={'40px'} borderRadius={8} />
                </HStack>
              ) : (
                dataPaymentMethod?.map(item => (
                  <Pressable
                    onPress={() => setSelectedPayment(item.id)}
                    key={item.id}>
                    <Box
                      backgroundColor={
                        selectedPayment === item.id ? '#28907D' : 'white'
                      }
                      padding={2}
                      marginBottom={2}
                      marginRight={2}
                      borderRadius={8}>
                      <Image
                        source={{
                          uri: item.picture,
                        }}
                        width={'80px'}
                        height={'30px'}
                        alt={item.name}
                        resizeMode={'contain'}
                      />
                    </Box>
                  </Pressable>
                ))
              )}
            </HStack>
            <HStack alignItems={'center'} mt={4}>
              <Box
                width={'40%'}
                borderBottomWidth={1}
                borderBottomColor={'white'}
              />
              <Text color={'white'} width={'20%'} textAlign={'center'}>
                or
              </Text>
              <Box
                width={'40%'}
                borderBottomWidth={1}
                borderBottomColor={'white'}
              />
            </HStack>
            <HStack justifyContent={'center'} mt={4}>
              <Text color={'white'} fontSize={15}>
                Pay via cash.
              </Text>
              <Text color={'#28907D'} fontSize={15}>
                {' '}
                See how it work
              </Text>
            </HStack>
          </VStack>

          <Text color={'white'} fontSize={18}>
            Personal Info
          </Text>
          <Formik
            initialValues={{
              fullName: '',
              email: '',
              phoneNumber: '',
            }}
            validationSchema={personalInfoSchema}
            onSubmit={doPay}>
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
                    <FormControl
                      isInvalid={errors.fullName && touched.fullName}>
                      <FormControl.Label fontSize={15}>
                        Full name
                      </FormControl.Label>
                      <Input
                        onChangeText={handleChange('fullName')}
                        onBlur={handleBlur('fullName')}
                        value={values.fullName}
                        variant="outline"
                        p={2}
                        placeholder="Write Your Full Name"
                        placeholderTextColor={'white'}
                        color={'white'}
                        fontSize={15}
                      />
                      {errors.fullName && (
                        <FormControl.ErrorMessage
                          leftIcon={
                            <Icon name="alert-circle" size={18} color="red" />
                          }>
                          {errors.fullName}
                        </FormControl.ErrorMessage>
                      )}
                    </FormControl>
                    <FormControl isInvalid={errors.email && touched.email}>
                      <FormControl.Label fontSize={15}>Email</FormControl.Label>
                      <Input
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        variant="outline"
                        p={2}
                        placeholder="Write Your Phone Number"
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
                        placeholder="Write Your Email"
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
                    </FormControl>

                    <HStack
                      marginY={3}
                      alignItems={'center'}
                      backgroundColor={'#28907D'}
                      space={4}
                      paddingX={3}
                      borderRadius={4}>
                      <Icon name="alert-triangle" size={40} color={'#0A2647'} />
                      <Text color={'white'} fontSize={15} fontWeight={'400'}>
                        Fill your data correctly.
                      </Text>
                    </HStack>
                  </Stack>
                </VStack>
                <Box mt={5}>
                  <Button
                    isLoading={!isLoadingBtn}
                    onPress={handleSubmit}
                    background={'#28907D'}
                    borderRadius={8}
                    isDisabled={!dirty || !isLoading}>
                    Pay your order
                  </Button>
                </Box>
              </VStack>
            )}
          </Formik>
        </VStack>
        <Footer />
      </ScrollView>
    </Stack>
  );
};

export default Payment;
