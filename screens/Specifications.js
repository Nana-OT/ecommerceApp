import { StyleSheet, Text, View,ImageBackground,TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


const Specifications=({ navigation,route })=>{
    const data = route.params;
    console.log(data);
    return(
        <View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ImageBackground style={styles.imgback} source={require("../assets/back.png")}/>
            </View>
            <View style={styles.view1}>
            <Text>{data.title}</Text>
            <Text>{data.price}</Text>
            <Text>{data.Size}</Text>
            <Text>{data.Review}</Text>
            <Text>{data.origin}</Text>
            <Text>{data.color}</Text>
            <Text>{data.crankset}</Text>
            <Text>{data.Pedals}</Text>
            <Text>{data.Fork}</Text>
            <Text>{data.TubesAndTires}</Text>
            <Text>{data.chain}</Text>
            <Text>{data.Stem}</Text>
            <Text>{data.HandleBars}</Text>
            <Text>{data.Brakes}</Text>
            <Text>{data.Saddle}</Text>
            <Text>{data.Frame}</Text>
            <Text>{data.Weight}</Text>
            <Text>{data.Rear}</Text>
            <Text>{data.FrontRack}</Text>
            <Text>{data.BackRack}</Text>        
            <Text style={styles.promo}>{data.Promo}</Text>
            </View>
            <View style={styles.cart}>
                <TouchableOpacity onPress={() => navigation.navigate('cart')}>
                    <Text>Add To Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    promo:{
        top: 10,
        fontStyle: "italic"

    },
    cart:{
        top: 150,
        backgroundColor: "#00FF00",
        width:200,
        height:30,
        borderRadius:5,
        alignItems: 'center', 
        justifyContent: 'center',
        marginLeft: 60,

    },
    view1:{
        top: 20,
        marginLeft: 20,
        
    },
    imgback:{
    width: "100%",
    height: "100%",
    position:"absolute",
    resizeMode:"cover",
    },
    text1:{


    },
})

export default Specifications;