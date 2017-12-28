import React, {Component} from 'react';
import { TouchableOpacity, View } from 'react-native'
import { Card, CardItem, Body, Container, Header, Content, List, ListItem, Text, Footer, FooterTab, Icon, Button } from 'native-base';
import { connect } from 'react-redux';
import {
  compose,
  defaultProps,
  setPropTypes,
  withState,
  withProps,
  withHandlers,
  lifecycle
} from 'recompose';
import RNFS from 'react-native-fs';

import Helped from '../../helped/Helped'
import Wall from '../../wall/Wall';
import FooterComponent from '../../app/components/FooterComponent.js'
import UsersRequest from '../UsersRequest';

const mapStateToProps = ({requestReducer, startPageReducers} ) => ({requestReducer, startPageReducers});

const enhance = compose(
  connect(mapStateToProps),

  withState('privateKey', 'setPrivateKey', ''),
  withState('ether', 'setEther', ''),//getBalance

  lifecycle({
    componentWillMount() {
      const privateKey = this.props.startPageReducers.startPageReducers.privateKey;
      fetch(`http://192.168.43.15:3000/getbalance`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            privateKey: privateKey,
        })
      }).then((response) => {
        this.props.setEther(response._bodyInit)
      }).catch((error) => {
        console.error(error);
      });
    }
  })
);

const UserProfile = ({
  ether,
  navigation
}) => (
  <Container>
    <Content style={{flex: 1}}>
      <Card>
        <CardItem>
          <Body>
            <View style={{ alignSelf: "center", margin: 2}}>
              <Text>Count Ether: {ether}</Text>
            </View>
          </Body>
        </CardItem>
      </Card>
      <UsersRequest navigation = {navigation} />
    </Content>
    <FooterComponent navigation = {navigation} activeComponent = 'UserProfile' />
  </Container>
);

export default enhance(UserProfile);
