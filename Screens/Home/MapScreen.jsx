import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Font from "expo-font";
import { MaterialIcons } from "@expo/vector-icons";
import authorPhoto from "../../images/authorPhoto.jpg";

const MapScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>MapScreen</Text>
        <TouchableOpacity
          style={styles.wrapIconLogOut}
          onPress={() => {
            console.log("Logout");
          }}
        >
          <MaterialIcons
            name="logout"
            size={24}
            color="#BDBDBD"
            style={styles.iconLogOut}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    maxWidth: 375,
    alignSelf: "center",
    backgroundColor: "#ffffff",
  },

  header: {
    position: "relative",
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 44,
    height: 88,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
    borderBottomWidth: 1,
  },

  headerTitle: {
    fontFamily: 'Roboto500',
    color: "#212121",
    fontWeight: 500,
    fontSize: 17,
  },
  wrapIconLogOut: {
    position: "absolute",
    right: 16,
    bottom: 10,
  },
});

export default MapScreen;