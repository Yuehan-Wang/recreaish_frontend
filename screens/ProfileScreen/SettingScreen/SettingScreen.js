import { View, Text, StyleSheet } from "react-native"
export default function SettingScreen(){
    return (
        <View style={styles.rootContainer}>
          <Text>
            This is the <Text style={styles.highlight}>"Setting"</Text> screen!
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