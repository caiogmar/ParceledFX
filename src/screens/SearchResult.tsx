import React from 'react';
import {View, Text} from 'react-native';
import AppWrapper from '../components/AppWrapper';

function SearchResult(): JSX.Element {
  return (
    <AppWrapper>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Search Result Screen</Text>
      </View>
    </AppWrapper>
  );
}

export default SearchResult;
