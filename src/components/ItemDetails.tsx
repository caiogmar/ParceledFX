import React from 'react';
import {View} from 'react-native';
import {SingleItemType} from '../type/api.type';
import ItemTabRow from './ItemTabRow';

const ItemDetails = ({item}: {item: SingleItemType}): JSX.Element => {
  return (
    <View>
      <ItemTabRow label="Owner" value={item.owner} />
      <ItemTabRow
        label="Address"
        value={`${item.address} ${item.city}, ${item.state} ${item.zipcode}`}
      />
      <ItemTabRow label="County" value={item.county} />
      <ItemTabRow label="Property Type" value={item.propertyType} />
      <ItemTabRow label="Year Built" value={item.yearBuilt} />
      <ItemTabRow label="# Units" value={item.units} />
      <ItemTabRow label="Lot Size" value={item.lotSize} />
    </View>
  );
};

// const stylesheet = StyleSheet.create({
//   title: {
//     fontSize: 36,
//     paddingVertical: 40,
//     fontWeight: 'bold',
//   },
// });

export default ItemDetails;
