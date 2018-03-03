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

export default class App extends Component {  constructor(props){
        super(props)
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        });
        this.state = {
            dataSource: ds.cloneWithRowsAndSections(this.getRows()),
        };
    }
    getRows(){
      let dataObj = {}
      let section = '测试1'
      dataObj[section] = []
      for (let i=0;i<10;i++){
          let data = {
              name:'第'+i+'行',
              num:i
          }
          dataObj[section][i] = data
      }
      section = '测试2'
      dataObj[section] = []
      for (let i=0;i<10;i++){
          let data = {
              name:'第'+i+'行',
              num:i
          }
          dataObj[section][i] = data
      }
      console.log(dataObj)
        return dataObj


    }
    renderRow(rowData,sectionID,rowID,highlightRow){

        return (
            <View style={styles.rowItem}>
                <View style={styles.rowItemLeft}>
                    <Text style={styles.rowItemText}>{rowData.name}</Text>
                </View>
                <View style={styles.rowItemRight}>
                    <Text style={styles.rowItemText}>数据：{rowData.num}</Text>
                </View>
            </View>
        )
    }
    onEndReached(e){
        //console.log(e)
    }
    renderSectionHeader(sectionData, sectionID){
        console.log(sectionData,sectionID)
        return(
            <View style={styles.rowTite}>
                <Text>{sectionID}</Text>
            </View>
        )
    }
    onChangeVisibleRows(visibleRows, changedRows){
        //console.log(visibleRows)
    }
    render(){
        return (
            <ListView
              style={styles.body}
              onEndReached = {this.onEndReached}
              onEndReachedThreshold = {20}
              renderSectionHeader = {this.renderSectionHeader}
              onChangeVisibleRows = {this.onChangeVisibleRows}
              dataSource={this.state.dataSource}
              renderRow={this.renderRow} />

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
