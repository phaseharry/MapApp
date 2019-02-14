/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

// import MainNavigator from './App/Navigator/StackNavi'
import DrawerNavi from './App/Navigator/DrawerNavi'
import MenuBtn from './App/Components/MenuBtn'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
// <Props>
export default class App extends Component{
  render() {
    return (
      <DrawerNavi/>
    );
  }
}

