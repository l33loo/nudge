import React, { Component } from 'react';
import { FlatList, ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Button from '../../app/components/Button/Button';
import TextInput from '../../app/components/TextInput/TextInput';
import {colors} from "../../app/config/styles";


export default class Home extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount(){
    return fetch(`https://nudge-server.herokuapp.com/contacts/${this.props.screenProps.id}`)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.users,
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    const { navigate } = this.props.navigation;

    if(this.state.isLoading){
      return(
        <View 
          style={{flex: 1, padding: 20}}
        >
          <ActivityIndicator/>
        </View>
      )
    }
    return(
      <View 
        style={styles.container}>
        <Text 
          style={{fontSize:30}}>
          Contacts
        </Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
          <View>
            <Text>
             {item.nickname}
            </Text>
            <Text>
            {item.email}
            </Text>
            </View>
          }
          keyExtractor={(item, index) => index.toString()}
        />
        <Button
          text = {
            <Text 
              style={{
                  color:colors.textColor, 
                  textAlign: 'center'
                }}
            > 
              Add a New Contact 
            </Text>
          } 
          onPress= { () => navigate('Add') }
        />
        <Button
          text = {
            <Text 
              style={{
                  color:colors.textColor, 
                  textAlign: 'center'
                }}
            > 
              Edit a Contact
            </Text>
          } 
          onPress= { () => navigate('Settings') }
        />
        <Button
          text = {
            <Text 
              style={{
                  color:colors.textColor, 
                  textAlign: 'center'
                }}
            > 
              Logout
            </Text>
          } 
          
          onPress= { () => {
            this.props.screenProps.changeState() 
            navigate('Enter')
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