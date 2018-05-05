import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import SignIn from './app/screens/SignIn';
import Register from './app/screens/Register';
import { createStackNavigator } from 'react-navigation';

const NavigationApp = createStackNavigator({
  SignIn: { screen: SignIn },
  Register: { screen: Register },
})
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Image
        style={{
          flex: 0.2,
          flexDirection: 'column',
          alignItems: 'flex-start', 
          width: 100, 
          height: 100
        }}
        source={require('./app/images/nudgeLogo.png')}
        resizeMode="contain"
          /> */}
          <NavigationApp  style={{
          flex: 0.2,
          flexDirection: 'column',
          alignItems: 'flex-start', 
          width: 100, 
          height: 100
        }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fffFFF',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
