import React from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import MainNavigator from './StackNavi'
import DrawerContent from './DrawerContent'

const DrawerNavi = createDrawerNavigator({
  Home: {
    screen: MainNavigator
  }
}, {
  drawerWidth: 150,
  contentComponent: DrawerContent,
  navigationOptions: { drawerLockMode: "locked-closed" }
})

const AppNavi = createAppContainer(DrawerNavi)


export default AppNavi;