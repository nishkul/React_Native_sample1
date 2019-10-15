import React, { Component } from 'react';
import { View,Image,StyleSheet,Text } from 'react-native';

export default class SplashScreen  extends Component {
  render() {

    let pic =  "../images/splash_bg.jpg";
    return (

        <View>
<Image source = {require(pic)}  style={styles.imagesStyle}
 />
        </View>
        
    );
  }
}
var styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4834DF',
        alignItems: 'center',
        justifyContent: 'center',
      },
      imagesStyle:{
        alignSelf: 'center',
    borderWidth: 1,
    width: 400,
    height: 700
      }

})

