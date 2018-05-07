import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../app/components/Button/Button';
import TextInput from '../../app/components/TextInput/TextInput';


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      emergName: '',
      emergEmail: ''
    }
  }
  static navigationOptions = {
    title: 'Register',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput onChangeText={(firstName) => this.setState({firstName})}
        value={this.state.firstName} text={"First Name"}/>
        <TextInput onChangeText={(lastName) => this.setState({lastName})}
        value={this.state.lastName} text={"Last Name"} />
        <TextInput onChangeText={(email) => this.setState({email})}
        value={this.state.email} text={"Email"} />
        <TextInput onChangeText={(password) => this.setState({password})}
        value={this.state.password} text={"Password"} />
        <TextInput onChangeText={(confirmPassword) => this.setState({confirmPassword})}
        value={this.state.confirmPassword} text={"Confirm Password"} />
        <TextInput onChangeText={(emergName) => this.setState({emergName})}
        value={this.state.emergName} text={"Emergency Contact Name"}/>  
        <TextInput onChangeText={(emergEmail) => this.setState({emergEmail})}
        value={this.state.emergEmail} text={"Emergency Contact Email"}/>  
        <Button text = {
          // handleSubmit
        <Text style={{color:'white', textAlign: 'center'}}> Register </Text>}/>
    <Text
          onPress= {
             () => navigate('SignIn') 
             }>Already have an account? Sign In
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

// fetch('https://mywebsite.com/endpoint/', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     firstParam: 'this.state.email',
//     secondParam: 'this.state.password',
//   }),
// });