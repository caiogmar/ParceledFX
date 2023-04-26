import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SingleItemType} from '../type/api.type';

const ItemOwnership = ({item}: {item: SingleItemType}): JSX.Element => {
  return <Text style={stylesheet.title}>{item.owner}</Text>;
};

const stylesheet = StyleSheet.create({
  title: {
    fontSize: 36,
    paddingVertical: 40,
    fontWeight: 'bold',
  },
});

export default ItemOwnership;
