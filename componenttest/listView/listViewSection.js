//android 不支持吸顶

import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image
} from 'react-native';
let listData=require("./listView.json")

export default class App extends Component {
  constructor(props){
    super(props)

    //数据结构
    let ds=new ListView.DataSource({
      rowHasChanged:(r1,r2)=>r1!=r2,//行
      sectionHeaderHasChanged:(s1,s2)=>s1!=s2
    })
    this.state={
      dataSource:ds.cloneWithRowsAndSections(this.getData())
    }
  }
  getData(){

    return listData;
  }
render(){
  return(
    <ListView
      style={styles.body}

      renderSectionHeader = {this.renderSectionHeader}

      dataSource={this.state.dataSource}
      renderRow={this.renderRow} />
  )
}

renderRow(rowData,sectionID,rowID,highlightRow){

    return (
        <View style={styles.rowItem}>
            <View style={styles.rowItemLeft}>
                <Text style={styles.rowItemText}>{rowData.name}</Text>
            </View>
            <View style={styles.rowItemRight}>
                <Text style={styles.rowItemText}>数据：{rowData.url}</Text>
            </View>
        </View>
    )
}
renderSectionHeader(sectionData, sectionID){

    return(
        <View style={styles.rowTite}>
            <Text>{sectionID}</Text>
        </View>
    )
}


}

const styles = {
    body:{
        flex:1,
    },
    rowItem:{
        flex:1,
        height:50,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#ddd',

    },
    rowTite:{
        height:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ccc',
    },
    rowItemLeft:{
        flex:1,
        borderRightWidth:1,
        borderRightColor:'#ccc',
    },
    rowItemRight:{
        flex:3,
    },
    rowItemText:{
        textAlign:'center'
    },
}
