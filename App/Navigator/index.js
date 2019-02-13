import { createStackNavigator, createTabNavigator, createAppContainer } from 'react-navigation'

import MapView from '../Views/MapView'

const appNavigator = createStackNavigator({
  MapView
}, {
  initialRouteName: 'MapView'
})

const mainNavigator = createAppContainer(appNavigator)

export default mainNavigator