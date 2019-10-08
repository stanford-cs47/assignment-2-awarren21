import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform, SafeAreaView, Dimensions } from 'react-native';
import { Images, Profiles } from '../Themes';

export class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  return (
    <View style={styles.navigationBar}>
      <TouchableOpacity style = {styles.settingsView}>
        <Image style = {styles.settingsIcon}
          source = {Images.gear}/>
      </TouchableOpacity>
      <View style = {styles.logoView}>
        <Image style = {styles.tinderIcon}
          source = {Images.logo}/>
      </View>
      <TouchableOpacity style={styles.chatIconView}>
        <Image style = {styles.chatIcon}
          source = {Images.chat}/>
      </TouchableOpacity>
    </View>
  );
  } 
}

const styles = StyleSheet.create({
  navigationBar: {
    height: Platform.OS === 'ios' ? 44 : 56,
    flexDirection: 'row',
    justifyContent:'center',
    borderBottomWidth: 1.5,
    borderBottomColor: '#c5c5c5',
  },
  settingsView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsIcon: {
    width: 30,
    height: 30,
    resizeMode:'contain',
    tintColor: '#c5c5c5',
  },
  logoView: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinderIcon: {
    width: 100,
    height: 75,
    resizeMode: 'contain',
  },
  chatIconView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  chatIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    tintColor: '#c5c5c5',
  },
});