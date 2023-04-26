import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Routes from './Routes';
import * as Screens from '../screens';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.HOME} component={Screens.Home} />
      <Stack.Screen
        name={Routes.SEARCH_RESULTS}
        component={Screens.SearchResult}
      />
      <Stack.Screen name={Routes.SINGLE_ITEM} component={Screens.SingleItem} />
    </Stack.Navigator>
  );
}

function Navigator() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default Navigator;
