import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Ini tempat import screen
import { loginScrean, HomeScreen, profileScreen, searcBar } from "./screen";
import registrasiScrean from "./screen/registrasiScrean";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={loginScrean} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={profileScreen} />
        <Stack.Screen name="Search" component={searcBar} />
        <Stack.Screen name="Registrasi" component={registrasiScrean} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
