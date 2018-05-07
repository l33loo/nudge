import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../app/components/Button/Button';
import TextInput from '../../app/components/TextInput/TextInput';


export default class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput text={" John"}/>
        <TextInput text={" john@john.com"} />
        <Button text = {<Text style={{color:'white', textAlign: 'center'}}> Save </Text>} onPress= { () => navigate('SignIn') }/>
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


//main page s
// accelerometer
//edit button
//settings screen
//continue to push data when asleep (in slack)

