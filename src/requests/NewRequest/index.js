import React, {Component} from 'react';
import { Container, Content, Card, CardItem, Left,Right, Body, Thumbnail,Spinner, Icon, Header, Text  } from 'native-base';

import FooterComponent from '../../app/FooterComponent.js'

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

export default class RequestCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Content>
          <Text>
             Create request
          </Text>
        </Content>
        <FooterComponent />
      </Container>
    );
  }
}
