import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import Map from '../Components/Map';
import MenuBtn from '../Components/MenuBtn'

export default class MapView extends Component{
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <MenuBtn navigation={navigation}/>
        <Map/>
      </View>
    );
  }}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
