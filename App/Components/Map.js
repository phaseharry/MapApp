import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken('pk.eyJ1IjoicGhhc2VoYXJyeSIsImEiOiJjanMzanNkYWQyZ2V5NDNvZDJvdjVzcTZmIn0.662Mz_ounkBRkPUDwEzw7w');

export default class Map extends Component{
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
        <Mapbox.MapView
            styleURL={Mapbox.StyleURL.Light}
            zoomLevel={11}
            centerCoordinate={[-73.9712, 40.7831]}
            style={styles.container}>
            {/* {this.renderAnnotations()} */}
        </Mapbox.MapView>
    );
  }}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: -1
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