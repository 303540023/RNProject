import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import React, { Component } from 'react';
import Home from '../Home';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's Main"
        onPress={() =>
          navigate('Main', { name: 'Main' })
        }
      />
    );
  }
}