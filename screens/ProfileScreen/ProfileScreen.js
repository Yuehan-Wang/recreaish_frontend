import { View, Text, StyleSheet } from "react-native";
import ProfilePictureBox from "./components/ProfilePictureBox";
import { useNavigation } from "@react-navigation/core";
import Icon from 'react-native-vector-icons/Ionicons';
import EditSettingBtn from "./components/ui/EditSettingBtn";

const profileData = require("./profileDummy.json");

export default function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.rootContainer}>
      <View style={styles.topBarContainer}>
        <View style={styles.icon}><Icon name="share-social-outline" size={24} color="black" /></View>
        <View style={styles.icon}><Icon name="settings-outline" size={24} color="black" onPress={() => navigation.navigate("SettingScreen")} /></View> 
      </View>
      <View style={styles.profileDataContainer}>
        <View style={styles.photoContainer}>
          <ProfilePictureBox pictureUrls={profileData.profilePictures} />
        </View>
        <View style={styles.settingBtnContainer}>
          <EditSettingBtn title={'Edit Profile'} onPress={() => navigation.navigate("SettingScreen")}/>
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.infoText, {fontWeight:'bold', fontSize:20}]}>{profileData.name}</Text>
          <Text style={[styles.infoText]}>{profileData.location}</Text>
          <Text style={[styles.infoText]}>{profileData.oneLiner}</Text>
        </View>
      </View>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    top: "-10%",
    justifyContent: "center",
    alignItems: "center",
  },
  topBarContainer: {
    flex: 0.1,
    top: "5%",
    right: "-18%",
    flexDirection: "row",
    marginBottom: "-4%",
  },
  icon: {
    marginHorizontal: "2%",
  },
  profileDataContainer: {
    flex: 0.6,
    width: "100%",
    height: "40%",
  },
  photoContainer: {
    flex: 6,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
  },
  settingBtnContainer: {
    width: "25%",
    position: "relative",
    top: "-2.5%",
    right: "-65%",
    marginBottom: "-8%",
  },
  infoContainer: {
    flex: 3,
    margin: "3%",
    marginLeft: "6%",
  },
  infoText: {
    fontSize: 15,
    margin: "1%",
  },
  line: {
    height: 1,
    width:'90%',
    backgroundColor: "#FFAA47",
    position:'absolute',
    bottom: '23%',
    left: '5%'
  },
});

