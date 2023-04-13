import { View, Text, StyleSheet } from "react-native";

const GameItem = ({ title, location, time, joined }) => {
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
        </View>

        <View>
          <View style={styles.locationContainer}>
            <Text style={styles.location}>{location}</Text>
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
  }
});

export default GameItem;
