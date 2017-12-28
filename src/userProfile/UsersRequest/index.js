import React, {Component} from 'react';
import { Container, Content, Card, CardItem, Left,Right, Body, Thumbnail,Spinner, Icon, Header, Text, List, ListItem, Button } from 'native-base';
import { RefreshControl } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  compose,
  defaultProps,
  setPropTypes,
  withState,
  withProps,
  withHandlers,
  lifecycle
} from 'recompose';

import { addRecepients as addRecepientsAction } from '../../requests/request.action';
const mapDispatchToProps = dispatch => bindActionCreators({ addRecepients: addRecepientsAction }, dispatch);

const mapStateToProps = ({requestReducer, startPageReducers} ) => ({requestReducer, startPageReducers});

const enhance = compose(
  connect(mapStateToProps,mapDispatchToProps),

  withState('usersRequest', 'setUsersRequest', []),
  withState('refreshing', 'setRefrehing', false),


  lifecycle({
    componentWillMount() {
      const privateKey = this.props.startPageReducers.startPageReducers.privateKey;
      fetch(`http://192.168.43.15:3000/getusersbykey`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          privateKey: privateKey
        })
      }).then((response) => {
        console.log('response._bodyInit', response);
        const jsonData = JSON.parse(response._bodyInit);
        this.props.setUsersRequest(jsonData);
      }).catch((error) => {
        console.error(error);
      });
    }
  }),

  withHandlers({
    _view: ({ navigation, addRecepients }) => recepient => {
      const newRecipient = {
        privateKeyRecipient: recepient[0],
        title: recepient[1],
        description: recepient[0],
        countNeed: recepient[3],
        countNow: recepient[4]
      }
      addRecepients(recepient)
      const { navigate } = navigation;
      navigate('RequestDetails');
    }
  }),

  withProps(({ usersRequest, _view, navigation }) => {
    console.log('usersRequest', usersRequest);
    return {
      people: usersRequest.map((data, index) => {
        return (
          <Card key={index}>
            <CardItem>
              <Body>
                <Text
                  style={{ paddingTop: 2 }}
                >
                  Title: {data[1]}
                </Text>
                <Text
                  style={{ paddingTop: 2}}
                >
                  Count need:{data[3]/1000000000000000000}eth
                </Text>
                <Text
                  style={{ paddingTop: 2}}
                >
                  Count now: {data[4]/1000000000000000000} eth
                </Text>
                <Text
                  style={{ paddingTop: 2 }}
                >
                  Descriptin: {data[2]}
                </Text>
                <Button style={{ alignSelf: "center", margin: 10}} onPress={() => _view(data)} block info>
                  <Text>View</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        )
      })
    }
  })
);

const RequestCard = ({
  users,
  people,
  _onRefresh,
  refreshing
}) => (
  <Container>
      {people}
  </Container>
);

export default enhance(RequestCard);
