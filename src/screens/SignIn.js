import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, Input} from '@rneui/themed';
import {ScrollView} from 'react-native';
import HeaderAuth from '../components/HeaderAuth';
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [icon, setIcon] = useState('eye-off');
  const setTypePassword = () => {
    if (showPassword === true) {
      setShowPassword(false);
      setIcon('eye');
    } else {
      setShowPassword(true);
      setIcon('eye-off');
    }
  };

  return (
    <View style={[styles.bg, styles.wrapper]}>
      <ScrollView>
        <HeaderAuth
          title={'Sign In'}
          subTitle={
            'Sign in with your data that you entered during your registration'
          }
        />
        <View style={styles.form}>
          <Input
            placeholder="Write your email"
            leftIcon={{type: 'feather', name: 'mail', color: 'green'}}
          />
          <Input
            placeholder="Write your password"
            leftIcon={{type: 'feather', name: 'lock', color: 'green'}}
            rightIcon={{
              type: 'feather',
              name: icon,
              onPress: () => setTypePassword(),
            }}
            secureTextEntry={showPassword}
          />
          <Button
            title="Sign In"
            color={'green'}
            buttonStyle={{padding: 15, borderRadius: 10, marginTop: 20}}
            titleStyle={{fontSize: 18}}
          />
        </View>

        <View style={styles.bottom}>
          <Text style={[styles.colorBlack, styles.bottomText]}>
            Forgot your password?
            <Text style={styles.colorPrimary}>Reset now</Text>
          </Text>
          <Text style={[styles.colorBlack, styles.bottomText]}>
            Don’t have an account?
            <Text style={styles.colorPrimary}>Sign Up</Text>
          </Text>
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

export default SignIn;
