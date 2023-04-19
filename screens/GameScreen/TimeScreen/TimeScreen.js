import { View, Text, StyleSheet,FlatList, ScrollView, SafeAreaView  } from "react-native";
import GameItem from "../components/GameItem";
import CalendarView from "../components/CalendarView";

export default function TimeScreen() {
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
      Time: "01/03/2023 18:00 - 19:00",
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

  // Sort the items array by time in ascending order
const sortedItems = [...items].sort((a, b) => {
  const aTime = new Date(a.Time.split(' - ')[0]);
  const bTime = new Date(b.Time.split(' - ')[0]);
  return aTime - bTime;
});

return (
  <SafeAreaView  style={styles.rootContainer}>
    <View style={styles.container}>
    <View style={styles.calendarViewContainer}>
        <CalendarView />
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
  calendarViewContainer: {
    width: '88%',
    height: '43%',
    borderRadius: 20,
    borderColor: '#F5B502',
    borderWidth: 2,
    backgroundColor:'#fff',
    overflow: 'hidden',
    marginBottom: 20
  },
  
  listContainer: {
    flex: 0.8,
    width: "90%",
    paddingHorizontal: 10,
  },

});
