import React, {PropsWithChildren} from 'react';
import {
  useColorScheme,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';
import Colors from '../Colors';

function AppWrapper({children}: PropsWithChildren): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundColor = !isDarkMode
    ? Colors.light.background
    : Colors.dark.background;

  return (
    <SafeAreaView style={{...stylesheet.container, backgroundColor}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={stylesheet.content}>{children}</View>
    </SafeAreaView>
  );
}

const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
});

export default AppWrapper;
