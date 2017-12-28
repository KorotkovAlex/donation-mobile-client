import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  NativeRouter,
  Link,
  DeepLinking
} from 'react-router-native';
import {
  Button,
  Container,
  Content,
  Card,
  CardItem,
  Left,
  Right,
  Center,
  Body,
  Thumbnail,
  Spinner,
  Icon,
  Header,
  Text,
  Form,
  Item,
  Label,
  Input
} from 'native-base';
import RNFS from 'react-native-fs';

import {
  compose,
  defaultProps,
  setPropTypes,
  withState,
  withProps,
  withHandlers,
  lifecycle
} from 'recompose';

import { savePrivatKey as savePrivatKeyAction } from '../startPage.action'


const mapStateToProps = ({ requestReducer, reducer, startPageReducers } ) => ({ requestReducer, reducer, startPageReducers });

const mapDispatchToProps = dispatch => bindActionCreators({ savePrivatKey: savePrivatKeyAction }, dispatch);

const enhance = compose(
  connect(mapStateToProps,mapDispatchToProps),


  withState('login', 'setLogin', ''),
  withState('password', 'setPassword', ''),

  withHandlers({
    _onPressButton: ({ login, password, navigation, savePrivatKey }) => () => {
      const { navigate } = navigation;
      var path = RNFS.DocumentDirectoryPath + '/test.json';
      RNFS.readFile(path, 'utf8').then(data => {
        const jsonData = JSON.parse(data);
        if(password === jsonData.password ) {
          console.log("Post");
          fetch(`http://192.168.43.15:3000/login`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                privateKey: jsonData.privateKey,
                password: jsonData.password,
            })
          }).then((response) => {
            if (response._bodyInit) {
              savePrivatKey(jsonData.privateKey);
              navigate('UserProfile');
            } else {
              console.error(error);
            }
          }).catch((error) => {
            console.error(error);
          });
        }
        console.log('jsonData', );
      });
    },

    _onPressSignup: ({ login, password, navigation }) => () => {
      const { navigate } = navigation;
      fetch(`http://192.168.43.15:3000/signup`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            password: password,
        })
      }).then((response) => {
        console.log('response.body', response._bodyInit);
        var path = RNFS.DocumentDirectoryPath + '/test.json';
        RNFS.writeFile(path, response._bodyInit, 'utf8')
        .then((success) => {
          console.log('FILE WRITTEN!', RNFS.DocumentDirectoryPath + '/test.json');
        })
        .catch((err) => {
          console.log(err.message);
        });
      }).catch((error) => {
        console.error(error);
      });
    },

    _testButton: () => () => {
      var path = RNFS.DocumentDirectoryPath + '/test.json';
      RNFS.writeFile(path, '{ "password": "1234", "privateKey": "0x8a84331220Db20A067D571EE950F881F98b7BD43"}', 'utf8')
        .then((success) => {
          console.log('FILE WRITTEN!', RNFS.DocumentDirectoryPath + '/test.json');
        })
        .catch((err) => {
          console.log(err.message);
        });

      RNFS.readFile(path, 'utf8').then(data => {
        const jsonData = JSON.parse(data);
        console.log('jsonData', jsonData.password);
      });
    }
  })
);

const StartPage = ({
  _testButton,
  _onPressSignup,
  _onPressButton,
  setPassword
}) => (
  <Container>
    <Content>
      <Item style={{ alignSelf: "center", width: 300, margin: 10}}>
        <Input secureTextEntry={true}
          style={{ alignSelf: "center", width: 300, margin: 2}}
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
        />
      </Item>
      <View>
        <Button style={{ alignSelf: "center", width: 300, margin: 10}} onPress={() => _onPressButton()} block info>
          <Text>Login</Text>
        </Button>
      </View>
      <View>
        <Button style={{ alignSelf: "center", width: 300, margin: 10}} onPress={() => _onPressSignup()} block info>
          <Text>Signup</Text>
        </Button>
      </View>
      <View>
        <Button style={{ alignSelf: "center", width: 300, margin: 10}} onPress={() => _testButton()} block info>
          <Text>Test button</Text>
        </Button>
      </View>
    </Content>
  </Container>
);

export default enhance(StartPage);
