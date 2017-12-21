import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native'

import store from '../store';
import { StackNavigator } from 'react-navigation';

import UserProfile from '../userProfile/UserProfile'
import Requests from '../requests/Requests'
import NewRequest from '../requests/NewRequest'
import Wall from '../wall/Wall'
import StartPage from '../startPage/StartPage'
import Helped from '../helped/Helped'
import FooterComponent from './components/FooterComponent'


class App extends Component {
  render() {
    const Navigation = StackNavigator({
      StartPage: { screen: StartPage },
      UserProfile: { screen: UserProfile },
      NewRequest: { screen: NewRequest },
      Wall: { screen: Wall },
      Requests: { screen: Requests },
      Helped: { screen: Helped }
    });

    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}

export default App
