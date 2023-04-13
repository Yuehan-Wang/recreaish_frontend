import { View, Text, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons/build/Icons";
import ProfilePicturesList from "./ui/ProfilePicturesList";

const GameItem = ({ title, location, time, joined, participants }) => {
  const rootContainerStyle = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: joined ? '#CCFBE5' : '#D9F3FF',
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

        <View>
          <View style={styles.locationContainer}>
          <EvilIcons name='location' size={18} color='black' />
            <Text style={styles.locationText}>
            {location}
            </Text>
          </View>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    margin: "1%",
    borderRadius: 20,
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
    flexDirection:'column'
  },
  locationContainer:{
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  locationText:{
    fontSize:15
  }
});

export default GameItem;
