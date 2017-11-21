import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import App from './App';

export default class MainScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{flex: 1}}>
        <Button
          title="Go to Jane's profile"
          onPress={
            ()=>navigate('Profile', { name: 'Jane' })
          }
        />
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{flex: 1,backgroundColor:'skyblue',alignItems: 'center',justifyContent:'flex-start'}}>
          <Text style={{height:100,width:300,backgroundColor: 'powderblue',textAlign:'center',textAlignVertical:'center'}}>Home Screen</Text>
          <Text style={{flex: 1,backgroundColor: 'steelblue',textAlignVertical:'center'}}>Home Screen1</Text>
          <Text style={{flex: 1,backgroundColor: styles.red}}>Home Screen2</Text>
        </View>
      </View>
      );
    }
  }


const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});