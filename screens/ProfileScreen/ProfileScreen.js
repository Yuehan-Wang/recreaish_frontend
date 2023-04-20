import { View, Text, StyleSheet } from "react-native";
import ProfilePictureBox from "./components/ProfilePictureBox";

const profileData = require("./profileDummy.json");

export default function ProfileScreen() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.profileDataContainer}>
        <View style={styles.photoContainer}>
          <ProfilePictureBox pictureUrls={profileData.profilePictures} />
        </View>
        <View style={styles.infoContainer}>
          <Text>Name: {profileData.name}</Text>
          <Text>Location: {profileData.location}</Text>
          <Text>One-liner: {profileData.oneLiner}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileDataContainer: {
    flex: 0.7,
    width: "100%", 
    height: "40%", 
  },
  photoContainer: {
    flex: 7, 
  },
  infoContainer: {
    flex: 3, 
  },
  highlight: {
    fontWeight: "bold",
    color: "orange",
  },
});
