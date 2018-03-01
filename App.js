/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <View >
          <View style={styles.row}>
                <Text>1</Text>
                <Text>2</Text>
                <Text>3</Text>
          </View>
          <View style={styles.column}>
                <Text>1</Text>
                <Text>2</Text>
                <Text>3</Text>
          </View>
          <View style={styles.over}>
                <Text style={{flex:1,backgroundColor:"blue",width:80,height:50}}>1</Text>
                <Text style={{flex:1,backgroundColor:"white",width:80,alignSelf:"flex-start"}}>2</Text>
                <Text style={{flex:1,backgroundColor:"pink",width:80}}>3</Text>
                <Text style={{flex:1,backgroundColor:"blue",width:80}}>1</Text>
                <Text style={{flex:1,backgroundColor:"white",width:80}}>2</Text>
                <Text style={{flex:1,backgroundColor:"pink",width:80}}>3</Text>
                <Text style={{flex:1,backgroundColor:"blue",width:80}}>1</Text>
                <Text style={{flex:1,backgroundColor:"white",width:80}}>2</Text>
                <Text style={{flex:1,backgroundColor:"pink",width:80}}>3</Text>
          </View>

          <View style={{backgroundColor:"red",alignItems:"center"}}>
            <Image source={{uri:"http://weixin.scnjnews.com/images/qr.png"}} style={{width:50,height:50}} />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row:{
    backgroundColor:"green",
    flexDirection:"row",//盒子对齐方式  display:block||display:inline-block
    justifyContent:"space-around"//文本对齐方式 text-align:cent floar:right
  },
  column:{
    backgroundColor:"red",
    flexDirection:"column",//盒子对齐方式  display:block||display:inline-block

    alignItems:'center' //水平居中
  },
  over:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center"

  },
});
