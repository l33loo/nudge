import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import SignIn from '../screens/SignIn';
import Register from '../screens/Register';

export const Tabs = createBottomTabNavigator({
  SignIn: {
    screen: SignIn
  },
  Register: {
    screen: Register
  },
});