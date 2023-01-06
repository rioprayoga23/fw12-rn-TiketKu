import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Input} from '@rneui/themed';
import {ScrollView} from 'react-native';
import HeaderAuth from '../components/HeaderAuth';
const ForgotPassword = () => {
  return (
    <View style={[styles.bg, styles.wrapper]}>
      <ScrollView>
        <HeaderAuth
          title={'Forgot Password'}
          subTitle={"we'll send a link to your email shortly"}
        />
        <View style={styles.form}>
          <Input
            placeholder="Write your email"
            leftIcon={{type: 'feather', name: 'mail', color: 'green'}}
          />
          <Button
            title="Sign In"
            color={'green'}
            buttonStyle={{padding: 15, borderRadius: 10, marginTop: 20}}
            titleStyle={{fontSize: 18}}
          />
        </View>
      </ScrollView>
    </View>
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
    color: 'green',
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
    display: 'flex',
  },
  bottomText: {
    fontSize: 16,
    padding: 5,
  },
});

export default ForgotPassword;
