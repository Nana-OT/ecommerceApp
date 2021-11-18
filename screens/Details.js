import React from 'react';
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity, FlatList,SafeAreaView,Image } from 'react-native';

import SearchBar from '../screens/Components/SearchBar';

const DATA = [
    {
      id:1,
      title: 'All-City Bike',
      image:require("../assets/bike1.png"),
      price: "Price: GHS 950.00",
      Size: "Size: 29-inches",
      Review: "Review: Good Quality",
      color: "Color: Light-green",
      crankset:"Crankset: 3-piece alloy(Black and Silver)",
      Pedals:"Pedals: Pure Fix Platform Pedal",
      Fork: "Fork: Pure Fix Straight Fork- High Tensile Steel(Tig-weided)",
      TubesAndTires: "Tubes and Tire: Kenda Kwest 28/700C",
      chain: "Chain: KMC Chain",
      Stem: "Stem: Promax Four Screw Alloy",
      HandleBars: "HandleBars: Alloy Risers",
      Brakes:"Brakes: Alloy Front Brake",
      Saddle:"Saddle: Pure Fix Urban Saddle",
      Frame: "Frame: High Tensile Steel",
      Grips: "Grips: Oury Grips",
      Promo: "50% discount on all our products is on.The promotion starts from 21st Dec to 3oth Dec, 2021.",
      Weight:"Weight: 150 Pounds ",
      Rear: "Rear Cog	 Shimano HG-50, 11-13-15-17-20-23-26-30-32t",
      FrontRack: "Front Rack	Surly Front Nice Rack – Black",
      BackRack: "Back Rack:	Tubus Logo Rear Rack – Black",
      origin: "Made In: China"
    },
    {
      id: 2,
      title: 'Brompton Bike',
      image:require("../assets/bike2.png"),
      price: "Price: GHS 1050.00",
      Size: "Size: 26-inches",
      Review: "Review: Good Quality",
      color: "Color: Sea-blue",
      crankset:"Crankset: 3-piece alloy(Black and Silver)",
      Pedals:"Pedals: Pure Fix Platform Pedal",
      Fork: "Fork: Pure Fix Straight Fork- High Tensile Steel(Tig-weided)",
      TubesAndTires: "Tubes and Tire: Kenda Kwest 28/700C",
      chain: "Chain: KMC Chain",
      Stem: "Stem: Promax Four Screw Alloy",
      HandleBars: "HandleBars: Alloy Risers",
      Brakes:"Brakes: Alloy Front Brake",
      Saddle:"Saddle: Pure Fix Urban Saddle",
      Frame: "Frame: High Tensile Steel",
      Grips: "Grips: Oury Grips",
      Promo: "50% discount on all our products is on.The promotion starts from 21st Dec to 3oth Dec, 2021.",
      Weight:"Weight: 120 Pounds ",
      Rear: "Rear Cog	 Shimano HG-50, 11-13-15-17-20-23-26-30-32t",
      FrontRack: "Front Rack	Surly Front Nice Rack – Ash",
      BackRack: "Back Rack:	Tubus Logo Rear Rack – Ash",
      origin: "Made In Germany"
    },
    {
      id: 3,
      title: 'Colnago Bike',
      image:require("../assets/bike3.png"),
      price: "GHS 950.00",
      Size: "Size: 28-inches",
      Review: "Review: Good Quality",
      color: "Color: Black",
      crankset:"Crankset: 3-piece alloy(Black and Silver)",
      Pedals:"Pedals: Pure Fix Platform Pedal",
      Fork: "Fork: Pure Fix Straight Fork- High Tensile Steel(Tig-weided)",
      TubesAndTires: "Tubes and Tire: Kenda Kwest 28/700C",
      chain: "Chain: KMC Chain",
      Stem: "Stem: Promax Four Screw Alloy",
      HandleBars: "HandleBars: Alloy Risers",
      Brakes:"Brakes: Alloy Front Brake",
      Saddle:"Saddle: Pure Fix Urban Saddle",
      Frame: "Frame: High Tensile Steel",
      Grips: "Grips: Oury Grips",
      Promo: "50% discount on all our products is on.The promotion starts from 21st Dec to 3oth Dec, 2021.",
      Weight:"Weight: 130 Pounds ",
      Rear: "Rear Cog	 Shimano HG-50, 11-13-15-17-20-23-26-30-32t",
      FrontRack: "Front Rack	Surly Front Nice Rack – Black",
      BackRack: "Back Rack:	Tubus Logo Rear Rack – Black",
      origin: "Made In Italy"
    },
    {
      id: 4,
      title: '3T Bike',
      image:require("../assets/bike4.png"),
      price: "Price: GHS 750.00",
      Size: " Size: 26.5-inches",
      Review: " Review: Good Quality",
      color: "Color: Orange",
      crankset:"Crankset: 3-piece alloy(Black and Silver)",
      Pedals:"Pedals: Pure Fix Platform Pedal",
      Fork: "Fork: Pure Fix Straight Fork- High Tensile Steel(Tig-weided)",
      TubesAndTires: "Tubes and Tire: Kenda Kwest 28/700C",
      chain: "Chain: KMC Chain",
      Stem: "Stem: Promax Four Screw Alloy",
      HandleBars: "HandleBars: Alloy Risers",
      Brakes:"Brakes: Alloy Front Brake",
      Saddle:"Saddle: Pure Fix Urban Saddle",
      Frame: "Frame: High Tensile Steel",
      Grips: "Grips: Oury Grips",
      Promo: "50% discount on all our products is on.The promotion starts from 21st Dec to 3oth Dec, 2021.",
      Weight:"Weight: 200 Pounds ",
      Rear: "Rear Cog	 Shimano HG-50, 11-13-15-17-20-23-26-30-32t",
      FrontRack: "Front Rack	Surly Front Nice Rack – Black",
      BackRack: "Back Rack:	Tubus Logo Rear Rack – Black",
      origin: "Made In Germany",
      },
      {
      id: 5,
      title: 'Bianchi Bike',
      image:require("../assets/bike5.png"),
      price: "Price: GHS 700.00",
      Size: "Size: 29-inches",
      Review: "Review: Good Quality",
      color: "Color: Orange",
      crankset:"Crankset: 3-piece alloy(Black and Silver)",
      Pedals:"Pedals: Pure Fix Platform Pedal",
      Fork: "Fork: Pure Fix Straight Fork- High Tensile Steel(Tig-weided)",
      TubesAndTires: "Tubes and Tire: Kenda Kwest 28/700C",
      chain: "Chain: KMC Chain",
      Stem: "Stem: Promax Four Screw Alloy",
      HandleBars: "HandleBars: Alloy Risers",
      Brakes:"Brakes: Alloy Front Brake",
      Saddle:"Saddle: Pure Fix Urban Saddle",
      Frame: "Frame: High Tensile Steel",
      Grips: "Grips: Oury Grips",
      Promo: "50% discount on all our products is on.The promotion starts from 21st Dec to 3oth Dec, 2021.",
      Weight:"Weight: 160 Pounds ",
      Rear: "Rear Cog	 Shimano HG-50, 11-13-15-17-20-23-26-30-32t",
      FrontRack: "Front Rack	Surly Front Nice Rack – Black",
      BackRack: "Back Rack:	Tubus Logo Rear Rack – Black",
      origin: "Made In China"
      },
      {
      id: 6,
      title: 'Alchemy Bike',
      image:require("../assets/bike6.png"),
      price: "Price: GHS 800.00",
      Size: "Size: 27-inches",
      Review: "Review: Good Quality",
      color: "Color: Green",
      crankset:"Crankset: 3-piece alloy(Black and Silver)",
      Pedals:"Pedals: Pure Fix Platform Pedal",
      Fork: "Fork: Pure Fix Straight Fork- High Tensile Steel(Tig-weided)",
      TubesAndTires: "Tubes and Tire: Kenda Kwest 28/700C",
      chain: "Chain: KMC Chain",
      Stem: "Stem: Promax Four Screw Alloy",
      HandleBars: "HandleBars: Alloy Risers",
      Brakes:"Brakes: Alloy Front Brake",
      Saddle:"Saddle: Pure Fix Urban Saddle",
      Frame: "Frame: High Tensile Steel",
      Grips: "Grips: Oury Grips",
      Promo: "50% discount on all our products is on.The promotion starts from 21st Dec to 3oth Dec, 2021.",
      Weight:"Weight: 250 Pounds ",
      Rear: "Rear Cog	 Shimano HG-50, 11-13-15-17-20-23-26-30-32t",
      FrontRack: "Front Rack	Surly Front Nice Rack – Black",
      BackRack: "Back Rack:	Tubus Logo Rear Rack – Black",
      origin: "Made In China"
      },
  ];
  
  
  
    const Details = ({ navigation }) => {

    const Item = ({ data }) => {
      return(
      <View>
        <View>
       <TouchableOpacity style={styles.items} onPress={() => navigation.navigate('Specifications',data)}>
        <Image style={styles.bike1} source={data.image}  />
        <Text>{data.title}</Text>
       </TouchableOpacity>
       </View>
      </View>
    )};


    const renderItem = ({ item }) =><Item data={item} />;
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
        numColumns={2}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  };


const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:5
    },
    title:{
      fontSize: 100

    },
    bike1:{
        
        width: 170,
        height: 150,
        resizeMode: "contain",
        
    },
    view1:{
        flexDirection: "row",

    },
    view2:{
        flexDirection: "row",


    },
    items:{
        
        top:100,
        flex:1,
        paddingTop:5,

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