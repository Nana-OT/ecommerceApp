import React from 'react';
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity, Image } from 'react-native';

const Details = ({ navigation }) => {
    return (
        <View>
            <View>
                <Text style={styles.txt}> Products Available</Text>
            </View>
            <View>
            <TouchableOpacity>
            <Image source = {require('../assets/bike1.png')} style={styles.bike1}/>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity >
            <Image source = {require('../assets/bike2.png')} style={styles.bike2}/>
            </TouchableOpacity>
            </View>
            <View style={styles.view3}>
            <TouchableOpacity>
            <Image source = {require('../assets/bike3.png')} style={styles.bike3}/>
            </TouchableOpacity>
            </View>
      
        </View>
    )
};

const styles = StyleSheet.create({
    bike1:{
        width: "50%",
        height: "50%",
        padding: 20,
        marginTop: 40,
        resizeMode: "contain",
    },
    bike2:{
        width: "50%",
        height: "65%",
        bottom: 750,
        marginHorizontal: 200,
        resizeMode: "contain",

    },
    bike3:{
        
    },
    view3:{
        resizeMode: "contain",

    },
    txt:{
        textAlign: "center",
        fontSize: 20,
        fontWeight: "500"

    },
});


export default Details;