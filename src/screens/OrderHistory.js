import {
  Box,
  VStack,
  Image,
  Text,
  Stack,
  ScrollView,
  Pressable,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import shortid from 'shortid';
import http from '../helpers/http';
import {useNavigation} from '@react-navigation/native';

const OrderHistory = () => {
  const {token} = useSelector(state => state.auth);
  const [dataHistory, setDataHistory] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const getTransactionHistory = async () => {
      try {
        const {data} = await http(token).get('/transactions/history');
        setDataHistory(data.results);
      } catch (err) {
        throw err.response.data.message;
      }
    };
    getTransactionHistory();
  }, [token]);

  return (
    <Stack direction={'column'} backgroundColor={'#161621'} flex={1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={4} padding={5}>
          {dataHistory?.map(item => (
            <Pressable
              onPress={() => navigation.navigate('TicketResult', {id: item.id})}
              key={shortid.generate().toString()}>
              <Box backgroundColor={'#0A2647'} padding={5} borderRadius={8}>
                <Image source={{uri: item?.picture}} alt="ebu" />
                <Text color={'white'} fontSize={15} mt={5}>
                  {`${new Date(item?.bookingDate).getFullYear()}-${new Date(
                    item?.bookingDate,
                  ).getMonth()}1-${new Date(item?.bookingDate).getDate()}`}{' '}
                  -{' '}
                  {new Date(`2023-03-03 ${item.bookingTime}`).toLocaleString(
                    'en-US',
                    {
                      hour: 'numeric',
                      minute: 'numeric',
                      hour12: true,
                    },
                  )}
                </Text>
                <Text color={'white'} fontSize={22} mt={1} mb={9}>
                  {item.title}
                </Text>
                <Box
                  borderBottomWidth={0.8}
                  borderBottomColor={'white'}
                  mb={8}
                />
                <Box
                  backgroundColor={'#28907D'}
                  width={'full'}
                  height={10}
                  alignItems={'center'}
                  justifyContent={'center'}
                  borderRadius={8}>
                  <Text color={'white'} fontSize={15}>
                    Ticket in active
                  </Text>
                </Box>
              </Box>
            </Pressable>
          ))}
        </VStack>
      </ScrollView>
    </Stack>
  );
};

export default OrderHistory;
