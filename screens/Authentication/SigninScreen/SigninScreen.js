import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/core";

const SigninScreen = () => {
  const navigation = useNavigation();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Authenticate user here

    // If authentication fails
    Alert.alert("Invalid email or password");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.linkText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    width: "80%",
    height: 40,
    marginVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 4,
  },
  button: {
    width: "80%",
    height: 40,
    marginTop: 16,
    backgroundColor: "blue",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  link: {
    position: "absolute",
    bottom: 32,
  },
  linkText: {
    color: "blue",
    fontSize: 16,
  },
};

export default SigninScreen;
