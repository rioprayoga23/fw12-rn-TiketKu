import React, {useEffect, useState} from 'react';

import {
  Box,
  Button,
  HStack,
  ScrollView,
  Skeleton,
  Stack,
  Text,
  VStack,
  Select,
  Pressable,
} from 'native-base';
import {Image} from 'react-native';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import http from '../helpers/http';
import moment from 'moment';
import {useDispatch} from 'react-redux';

import Icon from 'react-native-vector-icons/dist/Feather';
import Footer from '../components/Footer';
import logoEbu from '../img/ebu.png';
import {chooseMovie} from '../redux/reducers/transactions';
import {useNavigation} from '@react-navigation/native';
import shortid from 'shortid';

const MovieDetails = ({route}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingBtn, setIsLoadingBtn] = useState(true);
  const [dataMovies, setDataMovies] = useState([]);
  const [date, setDate] = useState(new Date(moment().format('YYYY-MM-DD')));
  const [cityList, setCityList] = useState([]);
  const [city, setCity] = useState('');
  const [schedule, setSchedule] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedCinema, setSelectedCinema] = useState(null);

  const movieId = route?.params?.id;
  const dispatch = useDispatch();
  const navigation = useNavigation();

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

  const dateFormat = params => {
    return moment(params).format('YYYY-MM-DD');
  };

  useEffect(() => {
    const getSchedules = async () => {
      let resultDate = dateFormat(date);
      try {
        const {data} = await http().get(`movieSchedules/${movieId}/byMovieId`, {
          params: {date: resultDate, city},
        });
        setSchedule(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    getSchedules();
  }, [movieId, date, city]);

  const selectTime = (time, cinema) => {
    setSelectedTime(time);
    setSelectedCinema(cinema);
  };

  const doBook = async (price, cinemaName) => {
    setIsLoadingBtn(false);
    await dispatch(
      chooseMovie({
        movieId: movieId,
        title: dataMovies.title,
        cinemaId: selectedCinema,
        cinemaName,
        bookingDate: dateFormat(date),
        bookingTime: selectedTime,
        price: price,
      }),
    );
    setIsLoadingBtn(true);
    navigation.navigate('Order');
  };

  useEffect(() => {
    const getCityList = async () => {
      let resultDate = dateFormat(date);
      try {
        const {data} = await http().get(`/movies/${movieId}/schedules/city`, {
          params: {date: resultDate},
        });
        setCityList(data.results);
        if (data.results.length) {
          setCity(data.results[0].city);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getCityList();
  }, [date, movieId]);

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
                height={'43px'}
                flex={1}
                borderRadius={8}
                onPress={showDatepicker}
                backgroundColor={'#28907D'}
                leftIcon={<Icon name="calendar" color="white" size={20} />}
                rightIcon={
                  <Icon name="chevron-down" color="white" size={20} />
                }>
                <Text fontSize={15} color={'white'}>
                  Set a date
                </Text>
              </Button>
              <Box
                flex={1}
                height={'43px'}
                backgroundColor={'#28907D'}
                borderRadius={8}>
                <Select
                  selectedValue={city}
                  accessibilityLabel={city}
                  placeholder="Set a city"
                  height={'full'}
                  color={'white'}
                  fontSize={15}
                  borderWidth={0}
                  placeholderTextColor={'white'}
                  _selectedItem={{
                    bg: 'teal.600',
                  }}
                  onValueChange={itemValue => setCity(itemValue)}>
                  {cityList?.map(item => (
                    <Select.Item
                      label={item.city}
                      value={item.city}
                      key={shortid.generate().toString()}
                    />
                  ))}
                </Select>
              </Box>
            </HStack>

            <VStack space={4}>
              {schedule?.map(cinema => (
                <VStack key={shortid.generate().toString()}>
                  <Box backgroundColor={'#0A2647'} borderRadius={8} padding={5}>
                    <VStack space={3} alignItems={'center'}>
                      <Image source={logoEbu} alt="ebu" />
                      <Text color="white" fontSize={18} textAlign="center">
                        {cinema.city}
                      </Text>
                      <Text color="#AAA" fontSize={15} textAlign="center">
                        {cinema.address}
                      </Text>
                      <Box
                        width={'100%'}
                        borderBottomColor="white"
                        borderWidth={0.8}
                        marginY={3}
                      />
                    </VStack>
                    <HStack flexWrap={'wrap'} space={4}>
                      {cinema.time?.map(time => (
                        <Pressable
                          onPress={() => selectTime(time, cinema.id)}
                          key={shortid.generate().toString()}>
                          <Text
                            color={
                              cinema.id === selectedCinema &&
                              time === selectedTime
                                ? '#28907D'
                                : 'white'
                            }
                            fontWeight={'bold'}
                            fontSize={15}
                            marginBottom={4}>
                            {time}
                          </Text>
                        </Pressable>
                      ))}

                      <HStack
                        width={'full'}
                        justifyContent={'space-between'}
                        marginTop={6}>
                        <Text color={'white'} fontSize={20}>
                          Price
                        </Text>
                        <Text
                          color={'#28907D'}
                          fontSize={22}
                          fontWeight={'bold'}>
                          {cinema.price}/seat
                        </Text>
                      </HStack>
                    </HStack>
                    <Button
                      isLoading={!isLoadingBtn}
                      isDisabled={selectedCinema !== cinema.id}
                      onPress={() => doBook(cinema.price, cinema.name)}
                      backgroundColor={'#28907D'}
                      marginTop={10}>
                      Book Now
                    </Button>
                  </Box>
                </VStack>
              ))}
            </VStack>
          </VStack>
        </VStack>
        <Footer />
      </ScrollView>
    </Stack>
  );
};

export default MovieDetails;
