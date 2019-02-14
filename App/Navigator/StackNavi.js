import { createStackNavigator } from 'react-navigation'

import MapView from '../Views/MapView'

const AppNavigator = createStackNavigator({
  MapView
}, {
  initialRouteName: 'MapView'
})

export default AppNavigator