import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from './pages/Dashboard/Dashboard';
import Uses from './pages/Uses/Uses';
import Recycling from './pages/Recycling/Recycling';
import Run from './pages/Run/Run';

const {Navigator, Screen} = createStackNavigator();

const Routes: React.FC = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
      animationEnabled: false,
    }}>
    <Screen name="Dashboard" component={Dashboard} />
    <Screen name="uses" component={Uses} />
    <Screen name="recycling" component={Recycling} />
    <Screen name="run" component={Run} />
  </Navigator>
);

export default Routes;
