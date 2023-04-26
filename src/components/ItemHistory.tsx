import React from 'react';
import {View} from 'react-native';
import {SingleItemType} from '../type/api.type';
import ItemTabRow from './ItemTabRow';

const ItemHistory = ({item}: {item: SingleItemType}): JSX.Element => {
  return (
    <View>
      <ItemTabRow label="Date" value="May 4th 2018" />
      <ItemTabRow label="Company" value="Fidelity National Co" />
      <ItemTabRow label="Grantor" value="The Shigeru Nakatini Survivor Trust" />
      <ItemTabRow label="Mortage Amount" value="$1,772,293" />
    </View>
  );
};

export default ItemHistory;
