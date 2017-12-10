import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';
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

console.log();
const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  button: {
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      error: ''
    };
  }

  _onPressButton(params) {
      console.log(params);
      console.log(this.state);
      // const fileContents = await FileSystem.readFile('my-directory/test.txt');
      // console.log(`read from file: ${fileContents}`);
      const { navigate } = this.props.navigation;
      navigate('UserProfile');
      // fetch(`http://192.168.0.103:3000/user`, {
      //   method: 'GET',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //   }
      // }).then((response) => {
      //   console.log(response._bodyInit);
      //   console.log(response.headers._bodyInit);
      //   navigate('UserProfile');
      // }).catch((error) => {
      //   console.error(error);
      // });
      console.log("Post");
      // fetch(`http://192.168.43.15:3000/user`, {
      //   method: 'POST',
      //   body: JSON.stringify({
      //       login: this.state.login,
      //       password: this.state.password,
      //   }),
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //   }
      // }).then((response) => {
      //   console.log(response._bodyInit);
      //   if (response === {}) {
      //     var error = 'login is invalid';
      //     this.setState({error});
      //   } else {
      //     navigate('UserProfile');
      //   }
      // }).catch((error) => {
      //   console.error(error);
      // });
  }

  _onPressButton2() {
    console.log(this.state);
    const { navigate } = this.props.navigation;
    // fetch(`http://192.168.0.103:3000/user`, {
    //   method: 'GET',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   }
    // }).then((response) => {
    //   console.log(response._bodyInit);
    //   console.log(response.headers._bodyInit);
    //   navigate('UserProfile');
    // }).catch((error) => {
    //   console.error(error);
    // });
    console.log("Post");
    fetch(`http://192.168.43.15:3000/signup`, {
      method: 'POST',
      body: JSON.stringify({
          login: this.state.login,
          password: this.state.password,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }.then((response) => {
        if (response === {}) {
          var error = 'login is invalid';
          this.setState({error});
        } else {
          RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
            .then((success) => {
              console.log('FILE WRITTEN!');
            })
            .catch((err) => {
              console.log(err.message);
            });
          navigate('UserProfile');
        }
      })
    })
  }

  _readDer() {
    //readFile
    //writeFile
    //readFile(filepath: string, encoding?: string): Promise<string>
    RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
      .then((result) => {
        console.log('GOT RESULT', result);

        // stat the first file
        return Promise.all([RNFS.stat(result[0].path), result[0].path]);
      })
      .then((statResult) => {
        if (statResult[0].isFile()) {
          // if we have a file, read it
          return RNFS.readFile(statResult[1], 'utf8');
        }

        return 'no file';
      })
      .then((contents) => {
        // log the file contents
        console.log(contents);
      })
      .catch((err) => {
        console.log(err.message, err.code);
      });
      var path = RNFS.DocumentDirectoryPath + '/test.txt';

// write the file

  }

  render() {
    return (
      <Container>
        <Content>
          <Item style={{ alignSelf: "center", width: 300, marginTop: 10}}>
            <Input
              placeholder="Login"
              onChangeText={(login) => this.setState({login})}
            />
          </Item>
          <Item style={{ alignSelf: "center", width: 300, margin: 10}}>
            <Input
              style={{ alignSelf: "center", width: 300, margin: 2}}
              placeholder="Password"
              onChangeText={(password) => this.setState({password})}
            />
          </Item>
          <View>
            <Button style={{ alignSelf: "center", width: 300, margin: 10}} onPress={() =>
              this._onPressButton("navigate")} block info>
              <Text>Login</Text>
            </Button>
          </View>
          <View>
            <Button style={{ alignSelf: "center", width: 300, margin: 10}} onPress={() =>
              this._onPressButton2()} block info>
              <Text>Logup</Text>
            </Button>
          </View>
          <View>
            <Button style={{ alignSelf: "center", width: 300, margin: 10}} onPress={() =>
              this._readDer()} block info>
              <Text>Info</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
