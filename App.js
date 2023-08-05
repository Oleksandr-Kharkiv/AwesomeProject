import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Button,
  ScrollView,
  Image,
  Switch,
  TextInput,
} from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto500': require("./assets/fonts/Roboto-Medium.ttf"),
    'Roboto400': require("./assets/fonts/Roboto-Regular.ttf"),
  });
  return (
    <View style={styles.container}>
        <RegistrationScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // position: "relative",
    flex: 1,
    backgroundColor: "#d3d2d0",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
