import { View, Text, StyleSheet,FlatList, ScrollView, SafeAreaView  } from "react-native";
import Map from "../components/Map";
import GameItem from "../components/GameItem";

export default function PlaceScreen() {
  const items = [
    {
      id: "1",
      joined: 0,
      Activity: "Morning Run",
      Time: "01/03/2023 8:00 - 9:00",
      Location: "Lakeview",
      description: "This is item 1",
      participants: [
        'https://picsum.photos/id/237/200/300',
        'https://picsum.photos/id/238/200/300',
      ],
    },
    {
      id: "2",
      joined: 1,
      Activity: "Hiking",
      Time: "01/04/2023 8:00 - 9:00",
      Location: "Charles Mound",
      description: "This is item 1",
      participants: [
        'https://picsum.photos/id/239/200/300',
        'https://picsum.photos/id/232/200/300',
        'https://picsum.photos/id/237/200/300',
      ],
    },
    {
      id: "3",
      joined: 0,
      Activity: "Morning Run",
      Time: "01/03/2023 8:00 - 9:00",
      Location: "Lakeview",
      description: "This is item 1",
      participants: [
        'https://picsum.photos/id/239/200/300',
        'https://picsum.photos/id/248/200/300',
      ],
    },
    {
      id: "4",
      joined: 0,
      Activity: "Morning Run",
      Time: "01/03/2023 8:00 - 9:00",
      Location: "Lakeview",
      description: "This is item 1",
      participants: [
        'https://picsum.photos/id/235/200/300',
        'https://picsum.photos/id/228/200/300',
        'https://picsum.photos/id/258/200/300',
        'https://picsum.photos/id/230/200/300'
      ],
    },
  ];

  return (
    <SafeAreaView  style={styles.rootContainer}>
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <Map />
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={items}
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
          />
        </View>
      </View>
    </SafeAreaView >
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
    height: "40%",
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
