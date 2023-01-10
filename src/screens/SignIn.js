import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Pressable, HStack} from 'native-base';
import {Button, Input} from '@rneui/themed';
import {ScrollView} from 'react-native';
import HeaderAuth from '../components/HeaderAuth';
import {useNavigation} from '@react-navigation/native';
const SignIn = () => {
  const navigation = useNavigation();
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderAuth
          title={'Sign In'}
          subTitle={
            'Sign in with your data that you entered during your registration'
          }
        />
        <View style={styles.form}>
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
            title="Sign In"
            color={'#28907D'}
            buttonStyle={{padding: 15, borderRadius: 10, marginTop: 20}}
            titleStyle={{fontSize: 18}}
          />
        </View>

        <View style={styles.bottom}>
          <HStack alignItems={'center'}>
            <Text style={[styles.colorGray, styles.bottomText]}>
              Forgot your password?
            </Text>
            <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={[styles.colorPrimary, styles.bottomText]}>
                {' '}
                Reset now
              </Text>
            </Pressable>
          </HStack>
          <HStack alignItems={'center'}>
            <Text style={[styles.colorGray, styles.bottomText]}>
              Don’t have an account?
            </Text>
            <Pressable onPress={() => navigation.navigate('SignUp')}>
              <Text style={[styles.colorPrimary, styles.bottomText]}>
                {' '}
                Sign Up
              </Text>
            </Pressable>
          </HStack>
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
    marginVertical: 5,
  },
});
export default SignIn;
