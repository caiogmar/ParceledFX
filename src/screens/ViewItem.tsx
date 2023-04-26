import React from 'react';
import AppWrapper from '../components/AppWrapper';
import {ViewItemScreenProps} from '../type/navigation.type';
import ItemView from '../components/Item';
import {ScrollView, StyleSheet} from 'react-native';

function ViewItem({route}: ViewItemScreenProps): JSX.Element {
  const {item} = route.params;
  return (
    <AppWrapper style={stylesheet.container}>
      <ScrollView>
        <ItemView item={item} />
      </ScrollView>
    </AppWrapper>
  );
}

const stylesheet = StyleSheet.create({
  container: {
    padding: 0,
  },
});

export default ViewItem;
