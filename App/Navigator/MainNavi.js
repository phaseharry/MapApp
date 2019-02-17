import { createStackNavigator } from 'react-navigation';

import MapView from '../Views/MapView';
import Restaurant from '../Views/Restaurant';

const MainNavi = createStackNavigator({
  MapView,
  Restaurant
}, {
  initialRouteName: 'MapView',
});

export default MainNavi;