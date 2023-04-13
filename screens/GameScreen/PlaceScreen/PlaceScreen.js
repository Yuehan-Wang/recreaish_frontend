import { View, Text, StyleSheet } from "react-native";
import Map from "../components/Map";
import { FlatList } from "react-native";
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
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fprofile_3135715&psig=AOvVaw2_wvK-XuXE97-IspACFFdk&ust=1681488844305000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMiCqZygp_4CFQAAAAAdAAAAABAE",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fprofile_3135715&psig=AOvVaw2_wvK-XuXE97-IspACFFdk&ust=1681488844305000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMiCqZygp_4CFQAAAAAdAAAAABAE",
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
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fprofile_3135715&psig=AOvVaw2_wvK-XuXE97-IspACFFdk&ust=1681488844305000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMiCqZygp_4CFQAAAAAdAAAAABAE",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fprofile_3135715&psig=AOvVaw2_wvK-XuXE97-IspACFFdk&ust=1681488844305000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMiCqZygp_4CFQAAAAAdAAAAABAE",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fprofile_3135715&psig=AOvVaw2_wvK-XuXE97-IspACFFdk&ust=1681488844305000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMiCqZygp_4CFQAAAAAdAAAAABAE",
      ],
    },
  ];

  return (
    <View style={styles.rootContainer}>
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
              />
            )}
          />
        </View>
      </View>
    </View>
  );
  
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    top:'16%',
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
    flex: 1,
    width: "88%",
    paddingHorizontal: 10,
  },

});
