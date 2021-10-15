import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import bic1 from '../images/bic1.png'
import bic2 from '../images/bic2.png'
import bic3 from '../images/bic3.png'


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.menu1}>
        <Ionicons name="ios-menu-outline" size={24} color="black" />
        <FontAwesome name="motorcycle" size={24} color="black" />
        <View style={styles.menu2}>
          <AntDesign name="search1" size={20} color="black" />
          <Ionicons name="notifications-outline" size={20} color="black" />
        </View>
      </View>
      <View style={{ marginTop: 12 }}>
        <Text style={{ color: "#bcb8b8", fontSize: 21 }}>
          The World's {""}
          <Text style={{ color: "#ea5a04", fontWeight: "700", fontSize: 25 }}>
            Best Bike
          </Text>
        </Text>
        <Text style={{ fontWeight: 800, marginTop: 20,fontSize:17 }}>Categories</Text>
        <View style={{ flexDirection: "row", marginTop: 13,justifyContent:'space-between', }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#f0efef",
              borderRadius: 12,
              marginRight: 10,
              height: 40,
              width: 70,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              fontSize: 20,
            }}
          >
            <Text style={{ color: "#e15502",fontSize:15.5 }}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity             
            style={{
              backgroundColor: "#f0efef",
              borderRadius: 12,
              marginRight: 10,
              height: 40,
              width: 90,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              fontSize: 20,
            }}>
            <Text style={{color:'#a9a9a9',fontSize:15.5}}>Roadbike</Text>
          </TouchableOpacity>
          <TouchableOpacity  
            style={{
              backgroundColor: "#f0efef",
              borderRadius: 12,
              marginRight: 10,
              height: 40,
              width: 90,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              fontSize: 20,
            }}>
            <Text style={{color:'#a9a9a9',fontSize:15.5}}>Mountain</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={{
              backgroundColor: "#f0efef",
              borderRadius: 12,
              marginRight: 10,
              height: 40,
              width: 90,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              fontSize: 20,
            }}>
            <Text style={{color:'#a9a9a9',fontSize:15.5}}>Urban</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection:'row',marginTop:13,justifyContent:'space-evenly'}}>
        <TouchableOpacity style={{marginRight:10,borderRadius:20,marginRight:10,paddingLeft:10,backgroundColor:'#f0efef',height:300,width:200,}}>
        <AntDesign name="hearto" size={20} color="#e36100" style={{paddingTop:10,}}/>
          <Image source={bic1} style={{alignContent:'center',height:200,width:180}}/>
          <Text style={{color:'#a5a4a3',fontWeight:'500',fontSize:16.5,textAlign:'center'}}>Pinarello Bike</Text>
          <Text style={{color:'#e36100',textAlign:'center',fontWeight:'300'}} >$ {''}
          <Text style={{color:'black',fontWeight:'600',fontSize:16.5}}>1,700.00</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginRight:10,borderRadius:20,marginRight:10,paddingLeft:10,backgroundColor:'#f0efef',height:300,width:200,}}>
        <AntDesign name="hearto" size={20} color="black" style={{paddingTop:10,}}/>
          <Image source={bic2} style={{alignContent:'center',height:200,width:180}}/>
          <Text style={{color:'#a5a4a3',fontWeight:'500',fontSize:16.5,textAlign:'center'}}>Brompton Bike</Text>
          <Text style={{color:'#e36100',textAlign:'center',fontWeight:'300'}} >$ {''}
          <Text style={{color:'black',fontWeight:'600',fontSize:16.5}}>1,500.00</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop:15,flexDirection:'row',marginTop:13,justifyContent:'space-evenly'}}>
        <TouchableOpacity style={{marginRight:10,borderRadius:20,marginRight:10,paddingLeft:10,backgroundColor:'#f0efef',height:300,width:200,}}>
        <AntDesign name="hearto" size={20} color="black" style={{paddingTop:10,}}/>
          <Image source={bic3} style={{alignContent:'center',height:200,width:180}}/>
          <Text style={{color:'#a5a4a3',fontWeight:'500',fontSize:16.5,textAlign:'center'}}>Schwinn Bike</Text>
          <Text style={{color:'#e36100',textAlign:'center',fontWeight:'300'}} >$ {''}
          <Text style={{color:'black',fontWeight:'600',fontSize:16.5}}>1,200.00</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginRight:10,borderRadius:20,marginRight:10,paddingLeft:10,backgroundColor:'#f0efef',height:300,width:200,}}>
        <AntDesign name="hearto" size={20} color="black" style={{paddingTop:10,}}/>
          <Image source={bic1} style={{alignContent:'center',height:200,width:180,}}/>
          <Text style={{color:'#a5a4a3',fontWeight:'500',fontSize:16.5,textAlign:'center'}}>Norco Bike</Text>
          <Text style={{color:'#e36100',textAlign:'center',fontWeight:'300'}} >$ {''}
          <Text style={{color:'black',fontWeight:'600',fontSize:16.5}}>9,80.00</Text>
          </Text>
        </TouchableOpacity>
      </View>
      {/* <Text>Welcome to Bicycle home page</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
        <Text>Cart Page</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: 55,
    paddingHorizontal: 20,
  },
  menu1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menu2: {
    flexDirection: "row",
    // justifyContent: "space-between",
    // flex: "0.09",
  },
});
