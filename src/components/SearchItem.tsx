import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SingleItemType} from '../type/api.type';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../Colors';
import {DarkTheme} from '@react-navigation/native';

const SearchItem = ({
  item,
  onSelect,
}: {
  item: SingleItemType;
  onSelect: Function;
}): JSX.Element => {
  const iconBookmarkColor = DarkTheme.dark
    ? colors.dark.primary
    : colors.light.primary;

  return (
    <TouchableOpacity onPress={() => onSelect(item)}>
      <View style={stylesheet.container}>
        <View style={stylesheet.viewImage}>
          <Image
            source={{uri: item.imageUrl}}
            style={stylesheet.image}
            resizeMode="cover"
          />
        </View>
        <View style={stylesheet.viewContent}>
          <View style={stylesheet.viewDescription}>
            <Text style={stylesheet.title}>{item.address}</Text>
            <Text style={stylesheet.description}>
              {item.city}, {item.state} {item.zipcode}
            </Text>
          </View>
          <View>
            <Icon name={'bookmark'} color={iconBookmarkColor} size={18} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const stylesheet = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 16,
    borderRadius: 10,
  },
  viewImage: {},
  viewContent: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  image: {
    width: 100,
    height: 80,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  viewDescription: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {},
});

export default SearchItem;
