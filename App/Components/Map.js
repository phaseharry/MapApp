import React, { Fragment } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { connect } from 'react-redux';
import Mapbox from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken('api key');

class Map extends React.Component{
renderAnnotations () {
  const { restaurants } = this.props;
  return (
    <Fragment>
    {
      restaurants.map(obj => {
        const { restaurant } = obj;
        const { id, location, name, photos_url } = restaurant
        return (
          <Mapbox.PointAnnotation
            key={id}
            id={id}
            coordinate={[+location.longitude, +location.latitude ]}
          >
            <View style={styles.annotationContainer}>
              <View style={styles.annotationFill} />
            </View>
            <Mapbox.Callout title={name} />
          </Mapbox.PointAnnotation>
        )
      })
    }
    </Fragment> 
  )
}

render() {
  return (
      <Mapbox.MapView
          styleURL={Mapbox.StyleURL.Light}
          zoomLevel={13}
          centerCoordinate={[-73.9712, 40.7831]}
          style={styles.container}>
          {this.renderAnnotations()}
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

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

export default connect(mapStateToProps, null)(Map)