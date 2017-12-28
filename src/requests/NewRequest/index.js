import React, {Component} from 'react';
import {Button, Input, Container, Content, Card, CardItem, Left,Right, Body, Thumbnail,Spinner, Icon, Header, Text, Item  } from 'native-base';
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

import FooterComponent from '../../app/components/FooterComponent.js';

const mapStateToProps = ({requestReducer, startPageReducers} ) => ({requestReducer, startPageReducers});

const enhance = compose(
  connect(mapStateToProps),

  withState('title', 'setTitle', ''),
  withState('description', 'setDescription', ''),
  withState('count', 'setCount', 0),
  withState('countNow', 'setCountNow', 0),
  withState('password', 'setPassword', 0),

  withHandlers({
    _createRequest: ({ startPageReducers, password, title, description, count, countNow, navigation }) => () => {
      console.log('_createRequest', title, description, count, countNow);
      const privateKey = startPageReducers.startPageReducers.privateKey;
      fetch(`http://192.168.43.15:3000/adduser`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: password,
          from: privateKey,
          title: title,
          description: description,
          count: count,
          countNow: countNow
        })
      }).then((response) => {
        const { navigate } = navigation;
        navigate('Profile');
      }).catch((error) => {
        console.error(error);
      });
    },

  })
);

const NewRequest = ({
  _createRequest,
  setCount,
  setCountNow,
  setTitle,
  setDescription,
  setPassword,
  navigation
}) => (
  <Container>
    <Content>
      <Item style={{ alignSelf: "center", width: 300, margin: 10}}>
        <Input
          style={{ alignSelf: "center", width: 300, margin: 2}}
          placeholder="Title"
          onChangeText={(title) => setTitle(title)}
        />
      </Item>
      <Item style={{ alignSelf: "center", width: 300, margin: 10}}>
        <Input
          style={{ alignSelf: "center", width: 300, margin: 2}}
          placeholder="Descriptin"
          onChangeText={(description) => setDescription(description)}
        />
      </Item>
      <Item style={{ alignSelf: "center", width: 300, margin: 10}}>
        <Input
          style={{ alignSelf: "center", width: 300, margin: 2}}
          placeholder="Count eth"
          onChangeText={(count) => setCount(count)}
        />
      </Item>
      <Item style={{ alignSelf: "center", width: 300, margin: 10}}>
        <Input
          style={{ alignSelf: "center", width: 300, margin: 2}}
          placeholder="Count now eth"
          onChangeText={(countNow) => setCountNow(countNow)}
        />
      </Item>
      <Item style={{ alignSelf: "center", width: 300, margin: 10}}>
        <Input secureTextEntry={true}
          style={{ alignSelf: "center", width: 300, margin: 2}}
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
        />
      </Item>
      <Button style={{ alignSelf: "center", width: 300, margin: 10}} onPress={() => _createRequest()} block info>
        <Text>Create</Text>
      </Button>
    </Content>
    <FooterComponent navigation = {navigation} activeComponent = 'NewRequest' />
  </Container>
);

export default enhance(NewRequest);
