import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from './pages/Dashboard/Dashboard';

const {Navigator, Screen} = createStackNavigator();

const Routes: React.FC = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Screen name="Dashboard" component={Dashboard} />
  </Navigator>
);

export default Routes;
