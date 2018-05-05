import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../app/components/Button/Button';
import TextInput from '../../app/components/TextInput/TextInput';


export default class SignIn extends Component {
  static navigationOptions = {
    title: 'Sign In',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = {styles.container}>
        <TextInput text={" Email"}/>
        <TextInput text={" Password"} />
        
    <Button text = {<Text style={{color:'white', textAlign: 'center'}}> Sign in </Text>}/>
    <Text
          onPress= { () => navigate('Register') }>Don't have an account? Register
        </Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }
});