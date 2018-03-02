import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  View,

  TextInput,
  Image
} from 'react-native';
export default class App extends Component{
  render(){
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <TextInput
          keyboardType={'number-pad'}
          placeHolder={'阿萨德'}
          // multiline={true}
      //    password={true}
          style={{width:300,height:120}}
        />

      </View>
    )
  }
}
