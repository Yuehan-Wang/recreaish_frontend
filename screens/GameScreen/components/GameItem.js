import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
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
                <TouchableOpacity style={styles.button} onPress={() => console.log("Join pressed")}>
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
