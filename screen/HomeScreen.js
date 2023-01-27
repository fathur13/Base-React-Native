import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Header from "../components/header";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <View>
        <Header textHeader={"Fila Shop"} />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Text>Ke Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Text text30>Search</Text>
        </TouchableOpacity>
        <Text>Ini halaman Home</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
