import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from '../screens';
import {RootStackParamList} from '../type/navigation.type';

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        component={Screens.Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={'Search'} component={Screens.Search} />
      <Stack.Screen name={'ItemView'} component={Screens.SingleItem} />
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
