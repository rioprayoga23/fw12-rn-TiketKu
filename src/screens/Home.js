import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MainHeader from '../components/MainHeader';
import imgSipderman from '../img/spiderman.jpg';
import imgJoker from '../img/joker.jpg';
import imgThor from '../img/Thor.png';
import BtnMonth from '../components/BtnMonth';
import {Button, Input} from '@rneui/themed';
import CardMovie from '../components/CardMovie';
import Footer from '../components/Footer';
import {useNavigation} from '@react-navigation/native';
import http from '../helpers/http';
import shortid from 'shortid';
import SkeletonLoading from '../components/SkeletonLoading';

const dataCarousel = [
  {
    title: 'Spiderman',
    img: imgSipderman,
  },
  {
    title: 'Joker',
    img: imgJoker,
  },
  {
    title: 'Avengers:Endgame',
    img: imgThor,
  },
];

const Item = ({img}) => {
  return (
    <View style={styles.cardBanner}>
      <ImageBackground
        source={img}
        style={{flex: 1, borderRadius: 20}}
        resizeMode="cover"
        borderRadius={20}
      />
    </View>
  );
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataNowShowing, setDataNowShowing] = useState([]);
  const [dataUpcoming, setDataUpcoming] = useState([]);
  const navigation = useNavigation();

  const renderItem = ({item}) => <Item img={item.img} />;

  const getNowShowing = async () => {
    try {
      setIsLoading(false);
      const {data} = await http().get('/movies/now');
      setIsLoading(true);
      setDataNowShowing(data.results);
    } catch (error) {
      setIsLoading(true);
    }
  };

  const getUpcoming = async () => {
    try {
      setIsLoading(false);
      const {data} = await http().get('/movies/upcoming');
      setIsLoading(true);
      setDataUpcoming(data.results);
    } catch (error) {
      setMessage(error.response.data.message);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    getNowShowing();
    getUpcoming();
  }, []);
  return (
    <>
      <MainHeader />
      <View style={styles.main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerCarousel}>
            <View style={styles.containerHeading}>
              <Text style={styles.textHeading}>
                Nearest Cinema, Newest Movie,
              </Text>
              <Text style={styles.textSubHeading}>Find Out Now!</Text>
            </View>
            <View
              style={{
                position: 'absolute',
                width: '100%',
                flexDirection: 'row',
                bottom: -80,
              }}>
              <Carousel
                layout={'default'}
                data={dataCarousel}
                sliderWidth={300}
                itemWidth={300}
                renderItem={renderItem}
                inactiveSlideOpacity={1}
              />
            </View>
            <View />
          </View>

          <View>
            <View style={styles.containerHeadingNow}>
              <Text style={styles.titleInMain}>Now Showing</Text>
              <Pressable onPress={() => navigation.navigate('ViewAll')}>
                <Text style={styles.titleShowAll}>See All</Text>
              </Pressable>
            </View>
            <View style={styles.containerMainNow}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {!isLoading ? (
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <SkeletonLoading />
                    <SkeletonLoading />
                    <SkeletonLoading />
                    <SkeletonLoading />
                  </ScrollView>
                ) : (
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {dataNowShowing?.map(movie => {
                      return (
                        <CardMovie data={movie} dataKey={String(movie.id)} />
                      );
                    })}
                  </ScrollView>
                )}
              </ScrollView>
            </View>

            <View style={styles.containerHeadingUp}>
              <Text style={styles.titleInMain}>Upcoming Movies</Text>
              <Pressable onPress={() => navigation.navigate('ViewAll')}>
                <Text style={styles.titleShowAll}>See All</Text>
              </Pressable>
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
            <View style={styles.containerMainUp}>
              {!isLoading ? (
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <SkeletonLoading />
                  <SkeletonLoading />
                  <SkeletonLoading />
                </ScrollView>
              ) : (
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  {dataUpcoming?.map(movie => {
                    return (
                      <CardMovie
                        data={movie}
                        dataKey={shortid.generate().toString()}
                      />
                    );
                  })}
                </ScrollView>
              )}
            </View>
          </View>

          <View style={styles.containerSubscriber}>
            <Text style={styles.textSubscriber}>Be the vanguard of the</Text>
            <Text style={styles.textSubscriberTwo}>Moviegoers</Text>
            <Input
              containerStyle={{marginTop: 15, paddingHorizontal: 20}}
              inputContainerStyle={{borderBottomWidth: 0}}
              inputStyle={{
                borderWidth: 2,
                borderColor: '#28907D',
                borderRadius: 8,
                color: 'white',
                paddingHorizontal: 10,
                fontSize: 15,
              }}
              placeholder="Type your email"
            />
            <Button
              title={'Join Now'}
              containerStyle={{
                width: '100%',
                paddingHorizontal: 20,
              }}
              buttonStyle={{
                borderRadius: 8,
                backgroundColor: '#28907D',
                paddingVertical: 12,
              }}
            />
            <Text style={styles.descriptionSubscriber}>
              By joining you as a Tickitz member, we will always send you the
              latest updates via email .
            </Text>
          </View>

          <Footer />
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main: {backgroundColor: '#161621', flex: 1},
  containerCarousel: {
    backgroundColor: '#28907D',
    width: '100%',
    height: 200,
    position: 'relative',
  },
  containerHeading: {
    paddingHorizontal: 15,
    marginTop: 20,
  },
  textHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#161621',
  },
  textSubHeading: {
    fontSize: 34,
    fontWeight: '900',
    color: '#0A2647',
    marginTop: 5,
  },
  containerMainNow: {
    marginTop: 25,
    paddingLeft: 20,
    flexDirection: 'row',
  },
  containerMainUp: {
    marginTop: 25,
    paddingLeft: 20,
    flexDirection: 'row',
  },
  containerHeadingNow: {
    flexDirection: 'row',
    marginTop: 110,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  containerHeadingUp: {
    flexDirection: 'row',
    marginTop: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  titleInMain: {
    fontSize: 19,
    color: 'white',
    fontWeight: '500',
    flex: 1,
  },
  titleShowAll: {
    fontSize: 13,
    color: '#28907D',
    fontWeight: '500',
  },
  cardBanner: {
    height: 160,
    width: 320,
    overflow: 'hidden',
    padding: 10,
  },
  containerFilter: {
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
  },
  containerSubscriber: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  textSubscriber: {
    fontSize: 20,
    color: 'white',
  },
  textSubscriberTwo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#28907D',
  },
  descriptionSubscriber: {
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    fontSize: 15,
    lineHeight: 24,
    color: 'white',
  },
  titleMovie: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  genreMovie: {
    color: 'white',
    fontSize: 14,
  },
  cardMovie: {
    width: 122,
    marginRight: 15,
  },
});

export default Home;
