import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase';

import {createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './screens/HomeScreen.js';
import SigninScreen from './screens/SigninScreen.js';
import SignupScreen from './screens/SignupScreen.js';
import LoadingScreen from './screens/LoadingScreen.js';


var config = {
  apiKey: "AIzaSyAZjrNW9BKwR9Nsv2qzIHeJcwHoW37HwX8",
  authDomain: "fir-integration-9188c.firebaseapp.com",
  databaseURL: "https://fir-integration-9188c.firebaseio.com",
  projectId: "fir-integration-9188c",
  storageBucket: "fir-integration-9188c.appspot.com",
  messagingSenderId: "203186594591"
};
firebase.initializeApp(config);

const MainNavigator = createStackNavigator(
  {
    Loading: {screen: LoadingScreen},
    SignIn: {screen: SigninScreen},
    SignUp: {screen: SignupScreen},
    Home: {screen: HomeScreen}
  },
  {
    //Launcher Screen
    initialRouteName: "Loading"
  }
)

//create app container
const App = createAppContainer(MainNavigator); 
export default App
