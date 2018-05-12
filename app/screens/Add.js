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
    return fetch(`https://nudge-server.herokuapp.com/contacts/${this.props.screenProps.id}`)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.users,
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }
  
  handleInput = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onSubmit(event){
    return fetch(`https://nudge-server.herokuapp.com/insert/${this.props.screenProps.id}`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain */*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.state)
        })
        .then((response) => response.json())
        .then((responseJson) => {
          return responseJson
        })
        .catch((error) => {
          throw error;
        })
        .then(response => this.props.navigation.navigate('Home'));
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
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
            <View>
              <TextInput 
                name= {'nickname'}
                text= {'Name'}  
                onChangeText={this.handleInput}
                value={this.state.nickname}
              />
              <TextInput
                name= {'email'}
                text= {'Email'}  
                onChangeText={this.handleInput}
                value={this.state.email}
                />
            </View>
          }
          keyExtractor={(item, index) => index.toString()}
        />
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
