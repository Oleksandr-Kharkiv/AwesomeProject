import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
// import myTabBar from "./myTabBar";
//// https://reactnavigation.org/docs/headers!!!!!!!!!!!

const Tabs = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.screen}>
      <Tabs.Navigator
        initialRouteName="PostsScreen"
        screenOptions={({ route }) => ({
          headerStyle: {
            height: 88,
            borderBottomWidth: 1,
            borderBottomColor: "rgba(0, 0, 0, 0.09)",
            elevation: 0,
          },
          headerTitleAlign: 'center',
          
          headerTitleStyle: {
            fontSize: 17,
            fontFamily: "Roboto500",
            color: "#212121",
            fontWeight: 500,
          },
          headerTitleContainerStyle: {
            justifyContent: 'flex-end',
            paddingBottom: 11,
          },
          headerLeftContainerStyle: {
            alignItems: 'flex-start', 
            justifyContent: 'flex-end',
            paddingBottom: 5,
          },
          headerRightContainerStyle: {
            alignItems: 'flex-end', 
            justifyContent: 'flex-end',
            paddingBottom: 5,
          },
          tabBarIcon: ({ focused, color }) => {
            let iconName;
    
            if (route.name === "PostsScreen") {
              iconName = "grid";
            } else if (route.name === "CreatePostsScreen") {
              iconName = "plus";
            } else if (route.name === "ProfileScreen") {
              iconName = "user";
            }
            return (
              <View
                style={[
                  styles.tabBarIconWrap,
                  focused && styles.activeTabBarIconWrap
                ]}
              >
                <Feather
                  name={iconName}
                  size={iconName === "plus" ? 20 : 24}
                  color={focused ? "#FFFFFF" : color}
                />
             </View> 
            );
          },
        })
      }
      tabBarOptions={{
        labelStyle: { display: "none" },
      }}
      >
        <Tabs.Screen
          name="PostsScreen"
          component={PostsScreen}
          options={{
            title: "Публікації",
            headerRight: () => (
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
                />
              </TouchableOpacity>
            ),
            }}
        />
        <Tabs.Screen
          name="CreatePostsScreen"
          component={CreatePostsScreen}
          options={{
            title: "Створити публікацію",
            headerLeft: () => (
              <TouchableOpacity
                style={styles.wrapIconBack}
                onPress={() => {console.log("Back on PostsScreen"); 
                navigation.navigate("PostsScreen")
                // navigation.goBack()
              }}
              >
                <MaterialIcons
                  name="keyboard-backspace"
                  size={24}
                  color="#BDBDBD"
                />
              </TouchableOpacity>
            ),
            tabBarStyle: {
              display: "none",
          },
          }}
        />
        <Tabs.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
      </Tabs.Navigator>
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
  wrapIconLogOut: {
    paddingTop: 5,
    paddingRight: 16,
    paddingLeft: 5,
    paddingBottom: 5,
  },
  wrapIconBack: {
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    paddingLeft: 16,
  },
  gridIconWrap: {
    marginStart: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  plusIconWrap: {
    justifyContent: "center",
    alignItems: "center",
  },
  userIconWrap: {
    marginEnd: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarIconWrap: {
    justifyContent: "center",
    alignItems: "center",
  },
  activeTabBarIconWrap: {
    backgroundColor: "#FF6C00",
    width: 70,
    height: 40,
    borderRadius: 20,
  },
});

export default Home;