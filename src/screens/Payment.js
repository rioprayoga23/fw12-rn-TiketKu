import React from 'react';
import {
  Box,
  Button,
  FormControl,
  HStack,
  Image,
  Input,
  ScrollView,
  Stack,
  Text,
  VStack,
} from 'native-base';
import MainHeader from '../components/MainHeader';
import Icon from 'react-native-vector-icons/dist/Feather';
import LogoGPay from '../img/gpay.png';
import Footer from '../components/Footer';
import BtnFormAction from '../components/BtnFormAction';

const Payment = () => {
  return (
    <Stack direction={'column'} backgroundColor={'#161621'} flex={1}>
      <MainHeader />
      <HStack backgroundColor={'#28907D'} padding={4} borderBottomRadius={15}>
        <Text flex={1} color={'white'} fontSize={18}>
          Total Payment
        </Text>
        <Text color={'white'} fontSize={18} fontWeight={'bold'}>
          $30.00
        </Text>
      </HStack>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack padding={5} space={4}>
          <Text color={'white'} fontSize={18}>
            Payment Method
          </Text>
          <VStack backgroundColor={'#0A2647'} padding={5} borderRadius={8}>
            <HStack flexWrap={'wrap'} ml={'10px'} mt={2}>
              <Box
                backgroundColor={'white'}
                padding={4}
                marginBottom={2}
                marginRight={2}
                borderRadius={8}>
                <Image
                  source={LogoGPay}
                  width={'60px'}
                  height={'24px'}
                  alt="gPay"
                />
              </Box>
              <Box
                backgroundColor={'white'}
                padding={4}
                marginBottom={2}
                marginRight={2}
                borderRadius={8}>
                <Image
                  source={LogoGPay}
                  width={'60px'}
                  height={'24px'}
                  alt="gPay"
                />
              </Box>
              <Box
                backgroundColor={'white'}
                padding={4}
                marginBottom={2}
                marginRight={2}
                borderRadius={8}>
                <Image
                  source={LogoGPay}
                  width={'60px'}
                  height={'24px'}
                  alt="gPay"
                />
              </Box>
              <Box
                backgroundColor={'white'}
                padding={4}
                marginBottom={2}
                marginRight={2}
                borderRadius={8}>
                <Image
                  source={LogoGPay}
                  width={'60px'}
                  height={'24px'}
                  alt="gPay"
                />
              </Box>
              <Box
                backgroundColor={'white'}
                padding={4}
                marginBottom={2}
                marginRight={2}
                borderRadius={8}>
                <Image
                  source={LogoGPay}
                  width={'60px'}
                  height={'24px'}
                  alt="gPay"
                />
              </Box>
              <Box
                backgroundColor={'white'}
                padding={4}
                marginBottom={2}
                marginRight={2}
                borderRadius={8}>
                <Image
                  source={LogoGPay}
                  width={'60px'}
                  height={'24px'}
                  alt="gPay"
                />
              </Box>
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
          <FormControl>
            <VStack backgroundColor={'#0A2647'} padding={5} borderRadius={8}>
              <Stack space={5}>
                <Stack>
                  <FormControl.Label fontSize={15}>Full name</FormControl.Label>
                  <Input
                    variant="outline"
                    p={2}
                    placeholder="Rio Prayoga"
                    placeholderTextColor={'white'}
                    color={'white'}
                    fontSize={15}
                  />
                </Stack>
                <Stack>
                  <FormControl.Label>Email</FormControl.Label>
                  <Input
                    variant="outline"
                    p={2}
                    placeholder="rio@gmail.com"
                    placeholderTextColor={'white'}
                    color={'white'}
                    fontSize={15}
                  />
                </Stack>

                <Stack>
                  <FormControl.Label>Phone Number</FormControl.Label>
                  <Input
                    variant="outline"
                    p={2}
                    placeholder="089654778600"
                    placeholderTextColor={'white'}
                    color={'white'}
                    fontSize={15}
                  />
                </Stack>

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
              <BtnFormAction title={'Pay your order'} />
            </Box>
          </FormControl>
        </VStack>

        <Footer />
      </ScrollView>
    </Stack>
  );
};

export default Payment;
