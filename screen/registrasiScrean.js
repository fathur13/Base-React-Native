import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
// import styles from '../assets/css/screen.css';
// import './screan';

const registrasiScrean = ({ navigation }) => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Registrasi</Text>
      <Text style={styles.text}>Username</Text>
      <TextInput style={styles.textInput}></TextInput>
      <Text style={styles.text}>Password</Text>
      <TextInput style={styles.textInput}></TextInput>
      <Text style={styles.text}>Confrim Password</Text>
      <TextInput style={styles.textInput}></TextInput>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.appButtonContainer}
      >
        <Text style={styles.appButtonText}>Registrasi</Text>
      </TouchableOpacity>
      <Text style={{ textAlign: "center", marginTop: 80 }}>
        Atau sudah memiliki akun
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={{ textAlign: "center" }}>
          Bisa Login <Text style={{ color: "pink" }}>Disini</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default registrasiScrean;

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
