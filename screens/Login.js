import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View,ImageBackground } from 'react-native';





function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         
          <View>
              <Text style={styles.hell}>Hello User</Text>
          </View>
          <View>
              <TextInput style ={styles.user}placeholder="Enter username or e-mail"/>
          </View>
          <View>
              <TextInput style={styles.pass}placeholder="Enter password"/>
          </View>
          <View style={styles.tv}>
              <TouchableOpacity style={styles.touch}>
                  <Text>Login</Text>
              </TouchableOpacity>
          </View>

        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hell:{
    
      marginBottom: 20,
      fontSize: 30

  },
  user:{
   
    width: 300,
    borderRadius: 5,
    height: 40,
    borderColor: "#f0f8ff",
    backgroundColor: "#f9f9f9",

  },
  pass:{
    
    width: 300,
    borderRadius: 5,
    height: 40,
    borderColor: "#f0f8ff",
    backgroundColor: "#f9f9f9",
    marginTop: 10

  },
  touch:{
      backgroundColor: "#0000FF",
      width:200,
      height:30,
      borderRadius:5,
      alignItems: 'center', 
      justifyContent: 'center'

  },
  tv:{
    
      marginTop:15
  },
  lback:{
    width: "100%",
    height: "100%",
    
    resizeMode:"cover",
  },

});

export default DetailsScreen;
