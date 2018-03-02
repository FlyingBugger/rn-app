import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image
} from 'react-native';
const {width}=Dimensions.get("window")

export default class App extends Component {
  testClick(){
      this.refs.countsM.focus()
  }
  render(){
    return(
        <View style={styles.container}>
              <View style={styles.imgContainer}>
                <Image style={styles.img} source={{uri:"http://iconfont.alicdn.com/t/1508911280546.jpg@100h_100w.jpg"}} />
              </View>

              <TextInput
                underlineColorAndroid='transparent'
                placeholder="账号"
                ref="countsM"
                style={styles.inputBox}
              >1</TextInput>
              <TextInput
                  placeholder="密码"
                    underlineColorAndroid='transparent'
                    secureTextEntry
                style={styles.inputBox}
                password={true}
              ></TextInput>
              <View style={styles.loginBox}>
                    <TouchableOpacity
                     activeOpacity={0.5}
                        onPress={()=>{
                        this.testClick()
                        }}
                     >
                            <Text>登录</Text>
                    </TouchableOpacity>
              </View>
              <View style={styles.other}>
                <Text   ref="test">其它登录方式</Text>
                <Image style={styles.icons} source={require("../source/icon/icon_QQ.png")}/>
                <Image  style={styles.icons}  source={require("../source/icon/wechat.png")}/>
              </View>
        </View>
    )
  }

}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#dddddd",
    // justifyContent:"center",
  alignItems:"center"
  },
  imgContainer:{
    marginTop:50,
    alignItems:"center"
  },
  inputBox:{
    width:300,
    margin:10,
    borderRadius:10,
    backgroundColor:"white"
  },
  loginBox:{

    alignItems:"center",
    backgroundColor:"blue",
    borderRadius:40,
    justifyContent:"center",
    width:300,
    height:35
  },
  other:{

    flexDirection:"row",
     alignItems:"center",
    justifyContent:"flex-start",
    position:"absolute",
    left:20,
    bottom:20
  },
  img:{
    width:80,
    height:80,
    borderRadius:50
  },
  icons:{
    width:40,
    height:40
  }

})
