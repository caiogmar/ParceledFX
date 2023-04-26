import * as React from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from '../screens';
import {RootStackParamList} from '../type/navigation.type';
import colors from '../Colors';

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigator() {
  const primaryColor = DarkTheme ? colors.dark.primary : colors.light.primary;

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: primaryColor,
        },
      }}>
      <Stack.Screen
        name={'Home'}
        component={Screens.Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'Search'}
        component={Screens.Search}
        options={{title: 'Search'}}
      />
      <Stack.Screen
        name={'ItemView'}
        component={Screens.SingleItem}
        options={{title: 'Property'}}
      />
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
