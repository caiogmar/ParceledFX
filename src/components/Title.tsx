import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Title = ({title}: {title: string}): JSX.Element => {
  return <Text style={stylesheet.title}>{title}</Text>;
};

const stylesheet = StyleSheet.create({
  title: {
    fontSize: 36,
    paddingVertical: 40,
    fontWeight: 'bold',
  },
});

export default Title;
