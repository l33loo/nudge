import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../app/components/Button/Button';
import TextInput from '../../app/components/TextInput/TextInput';
import {colors} from "../../app/config/styles";
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
 
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

       <GoogleSigninButton
    style={{width: 48, height: 48}}
    size={GoogleSigninButton.Size.Icon}
    color={GoogleSigninButton.Color.Dark}
    onPress={this._signIn.bind(this)}/>

        <TextInput
          onChangeText={(email) => this.setState({email})}
          value={this.state.email} 
          text={"Email"} 
          keyboardType={'email-address'} 
          keyboardAppearance={'dark'}
        />
        <TextInput 
          onChangeText={(password) => this.setState({password})}
          value={this.state.password} 
          text={"Password"} 
        />
        <Button 
          text = {
            <Text 
              style={{color: colors.textColor, textAlign: 'center'}}
            > 
              Sign in 
            </Text>
          }
          onPress= {
            // handleSumbit 
            () => navigate('Home')
          }
        />
        <Text
          onPress= { () => navigate('Register') }>
          Don't have an account? Register
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

// GoogleSignin.configure({
//   iosClientId: 
// })
// .then(() => {
//   // you can now call currentUserAsync()
// });


//support continuous login
//send token along with fetch
//express jwt