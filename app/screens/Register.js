import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../app/components/Button/Button';
import TextInput from '../../app/components/TextInput/TextInput';


export default class Register extends Component {
  static navigationOptions = {
    title: 'Register',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput text={" First Name"}/>
        <TextInput text={" Last Name"} />
        <TextInput text={" Email"} />
        <TextInput text={" Password"} />
        <TextInput text={" Emergency Contact"}/>
        <Button text = {<Text style={{color:'white', textAlign: 'center'}}> Register </Text>}/>
    <Text
          onPress= { () => navigate('SignIn') }>Already have an account? Sign In
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