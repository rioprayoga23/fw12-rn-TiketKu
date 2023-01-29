import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import {Avatar, Button, Pressable, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getProfileAction} from '../redux/actions/profile';
import Icon from 'react-native-vector-icons/dist/Feather';

import avatarIcon from '../assets/img/avatar.jpg';

const MainHeader = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.auth);
  const {user} = useSelector(state => state.profile);

  useEffect(() => {
    dispatch(getProfileAction());
  }, [dispatch, token]);

  return (
    <SafeAreaView>
      <Header
        containerStyle={{
          width: '100%',
          height: 90,
          borderBottomColor: '#28907D',
        }}
        backgroundColor="#28907D">
        <View style={styles.containerItemHEader}>
          <Button
            onPress={() => navigation.navigate('SearchResults')}
            width={20}
            height={10}
            flex={1}
            backgroundColor={'white'}
            borderRadius={15}
            marginRight={5}
            justifyContent={'flex-start'}
            leftIcon={<Icon name="search" color="black" size={20} />}>
            <Text fontWeight={'500'}>Search movies here</Text>
          </Button>
          <Pressable
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <View>
              {user?.picture ? (
                <Avatar source={{uri: user.picture}} />
              ) : (
                <Avatar source={avatarIcon} />
              )}
            </View>
          </Pressable>
        </View>
      </Header>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerItemHEader: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 370,
  },
});

export default MainHeader;
