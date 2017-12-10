import React, { Component } from 'react'
import {
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native'
import { Switch, Route, Redirect } from 'react-router'
import { NativeRouter, Link, DeepLinking } from 'react-router-native'
import { Navigation, Card, Tabs, Tab } from 'react-router-navigation'

import { StackNavigator } from 'react-navigation';

import UserProfile from '../userProfile/UserProfile'
import Requests from '../requests/Requests'
import NewRequest from '../requests/NewRequest'
import Wall from '../wall/Wall'
import StartPage from '../startPage/StartPage'
import Helped from '../helped/Helped'
import FooterComponent from './FooterComponent'

const SimpleApp = StackNavigator({
  StartPage: { screen: StartPage },
  UserProfile: { screen: UserProfile },
  NewRequest: { screen: NewRequest },
  Wall: { screen: Wall },
  Requests: { screen: Requests },
  Helped: { screen: Helped },
});

class App extends Component {
  render() {
    return (
      <SimpleApp />
    )
  }
}

export default App
