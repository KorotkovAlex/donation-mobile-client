import React, {Component} from 'react';
import {Button, Input, Container, Content, Card, CardItem, Left,Right, Body, Thumbnail,Spinner, Icon, Header, Text  } from 'native-base';

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

export default class NewRequest extends Component {
  constructor(props) {
    super(props);
  }

  _createRequest() {
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
          <Input
            style={{ alignSelf: "center", width: 300, margin: 2}}
            placeholder="Title"
            onChangeText={(password) => this.setState({password})}
          />
          <Input
            style={{ alignSelf: "center", width: 300, margin: 2}}
            placeholder="Descriptin"
            onChangeText={(password) => this.setState({password})}
          />
          <Input
            style={{ alignSelf: "center", width: 300, margin: 2}}
            placeholder="Count"
            onChangeText={(password) => this.setState({password})}
          />
          <Button style={{ alignSelf: "center", width: 300, margin: 10}} onPress={() =>
            this._createRequest()} block info>
            <Text>Create</Text>
          </Button>
        </Content>
        <FooterComponent navigation = {this.props.navigation} activeComponent = 'NewRequest' />
      </Container>
    );
  }
}
