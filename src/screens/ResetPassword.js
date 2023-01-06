import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Input} from '@rneui/themed';
import {ScrollView} from 'react-native';
import HeaderAuth from '../components/HeaderAuth';

const ResetPassword = () => {
  const [showNewPassword, setShowNewPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [iconOne, setIconOne] = useState('eye-off');
  const [iconTwo, setIconTwo] = useState('eye-off');

  const setTypeNewPassword = () => {
    if (showNewPassword === true) {
      setShowNewPassword(false);
      setIconOne('eye');
    } else {
      setShowNewPassword(true);
      setIconOne('eye-off');
    }
  };

  const setTypeConfirmPassword = () => {
    if (showConfirmPassword === true) {
      setShowConfirmPassword(false);
      setIconTwo('eye');
    } else {
      setShowConfirmPassword(true);
      setIconTwo('eye-off');
    }
  };

  return (
    <View style={[styles.bg, styles.wrapper]}>
      <ScrollView>
        <HeaderAuth title={'Set Password'} subTitle={'set your new password'} />
        <View style={styles.form}>
          <Input
            placeholder="Write your password"
            leftIcon={{type: 'feather', name: 'lock', color: 'green'}}
            rightIcon={{
              type: 'feather',
              name: iconOne,
              onPress: () => setTypeNewPassword(),
            }}
            secureTextEntry={showNewPassword}
          />
          <Input
            placeholder="Write your confirm password"
            leftIcon={{type: 'feather', name: 'lock', color: 'green'}}
            rightIcon={{
              type: 'feather',
              name: iconTwo,
              onPress: () => setTypeConfirmPassword(),
            }}
            secureTextEntry={showConfirmPassword}
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

export default ResetPassword;
