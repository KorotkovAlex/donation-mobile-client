import React, {Component} from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { NativeRouter, Link, DeepLinking } from 'react-router-native'

export default class FooterComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Footer>
        <FooterTab>
          <Button vertical>
            <Icon name='wifi' />
            <Link to='/requests'>
              <Text>List</Text>
            </Link>
          </Button>
          <Button vertical>
            <Icon name="wine" />
            <Link to='/userProfile'>
              <Text>Profile</Text>
            </Link>
          </Button>
          <Button vertical active>
            <Icon active name="list" />
            <Link to='/newRequest'>
              <Text>Request</Text>
            </Link>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
