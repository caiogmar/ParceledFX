import React from 'react';
import {View, Text} from 'react-native';
import AppWrapper from '../components/AppWrapper';
import {ViewItemScreenProps} from '../type/navigation.type';

function ViewItem({navigation, route}: ViewItemScreenProps): JSX.Element {
  return (
    <AppWrapper>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Single Item Screen</Text>
      </View>
    </AppWrapper>
  );
}

export default ViewItem;
