import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./screens/Login";
import Details from './screens/Details';
import SignUp from './screens/SignUp';
import Specifications from './screens/Specifications';
import cart from './screens/cart';



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <ImageBackground style={styles.imgback} source={require("./assets/icon.png")} />
       <View style={styles.backStyle}>
        <Text style={styles.txt}>Welcome to</Text>
        </View >
        <View style={styles.backStyle1}>
          <Text style={styles.txt1}>The Bike Shop</Text>
        </View>  
        <View>
          <TouchableOpacity style={{borderWidth:5,position:"absolute",alignItems:"center",justifyContent:"center",borderColor:"green",borderRadius: 7,width:150,height:50,marginRight:100}}>
            <Text style={{color:"white", fontWeight: "500", fontStyle: "italic"}}
             onPress={() => navigation.navigate('Login')}
            > Click To Login Page</Text>

          </TouchableOpacity>
        </View>

      
    </View>
  );
}

<LoginScreen />;
<Details />



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={HomeScreen} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Specifications" component={Specifications} />
        <Stack.Screen name="cart" component={cart} />
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
  backStyle1:{
    position:"absolute",
     top:90

  },
  txt1:{
    color:"white",
    fontSize:20,
    fontWeight: "600",
  

  },

  txt:{

    color:"white",
    fontSize:30,
    fontWeight: "600",
  

    
  },
  imgback:{
    width: "100%",
    height: "100%",
    position:"absolute",
    resizeMode:"cover",


  },
});
