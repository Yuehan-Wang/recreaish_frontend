import { View, Text, StyleSheet, FlatList, ScrollView, SafeAreaView } from "react-native";
import GameItem from "../components/GameItem";
import CalendarView from "../components/CalendarView";
import React, { useState, useRef } from "react";

const items  = require("../gameScreendummydata.json")

export default function TimeScreen() {
  const [selectedDate, setSelectedDate] = useState(null);
  const flatListRef = useRef(null);

  const onDateSelected = (date) => {
    setSelectedDate(date);
    const index = getIndexOfClosestItem(sortedItems, date);
    if (index !== -1) {
      flatListRef.current.scrollToIndex({ index, animated: true });
    }
  };

  const getIndexOfClosestItem = (items, date) => {
    if (!date) return -1;
    const targetDate = new Date(date);
    let closestIndex = -1;
    let closestDiff = Number.MAX_VALUE;
    items.forEach((item, index) => {
      const itemDate = new Date(item.Time.split(" - ")[0]);
      const diff = Math.abs(itemDate - targetDate);
      if (diff < closestDiff) {
        closestDiff = diff;
        closestIndex = index;
      }
    });
    return closestIndex;
  };
  // Sort the items array by time in ascending order
  const sortedItems = [...items].sort((a, b) => {
    const aTime = new Date(a.Time.split(' - ')[0]);
    const bTime = new Date(b.Time.split(' - ')[0]);
    return aTime - bTime;
  });

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.container}>
        <View style={styles.calendarViewContainer}>
          <CalendarView selectedDate={selectedDate}
            onDateSelected={onDateSelected}
            setSelectedDate={setSelectedDate} />
        </View>
        <View style={styles.listContainer}>
          <FlatList
          ref={flatListRef}
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
    top: '10%',
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
    backgroundColor: '#fff',
    overflow: 'hidden',
    marginBottom: 20
  },

  listContainer: {
    flex: 0.8,
    width: "90%",
    paddingHorizontal: 10,
  },

});
