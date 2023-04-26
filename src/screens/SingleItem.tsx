import React from 'react';
import {View, Text} from 'react-native';
import AppWrapper from '../components/AppWrapper';
import {RootStackParamList} from '../type/navigation.type';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ItemView'>;
};

function ViewItem({navigation}: Props): JSX.Element {
  return (
    <AppWrapper>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Single Item Screen</Text>
      </View>
    </AppWrapper>
  );
}

export default ViewItem;
