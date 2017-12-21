import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Left,Right, Body, Thumbnail,Spinner, Icon, Header, Text  } from 'native-base';

import RequestCard from '../RequestCard'
import FooterComponent from '../../app/components/FooterComponent'

// const styles = StyleSheet.create({
//   button: {
//     width: 100,
//     height: 30,
//     padding: 10,
//     backgroundColor: 'lightgray',
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 3
//   }
// });

export default class Requests extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Content>
          <RequestCard />
        </Content>
        <FooterComponent navigation = {this.props.navigation} activeComponent = 'Requests' />
      </Container>
    );
  }
}
