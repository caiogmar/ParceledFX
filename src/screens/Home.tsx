import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import AppWrapper from '../components/AppWrapper';
import Title from '../components/Title';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../Colors';
import {HomeScreenProps} from '../type/navigation.type';
import {DarkTheme} from '@react-navigation/native';

function Home({navigation}: HomeScreenProps): JSX.Element {
  const searchIconColor = !DarkTheme.dark
    ? colors.light.primary
    : colors.dark.primary;

  return (
    <AppWrapper>
      <Title title="Discover your dream house" />
      <View style={stylesheet.viewSearchBar}>
        <TextInput placeholder="Address..." style={stylesheet.input} />
        <TouchableOpacity
          style={stylesheet.button}
          onPress={() => navigation.navigate('Search', {query: 'queeeert'})}>
          <Icon name="search" size={30} color={searchIconColor} />
        </TouchableOpacity>
      </View>
    </AppWrapper>
  );
}

const stylesheet = StyleSheet.create({
  viewSearchBar: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    height: 54,
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  button: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    width: 50,
  },
});

export default Home;
