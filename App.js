import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignScreen from './src/screens/SignScreen';

const navigator = createStackNavigator(
  {
    Sign: SignScreen
  },
  {
    initialRouteName: 'Sign',
    defaultNavigationOptions: {
      title: 'Sign in'
    }
  });

// const App = createAppContainer(navigator);
// export default () => <App />

export default createAppContainer(navigator);
