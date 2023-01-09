import {
  Stack,
  VStack,
  Image,
  Box,
  View,
  HStack,
  Text,
  ScrollView,
} from 'native-base';
import React from 'react';
import Footer from '../components/Footer';
import MainHeader from '../components/MainHeader';
import QrCode from '../img/qr.png';

const TicketResult = () => {
  return (
    <Stack direction={'column'} backgroundColor={'#161621'} flex={1}>
      <MainHeader />
      <ScrollView>
        <VStack
          backgroundColor={'#0A2647'}
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
                <Box width={'50%'}>
                  <Text color={'#AAA'} fontSize={15}>
                    Movie
                  </Text>
                  <Text color={'white'} fontSize={18} fontWeight={'500'}>
                    Spider-Man: Homecoming
                  </Text>
                </Box>
                <Box width={'50%'}>
                  <Text color={'#AAA'} fontSize={15}>
                    Category
                  </Text>
                  <Text color={'white'} fontSize={18} fontWeight={'500'}>
                    Action, Adventure, Action
                  </Text>
                </Box>
              </HStack>
              <HStack paddingX={5}>
                <Box width={'50%'}>
                  <Text color={'#AAA'} fontSize={15}>
                    Date
                  </Text>
                  <Text color={'white'} fontSize={18} fontWeight={'500'}>
                    07 Jul
                  </Text>
                </Box>
                <Box width={'50%'}>
                  <Text color={'#AAA'} fontSize={15}>
                    Time
                  </Text>
                  <Text color={'white'} fontSize={18} fontWeight={'500'}>
                    2:00pm
                  </Text>
                </Box>
              </HStack>
              <HStack paddingX={5}>
                <Box width={'50%'}>
                  <Text color={'#AAA'} fontSize={15}>
                    Count
                  </Text>
                  <Text color={'white'} fontSize={18} fontWeight={'500'}>
                    3 pcs
                  </Text>
                </Box>
                <Box width={'50%'}>
                  <Text color={'#AAA'} fontSize={15}>
                    Seats
                  </Text>
                  <Text color={'white'} fontSize={18} fontWeight={'500'}>
                    C4, C5, C6
                  </Text>
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
                <Text color={'#28907D'} fontSize={22} fontWeight={'bold'}>
                  $30.00
                </Text>
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
