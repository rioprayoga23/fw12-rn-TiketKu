import React, {useEffect, useState} from 'react';

import {
  Actionsheet,
  Box,
  Button,
  HStack,
  ScrollView,
  Skeleton,
  Stack,
  Text,
  useDisclose,
  VStack,
} from 'native-base';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';

import Icon from 'react-native-vector-icons/dist/Feather';
import CardTime from '../components/CardTime';
import Footer from '../components/Footer';
import http from '../helpers/http';
import {Image} from 'react-native';
import SkeletonLoading from '../components/SkeletonLoading';

const MovieDetails = ({route}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataMovies, setDataMovies] = useState([]);
  const [date, setDate] = useState(new Date(1598051730000));

  const {isOpen, onOpen, onClose} = useDisclose();
  const movieId = route?.params?.id;

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

  useEffect(() => {
    const getAllMovie = async () => {
      try {
        setIsLoading(false);
        const {data} = await http().get(`/movies/${movieId}`);
        setIsLoading(true);
        setDataMovies(data.results);
      } catch (error) {
        setIsLoading(true);
      }
    };
    getAllMovie();
  }, [movieId]);

  return (
    <Stack direction={'column'} backgroundColor={'#161621'} flex={1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HStack space={5} paddingY={10} width="full" justifyContent={'center'}>
          {!isLoading ? (
            <Skeleton w="152" h="220" borderRadius={8} />
          ) : (
            <Image
              source={{
                uri: `https://fw12-backend-orcin.vercel.app/uploads/${dataMovies?.picture}`,
              }}
              style={{
                width: 152,
                height: 220,
                resizeMode: 'contain',
                borderRadius: 8,
              }}
            />
          )}
        </HStack>
        <VStack space={2} width={'full'} paddingX={5}>
          {!isLoading ? (
            <Stack alignItems={'center'}>
              <Skeleton.Text lines={1} w="140px" />
            </Stack>
          ) : (
            <Text
              color={'white'}
              fontSize={22}
              fontWeight={'500'}
              textAlign={'center'}>
              {dataMovies?.title}
            </Text>
          )}

          {!isLoading ? (
            <Stack alignItems={'center'}>
              <Skeleton.Text lines={1} w="140px" />
            </Stack>
          ) : (
            <Text color={'white'} textAlign={'center'} fontSize={16}>
              {dataMovies?.genre}
            </Text>
          )}
          <HStack marginTop={5} marginBottom={2} space={5} paddingRight={5}>
            <Box width={'40%'}>
              <Text color={'#AAA'} fontSize={15}>
                Release Date
              </Text>
              {!isLoading ? (
                <Stack>
                  <Skeleton.Text lines={2} w="100px" />
                </Stack>
              ) : (
                <Text color={'white'} fontSize={18}>
                  {new Date(dataMovies?.releaseDate)
                    .toLocaleDateString('default', {month: 'long'})
                    .concat(
                      ' ',
                      new Date(dataMovies?.releaseDate).getDate().toString(),
                      ',',
                    )
                    .concat(
                      ' ',
                      new Date(dataMovies?.releaseDate)
                        .getFullYear()
                        .toString(),
                    )}
                </Text>
              )}
            </Box>
            <Box width={'60%'}>
              <Text color={'#AAA'} fontSize={15}>
                Directed by
              </Text>
              {!isLoading ? (
                <Stack>
                  <Skeleton.Text lines={2} w="100px" />
                </Stack>
              ) : (
                <Text color={'white'} fontSize={18}>
                  {dataMovies?.director}
                </Text>
              )}
            </Box>
          </HStack>
          <HStack marginTop={5} marginBottom={2} space={5} paddingRight={5}>
            <Box width={'40%'}>
              <Text color={'#AAA'} fontSize={15}>
                Duration
              </Text>
              {!isLoading ? (
                <Stack>
                  <Skeleton.Text lines={2} w="100px" />
                </Stack>
              ) : (
                <Text color={'white'} fontSize={18}>
                  {dataMovies?.hours} hours {dataMovies?.minutes} minutes
                </Text>
              )}
            </Box>
            <Box width={'60%'}>
              <Text color={'#AAA'} fontSize={15}>
                Casts
              </Text>
              {!isLoading ? (
                <Stack>
                  <Skeleton.Text lines={2} w="100px" />
                </Stack>
              ) : (
                <Text color={'white'} fontSize={18}>
                  {dataMovies?.casts}
                </Text>
              )}
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
            {!isLoading ? (
              <Stack>
                <Skeleton.Text lines={6} />
              </Stack>
            ) : (
              <Text color={'#AAA'} fontSize={15}>
                {dataMovies?.synopsis}
              </Text>
            )}
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
