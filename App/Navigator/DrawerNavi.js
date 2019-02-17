import React from 'react';
import { Platform, Dimensions } from 'react-native'
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

// import MapView from '../Views/MapView'
import Login from '../Views/Login'
import SignUp from '../Views/SignUp'
import MainNavi from './MainNavi'

const WIDTH = Dimensions.get('window').width

const DrawerNavi = createDrawerNavigator(
  {
    Map: {
      screen: MainNavi
    },
    SignUp: {
      screen: SignUp
    },
    Login: {
      screen: Login
    }
  }, {
    drawerWidth: WIDTH* 0.53,
    // contentComponent: DrawerContent,
    // navigationOptions: { drawerLockMode: "locked-closed" }
  }
)

const AppNavi = createAppContainer(DrawerNavi)


export default AppNavi;