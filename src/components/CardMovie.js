import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Image} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const CardMovie = ({data, dataKey}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MovieDetails', {id: data?.id})}>
      <View style={styles.cardMovie} key={dataKey}>
        <Image
          source={{
            uri:
              'https://fw12-backend-orcin.vercel.app/uploads/' + data.picture,
          }}
          alt={data.title}
          width={122}
          height={165}
          borderRadius={6}
          resizeMode="contain"
        />
        <Text style={styles.titleMovie}>{data.title}</Text>
        <Text style={styles.genreMovie}>{data.genre}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  titleMovie: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  genreMovie: {
    color: 'white',
    fontSize: 14,
  },
  cardMovie: {
    width: 122,
    marginRight: 15,
  },
});

export default CardMovie;
