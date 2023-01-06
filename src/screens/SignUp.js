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
            placeholder="Write your first name"
            leftIcon={{type: 'feather', name: 'user', color: 'green'}}
          />
          <Input
            placeholder="Write your last name"
            leftIcon={{type: 'feather', name: 'user', color: 'green'}}
          />
          <Input
            placeholder="Write your phone number"
            leftIcon={{type: 'feather', name: 'phone', color: 'green'}}
          />
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
            title="Sign Up"
            color={'green'}
            buttonStyle={{padding: 15, borderRadius: 10, marginTop: 20}}
            titleStyle={{fontSize: 18}}
          />
        </View>

        <View style={styles.bottom}>
          <Text style={[styles.colorBlack, styles.bottomText]}>
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
  },
  bottomText: {
    fontSize: 16,
  },
});

export default SignUp;
