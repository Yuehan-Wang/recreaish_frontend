import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={{ flex: 1 }}>
      <Calendar
  onDayPress={handleDayPress}
  markedDates={{
    [selectedDate]: {
      selected: true,
      selectedColor: '#F5B502',
    },
  }}
  style={{
    padding: 0,
    margin: -2,
  }}
  theme={{
    textDayFontSize: 12, // Adjust this value to make the day font size smaller
    textMonthFontSize: 16,
    textDayHeaderFontSize: 12, // Adjust this value to make the day header font size smaller
    'stylesheet.calendar.header': {
      week: {
        marginTop: 2, // Adjust this value to reduce the padding between the week header and the calendar
        marginBottom: 2, // Adjust this value to reduce the padding between the week header and the calendar
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    },
    'stylesheet.day.basic': {
      base: {
        width: 24, // Adjust this value to reduce the width of the date container
        height: 24, // Adjust this value to reduce the height of the date container
        justifyContent: 'center',
        alignItems: 'center'
      },
    },
  }}
/>

    </View>
  );
};

export default CalendarView;
