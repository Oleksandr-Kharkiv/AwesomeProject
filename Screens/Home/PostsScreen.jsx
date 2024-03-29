import React from "react";
import {Text, StyleSheet, View, Image, TouchableOpacity, ScrollView, ImageBackground,
} from "react-native";
import * as Font from "expo-font";
import authorPhoto from "../../images/authorPhoto.jpg";
import postPhoto_1 from "../../images/img_23.jpg";
import postPhoto_2 from "../../images/img_24.jpg";
import postPhoto_3 from "../../images/img_25.jpg";
import { FontAwesome, Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PostsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.author}>
          <TouchableOpacity
            style={styles.publicationAuthorWrap}
            onPress={() => {
              console.log("Natali Romanova");
            }}
          >
            <Image source={authorPhoto} style={styles.authorPhoto} />
            <View style={styles.wrap}>
              <Text style={styles.authorLogin}>Natali Romanova</Text>
              <Text style={styles.authorEmail}>email@example.com</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.post}>
          <ImageBackground source={postPhoto_1} style={styles.postPhoto} />
          <View style={styles.nameWrap}>
            <Text style={styles.postName}>Ліс</Text>
          </View>
          <View style={styles.wrapper}>
            <TouchableOpacity
              style={styles.reactionWrap}
              onPress={() => {
                navigation.navigate("CommentsScreen");
              }}
            >
              <FontAwesome name="comment-o" size={24} color="#BDBDBD" />
              <Text>0</Text>
            </TouchableOpacity>
            <View style={styles.locationWrap}>
              <Octicons
                name="location"
                size={24}
                style={styles.postLocationIcon}
                onPress={() => {
                  navigation.navigate("MapScreen", { 
                    location: {
                    latitude: 48.92825,
                    longitude: 24.7324,
                  } 
                })
                }}
              />
              <Text style={styles.postLocation}>
                Ivano-Frankivs'k Region, Ukraine
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.post}>
          <ImageBackground source={postPhoto_2} style={styles.postPhoto} />
          <View style={styles.nameWrap}>
            <Text style={styles.postName}>Захід на Чорному морі</Text>
          </View>
          <View style={styles.wrapper}>
            <TouchableOpacity
              style={styles.reactionWrap}
              onPress={() => {
                navigation.navigate("CommentsScreen");
              }}
            >
              <FontAwesome name="comment-o" size={24} color="#BDBDBD" />
              <Text>0</Text>
            </TouchableOpacity>
            <View style={styles.locationWrap}>
              <Octicons
                name="location"
                size={24}
                style={styles.postLocationIcon}
                onPress={() => {
                  navigation.navigate("MapScreen", { 
                    location: {
                    latitude: 48.92825,
                    longitude: 24.7324,
                  } 
                });
                }}
              />
              <Text style={styles.postLocation}>Crimea, Ukraine</Text>
            </View>
          </View>
        </View>
        <View style={styles.post}>
          <ImageBackground source={postPhoto_3} style={styles.postPhoto} />
          <View style={styles.nameWrap}>
            <Text style={styles.postName}>Старий будиночок у Венеції</Text>
          </View>
          <View style={styles.wrapper}>
            <TouchableOpacity
              style={styles.reactionWrap}
              onPress={() => {
                navigation.navigate("CommentsScreen");
              }}
            >
              <FontAwesome name="comment-o" size={24} color="#BDBDBD" />
              <Text>50</Text>
            </TouchableOpacity>
            <View style={styles.locationWrap}>
              <Octicons
                name="location"
                size={24}
                style={styles.postLocationIcon}
                onPress={() => {
                  navigation.navigate("MapScreen", { 
                    location: {
                    latitude: 48.92825,
                    longitude: 24.7324,
                  } 
                });
                }}
              />
              <Text style={styles.postLocation}>Venice, Italy</Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
    fontFamily: "Roboto500",
    color: "#212121",
    fontWeight: 500,
    fontSize: 17,
  },
  wrapIconLogOut: {
    position: "absolute",
    right: 16,
    bottom: 10,
  },
  author: {
    position: "relative",
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#ffffff",
  },
  publicationAuthorWrap: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  authorPhoto: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  wrap: {
    justifyContent: "center",
  },
  authorLogin: {
    fontSize: 13,
    fontWeight: 700,
  },
  authorEmail: {
    borderRadius: 16,
  },
  post: {
    marginBottom: 32,
    position: "relative",
    paddingLeft: 16,
    paddingRight: 16,
    display: "flex",
    gap: 8,
    backgroundColor: "#ffffff",
  },
  postPhoto: {
    position: "relative",
    borderRadius: 8,
    width: "100%",
    height: 240,
  },
  nameWrap: {
    margin: 0,
    padding: 0,
    position: "relative",
  },
  postName: {
    margin: 0,
    padding: 0,
    fontFamily: "Roboto500",
    fontSize: 16,
    fontWeight: 500,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  reactionWrap: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  locationWrap: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  postLocation: {
    fontFamily: "Roboto500",
    fontSize: 16,
    fontWeight: 500,
    textDecorationLine: "underline",
  },
  postLocationIcon: {
    color: "#BDBDBD",
  },
});

export default PostsScreen;
