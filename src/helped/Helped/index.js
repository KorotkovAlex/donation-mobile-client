import React, {Component} from 'react';
import FooterComponent from '../../app/FooterComponent.js'
import { Container, Content, Card, CardItem, Left,Right, Body, Thumbnail,Spinner, Icon, Header, Text  } from 'native-base';

export default class Helped extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Content>
          <Text>Helped</Text>
        </Content>
        <FooterComponent />
      </Container>
    );
  }
}
