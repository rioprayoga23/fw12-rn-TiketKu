import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import logoTiketKu from '../img/Tickitz.png';

const HeaderAuth = props => {
  return (
    <>
      <Image source={logoTiketKu} style={{width: 150, height: 50}} />
      <View style={styles.header}>
        <Text style={[styles.title, styles.colorPrimary]}>{props.title}</Text>
        <Text style={[styles.subTitle, styles.colorGray]}>
          {props.subTitle}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 40,
    gap: 10,
  },
  bg: {
    backgroundColor: '#FFFFFF',
  },
  colorBlack: {
    color: 'black',
  },
  colorGray: {
    color: '#8692A6',
  },
  colorPrimary: {
    color: '#28907D',
  },
  title: {
    fontSize: 37,
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 10,
  },
  form: {
    marginTop: 40,
  },
  bottom: {
    marginTop: 20,
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 16,
  },
});

export default HeaderAuth;
