import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Left,Right, Body, Thumbnail,Spinner, Icon, Header, Text  } from 'native-base';
import { connect } from 'react-redux';

import RequestCard from '../RequestCard'
import FooterComponent from '../../app/components/FooterComponent'
import {
  compose,
  defaultProps,
  setPropTypes,
  withState,
  withProps,
  withHandlers,
  lifecycle
} from 'recompose';
const mapStateToProps = ({requestReducer} ) => ({requestReducer});

const enhance = compose(
  connect(mapStateToProps),

  withState('users', 'setUsers', []),

  lifecycle({
    componentWillMount() {
      fetch(`http://192.168.43.15:3000/getusers`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }).then((response) => {
        this.props.setUsers(response._bodyInit);
      }).catch((error) => {
        console.error(error);
      });
    }
  })
);

const Requests = ({
  users,
  navigation
}) => (
  <Container>
      <RequestCard navigation = {navigation} />
    <FooterComponent navigation = {navigation} activeComponent = 'Requests' />
  </Container>
);

export default enhance(Requests);
