import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons';


export default function AddVenueScreen({navigation}) {
  return (
    <LinearGradient colors={['#39C4F6', '#3EB489', '#F5B502']} style={styles.linearGradient}>
      <TouchableOpacity style={styles.goBackContainer} onPress={() => navigation.goBack()}>
        <Ionicons name="ios-arrow-back" size={30} color="#fff" />
      </TouchableOpacity>
      <View style={styles.rootContainer}>
        <Text>
          This is the <Text style={styles.highlight}>"AddVenue"</Text> screen!
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  highlight: {
    fontWeight: 'bold',
    color: 'orange',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  goBackContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1
  }
});
