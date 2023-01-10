import React, {useState} from 'react';
import MainHeader from '../components/MainHeader';

import {
  Actionsheet,
  Box,
  Button,
  HStack,
  Image,
  ScrollView,
  Stack,
  Text,
  useDisclose,
  VStack,
} from 'native-base';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';

import imgSipderman from '../img/coverSpiderman.png';
import Icon from 'react-native-vector-icons/dist/Feather';
import CardTime from '../components/CardTime';
import Footer from '../components/Footer';

const MovieDetails = () => {
  const {isOpen, onOpen, onClose} = useDisclose();

  const [date, setDate] = useState(new Date(1598051730000));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = currentMode => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <Stack direction={'column'} backgroundColor={'#161621'} flex={1}>
      <MainHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HStack space={5} paddingY={10} width="full" justifyContent={'center'}>
          <Image
            source={imgSipderman}
            alt="spiderman"
            width={'152px'}
            height={'220px'}
            resizeMode="cover"
            borderRadius={8}
          />
        </HStack>
        <VStack space={2} width={'full'} paddingX={5}>
          <Text
            color={'white'}
            fontSize={22}
            fontWeight={'500'}
            textAlign={'center'}>
            Spider-Man: Homecoming
          </Text>
          <Text color={'white'} textAlign={'center'} fontSize={16}>
            Adventure, Action, Sci-Fi
          </Text>
          <HStack marginTop={5} marginBottom={2} space={5}>
            <Box width={'40%'}>
              <Text color={'#AAA'} fontSize={15}>
                Release date
              </Text>
              <Text color={'white'} fontSize={18}>
                June 28, 2017
              </Text>
            </Box>
            <Box width={'60%'}>
              <Text color={'#AAA'} fontSize={15}>
                Directed by
              </Text>
              <Text color={'white'} fontSize={18}>
                Jon Watss
              </Text>
            </Box>
          </HStack>
          <HStack marginTop={5} marginBottom={2} space={5}>
            <Box width={'40%'}>
              <Text color={'#AAA'} fontSize={15}>
                Duration
              </Text>
              <Text color={'white'} fontSize={18}>
                2 hrs 13 min
              </Text>
            </Box>
            <Box width={'60%'}>
              <Text color={'#AAA'} fontSize={15}>
                Casts
              </Text>
              <Text color={'white'} fontSize={18}>
                Tom Holland, Robert Downey Jr., etc.
              </Text>
            </Box>
          </HStack>
          <Box
            width={'100%'}
            borderBottomColor="white"
            borderWidth={0.9}
            marginY={3}
          />
          <VStack space={3}>
            <Text color={'white'} fontSize={'18'}>
              Synopsis
            </Text>
            <Text color={'#AAA'} fontSize={15}>
              Thrilled by his experience with the Avengers, Peter returns home,
              where he lives with his Aunt May, under the watchful eye of his
              new mentor Tony Stark, Peter tries to fall back into his normal
              daily routine - distracted by thoughts of proving himself to be
              more than just your friendly neighborhood Spider-Man - but when
              the Vulture emerges as a new villain, everything that Peter holds
              most important will be threatened.
            </Text>
          </VStack>
          <VStack marginY={10}>
            <Text color={'white'} fontSize={22} textAlign={'center'}>
              Showtimes and Tickets
            </Text>

            <HStack space={2} justifyContent={'space-between'} paddingY={5}>
              <Button
                flex={1}
                borderRadius={8}
                onPress={showDatepicker}
                backgroundColor={'#28907D'}
                leftIcon={<Icon name="calendar" color="white" size={20} />}
                rightIcon={
                  <Icon name="chevron-down" color="white" size={20} />
                }>
                <Text fontSize={15} color={'white'} paddingX={3}>
                  Set a date
                </Text>
              </Button>
              <Button
                flex={1}
                borderRadius={8}
                onPress={onOpen}
                backgroundColor={'#28907D'}
                leftIcon={<Icon name="map-pin" color="white" size={20} />}
                rightIcon={
                  <Icon name="chevron-down" color="white" size={20} />
                }>
                <Text fontSize={15} color={'white'} paddingX={3}>
                  Set a city
                </Text>
              </Button>
              <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content>
                  <Actionsheet.Item>Bandung</Actionsheet.Item>
                  <Actionsheet.Item>Semarang</Actionsheet.Item>
                  <Actionsheet.Item>Jakarta</Actionsheet.Item>
                  <Actionsheet.Item color="red.500">Delete</Actionsheet.Item>
                </Actionsheet.Content>
              </Actionsheet>
            </HStack>

            <VStack space={4}>
              <CardTime />
              <CardTime />
            </VStack>
          </VStack>
        </VStack>
        <Footer />
      </ScrollView>
    </Stack>
  );
};

export default MovieDetails;
