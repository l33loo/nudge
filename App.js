import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ActivityIndicator } from 'react-native';
import SignIn from './app/screens/SignIn';
import Register from './app/screens/Register';
import Enter from './app/screens/Enter';
import Home from './app/screens/Home';
import Settings from './app/screens/Settings';
import Accel from './app/screens/Accel';
import { createStackNavigator } from 'react-navigation';
import { Accelerometer } from 'expo';

const NavigationApp = createStackNavigator({
  Enter: { screen: Enter },
  SignIn: { screen: SignIn },
  Register: { screen: Register },
  Home: { screen: Home },
  Settings: { screen: Settings },
  Accel: { screen: Accel }
})

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadTime: true,
      accelerometerData: {},
      movement: false,
    };
    
    this.getInQueue = this.getInQueue.bind(this);
    this.sendPing = this.sendPing.bind(this);

  }
  componentDidMount() {
    this._subscribe();
    // this._toggle();
  }

  componentWillUnmount() {
    this.state.movement = false;
    this._unsubscribe();
  }

  getInQueue() {
    const { y } = this.state.accelerometerData;
    if (y > 0.7) {
      this.state.movement = true;
      this.sendPing();
    }
  }

  sendPing = () => {
    fetch("https://nudge-server.herokuapp.com/");
    console.log('hi I am pinging');
  }

  _subscribe = () => {
    this._subscription = Accelerometer.addListener(accelerometerData => {
      this.setState({ accelerometerData });
      this.getInQueue();
    });
  }

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  }

  componentWillMount()
  {
    setTimeout(()=>
      {
        this.setState({
        loadTime: false
        })
      }, 
      3000
    )
  }
  render() {
    return (
      <View style={styles.container}>
        {
          this.state.loadTime ?
            <View style={loadStyle.container}>
              <Image
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-start', 
                  width: 120, 
                  height: 120
                }}
                source={
                  require('./app/images/nudgeLogo.png')
                }
                resizeMode="contain"
              />
              <ActivityIndicator size="large"/>
            </View>
          :
            <View style={styles.container}>
              <NavigationApp  
                style={{
                  flex: 0.2,
                  flexDirection: 'column',
                  alignItems: 'flex-start', 
                  width: 100, 
                  height: 100
                }}
              />
            </View>
        }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
  },
});

const loadStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
