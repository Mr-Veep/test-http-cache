/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const pointEnd = "http://172.20.10.2:3000/"

export default class App extends React.Component {

  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.getFetch()
  }

  getFetch=async()=>{
    await fetch(pointEnd+"testget", {
        method: 'get',
    }).then(data => {
      alert("SUCCESS: " + JSON.stringify(data))
      console.log(JSON.stringify(data))
    }).catch(error => {
      alert("FAILED: " + error)
    })
  }

  postFetch=async()=>{
    await fetch(pointEnd+"testpost", {
      'method': 'post',
      'Content-Type' : 'application/json',
      'body': JSON.stringify({"name":"tests"})
    }).then(data => {
      alert("SUCCESS: " + JSON.stringify(data))
      console.log(data)
    }).catch(error => {
      alert("FAILED: " + error)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.getFetch} title="Get Fetch"/>
        <Button onPress={this.postFetch} title="Post Fetch"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
