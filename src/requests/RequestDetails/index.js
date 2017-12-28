import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Left,Right, Body, Thumbnail,Spinner, Icon, Header, Text, Button, Input, Item, Label} from 'native-base';
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
// import RequestCard from '../RequestCard'
import FooterComponent from '../../app/components/FooterComponent'

const mapStateToProps = ({requestReducer, startPageReducers} ) => ({requestReducer, startPageReducers});

const enhance = compose(
  connect(mapStateToProps),

  withState('count', 'setCount', ''),
  withState('password', 'setPassword', ''),

  withHandlers({
    _send: ({ password, count, setUsers, setRefrehing, startPageReducers, requestReducer, navigation }) => () => {
      const recipient = requestReducer.requestReducer.recipient;
      const privateKey = startPageReducers.startPageReducers.privateKey;
      fetch(`http://192.168.43.15:3000/addSender`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            to: recipient[0],
            from: privateKey,
            count: count*1000000000000000000,
            password: password
        })
      }).then((response) => {
        const { navigate } = navigation;
        navigate('Profile');
      })
    }
  }),

  withProps(({ setPassword, requestReducer, _send, setCount }) => {
    console.log('requestReducer', requestReducer.requestReducer.recipient);
    const recipient = requestReducer.requestReducer.recipient;

    return {
      details: (
        <Card>
          <Text style={{ alignSelf: "center", marginTop: 2}}>
            Title
          </Text>
          <Text>
            {recipient[1]}
          </Text>
          <Text> Count now {recipient[4]} </Text>
          <Text> Count need {recipient[3]} </Text>
          <Text  style={{ alignSelf: "center", marginTop: 2}}>
            Descriptin
          </Text>
          <Text>{recipient[2]}</Text>
          <Item style={{ alignSelf: "center", width: 300, margin: 2}}>
            <Input
              style={{ alignSelf: "center", width: 300, margin: 2}}
              placeholder='Count'
              onChangeText={(count) => setCount(count)}
            />
          </Item>
          <Item style={{ alignSelf: "center", width: 300, margin: 10}}>
            <Input secureTextEntry={true}
              style={{ alignSelf: "center", width: 300, margin: 2}}
              placeholder="Password"
              onChangeText={(password) => setPassword(password)}
            />
          </Item>
          <Button block info style={{ alignSelf: "center", margin: 10}} onPress={() => _send()}>
            <Text>Send</Text>
          </Button>
        </Card>
      )
    }
  })
);

const RequestDetails = ({
  navigation,
  details
}) => (
  <Container>
    <Content style={{flex: 1}}>
      {details}
    </Content>
    <FooterComponent navigation = {navigation} activeComponent = 'Requests' />
  </Container>
);

export default enhance(RequestDetails);
