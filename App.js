import {
  StyleSheet,
  View,
} from "react-native";
import * as Font from "expo-font";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import PostsScreen from "./Screens/PostsScreen/PostsScreen";
import { useEffect, useState } from "react";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Roboto500': require("./assets/fonts/Roboto-Medium.ttf"),
        'Roboto400': require("./assets/fonts/Roboto-Regular.ttf"),
      });
  
      setFontLoaded(true);
    };
  
    loadFonts();
  }, []);

  return (
    <View style={styles.container}>
      {/* <RegistrationScreen /> */}
      <LoginScreen />
      {/* <PostsScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d2d0",
  },
});