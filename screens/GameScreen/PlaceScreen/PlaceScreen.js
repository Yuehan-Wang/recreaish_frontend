import { View, Text, StyleSheet } from "react-native"
import Map from "../TimeScreen/components/Map";

export default function PlaceScreen(){
    return (
        <View style={styles.mapContainer}>
          <Map/>
        </View>
      );
}

const styles = StyleSheet.create({
    mapContainer: {
      position:'absolute',
      top:'20%',
      left:'15%',
      width: '70%',
      height:'40%',
      overflow:'hidden',
      borderRadius:20
    },
  });