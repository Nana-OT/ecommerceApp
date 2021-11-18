import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View,ImageBackground } from 'react-native';





function cart({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={styles.bill}>Billing Information</Text>
          <View>
              <TextInput style ={styles.user} placeholder="Full Name"/>
          </View>
          <View>
              <TextInput style ={styles.user} placeholder="Address"/>
          </View>
          <View>
              <TextInput style ={styles.user} placeholder="Phone"/>
          </View>
          <View>
              <TextInput style ={styles.user} placeholder="Email"/>
          </View>
          <View >
              <TouchableOpacity style={styles.touch1} onPress ={()=>alert("Thanks for the payment, see you next time")}>
                  <Text >Check out</Text>
              </TouchableOpacity>
          </View>

        
    </View>
  );
}

const styles = StyleSheet.create({
    bill:{
        bottom: 45,
        fontWeight:"100",
        fontSize:30,
        fontFamily: "Cochin",
    },
    touch1:{
        backgroundColor: "#00FF00",
        width:100,
        height:30,
        borderRadius:5,
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom:20,
        top: 90
    },
    user:{
        width: 300,
        borderRadius: 5,
        height: 40,
        borderColor: "#000",
        backgroundColor: "#f9f9f9",
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 3
    }


});
export default cart;