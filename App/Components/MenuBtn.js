import React from 'react'
import { StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class MenuBtn extends React.Component{

  render(){
    const { navigation } = this.props
    return (
      <Ionicons 
        name='md-menu'
        color='red'
        size={30}
        style={styles.menuBtn}
        onPress={() => navigation.toggleDrawer()}
      />
    )
  }
}

const styles = StyleSheet.create({
  menuBtn: {
    zIndex: 1,
    position: 'absolute',
    top: 40,
    left: 20
  }
})
