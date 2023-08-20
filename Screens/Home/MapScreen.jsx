import React, { useEffect } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const MapScreen = ({ navigation, route }) => {
  const { location } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.wrapIconBack}
        onPress={() => {
          console.log("goBack");
          navigation.goBack();
        }}
      >
        <MaterialIcons
          name="keyboard-backspace"
          size={30}
          color="rgba(1, 1, 1, 0.7)"
        />
      </TouchableOpacity>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  wrapIconBack: {
    paddingTop: 5,
    paddingLeft: 5,
    paddingBottom: 5,
    paddingRight: 5,
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 99,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 100,
  },
});

export default MapScreen;
