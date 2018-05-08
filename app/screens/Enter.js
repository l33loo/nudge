import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from '../../app/components/Button/Button';
import TextInput from '../../app/components/TextInput/TextInput';
import style from "../../app/config/styles";
import {colors} from "../../app/config/styles";


export default class Enter extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

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
              Sign in to your account 
            </Text>
          }
          onPress= { () => navigate('SignIn') }
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