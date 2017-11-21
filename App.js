/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

const onButtonPress = () => {
  //color="skyblue"
};

export default class Main extends Component {
  render() {
    return (
      <View>
        <Text>Hello world!</Text>
        <Button
          style={{widht:50,height:50}}
          onPress={onButtonPress}
          title="Press Purple"
          color="#841584"
          accessibilityLabel="Learn more about purple"
        />
        <Button
          style={{widht:50,height:50}}
          onPress={onButtonPress}
          title="Press Purple1"
          color="#841584"
          accessibilityLabel="Learn more about purple"
        />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />


        <View style={{height:200, flexDirection:'column'}}>
            <View style={{flex: 1, backgroundColor: 'powderblue'}} />
            <View style={{flex: 2, backgroundColor: 'skyblue'}} />
            <View style={{flex: 3, backgroundColor: 'steelblue'}} />
        </View>

        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          }}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>


      </View>
      );
    }
  }
  