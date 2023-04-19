import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default function Map() {
  const [locationPermission, setLocationPermission] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      setLocationPermission(status);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (locationPermission === 'granted') {
        let { coords } = await Location.getCurrentPositionAsync({});
        setLocation(coords);
      }
    })();
  }, [locationPermission]);

  return (
    <View style={styles.container}>
      {location && <MapView style={styles.map}
        provider={PROVIDER_GOOGLE}
        minZoomLevel={12}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}>

        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          pinColor='blue'
        >
        <Callout><Text>You are here</Text></Callout>
        </Marker>
      </MapView>}
      {!location && 
      <View style={styles.loading}>
        <Text style={styles.loadingText}>Loading your location...</Text>
        </View>}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  loading:{
    position:'absolute',
    left:'27%',
    top:'40%',
  },
  loadingText:{
    color:'#F5B502',
    fontWeight:'bold'
  }
});