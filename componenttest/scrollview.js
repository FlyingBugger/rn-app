import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image
} from 'react-native';
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      currentPage:0
    }
  }
  render(){
    return(
      <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)}
            >

              <Image  style={styles.images} source={require("../source/scroll/timg.jpg")}/>
              <Image  style={styles.images} source={require("../source/scroll/2.jpg")}/>
              <Image  style={styles.images} source={require("../source/scroll/3.jpg")}/>
              <Image  style={styles.images} source={require("../source/scroll/4.jpg")}/>
              {/*指示器*/}

              </ScrollView>
            <View style={styles.pageViewStyle}>
              {this.nodes()}
            </View>
          </View>
    )
  }

  onAnimationEnd(e){
    //水平偏移量
    let offSet=e.nativeEvent.contentOffset.x;

  this.setState({
    currentPage:Math.floor(offSet/384)
  })

  }

  handleClick(){
    console.log(123)
    setInterval(()=>console.log(1),1000)
  }
  nodes(){
    let n=[]

    for (var i=0;i<10;i++){
      let styleA=(this.state.currentPage==i)?{color:"orange"}:{color:"#ffff"}
      n.push(

          <Text key={i} style={[{fontSize:25},styleA]}>&bull;</Text>

      )

    }
    return n;
  }
}
const styles=StyleSheet.create({
  pageViewStyle:{
    flexDirection:"row",
  position:"absolute",
  bottom:0,
    width:384,
    height:40,
    backgroundColor:"rgba(0,0,0,0.8)"
  },
  images:{
    width:384,
    height:200
  },
  main:{
    backgroundColor:'green',
    width:375,
    height:60,
    alignItems:"center"
  }
})
