import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux'

import Map from '../Components/Map';
import MenuBtn from '../Components/MenuBtn'

import { initialFetch } from '../Store/reducers/restaurants'

class MapView extends Component{
  static navigationOptions = {
    header: null
  };
  componentDidMount(){
    return this.props.loadRestaurants()
    .catch(err => console.error(err))
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <MenuBtn navigation={navigation}/>
        <Map navigation={navigation}/>
      </View>
    );
  }}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

const mapDispatchToProps = dispatch => {
  return {
    loadRestaurants: () => dispatch(initialFetch())
  }
}

export default connect(null, mapDispatchToProps)(MapView)
