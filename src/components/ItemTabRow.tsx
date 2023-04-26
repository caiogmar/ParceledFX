import {DarkTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../Colors';

const ItemTabRow = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}): JSX.Element => {
  const labelColor = DarkTheme.dark
    ? colors.dark.neutral[300]
    : colors.light.neutral[300];

  const borderColor = DarkTheme.dark
    ? colors.dark.neutral[100]
    : colors.light.neutral[100];

  return (
    <View style={[stylesheet.container, {borderColor}]}>
      <Text style={[stylesheet.label, {color: labelColor}]}>{label}</Text>
      <Text style={stylesheet.value}>{value}</Text>
    </View>
  );
};

const stylesheet = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ItemTabRow;
