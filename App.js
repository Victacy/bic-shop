import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NavRoute from "./src/route/navRoute";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    // <View style={styles.container}>
    <NavigationContainer>
      <NavRoute />
      <StatusBar style="auto" />
    </NavigationContainer>
    // yar</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
