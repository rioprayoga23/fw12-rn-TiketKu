import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/dist/Feather';
import logoTiketKu from '../assets/img/Tickitz.png';
import sponsor1 from '../assets/img/cine.png';
import sponsor2 from '../assets/img/hiflix.png';
import sponsor3 from '../assets/img/ebu.png';
import {VStack} from 'native-base';

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
        <VStack space={5}>
          <Image
            source={sponsor1}
            style={{width: 130, height: 20, marginRight: 15}}
          />
          <Image
            source={sponsor2}
            style={{width: 85, height: 26, marginRight: 15}}
          />
          <Image
            source={sponsor3}
            style={{width: 95, height: 35, marginRight: 15}}
          />
        </VStack>
      </View>
      <View>
        <Text style={styles.headingFooter}>Follow Us</Text>
        <View style={{flexDirection: 'row'}}>
          <Icon
            name="facebook"
            size={25}
            color="white"
            style={{marginRight: 30}}
          />
          <Icon
            name="instagram"
            size={25}
            color="white"
            style={{marginRight: 30}}
          />
          <Icon
            name="twitter"
            size={25}
            color="white"
            style={{marginRight: 30}}
          />
          <Icon
            name="youtube"
            size={25}
            color="white"
            style={{marginRight: 30}}
          />
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
    color: 'white',
  },
  headingFooter: {
    paddingVertical: 10,
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#28907D',
  },
  textItemFooter: {
    marginRight: 15,
    fontSize: 15,
    color: 'white',
  },
});
export default Footer;
