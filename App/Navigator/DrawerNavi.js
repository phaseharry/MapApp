import React from 'react';
import { Platform, Dimensions } from 'react-native'
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import MapView from '../Views/MapView'

import StackNavigator from './StackNavi'
import DrawerContent from './DrawerContent'

const WIDTH = Dimensions.get('window').width

const DrawerNavi = createDrawerNavigator(
  {
    MapScreen: {
      // screen: StackNavigator
      screen: MapView
    },
    SignUp: {
      screen: MapView
    }
  }, {
    drawerWidth: WIDTH* 0.53,
    // contentComponent: DrawerContent,
    // navigationOptions: { drawerLockMode: "locked-closed" }
  }
)

const AppNavi = createAppContainer(DrawerNavi)


export default AppNavi;