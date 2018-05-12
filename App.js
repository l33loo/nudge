import React from 'react';
import { PropTypes, Child, StyleSheet, Text, View, Image, TextInput, ActivityIndicator } from 'react-native';
import SignIn from './app/screens/SignIn';
import Register from './app/screens/Register';
import Enter from './app/screens/Enter';
import Home from './app/screens/Home';
import Settings from './app/screens/Settings';
import Accel from './app/screens/Accel';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Accelerometer } from 'expo';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadTime: true,
      accelerometerData: {},
      movement: false,
      timeLastActivity: 0,
      notificationsEnabled: true,
      loggedIn: false,
      id: ''
    };
    
    this.getInQueue = this.getInQueue.bind(this);
    this.sendPing = this.sendPing.bind(this);
  }

  changeState = (id) => {
    // if(this.isMounted){
      this.setState({
        'id': id
     }, () => console.log(this.state));
  // }
  } 

  loggedIn() {
    if(!this.state.id === ''){
      this.setState({
        loggedIn: true
      })
    }
  }
  // setState(
  //   { name: "Michael" },
  //   () => console.log(this.state)
  // );

  // const cancelablePromise = makeCancelable(
  //   new Promise(r => component.setState({...}}))
  // );


  componentDidMount() {
    console.log('Component Mounted')
    this.isMounted = true;
    this.changeState();
    this._subscribe();
    if(this.state.loggedIn && this.state.notificationsEnabled) {
      console.log("IF STATEMENT")
      setInterval(() => {
        if (Date.now() - this.state.timeLastActivity < 10000 ) {
          this.sendPing()
        }
      }, 5000);
    } 
  }

  getInQueue() {
    const { y } = this.state.accelerometerData;
    if (y > 0.7) {
      // this.state.movement = true;
      this.state.timeLastActivity = Date.now();
    }
  }

  sendPing = () => {
    fetch("https://nudge-server.herokuapp.com/");
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
    console.log('Will Mount')
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
                screenProps={{
                  id: this.state.id,
                  changeState: this.changeState
                }}
              >
              </NavigationApp>
              
            </View>
        }
         
      </View>
      
    );
  }

  componentWillUnmount() {
    console.log('Component Unmount')
    this.state.movement = false;
    this._unsubscribe();
    clearInterval(this._interval);
    // this.isMounted = false;
  }
}

const NavigationSwitch = createSwitchNavigator(
  {
  Enter: {screen: Enter},
  Home: {screen: Home}
},
{
   initialRouteName: this.loggedIn ? "Home" : "Enter"
}
)

const NavigationApp = createStackNavigator({
  Enter: NavigationSwitch,
  SignIn: { screen: SignIn },
  Register: { screen: Register },
  Home: { screen: Home },
  Settings: { screen: Settings },
  Accel: { screen: Accel }
})

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

