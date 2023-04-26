import React from 'react';
import {View, Text} from 'react-native';
import AppWrapper from '../components/AppWrapper';
import {SeachScreenProps} from '../type/navigation.type';

function Search({navigation, route}: SeachScreenProps): JSX.Element {
  const {query} = route.params;

  return (
    <AppWrapper>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Search Result Screen</Text>
      </View>
    </AppWrapper>
  );
}

export default Search;
