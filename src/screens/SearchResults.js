import React, {useState} from 'react';
import {
  Box,
  VStack,
  HStack,
  Input,
  Icon,
  Button,
  Text,
  Image,
  ScrollView,
  Alert,
} from 'native-base';
import Feather from 'react-native-vector-icons/dist/Feather';
import http from '../helpers/http';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import shortid from 'shortid';

const SearchResults = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [dataMovies, setDataMovies] = useState([]);
  const [valueSearch, setValueSearch] = useState();

  const navigation = useNavigation();

  const doSearch = async () => {
    try {
      setIsLoading(false);
      const {data} = await http().get(`/movies?search=${valueSearch}`);
      setIsLoading(true);
      if (data.results.length) {
        setDataMovies(data.results);
        setMessage('');
      } else {
        setDataMovies([]);
        setMessage('Movie not found');
      }
    } catch (error) {
      setIsLoading(true);
    }
  };

  return (
    <VStack flex={1} backgroundColor={'#161621'}>
      <Box backgroundColor={'#28907D'} px={5} pb={4} borderBottomRadius={10}>
        <HStack w="100%" space={1} alignSelf="center">
          <Input
            onChangeText={value => setValueSearch(value)}
            onSubmitEditing={doSearch}
            placeholderTextColor={'black'}
            placeholder="Ex:Harry Potter"
            variant="filled"
            flex={1}
            borderRadius="10"
            py="2"
            px="2"
            backgroundColor={'white'}
            color={'black'}
            autoFocus={true}
            fontSize={15}
            focusOutlineColor={'#28907D'}
            InputLeftElement={
              <Icon
                ml={4}
                color={'#161621'}
                size={19}
                as={<Feather name={'search'} />}
              />
            }
          />
          <Button
            onPress={() => doSearch()}
            isLoading={!isLoading}
            borderRadius={10}
            backgroundColor={'#0A2647'}
            leftIcon={<Feather name="search" />}>
            Search
          </Button>
        </HStack>
      </Box>
      <ScrollView>
        <VStack my={10}>
          {message === 'Movie not found' && (
            <HStack px={5}>
              <Alert w="100%" status="error" flex={1}>
                <VStack space={1} flexShrink={1} w="100%" alignItems="center">
                  <Alert.Icon size="md" />
                  <Text fontSize="md" fontWeight="medium">
                    Oopps, {message}
                  </Text>
                  <Feather name="frown" color={'#0A2647'} size={35} />
                </VStack>
              </Alert>
            </HStack>
          )}
          {dataMovies?.map(movie => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MovieDetails', {id: movie?.id})
                }
                key={shortid.generate().toString()}>
                <HStack
                  px={5}
                  py={5}
                  alignItems={'flex-end'}
                  space={3}
                  backgroundColor={'#0A2647'}
                  marginX={5}
                  borderRadius={10}
                  my={2}
                  key={movie.id}>
                  <Image
                    source={{
                      uri:
                        'https://fw12-backend-orcin.vercel.app/uploads/' +
                        movie.picture,
                    }}
                    width={92}
                    height={125}
                    borderRadius={9}
                    resizeMode={'contain'}
                    alt={movie.title}
                  />
                  <VStack space={2} width={200}>
                    <Box>
                      <Text color={'#AAA'}>Title</Text>
                      <Text color={'white'} fontSize={18} fontWeight={'500'}>
                        {movie.title}
                      </Text>
                    </Box>
                    <Box>
                      <Text color={'#AAA'}>Genre</Text>
                      <Text color={'white'} fontSize={15} fontWeight={'500'}>
                        {movie.genre}
                      </Text>
                    </Box>
                  </VStack>
                </HStack>
              </TouchableOpacity>
            );
          })}
        </VStack>
      </ScrollView>
    </VStack>
  );
};

export default SearchResults;
