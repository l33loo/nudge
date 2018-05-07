import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../app/components/Button/Button';
import TextInput from '../../app/components/TextInput/TextInput';


export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={{fontSize:30}}>
          Contacts
        </Text>
        <Text>
          John John@john.com
        </Text>
        <Text>
          Mary Mary@mary.com
        </Text>
        <Button text = {<Text style={{color:'white', textAlign: 'center'}}> Edit </Text>} onPress= { () => navigate('Settings') }/>
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



// accelerometer
//continue to push data when asleep (in slack)

