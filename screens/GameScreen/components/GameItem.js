import { View, Text, StyleSheet,TouchableOpacity, Alert } from "react-native";
import { EvilIcons } from "@expo/vector-icons/build/Icons";
import ProfilePicturesList from "./ui/ProfilePicturesList";
import React, {useState} from "react";


const GameItem = ({ title, location, time, joined: initialJoined, participants }) => {
  const [joined, setJoined] = useState(initialJoined);

  const rootContainerStyle = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: joined ? '#CCFBE5' : '#D9F3FF',
  };

  const joinGame = () => {
    Alert.alert(
      'Join Game',
      'Are you sure you want to join this game?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Join',
          onPress: () => setJoined(true),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={[styles.rootContainer, rootContainerStyle]}>
      <View style={styles.cardContainer}>

        <View style={styles.leftContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.time}>{time}</Text>
          </View>
          <View>
            <ProfilePicturesList urls={participants} size={30}/>
          </View>
        </View>

        <View style={styles.rightContainer}>
          <View style={styles.locationContainer}>
          <EvilIcons name='location' size={18} color='black' />
            <Text style={styles.locationText}>
            {location}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
              {joined ? (
                <TouchableOpacity style={styles.button} onPress={() => console.log("Share pressed")}>
                  <EvilIcons name="share-google" size={30} color="grey" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.button} onPress={joinGame}>
                  <EvilIcons name="plus" size={30} color="grey" />
                </TouchableOpacity>
              )}
        </View>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    margin: "1%",
    borderRadius: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  cardContainer: {
    flex:1,
    flexDirection:'row',
    margin:'5%'
  },
  leftContainer:{
    flex:1,
    flexDirection:'column',
    justifyContent:'space-between'
  },
  locationContainer:{
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  locationText:{
    fontSize:15
  },
  rightContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  buttonContainer:{
    top:'-10%',
    alignSelf: "flex-end",
  }
});

export default GameItem;
