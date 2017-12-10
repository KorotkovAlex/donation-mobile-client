import React, {Component} from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { NativeRouter, Link, DeepLinking } from 'react-router-native';


export default class FooterComponent extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log(this.props.activeComponent);
    const { navigate } = this.props.navigation;
    const activeComponent = this.props.activeComponent;

    if( activeComponent === 'Requests') {
      return (
        <Footer>
          <FooterTab>
            <Button onPress={() => navigate('Requests')} active>
              <Text>Requests</Text>
            </Button>
            <Button onPress={() => navigate('UserProfile')}>
              <Text>Profile</Text>
            </Button>
            <Button onPress={() => navigate('NewRequest')}>
              <Text>Create Request</Text>
            </Button>
          </FooterTab>
        </Footer>
      )
    };

    if (activeComponent === 'UserProfile') {
      return (
        <Footer>
          <FooterTab>
            <Button onPress={() => navigate('Requests')}>
              <Text>Requests</Text>
            </Button>
            <Button onPress={() => navigate('UserProfile')} active>
              <Text>Profile</Text>
            </Button>
            <Button onPress={() => navigate('NewRequest')}>
              <Text>Create Request</Text>
            </Button>
          </FooterTab>
        </Footer>
      )
    };

    if( activeComponent === 'NewRequest') {
      return (
        <Footer>
          <FooterTab>
            <Button onPress={() => navigate('Requests')}>
              <Text>Requests</Text>
            </Button>
            <Button onPress={() => navigate('UserProfile')}>
              <Text>Profile</Text>
            </Button>
            <Button onPress={() => navigate('NewRequest')} active>
              <Text>Create Request</Text>
            </Button>
          </FooterTab>
        </Footer>
      )
    };
    
    return (
      <Footer>
        <FooterTab>
          <Button onPress={() => navigate('Requests')}>
            <Text>Requests</Text>
          </Button>
          <Button onPress={() => navigate('UserProfile')}>
            <Text>Profile</Text>
          </Button>
          <Button onPress={() => navigate('NewRequest')}>
            <Text>{activeComponent}</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}
