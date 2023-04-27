import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { LinearGradient } from "expo-linear-gradient";

const SignupScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match");
      return;
    }

    // Send email verification request here
    setIsEmailVerified(true);
  };

  const handleEmailVerification = () => {
    // Handle email verification here
    Alert.alert("Email verified!");
  };

  // if (!isEmailVerified) {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.title}>Verify Your Email</Text>
  //       <Text style={styles.subtitle}>
  //         Please enter the verification code sent to your email address
  //       </Text>
  //       <TextInput
  //         style={styles.input}
  //         placeholder="Verification Code"
  //         onChangeText={handleVerificationCodeChange}
  //       />
  //       <TouchableOpacity
  //         style={styles.button}
  //         onPress={handleEmailVerification}
  //       >
  //         <Text style={styles.buttonText}>Verify Email</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // }

  return (
    <LinearGradient
      colors={["#39C4F6", "#3EB489", "#F5B502"]}
      style={styles.container}
    >
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#555"
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#555"
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#555"
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          placeholderTextColor="#555"
          onChangeText={setConfirmPassword}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate("Signin")}
      >
        <Text style={styles.linkText}>Sign in</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 32,
  },
  inputContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginBottom: 32,
    width: "100%",
  },
  input: {
    width: "100%",
    height: 48,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  button: {
    width: "100%",
    height: 48,
    backgroundColor: "#3EB489",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    position: "absolute",
    bottom: 32,
  },
  linkText: {
    color: "white",
    fontSize: 16,
  },
};

export default SignupScreen;