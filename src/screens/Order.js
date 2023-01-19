import React, {useState} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {chooseSeat} from '../redux/reducers/transactions';
import {useNavigation} from '@react-navigation/native';

const Order = () => {
  const {price} = useSelector(state => state.transactions);
  const {bookingTime} = useSelector(state => state.transactions);
  const {bookingDate} = useSelector(state => state.transactions);
  const {title} = useSelector(state => state.transactions);
  const {cinemaName} = useSelector(state => state.transactions);

  const [selectedSeat, setSelectedSeat] = useState([]);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const selectSeat = seat => {
    if (selectedSeat.includes(seat)) {
      setSelectedSeat([...selectedSeat.filter(i => i !== seat)]);
    } else {
      setSelectedSeat([...selectedSeat, seat]);
    }
  };

  const doCheckout = () => {
    dispatch(
      chooseSeat({seatNum: selectedSeat, total: selectedSeat?.length * price}),
    );
    navigation.navigate('Payment');
  };

  return (
    <Stack direction={'column'} backgroundColor={'#161621'} flex={1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack padding={5} space={4}>
          <Text color={'white'} fontSize={18}>
            Choose Your Seat
          </Text>
          <VStack backgroundColor={'#0A2647'} padding={5} borderRadius={8}>
            <Box borderBottomWidth={6} borderColor={'#28907D'} />
            <HStack ml={'5px'} mt={5}>
              <View flex={1}>
                {['A', 'B', 'C', 'D', 'E', 'F', 'G', ' '].map((alfabet, i) => {
                  return (
                    <HStack key={i}>
                      {[0, 1, 2, 3, 4, 5, 6, 7].map((num, i) => {
                        if (num > 0) {
                          if (alfabet !== ' ') {
                            const seatNumber = `${alfabet}${num}`;
                            return (
                              <Pressable
                                key={i}
                                onPress={() => selectSeat(seatNumber)}
                                width={'16px'}
                                height={'16px'}
                                bg={
                                  (selectedSeat.includes(seatNumber) &&
                                    '#28907D') ||
                                  '#D6D8E7'
                                }
                                mr={'5px'}
                                mb={'5px'}
                              />
                            );
                          }
                        }
                      })}
                    </HStack>
                  );
                })}
              </View>
              <View flex={1} alignItems={'flex-end'}>
                {['A', 'B', 'C', 'D', 'E', 'F', 'G', ' '].map((alfabet, i) => {
                  return (
                    <HStack key={i}>
                      {[0, 8, 9, 10, 11, 12, 13, 14].map((num, i) => {
                        if (num > 0) {
                          if (alfabet !== ' ') {
                            const seatNumber = `${alfabet}${num}`;
                            return (
                              <Pressable
                                key={i}
                                onPress={() => selectSeat(seatNumber)}
                                width={'16px'}
                                height={'16px'}
                                bg={
                                  (selectedSeat.includes(seatNumber) &&
                                    '#28907D') ||
                                  '#D6D8E7'
                                }
                                mr={'5px'}
                                mb={'5px'}
                              />
                            );
                          }
                        }
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
                {cinemaName}
              </Text>
              <Text color={'white'} fontSize={18}>
                {title}
              </Text>
            </VStack>
            <VStack space={2}>
              <HStack>
                <Text flex={1} color={'#AAA'} fontSize={16}>
                  {bookingDate}
                </Text>
                <Text fontSize={18} color={'white'}>
                  {bookingTime}
                </Text>
              </HStack>
              <HStack>
                <Text flex={1} color={'#AAA'} fontSize={16}>
                  One ticket price
                </Text>
                <Text fontSize={18} color={'white'}>
                  {price}
                </Text>
              </HStack>
              <HStack>
                <Text flex={1} color={'#AAA'} fontSize={16}>
                  Seat choosed
                </Text>
                {selectedSeat?.map(seat => (
                  <Text fontSize={18} color={'white'} key={seat}>
                    {seat + ' '}
                  </Text>
                ))}
              </HStack>
            </VStack>
            <Box borderBottomColor={'white'} borderBottomWidth={0.8} my={5} />
            <HStack>
              <Text flex={1} color={'#AAA'} fontSize={20}>
                Total Payment
              </Text>
              <Text fontSize={25} color={'#28907D'}>
                {selectedSeat?.length * price}
              </Text>
            </HStack>
          </VStack>
          <Button
            onPress={() => doCheckout()}
            background={'#28907D'}
            borderRadius={8}>
            Checkout Now
          </Button>
        </VStack>
        <Footer />
      </ScrollView>
    </Stack>
  );
};

export default Order;
