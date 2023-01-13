import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import BtnMonth from '../components/BtnMonth';
import CardMovieAll from '../components/CardMovieAll';
import Footer from '../components/Footer';
import MainHeader from '../components/MainHeader';
import {Box, Button, Select, Text} from 'native-base';
import Icon from 'react-native-vector-icons/dist/Feather';
import http from '../helpers/http';
import SkeletonLoadingViewAll from '../components/SkeletonLoadingViewAll';

const ViewAll = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataMovies, setDataMovies] = useState([]);
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);

  const prev = () => {
    setPage(page - 1);
  };

  const next = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const getAllMovie = async () => {
      try {
        setIsLoading(false);
        const {data} = await http().get(
          `/movies?limit=6&sortBy=title&sort=${sort}&page=${page}`,
        );
        setIsLoading(true);
        setDataMovies(data.results);
      } catch (error) {
        setIsLoading(true);
      }
    };
    getAllMovie();
  }, [sort, page]);

  return (
    <>
      <MainHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: '#161621'}}>
          <View style={styles.heading}>
            <Text style={styles.titleHeading}>List Movie</Text>
          </View>

          <View style={styles.containerFilter}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <BtnMonth title="January" active={true} />
              <BtnMonth title="Februari" />
              <BtnMonth title="March" />
              <BtnMonth title="April" />
              <BtnMonth title="Mei" />
              <BtnMonth title="June" />
              <BtnMonth title="July" />
              <BtnMonth title="August" />
              <BtnMonth title="September" />
              <BtnMonth title="October" />
              <BtnMonth title="November" />
              <BtnMonth title="December" />
            </ScrollView>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              paddingRight: 35,
              marginTop: 30,
            }}>
            <Box width="100px" bg={'#0A2647'} borderRadius={15}>
              <Select
                selectedValue={sort}
                w="full"
                h="9"
                accessibilityLabel="Sort"
                placeholder="Sort"
                color={'white'}
                fontSize={15}
                borderWidth={0}
                placeholderTextColor={'white'}
                padding={0}
                _selectedItem={{
                  bg: 'teal.600',
                }}
                mt={1}
                onValueChange={itemValue => setSort(itemValue)}>
                <Select.Item label="A-Z" value="ASC" />
                <Select.Item label="Z-A" value="DESC" />
              </Select>
            </Box>
          </View>

          <View style={styles.main}>
            {!isLoading ? (
              <>
                <View
                  style={{
                    flexGrow: 1,
                    marginBottom: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <SkeletonLoadingViewAll />
                </View>
                <View
                  style={{
                    flexGrow: 1,
                    marginBottom: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <SkeletonLoadingViewAll />
                </View>
                <View
                  style={{
                    flexGrow: 1,
                    marginBottom: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <SkeletonLoadingViewAll />
                </View>
                <View
                  style={{
                    flexGrow: 1,
                    marginBottom: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <SkeletonLoadingViewAll />
                </View>
              </>
            ) : (
              dataMovies?.map(movie => {
                return (
                  <View
                    style={{
                      flexGrow: 1,
                      marginBottom: 40,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <CardMovieAll data={movie} dataKey={movie.id} />
                  </View>
                );
              })
            )}
          </View>

          <View style={styles.pagination}>
            <Button
              onPress={() => prev()}
              isDisabled={page === 1}
              leftIcon={<Icon name="chevron-left" size={20} />}
              backgroundColor={'#28907D'}
              marginX={2}>
              Prev
            </Button>
            <Button
              onPress={() => next()}
              isDisabled={dataMovies.length === 0}
              rightIcon={<Icon name="chevron-right" size={20} />}
              backgroundColor={'#28907D'}
              marginX={2}>
              Next
            </Button>
          </View>

          <Footer />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  main: {
    paddingHorizontal: 20,
    paddingTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  titleHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#28907D',
  },
  containerFilter: {
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ViewAll;
