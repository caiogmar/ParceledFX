import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from 'react-native';
import AppWrapper from '../components/AppWrapper';
import {SeachScreenProps} from '../type/navigation.type';
import data from '../api/data';
import {SingleItemType} from '../type/api.type';
import SearchItem from '../components/SearchItem';

function Search({navigation, route}: SeachScreenProps): JSX.Element {
  const {query} = route.params;
  const [items, setItems] = useState<SingleItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    queryDatabase();
  });

  function onSelect(item: SingleItemType) {
    navigation.navigate('ItemView', {item});
  }

  function queryDatabase() {
    setTimeout(() => {
      const results: SingleItemType[] = data.filter(
        item => item.address.toLowerCase().indexOf(query.toLowerCase()) !== -1,
      );

      setItems(results);
      setLoading(false);
    }, 200);
  }

  /**
   * Renders Loading State
   */
  if (loading) {
    return (
      <AppWrapper>
        <View style={[stylesheet.container, stylesheet.contentCentered]}>
          <ActivityIndicator size="large" style={stylesheet.loadingIndicator} />
          <Text>Searching...</Text>
        </View>
      </AppWrapper>
    );
  }

  /**
   * Renders Empty State
   */
  if (!items.length) {
    return (
      <AppWrapper>
        <View style={[stylesheet.container, stylesheet.contentCentered]}>
          <Text>No houses found in your search.</Text>
        </View>
      </AppWrapper>
    );
  }

  /**
   * Renders List State
   */
  return (
    <AppWrapper>
      <View style={stylesheet.container}>
        <FlatList
          data={items}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <SearchItem item={item} onSelect={onSelect} />
          )}
        />
      </View>
    </AppWrapper>
  );
}

const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentCentered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingIndicator: {
    paddingBottom: 20,
  },
});

export default Search;
