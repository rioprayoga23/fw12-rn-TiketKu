import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Avatar, Header, SearchBar} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import {Button, Pressable, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/Feather';

const MainHeader = () => {
  const navigation = useNavigation();
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
