import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, Text, View, Image } from 'react-native';
import Button from '../../app/components/Button/Button';
import TextInput from '../../app/components/TextInput/TextInput';
import style from "../../app/config/styles";
import {colors} from "../../app/config/styles";
import Expo from 'expo';
import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class Enter extends Component {
  constructor(props){
    super(props);
      this.state = {
        loggedIn: false,
        id: ''
      }
  }
  static navigationOptions = {
    title: 'Profile',
   
  }
  

  async signIn() {
   this.signInWithGoogleAsync()
    .then(async idToken => {
       const id = await this.signInWithApi(idToken)
      this.setIdFromServer(id)

    })
    .then(() => this.props.navigation.navigate('Home'))
  }


  async signInWithApi(idToken) {
    const data = JSON.stringify({firstParam: idToken})
    return fetch('https://nudge-server.herokuapp.com/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain */*',
            'Content-Type': 'application/json',
          },
          body: data
        })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log('response json: ', responseJson)
          return responseJson
        })
        .catch((error) => {
          console.log('ERROR:', error)
          // throw error;
          
        })
  }
        
  async signInWithGoogleAsync() {
    try {
      const result = await Expo.Google.logInAsync({
        // androidClientId: YOUR_CLIENT_ID_HERE,
        iosClientId: '241417537066-pfo2ii59t8aqhihg1ikdqq77hndokfmd.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
      if (result.type === 'success') {
        return result.idToken;
      } else {
        return {cancelled: true};
      }
    } catch(e) {
      return {error: true};
    }
  }

  async setIdFromServer(id) {
    try {
      await AsyncStorage.setItem('id', id);
      this.setState({'id': id})
       console.log('ID', id)
    } catch (error) {
      console.log(error)
      throw error;
    }
  }

  async getIdFromAsync() {
    try {
      const value = await AsyncStorage.getItem('@id:key');
      if (value !== null){
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text 
          style={{fontSize: 28, marginBottom: 10}}
        >
          Sign in to Continue
        </Text>
        <Text 
          style={{fontSize: 16, textAlign: 'center',marginBottom: 15}}
        >
          Sign in or create an account to get started with Nudge
        </Text>
        <Button 
          text = {
            <Text 
              style={{color:colors.textColor, textAlign: 'center'}}
            > 
              Sign in with Google
            </Text>
          }
          onPress={() => this.signIn()}
        />
        <Button 
          text = {
            <Text 
              style={{textAlign: 'center'}}
             > 
              Sign up for Nudge 
            </Text>
          }
          onPress= { () => navigate('Register') }
          style = {{backgroundColor: 'transparent'}}
        />
        <Button 
          text = {
            <Text 
              style={{textAlign: 'center'}}
            > 
            View Accelerometer 
            </Text>
          }
          onPress= { () => navigate('Accel') }
        />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

