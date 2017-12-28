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
import RequestCard from '../requests/RequestCard'
import RequestDetails from '../requests/RequestDetails'
import Wall from '../wall/Wall'
import StartPage from '../startPage/StartPage'
import Helped from '../helped/Helped'
import FooterComponent from './components/FooterComponent'
import SplashPage from './components/SplashPage'

class App extends Component {
  render() {
    const Navigation = StackNavigator({
      StartPage: { screen: StartPage },
      UserProfile: { screen: UserProfile },
      NewRequest: { screen: NewRequest },
      Wall: { screen: Wall },
      Requests: { screen: Requests },
      Helped: { screen: Helped },
      RequestDetails: { screen: RequestDetails },
      RequestCard: { screen: RequestCard }
    });

    return (
      <Provider store={store}>
        <Navigation
          initialRoute={{id: SplashPage}}
          />
      </Provider>
    )
  }
}

export default App
