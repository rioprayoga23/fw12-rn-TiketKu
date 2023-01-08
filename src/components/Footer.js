import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/dist/Feather';
import logoTiketKu from '../img/Tickitz.png';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Image source={logoTiketKu} style={{width: 150, height: 50}} />
      <Text style={styles.descriptionFooter}>
        Stop waiting in line. Buy tickets conveniently, watch movies quietly.
      </Text>
      <View>
        <Text style={styles.headingFooter}>Explore</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textItemFooter}>Home</Text>
          <Text style={styles.textItemFooter}>ListMovie</Text>
        </View>
      </View>
      <View>
        <Text style={styles.headingFooter}>Our Sponsor</Text>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={logoTiketKu}
            style={{width: 100, height: 30, marginRight: 15}}
          />
          <Image
            source={logoTiketKu}
            style={{width: 100, height: 30, marginRight: 15}}
          />
          <Image
            source={logoTiketKu}
            style={{width: 100, height: 30, marginRight: 15}}
          />
        </View>
      </View>
      <View>
        <Text style={styles.headingFooter}>Follow Us</Text>
        <View style={{flexDirection: 'row'}}>
          <Icon name="facebook" size={25} style={{marginRight: 30}} />
          <Icon name="instagram" size={25} style={{marginRight: 30}} />
          <Icon name="twitter" size={25} style={{marginRight: 30}} />
          <Icon name="youtube" size={25} style={{marginRight: 30}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  descriptionFooter: {
    marginTop: 20,
    fontSize: 15,
    lineHeight: 24,
  },
  headingFooter: {
    paddingVertical: 10,
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#28907D',
  },
  textItemFooter: {
    marginRight: 15,
    fontSize: 15,
  },
});
export default Footer;
