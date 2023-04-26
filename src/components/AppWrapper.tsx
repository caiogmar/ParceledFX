import React, {PropsWithChildren} from 'react';
import {
  useColorScheme,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';

function AppWrapper({children}: PropsWithChildren): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundColor = !isDarkMode ? 'red' : 'blue';

  return (
    <SafeAreaView style={{...stylesheet.container, backgroundColor}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        // backgroundColor={backgroundStyle.backgroundColor}
      />
      {children}
    </SafeAreaView>
  );
}

const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppWrapper;
