import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';
import { connect } from 'react-redux';
import {
  NativeRouter,
  Link,
  DeepLinking
} from 'react-router-native';
import {
  Button,
  Container,
  Content,
  Card,
  CardItem,
  Left,
  Right,
  Center,
  Body,
  Thumbnail,
  Spinner,
  Icon,
  Header,
  Text,
  Form,
  Item,
  Label,
  Input
} from 'native-base';
import RNFS from 'react-native-fs';

import {
  compose,
  defaultProps,
  setPropTypes,
  withState,
  withProps,
  withHandlers,
  lifecycle
} from 'recompose';
// Sconst mapStateToProps = ({reducer} ) => ({reducer});

const mapStateToProps = ({ requestReducer, reducer } ) => ({ requestReducer, reducer });

const enhance = compose(
  connect(mapStateToProps),


  withState('login', 'setLogin', ''),
  withState('password', 'setPassword', ''),

  withHandlers({
    _onPressButton: ({ login, password, navigation }) => () => {
      const { navigate } = navigation;
      var path = RNFS.DocumentDirectoryPath + '/test.json';
      RNFS.readFile(path, 'utf8').then(data => {
        const jsonData = JSON.parse(data);
        if(password === jsonData.password ) {
          console.log("Post");
          fetch(`http://192.168.0.100:3000/login`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                privateKey: jsonData.privateKey,
                password: jsonData.password,
            })
          }).then((response) => {
            if (response._bodyInit) {
              navigate('UserProfile');
            } else {
              console.error(error);
            }
          }).catch((error) => {
            console.error(error);
          });
        }
        console.log('jsonData', );
      });
    },

    _onPressSignup: ({ login, password, navigation }) => () => {
      const { navigate } = navigation;
      fetch(`http://192.168.0.100:3000/signup`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            password: password,
        })
      }).then((response) => {
        console.log('response.body', response._bodyInit);
      }).catch((error) => {
        console.error(error);
      });
    },

    _testButton: () => () => {
      var path = RNFS.DocumentDirectoryPath + '/test.json';
      RNFS.writeFile(path, '{ "password": "1234", "privateKey": "0x8a84331220Db20A067D571EE950F881F98b7BD43"}', 'utf8')
        .then((success) => {
          console.log('FILE WRITTEN!', RNFS.DocumentDirectoryPath + '/test.json');
        })
        .catch((err) => {
          console.log(err.message);
        });

      RNFS.readFile(path, 'utf8').then(data => {
        const jsonData = JSON.parse(data);
        console.log('jsonData', jsonData.password);
      });
      // RNFS.readFile(path+'1', 'utf8').then(data => {
      //   console.log(data);
      // }).catch(error => {
      //   console.log('error');
      // });
    }
  }),

  // withProps(({ _onPressSignup }) => {
  //   // return {
  //   //   signup: <Text>s</Text>
  //   // }
  //   const signup = null;
  //   var path = RNFS.DocumentDirectoryPath + '/test.json';
  //
  //   return RNFS.readFile(path, 'utf8').then(data => {
  //     return   {signup: (
  //         <View>
  //           <Button style={{ alignSelf: "center", width: 300, margin: 10}} onPress={() => _onPressSignup()} block info>
  //             <Text>Signup</Text>
  //           </Button>
  //         </View>
  //       )}
  //     // const jsonData = JSON.parse(data);
  //     // console.log('jsonData', jsonData.password);
  //   }).catch(error => {
  //     return {
  //       signup: (
  //         <View><Text>Signup</Text></View>
  //       )
  //     }
  //   })
  //
  // })
);

const StartPage = ({
  _testButton,
  _onPressSignup,
  _onPressButton,
  setPassword,
  signup
}) => (
  <Container>
    <Content>
      <Item style={{ alignSelf: "center", width: 300, margin: 10}}>
        <Input
          style={{ alignSelf: "center", width: 300, margin: 2}}
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
        />
      </Item>
      <View>
        <Button style={{ alignSelf: "center", width: 300, margin: 10}} onPress={() => _onPressButton()} block info>
          <Text>Login</Text>
        </Button>
      </View>
      {signup}
      <View>
        <Button style={{ alignSelf: "center", width: 300, margin: 10}} onPress={() => _testButton()} block info>
          <Text>Test button</Text>
        </Button>
      </View>
    </Content>
  </Container>
);

export default enhance(StartPage);

//
//
// console.log();
//
// class StartPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       login: '',
//       password: '',
//       error: ''
//     };
//   }
//
//
//
//
//
//
//   render() {
//     console.log('props',this.props);
//     console.log('state',this.state);
//     const selectedKeyIndex = this.props.reducer;
//     console.log('selectedKeyIndex', selectedKeyIndex);
//
//     return (
//
//     );
//   }
// }


// export default connect(mapStateToProps)(StartPage);
