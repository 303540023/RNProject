import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import React, { Component } from 'react';
import Shop from '../Shop';

export default class ShopScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's Main"
        onPress={() =>
          navigate('Main')
        }
      />
    );
  }
}