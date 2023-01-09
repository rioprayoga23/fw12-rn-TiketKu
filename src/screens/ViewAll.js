import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import BtnMonth from '../components/BtnMonth';
import CardMovieAll from '../components/CardMovieAll';
import Footer from '../components/Footer';
import MainHeader from '../components/MainHeader';
import {Actionsheet, Button, Stack, Text, useDisclose} from 'native-base';
import Icon from 'react-native-vector-icons/dist/Feather';

const ViewAll = () => {
  const {isOpen, onOpen, onClose} = useDisclose();
  return (
    <>
      <MainHeader />
      <ScrollView>
        <View style={{backgroundColor: '#161621'}}>
          <View style={styles.heading}>
            <Text style={styles.titleHeading}>List Movie</Text>
          </View>

          <View style={styles.containerFilter}>
            <ScrollView horizontal={true}>
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
            <Button
              onPress={onOpen}
              width="90px"
              flexDirection="row"
              backgroundColor="#28907D"
              borderRadius={7}>
              <Stack space={2} direction="row" alignItems="center">
                <Text fontSize={15} color="white" fontWeight={'500'}>
                  Sort
                </Text>
                <Icon name="filter" size={20} color="white" />
              </Stack>
            </Button>
            <Actionsheet isOpen={isOpen} onClose={onClose}>
              <Actionsheet.Content>
                <Actionsheet.Item>Option 1</Actionsheet.Item>
                <Actionsheet.Item>Option 2</Actionsheet.Item>
                <Actionsheet.Item>Option 3</Actionsheet.Item>
                <Actionsheet.Item color="red.500">Delete</Actionsheet.Item>
              </Actionsheet.Content>
            </Actionsheet>
          </View>

          <View style={styles.main}>
            <View
              style={{
                flexGrow: 1,
                marginBottom: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <CardMovieAll />
            </View>
            <View
              style={{
                flexGrow: 1,
                marginBottom: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <CardMovieAll />
            </View>
            <View
              style={{
                flexGrow: 1,
                marginBottom: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <CardMovieAll />
            </View>
            <View
              style={{
                flexGrow: 1,
                marginBottom: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <CardMovieAll />
            </View>
            <View
              style={{
                flexGrow: 1,
                marginBottom: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <CardMovieAll />
            </View>
            <View
              style={{
                flexGrow: 1,
                marginBottom: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <CardMovieAll />
            </View>
          </View>

          <View style={styles.pagination}>
            <View
              style={{
                padding: 10,
                width: 60,
                backgroundColor: '#28907D',
                alignItems: 'center',
                borderRadius: 8,
                margin: 10,
              }}>
              <Text style={{color: 'white'}}>Prev</Text>
            </View>
            <View
              style={{
                padding: 10,
                width: 60,
                backgroundColor: '#28907D',
                alignItems: 'center',
                borderRadius: 8,
                margin: 5,
              }}>
              <Text style={{color: 'white'}}>Next</Text>
            </View>
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
