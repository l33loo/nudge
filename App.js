import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';


import SignIn from './app/screens/SignIn';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View style={styles.container}>
       <Image
        style={{
          flex: 0.5,
          flexDirection: 'column',
          alignItems: 'flex-start', 
          width: 100, 
          height: 100,
          backgroundColor: 'blue'
        }}
        source={require('./app/images/nudgeLogo.png')}
        resizeMode="contain"
          />
          <Text  style={{
            flex: 0.2,
            height: 40,
            backgroundColor: 'green'
      
          }}> 
            Login 
          </Text>
          {/* <TextInput
          style={{
            flex: 2,
            height: 40,
            backgroundColor: 'purple'
      
          }}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        /> */}
        <TextInput
          style={{
            flex: 0.2,
            height: 40,
            backgroundColor: 'green'
      
          }}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
      <SignIn />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
