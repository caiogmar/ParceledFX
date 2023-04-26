import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SingleItemType} from '../type/api.type';

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

const TopItem = ({
  item,
  onSelect,
}: {
  item: SingleItemType;
  onSelect: Function;
}): JSX.Element => {
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
        </View>
      </View>
    </TouchableOpacity>
  );
};

const stylesheet = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    marginBottom: 16,
    borderRadius: 10,
    width: SCREEN_WIDTH / 3,
    minHeight: 225,
    marginRight: 10,
  },
  viewImage: {},
  viewContent: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  image: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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

export default TopItem;
