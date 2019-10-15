import React, { Component } from 'react';
import SplashScreen from './src/views/SplashScreen';
import LoginScreen from './src/views/LoginScreen';
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      timePassed: false,
    };
  }
  render() {
    var mainScreen = <SplashScreen/>
    setTimeout(() => { this.setState({ timePassed: true }) }, 3000)
    if (!this.state.timePassed) {
      return mainScreen
    } else {
      mainScreen = <LoginScreen />
    }
    return mainScreen
  }

}

// export default class Bananas extends Component {
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
//       <Image source={pic} style={{width: 193, height: 110}}/>
//     );
//   }
// }
