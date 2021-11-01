import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from "./screens/Login"


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <ImageBackground style={styles.imgback} source={require("./assets/icon.png")} />
       <View style={styles.backStyle}>
        <Text style={styles.txt}>Welcome to the Bike Shop</Text>
        </View>  
        <View>
          <TouchableOpacity style={{borderWidth:5,position:"absolute",alignItems:"center",justifyContent:"center",borderColor:"green",width:150,height:50,marginRight:200}}>
            <Text style={{color:"white"}}
             onPress={() => navigation.navigate('Details')}
            >Login Page</Text>

          </TouchableOpacity>
        </View>

      
    </View>
  );
}

<DetailsScreen />;



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backStyle:{
     position:"absolute",
     top:50
  },
  txt:{

    color:"white",
    fontSize:30,
    
  },
  imgback:{
    width: "100%",
    height: "100%",
    position:"absolute",
    resizeMode:"cover",


  },
});
