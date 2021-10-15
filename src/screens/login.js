import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Bicycle from "../images/bicycle.jpg";
import { AntDesign } from "@expo/vector-icons";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={Bicycle} style={styles.loginpic} />
      <Text style={styles.header}>Welcome to</Text>
      <Text styles={styles.sub}>Power Biker Shop</Text>

      <TouchableOpacity
        style={styles.gbtn}
        onPress={() => navigation.navigate("Cart")}
      >
        <AntDesign name="google" size={24} color="#d90101" />
        <Text style={{ fontsize: 17, marginLeft: 15 }}>Login with Gmail</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          paddingHorizontal: 50,
          padding: 10,
          marginTop: 20,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <AntDesign name="apple1" size={24} color="white" />
        <Text style={{ color: "white", fontSize: 17, marginLeft: 15 }}>
          Login with Apple
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() =>navigation.navigate('Signup')}>
        <Text style={{ marginTop: 10, fontWeight: "500", color: "grey" }}>
          Not a member? {""}
          <Text style={{ color: "orange", fontWeight: "bold" }}>Signup</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  loginpic: {
    height: 150,
    width: 150,
    borderRadius: 20,
    marginBottom: 40,
    transform: [{ rotate: "45deg" }],
  },
  header: {
    color: "black",
    fontSize: 24,
    color: "#5c5c5b",
  },
  sub: {
    color: "#000000",
    fontSize: 32,
    fontWeight: 600,
  },
  gbtn: {
    backgroundColor: "#e3e3e3",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 60,
    marginTop: 20,
    borderRadius: 10,
  },
  apple: {
    backgroundColor: "black ",
    padding: 10,
    paddingHorizontal: 60,
    marginTop: 20,
    borderRadius: 10,
  },
});
