import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const CardMovieAll = ({data}) => {
  return (
    <View style={styles.cardMovie}>
      <Image
        source={{
          uri: 'https://fw12-backend-orcin.vercel.app/uploads/' + data.picture,
        }}
        resizeMode={'contain'}
        style={{width: 140, height: 220}}
        borderRadius={8}
      />
      <Text style={styles.titleMovie}>{data?.title}</Text>
      <Text style={styles.genreMovie}>{data?.genre}</Text>
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
    height: 320,
    marginRight: 15,
  },
});

export default CardMovieAll;
