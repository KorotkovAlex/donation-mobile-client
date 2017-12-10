import React, {Component} from 'react';
import { Container, Content, Card, CardItem, Left,Right, Body, Thumbnail,Spinner, Icon, Header, Text  } from 'native-base';

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
      <Card>
        <CardItem>
          <Body>
            <Text>
               Example request card
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
