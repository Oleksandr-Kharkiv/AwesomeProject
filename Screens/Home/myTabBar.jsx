// import React from "react";
// import { View, StyleSheet } from "react-native";
// import { Feather } from "@expo/vector-icons";

// const myTabBar = ({ state, descriptors, navigation }) => {
//   return (
//     <View style={{ flexDirection: "row", backgroundColor: "#d12b2b" }}>
//       {state.routes.map((route, index) => {
//         const { options } = descriptors[route.key];
//         const label = options.tabBarLabel || route.name;
//             console.log(label);
//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: "tabPress",
//             target: route.key,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//             let iconName;
    
//             if (route.name === "PostsScreen") {
//                 console.log(route.name);
//                 iconName = "grid";
//             } else if (route.name === "CreatePostsScreen") {
//                 console.log(route.name);
//                 iconName = "plus";
//             } else if (route.name === "ProfileScreen") {
//                 console.log(route.name);
//                 iconName = "user";
//             }
//             return (
//               <View
//                 style={[
//                   styles.tabBarIconWrap,
//                   isFocused && styles.activeTabBarIconWrap,
//                 ]}
//               >
//                 <Feather
//                   name={iconName}
//                   size={iconName === "plus" ? 20 : 24}
//                   color={isFocused ? "#FFFFFF" : "#BDBDBD"}
//                 />
//              </View> 
//         );
//     })}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     tabBarIconWrap: {
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     activeTabBarIconWrap: {
//       backgroundColor: "#FF6C00",
//       width: 70,
//       height: 40,
//       borderRadius: 20,
//     },
//   });

// export default myTabBar;