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

const mapStateToProps = ({requestReducer} ) => ({requestReducer});

const enhance = compose(
  connect(mapStateToProps),

  withState('privateKey', 'setPrivateKey', ''),
  withState('ether', 'setEther', ''),//getBalance

  lifecycle({
      componentWillMount() {
        var path = RNFS.DocumentDirectoryPath + '/test.json';
        console.log('path', path);
        RNFS.readFile(path, 'utf8').then(data => {
          const jsonData = JSON.parse(data);
          console.log("data", data);

          console.log("Post");
          fetch(`http://192.168.0.100:3000/getbalance`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                privateKey: jsonData.privateKey,
            })
          }).then((response) => {
            console.log('ether', this.props.ether);
            console.log('response._bodyInit', response._bodyInit);

            this.props.setEther(response._bodyInit)
          }).catch((error) => {
            console.error(error);
          });
        });
      }
    })

);

const UserProfile = ({
  ether,
  navigation
}) => (
  <Container>
    <Card>
      <CardItem>
        <Body>
          <Wall />
          <Text>{ether}</Text>
        </Body>
      </CardItem>
      <CardItem>
        <Body>
          <Helped />
        </Body>
      </CardItem>
    </Card>
    <FooterComponent navigation = {navigation} activeComponent = 'UserProfile' />
  </Container>
);

export default enhance(UserProfile);
