import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Signup({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Signup page</Text>
      <TouchableOpacity onPress={() =>navigation.navigate('Home')}>
          <Text>HELLO</Text>
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
});
