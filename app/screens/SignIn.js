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
      <View>
        <TextInput text={" Email"}/>
        <TextInput text={" Password"} />
        
    <Button text={"Login"}/>
    <Text
          onPress= { () => navigate('Register') }>Navigate to Register
        </Text>
    </View>
    )
  }
}