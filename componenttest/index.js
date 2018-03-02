/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};
let imgs=require('../test.json')
export default class App extends Component<Props> {
  render() {
    return (
      <View style={style.container}>
        {this.renderAllBadge()}
        <TextInput
          placeHolder="12"
          onChange={this.inputChange}
          keyboardType="number-pad"
        />

      </View>
    );
  }
  inputChange(){

  }
  renderAllBadge(){
    let views=[];
    for(let i =0;i<imgs.datas.length;i++){
      let now=imgs.datas[i];
      let str=`../source/img/1`
      views.push(
        <View key={i} style={style.imgOut}>
          <Image source={require("../source/img/1.jpg")} style={style.img}/>

          <View style={style.imgText}>
                <Text ref="nods">{now.name}</Text>
          </View>

        </View>
      )
    }
    return views
  }
}
const style=StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"row",
    flexWrap:"wrap"
  },
  img:{
    width:100,
    height:100
  },
  imgOut:{
    marginLeft:20,

  },
  imgText:{
    alignItems:"center",
      justifyContent: 'center',
    backgroundColor:"pink",
    height:50
  }

})
