import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './src/routes';
import Colors from './src/styles/colors.json';

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor={Colors.black} />

    <Routes />
  </NavigationContainer>
);

export default App;
