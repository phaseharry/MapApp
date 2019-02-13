import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken('pk.eyJ1IjoicGhhc2VoYXJyeSIsImEiOiJjanMzanNkYWQyZ2V5NDNvZDJvdjVzcTZmIn0.662Mz_ounkBRkPUDwEzw7w');

export default class App extends Component{
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    console.log('params ', params);
    const onPress = navigation.openDrawer();
    return {
      headerLeft: <Button onPress={onPress} title='Open Drawer'/>
    }
  }

  renderAnnotations () {
    return (
      <Mapbox.PointAnnotation
        key='pointAnnotation'
        id='pointAnnotation'
        coordinate={[11.254, 43.772]}>

        <View style={styles.annotationContainer}>
          <View style={styles.annotationFill} />
        </View>
        <Mapbox.Callout title='Look! An annotation!' />
      </Mapbox.PointAnnotation>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Mapbox.MapView
            styleURL={Mapbox.StyleURL.Dark}
            zoomLevel={15}
            centerCoordinate={[11.256, 43.770]}
            style={styles.container}>
            {this.renderAnnotations()}
        </Mapbox.MapView>
      </View>
    );
  }}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  annotationContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  annotationFill: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'orange',
    transform: [{ scale: 0.6 }],
  }
});