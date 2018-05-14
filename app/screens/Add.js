import React, { Component } from 'react';
import { FlatList, ActivityIndicator, StyleSheet, Text, View, TextInput } from 'react-native';
import Button from '../../app/components/Button/Button';
import {colors} from "../../app/config/styles";


export default class Add extends Component {
  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      nickname: "",
      email: "",
      uniqueValue: 1
    }
  
  }

  forceRemount = () => {
    this.setState(({ uniqueValue }) => ({
      uniqueValue: uniqueValue + 1
    }))
  }

  static navigationOptions = {
    title: 'Add Contacts',
  };

  componentDidMount(){
        this.setState({
          isLoading: false
        })
  }
  
  onSubmit = () => {
    console.log('on submit')
    return fetch(`https://nudge-server.herokuapp.com/insert/${this.props.screenProps.id}`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain */*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.state)    
        })
        .then((response) => response)
        .then((responseJson) => {
          console.log(responseJson)
          return responseJson

        })
        .catch((error) => {
          throw error;
        })
  }
  
  render() {
    const { navigate } = this.props.navigation;
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return(
      <View 
        style={styles.container}
      >
        <Text 
          style={{fontSize:30}}>
          New Contact
        </Text>
            <View>
              <TextInput 
                onChangeText={(nickname) => this.setState({nickname})}
                value={this.state.nickname}
                placeholder={'Name'}
                style={{backgroundColor: 'white', alignSelf: 'stretch', padding: 10,
                borderRadius: 2}}
              />
              <TextInput
                value={this.state.email}
                placeholder={'Email'}
                onChangeText={(text) => this.setState({email: text})}  
                style={{backgroundColor: 'white', alignSelf: 'stretch', padding: 10,
                borderRadius: 2, width: 200}} 
                />
            </View>
        <Button
          text = {
            <Text 
              style={{color:colors.textColor, textAlign: 'center'}}
              > 
              Save 
            </Text>
          } 
          onPress= { () => {
              this.onSubmit()
              this.forceRemount()
              console.log('force remount')
              navigate('Home')
              
           }
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
