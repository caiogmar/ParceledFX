import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import AppWrapper from '../components/AppWrapper';
import {SeachScreenProps} from '../type/navigation.type';
import data from '../api/data';
import {SingleItemType} from '../type/api.type';
import SearchItem from '../components/SearchItem';
import {DarkTheme} from '@react-navigation/native';
import colors from '../Colors';
// @ts-ignore
import ImageEmptySearch from '../assets/empty_search_image.png';

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

  const primaryColor = DarkTheme.dark
    ? colors.dark.primary
    : colors.light.primary;

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
          <Image
            source={ImageEmptySearch}
            style={stylesheet.imageEmptySearch}
            resizeMode="contain"
          />

          <Text style={stylesheet.textMessage}>
            No houses found in your search.
          </Text>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={[stylesheet.goBackButton, {color: primaryColor}]}>
              Go Back
            </Text>
          </TouchableOpacity>
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
  imageEmptySearch: {
    marginBottom: 20,
    height: 120,
  },
  textMessage: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  goBackButton: {
    fontSize: 16,
  },
});

export default Search;
