import React from 'react';
import {
  Box,
  Button,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Stack,
  Text,
  View,
  VStack,
} from 'native-base';
import MainHeader from '../components/MainHeader';
import Icon from 'react-native-vector-icons/dist/Feather';
import LogoEbu from '../img/ebu.png';
import Footer from '../components/Footer';
import BtnFormAction from '../components/BtnFormAction';

const Order = () => {
  return (
    <Stack direction={'column'} backgroundColor={'#161621'} flex={1}>
      <MainHeader />
      <ScrollView>
        <VStack padding={5} space={4}>
          <Text color={'white'} fontSize={18}>
            Choose Your Seat
          </Text>
          <VStack backgroundColor={'#0A2647'} padding={5} borderRadius={8}>
            <Box borderBottomWidth={6} borderColor={'#28907D'} />
            <HStack ml={'5px'} mt={5}>
              <View flex={1}>
                {['', '', '', '', '', '', ''].map((rows, i) => {
                  return (
                    <HStack key={i}>
                      {[0, 1, 2, 3, 4, 5, 6].map((num, i) => {
                        return (
                          <Pressable
                            key={i}
                            width={'16px'}
                            height={'16px'}
                            bg={'#D6D8E7'}
                            mr={'5px'}
                            mb={'5px'}
                          />
                        );
                      })}
                    </HStack>
                  );
                })}
              </View>
              <View flex={1} alignItems={'flex-end'}>
                {['', '', '', '', '', '', ''].map((rows, i) => {
                  return (
                    <HStack key={i}>
                      {[0, 1, 2, 3, 4, 5, 6].map((num, i) => {
                        return (
                          <Pressable
                            key={i}
                            width={'16px'}
                            height={'16px'}
                            bg={'#D6D8E7'}
                            mr={'5px'}
                            mb={'5px'}
                          />
                        );
                      })}
                    </HStack>
                  );
                })}
              </View>
            </HStack>

            <Text color={'white'} fontSize={18} mt={'6'}>
              Seating key
            </Text>
            <HStack mt={5}>
              <HStack alignItems={'center'} space={15} width={'40%'}>
                <Icon name="arrow-down" size={23} color={'white'} />
                <Text color={'white'} fontSize={15}>
                  A - G
                </Text>
              </HStack>
              <HStack alignItems={'center'} space={15}>
                <Icon name="arrow-right" size={23} color={'white'} />
                <Text color={'white'} fontSize={15}>
                  1 - 14
                </Text>
              </HStack>
            </HStack>
            <HStack mt={5}>
              <HStack alignItems={'center'} space={5} width={'40%'}>
                <View
                  width={'16px'}
                  height={'16px'}
                  backgroundColor={'#D6D8E7'}
                />
                <Text color={'white'} fontSize={15}>
                  Available
                </Text>
              </HStack>
              <HStack alignItems={'center'} space={5}>
                <View
                  width={'16px'}
                  height={'16px'}
                  backgroundColor={'#28907D'}
                />
                <Text color={'white'} fontSize={15}>
                  Selected
                </Text>
              </HStack>
            </HStack>
            <HStack alignItems={'center'} space={5} mt={5}>
              <View
                width={'16px'}
                height={'16px'}
                backgroundColor={'#6E7191'}
              />
              <Text color={'white'} fontSize={15}>
                Sold
              </Text>
            </HStack>
          </VStack>
        </VStack>
        <VStack padding={5} space={4}>
          <Text color={'white'} fontSize={18}>
            Order Info
          </Text>
          <VStack backgroundColor={'#0A2647'} padding={5} borderRadius={8}>
            <VStack alignItems={'center'} space={2} mb={7}>
              <Image source={LogoEbu} alt={'logoEbu'} />
              <Text color={'white'} fontSize={24}>
                CineOne21 Cinema
              </Text>
              <Text color={'white'} fontSize={18}>
                Spider-Man: Homecoming
              </Text>
            </VStack>
            <VStack space={2}>
              <HStack>
                <Text flex={1} color={'#AAA'} fontSize={16}>
                  Tuesday, 07 July 2020
                </Text>
                <Text fontSize={18} color={'white'}>
                  02:00pm
                </Text>
              </HStack>
              <HStack>
                <Text flex={1} color={'#AAA'} fontSize={16}>
                  One ticket price
                </Text>
                <Text fontSize={18} color={'white'}>
                  $10
                </Text>
              </HStack>
              <HStack>
                <Text flex={1} color={'#AAA'} fontSize={16}>
                  Seat choosed
                </Text>
                <Text fontSize={18} color={'white'}>
                  C4, C5, C6
                </Text>
              </HStack>
            </VStack>
            <Box borderBottomColor={'white'} borderBottomWidth={0.8} my={5} />
            <HStack>
              <Text flex={1} color={'#AAA'} fontSize={20}>
                Total Payment
              </Text>
              <Text fontSize={25} color={'#28907D'}>
                $30
              </Text>
            </HStack>
          </VStack>

          <BtnFormAction title={'Checkout Now'} />
        </VStack>
        <Footer />
      </ScrollView>
    </Stack>
  );
};

export default Order;
