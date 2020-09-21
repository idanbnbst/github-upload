import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import DashboardScreen from './src/screens/DashboardScreen';



import * as firebase from 'firebase';
import { firebaseConfig } from './src/config';

firebase.initializeApp(firebaseConfig);

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  Signup: SignUpScreen,
  Signin: SignInScreen
});

export default createAppContainer(switchNavigator);