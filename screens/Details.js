import React from 'react';
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity, Image } from 'react-native';

const Details = ({ navigation }) => {
    return (
        <View>
            <View>
                <Text style={styles.txt}> Products Available</Text>
            </View>
            <View style={styles.view1}>
            <TouchableOpacity>
            <Image source = {require('../assets/bike1.png')} style={styles.bike1}/>
            </TouchableOpacity>
            <TouchableOpacity >
            <Image source = {require('../assets/bike2.png')} style={styles.bike2}/>
            </TouchableOpacity>
            </View>
            <View style={styles.view2}>
            <TouchableOpacity>
            <Image source = {require('../assets/bike3.png')} style={styles.bike3}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source = {require('../assets/bike4.png')} style={styles.bike4}/>
            </TouchableOpacity>
            </View>
            <View style={styles.view3}>
            <TouchableOpacity>
            <Image source = {require('../assets/bike5.png')} style={styles.bike5}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source = {require('../assets/bike6.png')} style={styles.bike6}/>
            </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    bike1:{
        width: 170,
        height: 200,
        resizeMode: "contain",
        position: "absolute"
    },
    view1:{
        flexDirection: "row",

    },
    view2:{
        flexDirection: "row",


    },
    bike2:{
        width:180,
        height: 200,
        resizeMode: "contain",
        marginLeft: 180,
        position: "absolute"

    },
    bike3:{
        width: 170,
        height: 190,
        marginTop: 200,
        position: "absolute", 
        resizeMode: "contain"
           
    },
    bike4:{
        width: 180,
        height: 400,
        marginBottom: 200 ,
        marginTop: 90,
        position: "absolute",
        marginLeft: 180,
        resizeMode: "contain",       
    },
    view3:{
        flexDirection: "row"

    },
    bike5:{
        width: 180,
        height: 160,
        position: "absolute",
        resizeMode: "contain",
        marginTop: 400,
        

    },
    bike6:{
        width: 180,
        height: 160,
        position: "absolute",
        resizeMode: "contain",
        marginTop: 400,
        marginLeft: 180,




    },
    
    txt:{
        textAlign: "center",
        fontSize: 20,
        fontWeight: "500"

    },
});


export default Details;