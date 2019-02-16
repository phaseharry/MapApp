/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase'

import store from './App/Store';
import DrawerNavi from './App/Navigator/DrawerNavi';
import config from './Firebase'

firebase.initializeApp(config)

export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <DrawerNavi/>
      </Provider>
    );
  }
}

