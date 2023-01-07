import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, Input} from '@rneui/themed';
import {ScrollView} from 'react-native';
import HeaderAuth from '../components/HeaderAuth';
import {useState} from 'react';
const SignUp = () => {
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
          title={'Sign Up'}
          subTitle={'Fill your additional details'}
        />
        <View style={styles.form}>
          <Input
            inputStyle={{color: 'white'}}
            placeholder="Write your first name"
            leftIcon={{
              type: 'feather',
              name: 'user',
              color: '#28907D',
            }}
          />
          <Input
            inputStyle={{color: 'white'}}
            placeholder="Write your last name"
            leftIcon={{type: 'feather', name: 'user', color: '#28907D'}}
          />
          <Input
            inputStyle={{color: 'white'}}
            placeholder="Write your phone number"
            leftIcon={{type: 'feather', name: 'phone', color: '#28907D'}}
          />
          <Input
            inputStyle={{color: 'white'}}
            placeholder="Write your email"
            leftIcon={{type: 'feather', name: 'mail', color: '#28907D'}}
          />
          <Input
            inputStyle={{color: 'white'}}
            placeholder="Write your password"
            leftIcon={{type: 'feather', name: 'lock', color: '#28907D'}}
            rightIcon={{
              type: 'feather',
              name: icon,
              color: '#28907D',
              onPress: () => setTypePassword(),
            }}
            secureTextEntry={showPassword}
          />
          <Button
            title="Sign Up"
            buttonStyle={{
              padding: 15,
              borderRadius: 10,
              marginTop: 20,
              backgroundColor: '#28907D',
            }}
          />
        </View>

        <View style={styles.bottom}>
          <Text style={[styles.colorGray, styles.bottomText]}>
            Already have account ?
            <Text style={styles.colorPrimary}>Sign In</Text>
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
    backgroundColor: '#161621',
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

export default SignUp;
