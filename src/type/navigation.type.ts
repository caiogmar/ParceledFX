import {SingleItemType} from './api.type';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Search: {query: string};
  ItemView: {item: SingleItemType};
};

export type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export type SeachScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Search'>;
  route: RouteProp<RootStackParamList, 'Search'>;
};

export type ViewItemScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ItemView'>;
  route: RouteProp<RootStackParamList, 'ItemView'>;
};
