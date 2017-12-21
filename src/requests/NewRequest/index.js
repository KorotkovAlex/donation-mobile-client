import React, {Component} from 'react';
import {Button, Input, Container, Content, Card, CardItem, Left,Right, Body, Thumbnail,Spinner, Icon, Header, Text  } from 'native-base';
import { connect } from 'react-redux';
import {
  compose,
  defaultProps,
  setPropTypes,
  withState,
  withProps,
  withHandlers,
  lifecycle
} from 'recompose';

import FooterComponent from '../../app/components/FooterComponent.js';

const mapStateToProps = ({requestReducer} ) => ({requestReducer});

const enhance = compose(
  connect(mapStateToProps),

  withState('title', 'setTitle', ''),
  withState('description', 'setDescription', ''),
  withState('description', 'setDescription', ''),
  withState('count', 'setCount', 0),
  withState('countNow', 'setCountNow', 0),

  withHandlers({
    _createRequest: () => ref => {
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
    }
    })
);

// export default class NewRequest extends Component {
//   constructor(props) {
//     super(props);
//   }
//
//   _createRequest() {
//     //readFile
//     //writeFile
//     //readFile(filepath: string, encoding?: string): Promise<string>
//
//
//   // write the file
//
//   }
//   render() {
//     return (
//       <Container>
//         <Content>
//           <Input
//             style={{ alignSelf: "center", width: 300, margin: 2}}
//             placeholder="Title"
//             onChangeText={(password) => this.setState({password})}
//           />
//           <Input
//             style={{ alignSelf: "center", width: 300, margin: 2}}
//             placeholder="Descriptin"
//             onChangeText={(password) => this.setState({password})}
//           />
//           <Input
//             style={{ alignSelf: "center", width: 300, margin: 2}}
//             placeholder="Count"
//             onChangeText={(password) => this.setState({password})}
//           />
//           <Button style={{ alignSelf: "center", width: 300, margin: 10}} onPress={() =>
//             this._createRequest()} block info>
//             <Text>Create</Text>
//           </Button>
//         </Content>
//         <FooterComponent navigation = {this.props.navigation} activeComponent = 'NewRequest' />
//       </Container>
//     );
//   }
// }
const NewRequest = ({
  _createRequest,
  setCount,
  setCountNow,
  setTitle,
  setDescription,
  navigation
}) => (
  <Container>
    <Content>
      <Input
        style={{ alignSelf: "center", width: 300, margin: 2}}
        placeholder="Title"
        onChangeText={(title) => setTitle(title)}
      />
      <Input
        style={{ alignSelf: "center", width: 300, margin: 2}}
        placeholder="Descriptin"
        onChangeText={(description) => setDescription(description)}
      />
      <Input
        style={{ alignSelf: "center", width: 300, margin: 2}}
        placeholder="Count"
        onChangeText={(count) => setCount(count)}
      />
      <Input
        style={{ alignSelf: "center", width: 300, margin: 2}}
        placeholder="Count now"
        onChangeText={(countNow) => setCountNow(countNow)}
      />
      <Button style={{ alignSelf: "center", width: 300, margin: 10}} onPress={() => _createRequest} block info>
        <Text>Create</Text>
      </Button>
    </Content>
    <FooterComponent navigation = {navigation} activeComponent = 'NewRequest' />
  </Container>
);

export default enhance(NewRequest);
