import React from 'react';
import {VStack, Skeleton} from 'native-base';

const SkeletonLoading = () => {
  return (
    <VStack
      w={122}
      mr={3}
      borderWidth="1"
      space={4}
      overflow="hidden"
      rounded="md"
      _dark={{
        borderColor: '#161621',
      }}
      _light={{
        borderColor: '#161621',
      }}>
      <Skeleton h="90" />
      <Skeleton.Text py="4" />
    </VStack>
  );
};

export default SkeletonLoading;
