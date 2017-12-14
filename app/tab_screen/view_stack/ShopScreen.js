import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import React, { Component } from 'react';
import FlatList from 'react-native/Libraries/Lists/FlatList';
import Shop from '../Shop';
import ShopData from '../../model/ShopData';
import ListItem from '../layout/ShopItem'

export default class ShopScreen extends React.Component {
  constructor(){
    super()
  }

  renderItem = ({item}) => (
    <ListItem itemInfo = {item} />
  );

  render() {
    var data = new ShopData()
    const { navigate } = this.props.navigation;
    return (
      <View>
        <FlatList
          data={data.getData()}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}