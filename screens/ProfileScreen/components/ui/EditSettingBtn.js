import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function EditSettingBtn(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ccc",
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 13
  },
});
