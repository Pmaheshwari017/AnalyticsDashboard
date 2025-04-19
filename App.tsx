import { StyleSheet } from 'react-native';
import React from 'react';
import NavigationStack from './src/Navigation/navigationStack';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning']);

const App = () => {
  return (

    <NavigationStack />

  );
};

export default App;

const styles = StyleSheet.create({});
