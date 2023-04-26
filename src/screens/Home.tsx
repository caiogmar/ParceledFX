import React from 'react';
import {View, Text, TextInput} from 'react-native';
import AppWrapper from '../components/AppWrapper';

function Home(): JSX.Element {
  return (
    <AppWrapper>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <TextInput />
      </View>
    </AppWrapper>
  );
}

export default Home;
