import {Button} from 'native-base';
import React from 'react';

const BtnFormAction = props => {
  return (
    <Button background={'#28907D'} borderRadius={8}>
      {props.title}
    </Button>
  );
};

export default BtnFormAction;
