import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Avatar, Header, SearchBar} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import {Pressable} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const MainHeader = () => {
  const navigation = useNavigation();
  const login = true;
  return (
    <SafeAreaView>
      <Header
        containerStyle={{
          width: '100%',
          height: 90,
          paddingTop: 10,
          borderBottomColor: '#28907D',
        }}
        backgroundColor="#28907D">
        <View style={styles.containerItemHEader}>
          <SearchBar
            containerStyle={{
              flex: 1,
              borderRadius: 15,
              height: 40,
              justifyContent: 'center',
              marginRight: 20,
            }}
            inputStyle={{paddingVertical: 1, fontSize: 15}}
            placeholder="Search movie here"
            platform="android"
          />
          <Pressable
            onPress={() => {
              if (!login) {
                navigation.navigate('SignIn');
              } else {
                navigation.navigate('Profile');
              }
            }}>
            <View>
              <Avatar
                size={43}
                rounded
                source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
              />
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
