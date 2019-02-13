import { createStackNavigator, createTabNavigator, createAppContainer } from 'react-navigation'

import MapView from '../Views/MapView'

const AppNavigator = createStackNavigator({
  MapView
}, {
  initialRouteName: 'MapView'
})

const MainNavigator = createAppContainer(AppNavigator)

export default MainNavigator