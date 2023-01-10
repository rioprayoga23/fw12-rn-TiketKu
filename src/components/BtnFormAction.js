import {useNavigation} from '@react-navigation/native';
import {Button} from 'native-base';
import React from 'react';

const BtnFormAction = props => {
  const navigation = useNavigation();
  const navigationPath = props.navigationPath;
  return (
    <Button
      onPress={() => navigation.navigate(navigationPath, {navigationPath})}
      background={'#28907D'}
      borderRadius={8}>
      {props.title}
    </Button>
  );
};

export default BtnFormAction;
