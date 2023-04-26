import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AppWrapper from '../components/AppWrapper';
import Title from '../components/Title';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../Colors';
import {HomeScreenProps} from '../type/navigation.type';
import {DarkTheme} from '@react-navigation/native';
import SectionTitle from '../components/SectionTitle';
import RecentItem from '../components/RecentItem';
import data from '../api/data';
import {SingleItemType} from '../type/api.type';
import TopItem from '../components/TopItem';

function Home({navigation}: HomeScreenProps): JSX.Element {
  const [query, setQuery] = useState<string>('');

  const searchIconColor = !DarkTheme.dark
    ? colors.light.primary
    : colors.dark.primary;

  return (
    <AppWrapper style={stylesheet.safeView}>
      <ScrollView style={stylesheet.scrollView}>
        <Title title="Discover your dream house" />
        <View style={stylesheet.viewSearchBar}>
          <TextInput
            placeholder="Address..."
            style={stylesheet.input}
            onChangeText={text => setQuery(text)}
          />
          <TouchableOpacity
            style={stylesheet.button}
            onPress={() => navigation.navigate('Search', {query})}>
            <Icon name="search" size={30} color={searchIconColor} />
          </TouchableOpacity>
        </View>

        <SectionTitle title="Recently Added" />

        <RecentItem
          item={data[1]}
          onSelect={(item: SingleItemType) =>
            navigation.navigate('ItemView', {item})
          }
        />
        <RecentItem
          item={data[2]}
          onSelect={(item: SingleItemType) =>
            navigation.navigate('ItemView', {item})
          }
        />
        <RecentItem
          item={data[3]}
          onSelect={(item: SingleItemType) =>
            navigation.navigate('ItemView', {item})
          }
        />

        <SectionTitle title="Top Properties" />

        <ScrollView style={{flexDirection: 'row'}} horizontal>
          <TopItem
            item={data[1]}
            onSelect={(item: SingleItemType) =>
              navigation.navigate('ItemView', {item})
            }
          />
          <TopItem
            item={data[1]}
            onSelect={(item: SingleItemType) =>
              navigation.navigate('ItemView', {item})
            }
          />
          <TopItem
            item={data[1]}
            onSelect={(item: SingleItemType) =>
              navigation.navigate('ItemView', {item})
            }
          />
        </ScrollView>
      </ScrollView>
    </AppWrapper>
  );
}

const stylesheet = StyleSheet.create({
  safeView: {
    padding: 0,
  },
  scrollView: {
    padding: 20,
  },
  viewSearchBar: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    height: 54,
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  button: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    width: 50,
  },
});

export default Home;
