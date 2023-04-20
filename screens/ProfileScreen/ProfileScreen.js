import { View, Text, StyleSheet } from "react-native";
const profileData = require("./profileDummy.json");
import ProfilePictureBox from "./components/ProfilePictureBox";

export default function ProfileScreen() {
  console.log(profileData.profilePictures);
  return (
    <View style={styles.rootContainer}>
      <ProfilePictureBox pictureUrls={profileData.profilePictures} />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  highlight: {
    fontWeight: "bold",
    color: "orange",
  },
});
