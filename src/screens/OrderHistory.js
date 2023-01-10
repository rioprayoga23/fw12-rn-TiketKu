import {Box, VStack, Image, Text, Stack, ScrollView} from 'native-base';
import React from 'react';
import LogoEbu from '../img/ebu.png';

const OrderHistory = () => {
  return (
    <Stack direction={'column'} backgroundColor={'#161621'} flex={1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={4} padding={5}>
          <Box backgroundColor={'#0A2647'} padding={5} borderRadius={8}>
            <Image source={LogoEbu} alt="ebu" />
            <Text color={'white'} fontSize={15} mt={5}>
              Tuesday, 07 July 2020 - 04:30pm
            </Text>
            <Text color={'white'} fontSize={22} mt={1} mb={9}>
              Spider-Man: Homecoming
            </Text>
            <Box borderBottomWidth={0.8} borderBottomColor={'white'} mb={8} />
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
          <Box backgroundColor={'#0A2647'} padding={5} borderRadius={8}>
            <Image source={LogoEbu} alt="ebu" />
            <Text color={'white'} fontSize={15} mt={5}>
              Tuesday, 07 July 2020 - 04:30pm
            </Text>
            <Text color={'white'} fontSize={22} mt={1} mb={9}>
              Avengers: End Game
            </Text>
            <Box borderBottomWidth={0.8} borderBottomColor={'white'} mb={8} />
            <Box
              backgroundColor={'#6E7191'}
              width={'full'}
              height={10}
              alignItems={'center'}
              justifyContent={'center'}
              borderRadius={8}>
              <Text color={'white'} fontSize={15}>
                Ticket used
              </Text>
            </Box>
          </Box>
        </VStack>
      </ScrollView>
    </Stack>
  );
};

export default OrderHistory;
