import React, {Component} from 'react';
import { TouchableOpacity, View } from 'react-native'
import { Card, CardItem, Body, Container, Header, Content, List, ListItem, Text, Footer, FooterTab, Icon, Button } from 'native-base';
import FooterComponent from '../../app/FooterComponent';
import Helped from '../../helped/Helped'
import Wall from '../../wall/Wall';
// import FooterComponent from '../../app/FooterComponent.js'

export default class UserProfile extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <Card>
          <CardItem>
            <Body>
              <Wall />
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Helped />
            </Body>
          </CardItem>
        </Card>
        <FooterComponent navigation = {this.props.navigation} activeComponent = 'UserProfile' />
      </Container>
    );
  }
}
