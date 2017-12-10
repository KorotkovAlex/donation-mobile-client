import React, { Component } from 'react'
import {
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native'

import { StackNavigator } from 'react-navigation';

import UserProfile from '../userProfile/UserProfile'
import Requests from '../requests/Requests'
import NewRequest from '../requests/NewRequest'
import Wall from '../wall/Wall'
import StartPage from '../startPage/StartPage'
import Helped from '../helped/Helped'
import FooterComponent from './FooterComponent'

const Navigation = StackNavigator({
  StartPage: { screen: StartPage },
  UserProfile: { screen: UserProfile },
  NewRequest: { screen: NewRequest },
  Wall: { screen: Wall },
  Requests: { screen: Requests },
  Helped: { screen: Helped }
});

class App extends Component {
  render() {
    return (
      <Navigation />
    )
  }
}

export default App
