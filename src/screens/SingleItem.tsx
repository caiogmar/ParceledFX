import React from 'react';
import {View, Text} from 'react-native';
import AppWrapper from '../components/AppWrapper';

function SingleItem(): JSX.Element {
  return (
    <AppWrapper>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Single Item Screen</Text>
      </View>
    </AppWrapper>
  );
}

export default SingleItem;
