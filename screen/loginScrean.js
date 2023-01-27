import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";

const loginScrean = ({ navigation }) => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.text}>Username</Text>
      <TextInput style={styles.textInput}></TextInput>
      <Text style={styles.text}>Password</Text>
      <TextInput style={styles.textInput}></TextInput>
      <Text style={{ marginRight: 24, textAlign: "right" }}>
        Forger Password
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.appButtonContainer}
      >
        <Text style={styles.appButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={{ textAlign: "center", marginTop: 150 }}>
        Atau belum memiliki akun
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Registrasi")}>
        <Text style={{ textAlign: "center" }}>
          Bisa daftar <Text style={{ color: "blue" }}> Di Sini</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default loginScrean;

const styles = StyleSheet.create({
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    // paddingLeft: 40,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#EC6796",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 24,
  },
  screenContainer: {
    marginTop: 150,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    marginTop: 24,
    marginLeft: 24,
  },
  textInput: {
    marginLeft: 24,
    marginRight: 24,
    backgroundColor: "#D3D3D3",
    // borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 6,
  },
  bottom: {
    marginLeft: 24,
    marginRight: 24,
    backgroundColor: "#D3D3D3",
    // borderWidth: 1,
    borderRadius: 6,
  },
});
