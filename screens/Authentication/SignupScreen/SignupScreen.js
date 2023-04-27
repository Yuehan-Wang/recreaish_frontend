import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/core";

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
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
      />
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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate("Signin")}>
        <Text style={styles.linkText}>Sign in</Text>
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
  subtitle: {
    fontSize: 16,
    textAlign: "center",
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

export default SignupScreen;
