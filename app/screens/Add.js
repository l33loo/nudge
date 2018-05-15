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
    const contact = {nickname: this.state.nickname, email: this.state.email}
    return fetch(`https://nudge-server.herokuapp.com/insert/${this.props.screenProps.id}`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain */*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contact)
    })
        .then((response) => response)
        .then((responseJson) => {
          this.props.screenProps.getContacts()
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
                placeholderTextColor={'#575757'}
                style={{backgroundColor: 'white', alignSelf: 'stretch', padding: 10,
                borderRadius: 2}}
              />
              <TextInput
                value={this.state.email}
                placeholder={'Email'}
                placeholderTextColor={'#575757'}
                onChangeText={(text) => this.setState({email: text})}  
                style={{backgroundColor: 'white', alignSelf: 'stretch', padding: 10,
                borderRadius: 2, width: 220}} 
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
