import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import {SingleItemType} from '../type/api.type';
import {DarkTheme} from '@react-navigation/native';
import colors from '../Colors';
import Icon from 'react-native-vector-icons/Feather';
import {TabView} from 'react-native-tab-view';
import ItemOwnership from './ItemOwnership';

const ItemView = ({item}: {item: SingleItemType}): JSX.Element => {
  const layout = useWindowDimensions();

  const [tabIndex, setTabIndex] = useState(0);

  const [tabRoutes] = React.useState([{key: 'ownerTab', title: 'Owner'}]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'ownerTab':
        return <ItemOwnership item={item} />;
      default:
        return null;
    }
  };

  // Dynamic Styles
  const primaryColor = DarkTheme.dark
    ? colors.dark.primary
    : colors.light.primary;

  const iconColor = DarkTheme.dark
    ? colors.dark.neutral[300]
    : colors.light.neutral[300];

  const labelColor = DarkTheme.dark
    ? colors.dark.neutral[500]
    : colors.light.neutral[500];

  const borderColor = DarkTheme.dark
    ? colors.dark.neutral[100]
    : colors.light.neutral[100];

  return (
    <View style={stylesheet.container}>
      {/* Property Image */}
      <Image
        source={{uri: item.imageUrl}}
        style={stylesheet.image}
        resizeMode="cover"
      />
      <View style={stylesheet.viewPropertyDetails}>
        {/* Content Top Row */}
        <View style={stylesheet.viewContentTop}>
          {/* Property Type */}
          <View style={stylesheet.viewPropertyType}>
            <Text style={[stylesheet.textPropertyType, {color: primaryColor}]}>
              {item.propertyType}
            </Text>
          </View>

          {/* Top Icons */}
          <View style={stylesheet.viewTopIcons}>
            <Icon
              name={'share'}
              color={iconColor}
              size={21}
              style={stylesheet.iconShare}
            />
            <Icon name={'bookmark'} color={iconColor} size={21} />
          </View>
        </View>

        {/* Address */}
        <Text style={stylesheet.textAddress}>{item.address}</Text>

        {/* City, State Zipcode */}
        <Text style={stylesheet.textCityStateZipcode}>
          {item.city}, {item.state} {item.zipcode}
        </Text>
      </View>

      <View style={stylesheet.viewPropertyValue}>
        <View style={[stylesheet.viewPropertyValueColumn, {borderColor}]}>
          <Text style={[stylesheet.textLabel, {color: labelColor}]}>
            Guidance Price
          </Text>
          <Text style={stylesheet.textValue}>${item.guidancePrice}</Text>
        </View>
        <View
          style={[
            stylesheet.viewPropertyValueColumn,
            stylesheet.viewPropertyValueCenterColumn,
            {borderColor},
          ]}>
          <Text style={[stylesheet.textLabel, {color: labelColor}]}>
            Bid Price
          </Text>
          <Text style={stylesheet.textValue}>$20000</Text>
        </View>
        <View style={[stylesheet.viewPropertyValueColumn, {borderColor}]}>
          <Text style={[stylesheet.textLabel, {color: labelColor}]}>
            Bid Cap Rate
          </Text>
          <Text style={stylesheet.textValue}>${item.bidCapRate}</Text>
        </View>
      </View>
      <View>
        <TabView
          navigationState={{index: tabIndex, routes: tabRoutes}}
          renderScene={renderScene}
          onIndexChange={setTabIndex}
          initialLayout={{width: layout.width}}
        />
      </View>
    </View>
  );
};

const stylesheet = StyleSheet.create({
  container: {},
  image: {
    width: '100%',
    height: 300,
  },
  viewPropertyDetails: {
    padding: 20,
    marginBottom: 40,
  },
  textPropertyType: {
    fontSize: 16,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  textAddress: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  textCityStateZipcode: {
    fontSize: 16,
  },
  viewContentTop: {
    width: '100%',
    flexDirection: 'row',
  },
  viewPropertyType: {
    flex: 1,
  },
  viewTopIcons: {
    flexDirection: 'row',
  },
  iconShare: {
    marginRight: 20,
  },
  viewPropertyValue: {
    width: '100%',
    flexDirection: 'row',
  },
  viewPropertyValueColumn: {
    flex: 1,
    padding: 20,
    borderTopWidth: 1,
  },
  viewPropertyValueCenterColumn: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 0,
  },
  textLabel: {
    marginBottom: 5,
  },
  textValue: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ItemView;
