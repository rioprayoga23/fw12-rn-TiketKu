import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const BtnMonth = ({title, active}) => {
  if (!active) {
    return (
      <View style={[styles.btnMonth]}>
        <Text style={styles.titleMonth}>{title}</Text>
      </View>
    );
  } else {
    return (
      <View style={[styles.btnMonth, styles.active]}>
        <Text style={styles.titleMonth}>{title}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  btnMonth: {
    borderRadius: 5,
    width: 100,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A2647',
    marginRight: 10,
  },
  active: {
    backgroundColor: '#28907D',
  },
  titleMonth: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
  },
});

export default BtnMonth;
