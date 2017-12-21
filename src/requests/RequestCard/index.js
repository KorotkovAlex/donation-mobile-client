import React, {Component} from 'react';
import { Container, Content, Card, CardItem, Left,Right, Body, Thumbnail,Spinner, Icon, Header, Text  } from 'native-base';
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


// const mapDispatchToProps = dispatch => bindActionCreators({ togglePhoto: togglePhotoAction }, dispatch);
const mapStateToProps = ({requestReducer} ) => ({requestReducer});

const enhance = compose(
  connect(mapStateToProps)
);

const RequestCard = ({
  users
}) => (
  <Card>
    <CardItem>
      <Body>
        <Text>

        </Text>
      </Body>
    </CardItem>
    <CardItem>
      <Body>
        <Text>
        </Text>
      </Body>
    </CardItem>
  </Card>
);

export default enhance(RequestCard);
