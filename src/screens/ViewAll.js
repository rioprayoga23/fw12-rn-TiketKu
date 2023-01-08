import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import BtnMonth from '../components/BtnMonth';
import CardMovieAll from '../components/CardMovieAll';
import Footer from '../components/Footer';
import MainHeader from '../components/MainHeader';
import Action from '../img/logoAction.png';
import Adventure from '../img/logoAdventure.png';
import Romance from '../img/logoRomance.png';
import SciFi from '../img/logoSort.png';

const ViewAll = () => {
  return (
    <>
      <MainHeader />
      <ScrollView>
        <View style={{backgroundColor: '#161621'}}>
          <View style={styles.heading}>
            <Text style={styles.titleHeading}>List Movie</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              justifyContent: 'space-between',
            }}>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  backgroundColor: '#0A2647',
                  padding: 5,
                  borderRadius: 10,
                  position: 'relative',
                  width: 55,
                  height: 55,
                }}>
                <Image
                  source={Action}
                  style={{
                    width: 57,
                    height: 55,
                    position: 'absolute',
                    bottom: -4,
                    right: -15,
                  }}
                />
              </View>
              <Text style={{marginTop: 5, color: '#28907D'}}>Action</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  backgroundColor: '#0A2647',
                  padding: 5,
                  borderRadius: 10,
                  position: 'relative',
                  width: 55,
                  height: 55,
                }}>
                <Image
                  source={Adventure}
                  style={{
                    width: 57,
                    height: 55,
                    position: 'absolute',
                    bottom: -4,
                    right: -15,
                  }}
                />
              </View>
              <Text style={{marginTop: 5, color: '#28907D'}}>Adventure</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  backgroundColor: '#0A2647',
                  padding: 5,
                  borderRadius: 10,
                  position: 'relative',
                  width: 55,
                  height: 55,
                }}>
                <Image
                  source={Romance}
                  style={{
                    width: 57,
                    height: 55,
                    position: 'absolute',
                    bottom: -5,
                    right: -15,
                  }}
                />
              </View>
              <Text style={{marginTop: 5, color: '#28907D'}}>Romance</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  backgroundColor: '#0A2647',
                  padding: 5,
                  borderRadius: 10,
                  position: 'relative',
                  width: 55,
                  height: 55,
                }}>
                <Image
                  source={SciFi}
                  style={{
                    width: 53,
                    height: 53,
                    position: 'absolute',
                    bottom: -4,
                    right: -15,
                  }}
                />
              </View>
              <Text style={{marginTop: 5, color: '#28907D'}}>Sci-Fi</Text>
            </View>
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
    paddingTop: 30,
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
