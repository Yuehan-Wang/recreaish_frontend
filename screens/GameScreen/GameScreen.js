import { View, Text, StyleSheet } from "react-native"
import PlaceScreen from "./PlaceScreen/PlaceScreen";
import TimeScreen from "./TimeScreen/TimeScreen";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FloatingButton from "./components/ui/FloatingButton";

const Tab = createMaterialTopTabNavigator();

export default function GameScreen(){
    return (
      <View style={styles.rootContainer}>
        <View style={styles.navContainer}>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle:{
              fontSize: 15
            },
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "black",
            tabBarIndicatorContainerStyle: {
             display:'none'
            },
            
            tabBarStyle: {
              backgroundColor: "#F5B502",
              position: "absolute",
              left: "5%",
              right: "5%",
              borderRadius: 20,
              marginTop: '20%',
              height: "5%",
            },
          }}>
          <Tab.Screen name="Place" component={PlaceScreen} />
          <Tab.Screen name="Time" component={TimeScreen} />
        </Tab.Navigator>
        </View>
        <FloatingButton style={{ bottom: 100 }}/>
      </View>
        
      );
}

const styles = StyleSheet.create({
  rootContainer:{
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  navContainer:{
    flex: 1,
  }
})