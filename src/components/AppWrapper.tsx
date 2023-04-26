import React, {PropsWithChildren} from 'react';
import {
  useColorScheme,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  StyleProp,
} from 'react-native';
import Colors from '../Colors';

type Props = {
  style?: StyleProp<any>;
};

function AppWrapper({children, style}: PropsWithChildren<Props>): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundColor = !isDarkMode
    ? Colors.light.background
    : Colors.dark.background;

  return (
    <SafeAreaView style={stylesheet.safeArea}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={Colors.light.primary}
      />
      <View style={[{...stylesheet.container, backgroundColor}, style]}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const stylesheet = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
});

export default AppWrapper;
