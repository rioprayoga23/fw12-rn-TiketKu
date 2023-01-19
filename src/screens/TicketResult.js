import React, {useEffect, useState} from 'react';
import {
  Stack,
  VStack,
  Image,
  Box,
  View,
  HStack,
  Text,
  ScrollView,
  Skeleton,
} from 'native-base';
import Footer from '../components/Footer';
import MainHeader from '../components/MainHeader';
import QrCode from '../img/qr.png';
import http from '../helpers/http';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {BackHandler} from 'react-native';

const TicketResult = ({route}) => {
  const trxId = route?.params?.id;
  const [dataTicket, setDataTicket] = useState({});
  const {token} = useSelector(state => state.auth);
  const [isLoading, setIsloading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const getTicket = async () => {
      try {
        setIsloading(false);
        const {data} = await http(token).get(`/ticket/${trxId}`);
        setDataTicket(data.results);
        setIsloading(true);
      } catch (err) {
        console.log(err);
      }
    };
    getTicket();
  }, [trxId, token]);

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [navigation]);

  return (
    <Stack direction={'column'} backgroundColor={'#161621'} flex={1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack
          backgroundColor={'#28907D'}
          marginX={5}
          marginY={10}
          paddingTop={10}
          borderRadius={10}>
          <Stack position={'relative'} overflow={'hidden'}>
            <Stack alignItems={'center'} mb={10}>
              <Image source={QrCode} alt="qrQode" />
            </Stack>
            <Stack direction={'row'} alignItems={'center'}>
              <Box
                borderBottomWidth={2}
                flex={1}
                borderStyle={'dashed'}
                borderBottomColor={'#161621'}
              />
              <View
                style={{width: 44, height: 44, borderRadius: 44}}
                position={'absolute'}
                left={-22}
                backgroundColor={'#161621'}
              />
              <View
                position={'absolute'}
                right={-22}
                style={{width: 44, height: 44, borderRadius: 44}}
                backgroundColor={'#161621'}
              />
            </Stack>
            <Stack space={5} marginTop={'80px'}>
              <HStack paddingX={5}>
                <Box width={'50%'} marginRight={4}>
                  <Text color={'#0A2647'} fontSize={15}>
                    Movie
                  </Text>
                  {!isLoading ? (
                    <Skeleton.Text lines={2} w={100} />
                  ) : (
                    <Text color={'white'} fontSize={18} fontWeight={'500'}>
                      {dataTicket?.title}
                    </Text>
                  )}
                </Box>
                <Box width={'50%'}>
                  <Text color={'#0A2647'} fontSize={15}>
                    Category
                  </Text>
                  {!isLoading ? (
                    <Skeleton.Text lines={2} w={100} />
                  ) : (
                    <Text color={'white'} fontSize={18} fontWeight={'500'}>
                      {dataTicket?.genre}
                    </Text>
                  )}
                </Box>
              </HStack>
              <HStack paddingX={5}>
                <Box width={'50%'} marginRight={4}>
                  <Text color={'#0A2647'} fontSize={15}>
                    Date
                  </Text>
                  {!isLoading ? (
                    <Skeleton.Text lines={2} w={100} />
                  ) : (
                    <Text color={'white'} fontSize={18} fontWeight={'500'}>
                      {new Date(dataTicket?.bookingDate).getFullYear()}-
                      {new Date(dataTicket?.bookingDate).getMonth()}1-
                      {new Date(dataTicket?.bookingDate).getDate()}
                    </Text>
                  )}
                </Box>
                <Box width={'50%'}>
                  <Text color={'#0A2647'} fontSize={15}>
                    Time
                  </Text>
                  {!isLoading ? (
                    <Skeleton.Text lines={2} w={100} />
                  ) : (
                    <Text color={'white'} fontSize={18} fontWeight={'500'}>
                      {dataTicket?.bookingTime}
                    </Text>
                  )}
                </Box>
              </HStack>
              <HStack paddingX={5}>
                <Box width={'50%'} marginRight={4}>
                  <Text color={'#0A2647'} fontSize={15}>
                    Count
                  </Text>
                  {!isLoading ? (
                    <Skeleton.Text lines={2} w={100} />
                  ) : (
                    <Text color={'white'} fontSize={18} fontWeight={'500'}>
                      {dataTicket?.count}
                    </Text>
                  )}
                </Box>
                <Box width={'50%'}>
                  <Text color={'#0A2647'} fontSize={15}>
                    Seats
                  </Text>
                  {!isLoading ? (
                    <Skeleton.Text lines={2} w={100} />
                  ) : (
                    <Text color={'white'} fontSize={18} fontWeight={'500'}>
                      {dataTicket?.seatNum}
                    </Text>
                  )}
                </Box>
              </HStack>

              <HStack
                marginX={5}
                padding={5}
                marginY={10}
                alignItems={'center'}
                borderWidth={1}
                borderColor={'white'}>
                <Text color={'white'} fontSize={20} flex={1}>
                  Total
                </Text>
                {!isLoading ? (
                  <Skeleton.Text lines={1} w={100} />
                ) : (
                  <Text color={'white'} fontSize={18} fontWeight={'500'}>
                    {dataTicket?.total}
                  </Text>
                )}
              </HStack>
            </Stack>
          </Stack>
        </VStack>
        <Footer />
      </ScrollView>
    </Stack>
  );
};

export default TicketResult;
