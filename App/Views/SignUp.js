import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements'

import MenuBtn from '../Components/MenuBtn';

class Login extends React.Component{
  constructor(){
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event){

  }
  render(){
    const { onSubmit } = this;
    const { navigation } = this.props
    const { email, password, firstName, lastName } = this.state
    return (
      <View style={styles.container}>
        <MenuBtn navigation={navigation}/>
        <Input placeholder='first name'  onChangeText={(firstName) => this.setState({ firstName })} value={firstName} />
        <Input placeholder='last name' type='password' onChangeText={(lastName) => this.setState({ lastName })} value={lastName} />
        <Input placeholder='email'  onChangeText={(email) => this.setState({ email })} value={email} />
        <Input placeholder='password' type='password' onChangeText={(password) => this.setState({ password })} value={password} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'

  }
})

export default Login;