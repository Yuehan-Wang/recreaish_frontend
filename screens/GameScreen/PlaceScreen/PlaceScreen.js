import { View, Text, StyleSheet,FlatList, ScrollView, SafeAreaView  } from "react-native";
import Map from "../components/Map";
import GameItem from "../components/GameItem";

const items  = require("../gameScreendummydata.json")

export default function PlaceScreen() {
  // Sort the items array by time in ascending order
const sortedItems = [...items].sort((a, b) => {
  const aTime = new Date(a.Time.split(' - ')[0]);
  const bTime = new Date(b.Time.split(' - ')[0]);
  return aTime - bTime;
});

return (
  <SafeAreaView  style={styles.rootContainer}>
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <Map />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={sortedItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameItem
              title={item.Activity}
              location={item.Location}
              joined={item.joined}
              time={item.Time}
              participants={item.participants}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    top:'10%',
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
  },
  mapContainer: {
    width: "88%",
    height: "43%",
    overflow: "hidden",
    borderRadius: 20,
    borderColor: "#F5B502",
    borderWidth: 2,
    marginBottom: 20,
  },
  listContainer: {
    flex: 0.8,
    width: "90%",
    paddingHorizontal: 10,
  },

});
