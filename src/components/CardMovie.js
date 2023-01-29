import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Image} from 'native-base';

const CardMovie = ({data}) => {
  return (
    <View style={styles.cardMovie}>
      <Image
        source={{
          uri: data.picture,
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
