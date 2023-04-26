import React from 'react';
import {View} from 'react-native';
import {SingleItemType} from '../type/api.type';
import ItemTabRow from './ItemTabRow';

const ItemOwnership = ({item}: {item: SingleItemType}): JSX.Element => {
  return (
    <View>
      <ItemTabRow label="Owner" value={item.owner} />
      <ItemTabRow
        label="Owner Address"
        value="2202 Pine Street, San Francisco CA 94115"
      />
      <ItemTabRow label="Owner Type" value="P" />
    </View>
  );
};

export default ItemOwnership;
