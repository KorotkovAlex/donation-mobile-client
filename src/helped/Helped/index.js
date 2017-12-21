import React, {Component} from 'react';
import FooterComponent from '../../app/components/FooterComponent.js'
import { Container, View, Content, Card, CardItem, Left,Right, Body, Thumbnail,Spinner, Icon, Header, Text  } from 'native-base';
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

const Helped = () => (
  <View>
    <Text>Helped</Text>
  </View>
);

export default enhance(Helped);
