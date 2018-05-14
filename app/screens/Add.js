import React, { Component } from 'react';
import { FlatList, ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Button from '../../app/components/Button/Button';
import TextInput from '../../app/components/TextInput/TextInput';
import {colors} from "../../app/config/styles";


export default class Add extends Component {
  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      nickname: "",
      email: ""
    }
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
                ref= {(el) => { this.nickname = el; }} 
                onChangeText={(nickname) => this.setState({nickname}, function () {console.log('Nickname updated')})}
                value={this.state.nickname}
              />
              <TextInput 
                value={this.state.email}
                onChangeText={(text) => this.setState({email: text})}   
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
