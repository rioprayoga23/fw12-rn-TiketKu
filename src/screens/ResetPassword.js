import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Input} from '@rneui/themed';
import {ScrollView} from 'react-native';
import HeaderAuth from '../components/HeaderAuth';
import {useNavigation} from '@react-navigation/native';

const ResetPassword = () => {
  const navigation = useNavigation();
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderAuth title={'Set Password'} subTitle={'set your new password'} />
        <View style={styles.form}>
          <Input
            inputStyle={{color: 'white'}}
            placeholder="Write your password"
            leftIcon={{type: 'feather', name: 'lock', color: '#28907D'}}
            rightIcon={{
              type: 'feather',
              name: iconOne,
              color: '#28907D',
              onPress: () => setTypeNewPassword(),
            }}
            secureTextEntry={showNewPassword}
          />
          <Input
            inputStyle={{color: 'white'}}
            placeholder="Write your confirm password"
            leftIcon={{type: 'feather', name: 'lock', color: '#28907D'}}
            rightIcon={{
              type: 'feather',
              name: iconTwo,
              color: '#28907D',
              onPress: () => setTypeConfirmPassword(),
            }}
            secureTextEntry={showConfirmPassword}
          />
          <Button
            onPress={() => navigation.navigate('SignIn')}
            title="Submit"
            color={'#28907D'}
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

export default ResetPassword;
