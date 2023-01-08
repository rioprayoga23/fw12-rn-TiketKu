import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import coverSpiderman from '../img/coverSpiderman.png';

const CardMovieAll = () => {
  return (
    <View style={styles.cardMovie}>
      <Image
        source={coverSpiderman}
        resizeMode="cover"
        style={{width: 140, height: 220}}
        borderRadius={8}
      />
      <Text style={styles.titleMovie}>Spiderman</Text>
      <Text style={styles.genreMovie}>Action, Adventure, Sci-Fi</Text>
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

export default CardMovieAll;
