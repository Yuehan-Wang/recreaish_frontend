import { View, Text, StyleSheet } from "react-native"
import FloatingButton from "../components/ui/FloatingButton";
export default function PlaceScreen(){
    return (
        <View style={styles.rootContainer}>
          <Text>
            This is the <Text style={styles.highlight}>"Place"</Text> screen!
          </Text>
        </View>
      );
}

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    highlight: {
      fontWeight: 'bold',
      color: 'orange',
    },
  });