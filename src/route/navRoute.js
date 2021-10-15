import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Login from "../screens/login";
import Cart from "../screens/cart";
import Signup from "../screens/signup";

const Stack = createNativeStackNavigator();

export default function NavRoute() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}
