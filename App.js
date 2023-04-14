import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import SignupScreen from './screens/Authentication/SignupScreen/SignupScreen';
import SigninScreen from './screens/Authentication/SigninScreen/SigninScreen';
import GameScreen from './screens/GameScreen/GameScreen';
import ExploreScreen from './screens/ExploreScreen/ExploreScreen';
import ChatScreen from './screens/ChatScreen/ChatScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import AddActivityScreen from './screens/GameScreen/AddScreens/AddActivityScreen/AddActivityScreen';
import AddVenueScreen from './screens/GameScreen/AddScreens/AddVenueScreen/AddVenueScreen';

import { Ionicons, FontAwesome, Entypo, MaterialIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signin" component={SigninScreen}
        screenOptions={{
          headerShown: false,
        }} />
      <Stack.Screen name="Signup" component={SignupScreen}
        screenOptions={{
          headerShown: false,
        }} />
    </Stack.Navigator>
  );
}

function AuthenticatedTab() {
  //const authCtx = useContext(AuthContext);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        showLabel: false,
        tabBarLabelStyle: {
          display: "flex",
          color:'grey'
        },
      }}>
      <Tab.Screen
        name="Game"
        component={GameScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="calendar"
              color={focused ? "#F5B502" : "grey"}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <MaterialIcons
              name="explore"
              color={focused ? "#F5B502" : "grey"}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Entypo
              name="chat"
              color={focused ? "#F5B502" : "grey"}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <FontAwesome
              name="user"
              color={focused ? "#F5B502" : "grey"}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function AuthenticatedStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen
        name = "AuthenticatedTab"
        component={AuthenticatedTab}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name = "AddActivityScreen"
        component={AddActivityScreen}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name = "AddVenueScreen"
        component={AddVenueScreen}
        options={{ headerShown: false}}
      />
    </Stack.Navigator>
  )
}

function Navigation() {
  //const authCtx = useContext(AuthContext);
  return (
    // <NavigationContainer>
    //   {!authCtx.isAuthenticated && <AuthStack />}
    //   {authCtx.isAuthenticated && <AuthenticatedStack />}
    // </NavigationContainer>
    <NavigationContainer>
      <AuthenticatedStack />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Navigation />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
