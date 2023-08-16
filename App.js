import 'react-native-gesture-handler';
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import Home from './Screens/Home/Home';
import MapScreen from './Screens/Home/MapScreen';
import CommentsScreen from './Screens/Home/CommentsScreen';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "Roboto500": require("./assets/fonts/Roboto-Medium.ttf"),
        "Roboto400": require("./assets/fonts/Roboto-Regular.ttf"),
      });
      
      setFontLoaded(true);
    };
    
    loadFonts();
  }, []);
  
  const MainStack = createStackNavigator(); 
  
  return (
    <NavigationContainer>
       <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen options={{
          headerShown: false,
          }} name="Registration" component={RegistrationScreen} />
        <MainStack.Screen options={{
          headerShown: false,
          }} name="Login" component={LoginScreen} />
        <MainStack.Screen options={{
          headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <MainStack.Screen options={{
          headerShown: false,
          }}
          name="MapScreen"
          component={MapScreen}
        />
        <MainStack.Screen options={{
          headerShown: false,
          }}
          name="CommentsScreen"
          component={CommentsScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

