import React from 'react';
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity, Image } from 'react-native';

const Details = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity>
            <Image source = {require('../assets/bike1.png')} style={StyleSheet.bike1}/>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    bike1:{
        width: 50,
        height: 50,
        
    },
});



export default Details;