import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform, SafeAreaView, Dimensions } from 'react-native';
import { Images, Profiles } from '../Themes';

export class BottomBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  return (
    <View style = {styles.bottomAction}> 
        <View style = {styles.smallButton}>
            <TouchableOpacity style = {styles.smallButtonView}>
            <Image style = {styles.smallIcon}
                source = {Images.rewind}/>
            </TouchableOpacity>
        </View>
        <View style = {styles.largeButton}>
            <TouchableOpacity style = {styles.largeButtonView}>
                <Image style = {styles.largeIcon}
                    source = {Images.nope}/>
            </TouchableOpacity>
        </View>
        <View style = {styles.smallButton}>
            <TouchableOpacity style = {styles.smallButtonView}>
                <Image style = {styles.smallIcon}
                    source = {Images.boost}/>
            </TouchableOpacity>
        </View>
        <View style = {styles.largeButton}>
            <TouchableOpacity style = {styles.largeButtonView}>
                <Image style = {styles.largeIcon}
                    source = {Images.like}/>
            </TouchableOpacity>
        </View>
        <View style = {styles.smallButton}>
            <TouchableOpacity style = {styles.smallButtonView}>
                <Image style = {styles.smallIcon}
                    source = {Images.superLike}/>
            </TouchableOpacity>
        </View>
    </View>
  );
  } 
}

const styles = StyleSheet.create({
    bottomAction: {
        padding: 15,
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        position: 'absolute',
        bottom: 15,
    },
    smallButton: {
        flex: 1,
        alignItems: 'center',
    },
    smallButtonView: {
      height: 50,
      width: 50,
      borderRadius: 25,
      backgroundColor: 'white',
      alignItems: 'center',
        justifyContent: 'center',
    },
    smallIcon: {
      height: 30,
      width: 30,
        resizeMode: 'contain',
    },
    largeButton: {
        flex: 1,
        alignItems: 'center',
    },
    largeButtonView: {
        height: 65,
        width: 65,
        borderRadius: 32.5,    
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    largeIcon: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
    },
});