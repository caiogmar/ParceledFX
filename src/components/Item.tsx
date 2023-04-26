import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import {SingleItemType} from '../type/api.type';
import {DarkTheme} from '@react-navigation/native';
import colors from '../Colors';
import Icon from 'react-native-vector-icons/Feather';
import {
  NavigationState,
  SceneRendererProps,
  TabBar,
  TabView,
} from 'react-native-tab-view';
import ItemOwnership from './ItemOwnership';
import ItemDetails from './ItemDetails';
import ItemHistory from './ItemHistory';

const ItemView = ({item}: {item: SingleItemType}): JSX.Element => {
  const layout = useWindowDimensions();

  const [tabIndex, setTabIndex] = useState(0);

  const [tabRoutes] = React.useState([
    {key: 'propertyTab', title: 'Property'},
    {key: 'historyTab', title: 'History'},
    {key: 'ownerTab', title: 'Owner'},
  ]);

  const renderScene = ({
    route,
  }: {
    route: {key: string; title: string};
  }): JSX.Element | null => {
    switch (route.key) {
      case 'propertyTab':
        return <ItemDetails item={item} />;
      case 'historyTab':
        return <ItemHistory item={item} />;
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

  const screenBackgroundColor = !DarkTheme.dark
    ? colors.dark.background
    : colors.light.background;

  const iconColor = DarkTheme.dark
    ? colors.dark.neutral[300]
    : colors.light.neutral[300];

  const labelColor = DarkTheme.dark
    ? colors.dark.neutral[500]
    : colors.light.neutral[500];

  const borderColor = DarkTheme.dark
    ? colors.dark.neutral[100]
    : colors.light.neutral[100];

  const tabTextColor = DarkTheme.dark
    ? colors.dark.neutral[500]
    : colors.light.neutral[500];

  function renderTabBar(
    props: SceneRendererProps & {
      navigationState: NavigationState<{
        key: string;
        title: string;
      }>;
    },
  ): React.ReactNode {
    return (
      <TabBar
        {...props}
        indicatorStyle={{backgroundColor: primaryColor}}
        style={{backgroundColor: screenBackgroundColor}}
        labelStyle={{color: tabTextColor}}
      />
    );
  }

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

      {/* Property Value Row */}
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

      {/* Tab View: Property details, history, ownership */}
      <TabView
        navigationState={{index: tabIndex, routes: tabRoutes}}
        renderScene={renderScene}
        onIndexChange={setTabIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={renderTabBar}
        style={stylesheet.tabView}
      />
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
    marginBottom: 30,
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
    marginBottom: 40,
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
  tabView: {
    height: 600,
    backgroundColor: '#fff',
  },
});

export default ItemView;
