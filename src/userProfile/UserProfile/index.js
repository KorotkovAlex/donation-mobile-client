import React, {Component} from 'react';
import { Button, TouchableOpacity, View } from 'react-native'
import { Container, Header, Content, List, ListItem, Text } from 'native-base';

// import FooterComponent from '../../app/FooterComponent.js'

export default class UserProfile extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{flex: 1}}>
        <View style={{height: 50, backgroundColor: 'powderblue'}}>
          <Text style={{textAlign: 'center', textAlignVertical: 'center'}}>Avatar</Text>
        </View>
        <TouchableOpacity onPress={() => navigate('Helped')}>
          <View style={{height: 50, backgroundColor: 'skyblue'}}>
              <Text style={{textAlign: 'center', textAlignVertical: 'center'}}> Helped </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('Wall')}>
          <View style={{height: 50, backgroundColor: 'skyblue'}}>
              <Text style={{textAlign: 'center', textAlignVertical: 'center'}}> Wall </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('NewRequest')}>
          <View style={{height: 50, backgroundColor: 'skyblue'}}>
              <Text style={{textAlign: 'center', textAlignVertical: 'center' }}> New request </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('Requests')}>
          <View style={{height: 50, backgroundColor: 'skyblue'}}>
              <Text style={{textAlign: 'center', textAlignVertical: 'center' }}> requests </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
