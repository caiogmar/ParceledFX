import {SingleItemType} from './api.type';

export type RootStackParamList = {
  Home: undefined;
  Search: {query: string};
  ItemView: {item: SingleItemType};
};
