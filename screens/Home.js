import React, { Component } from "react";
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, Image, TextInput} from "react-native";
import { Header } from 'react-native-elements';

export default class HomeScreen extends React.Component{
  constructor(){
    super();
    this.state = {
      text: '',
    }
  }
  render(){
    return(
      <View style = {styles.container}>
      <Header
      backgroundColor = {'#ADD8e6'}
      centerComponent = {{
        text: "GPS Guides",
        style: {color: "#000", fontSize: 20}
      }}/>
      <Image
      style = {styles.imageIcon}
      source = {require('../assets/GPSGuides.png')}/>
      <TextInput
      style = {styles.inputBox}
      onChangeText = {text => {
        this.setState({text: text})
      }}
      value = {this.state.text}/>
      <TouchableOpacity
      style = {styles.searchButton} onPress = {()=> this.props.navigation.navigate("GPS")}>
      <Text style = {styles.buttonText}> Search </Text>
      </TouchableOpacity>
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
   imageIcon: {
     width: 150,
     height: 140,
     marginLeft: 110,
   },
   inputBox: {
     width: '80%',
     marginTop: 50,
     alignSelf: 'center',
     height: 40,
     textAlign: 'center',
     borderWidth: 4,
     outline: 'none',
   },
   searchButton: {
     width: '70%',
     height: 55,
     alignSelf: 'center',
     padding: 10,
     margin: 10,
     backgroundColor: '#ADD8e6',
   },
   buttonText: {
     textAlign: 'center',
     fontSize: 30,
     fontWeight: 'bold',
   }

})