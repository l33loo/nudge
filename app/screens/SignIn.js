import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../app/components/Button/Button';
import TextInput from '../../app/components/TextInput/TextInput';


export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  static navigationOptions = {
    title: 'Sign In',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = {styles.container}>
        <TextInput onChangeText={(email) => this.setState({email})}
        value={this.state.email} text={"Email"}/>
        <TextInput onChangeText={(password) => this.setState({password})}
        value={this.state.password}text={"Password"} />
    <Button text = {
    <Text style={{color:'white', textAlign: 'center'}}> 
      Sign in 
      </Text>}
      onPress= {
        // handleSumbit 
        () => navigate('Home')
      }

      />
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

// handleSubmit() {
//   const { userForm, user } = this.props;

//   if (userForm.valid) { // userForm.$form.valid in V1
//     // submit user here
//   } else {
//     // show errors
//   }
// }

fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'this.state.email',
    secondParam: 'this.state.password',
  }),
});