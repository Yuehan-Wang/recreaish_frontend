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

  const formatTime = (time) => {
    const [start, end] = time.split(' - ');
    const [date, start_time] = start.split(' ');
    const [end_time] = end.split(' ');
  
    const date_obj = new Date(date);
    const month = date_obj.toLocaleString('default', { month: 'short' });
    const day = date_obj.toLocaleString('default', { day: 'numeric' });
  
    const formatted_start_time = formatTimeOfDay(start_time);
    const formatted_end_time = formatTimeOfDay(end_time);
  
    return `${month} ${day}${getOrdinalSuffix(day)} ${formatted_start_time} - ${formatted_end_time}`;
  }
  
  const formatTimeOfDay = (time) => {
    const [hours, minutes] = time.split(':');
    const meridian = hours >= 12 ? 'pm' : 'am';
    const formatted_hours = hours % 12 || 12;
    return `${formatted_hours}:${minutes}${meridian}`;
  }
  
  const getOrdinalSuffix = (day) => {
    const suffixes = ["th", "st", "nd", "rd"];
    const relevantDigits = (day < 30) ? day % 20 : day % 30;
    const suffix = (relevantDigits <= 3) ? suffixes[relevantDigits] : suffixes[0];
    return suffix;
  }
  
  return (
    <View style={[styles.rootContainer, rootContainerStyle]}>
      <View style={styles.cardContainer}>

        <View style={styles.leftContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.timeContainer}>
          <Text style={styles.time}>{formatTime(time)}</Text>
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
