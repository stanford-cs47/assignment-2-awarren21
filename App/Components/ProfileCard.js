import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform, SafeAreaView, Dimensions } from 'react-native';
import { Images, Profiles } from '../Themes';

const { width, height } = Dimensions.get('window')

export class ProfileCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    return (
         <View style ={styles.profile}>
            <Image style = {styles.pictureStyle}
                source = {Images.harold}/>
            <View style = {styles.profileInfo}>
                <View style = {styles.firstRow}> 
                    <Text style = {styles.nameStyle}>{Profiles.harold.name},</Text>
                    <Text style = {styles.ageStyle}>{Profiles.harold.age}</Text>
                </View>
                <View style = {styles.secondRow}>
                    <Text style={styles.description}>{Profiles.harold.occupation}</Text>
                </View>
            </View>
    </View>
    );
  } 
}
const styles = StyleSheet.create({
    profile: {
        marginTop: 80,
        backgroundColor: 'white',
        borderColor: '#c5c5c5',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderWidth: 1.5,
    },
    pictureStyle: {
        width: width * .9,
        height: width * .9,
        aspectRatio: 1,
        resizeMode: 'cover',
    },
    profileInfo: {
       alignContent: 'center',
       marginLeft: 15,
       marginBottom: 10,
       marginTop: 10,
    },
    firstRow: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
    },
    nameStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    ageStyle: {
        fontSize: 24,
        color: 'black',
    },
    secondRow: {
      flexDirection: 'row',
      alignSelf: 'flex-start',
    },
    description: {
        fontSize: 16,
        color: '#c5c5c5',
    },  
});