import React from 'react';
import {Box, Button, HStack, Image, Text, VStack} from 'native-base';
import logoEbu from '../img/ebu.png';

const CardTime = () => {
  return (
    <VStack>
      <Box backgroundColor={'#0A2647'} borderRadius={8} padding={5}>
        <VStack space={3} alignItems={'center'}>
          <Image source={logoEbu} alt="ebu" />
          <Text color="white" fontSize={18} textAlign="center">
            Whatever street No.12, South Purwokerto
          </Text>
          <Box
            width={'100%'}
            borderBottomColor="white"
            borderWidth={0.8}
            marginY={3}
          />
        </VStack>
        <HStack flexWrap={'wrap'} space={4}>
          <Text color={'white'} fontSize={15} marginBottom={4}>
            18.00am
          </Text>
          <Text color={'white'} fontSize={15} marginBottom={4}>
            18.00am
          </Text>
          <Text color={'white'} fontSize={15} marginBottom={4}>
            18.00am
          </Text>
          <Text color={'white'} fontSize={15} marginBottom={4}>
            18.00am
          </Text>
          <Text color={'white'} fontSize={15} marginBottom={4}>
            18.00am
          </Text>
          <Text color={'white'} fontSize={15} marginBottom={4}>
            18.00am
          </Text>
          <Text color={'white'} fontSize={15} marginBottom={4}>
            18.00am
          </Text>
          <Text color={'white'} fontSize={15} marginBottom={4}>
            18.00am
          </Text>
          <HStack width={'full'} justifyContent={'space-between'} marginTop={6}>
            <Text color={'white'} fontSize={20}>
              Price
            </Text>
            <Text color={'#28907D'} fontSize={22} fontWeight={'bold'}>
              $10.00/seat
            </Text>
          </HStack>
        </HStack>
        <Button backgroundColor={'#28907D'} marginTop={10}>
          Book Now
        </Button>
      </Box>
    </VStack>
  );
};

export default CardTime;
