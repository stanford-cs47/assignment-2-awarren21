import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform, SafeAreaView, Dimensions } from 'react-native';
import { Images, Profiles } from './App/Themes';
import { NavigationBar } from './App/Components/NavigationBar'
import { ProfileCard } from './App/Components/ProfileCard'
import { BottomBar } from './App/Components/BottomBar';

const { width, height } = Dimensions.get('window')
export default class App extends React.Component {
  constructor() {
    super();
    var haroldProfile = Profiles.harold;
    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <NavigationBar navBar = {this.navBar}/>
        <ProfileCard prof = {this.prof}/> 
        <BottomBar buttons = {this.buttons}/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#EEECEC',
  },
});