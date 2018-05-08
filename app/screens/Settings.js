import React, { Component } from 'react';
import { FlatList, ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Button from '../../app/components/Button/Button';
import TextInput from '../../app/components/TextInput/TextInput';
import {colors} from "../../app/config/styles";


export default class Settings extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  static navigationOptions = {
    title: 'Settings',
  };

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
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
          Edit Contacts
        </Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
            <View>
              <TextInput 
                text={item.title}  
              />
              <TextInput 
                text={item.releaseYear}  
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
          onPress= { () => navigate('Settings') }
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
