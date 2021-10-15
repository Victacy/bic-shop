import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Cart({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ef3203',
    alignItems: "center",
    justifyContent: "center",
  },
});
