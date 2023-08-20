import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Platform,
  Image,
} from "react-native";
import * as Font from "expo-font";
import {
  AntDesign,
  Octicons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import photo_bg from "../../images/photo_bg.jpg";
import profileUserPhoto from "../../images/userPhoto.jpg";
import postPhoto_1 from "../../images/img_23.jpg";
import postPhoto_2 from "../../images/img_24.jpg";
import postPhoto_3 from "../../images/img_25.jpg";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  // const [profileUserPhoto, setProfileUserPhoto] = useState(false);
  return (
    <View style={styles.screen}>
      <ImageBackground source={photo_bg} style={styles.backgroundImg}>
        <ScrollView style={styles.scroll}>
          <View style={styles.profile}>
            <View style={styles.profileUserPhotoWrap}>
              <Image
                source={profileUserPhoto}
                style={styles.profileUserPhoto}
              />
              <TouchableOpacity>
                <AntDesign
                  name={profileUserPhoto ? "closecircleo" : "pluscircleo"}
                  color={profileUserPhoto ? "#E8E8E8" : "#FF6C00"}
                  style={styles.iconControlUserPhoto}
                  size={25}
                  onPress={() => {
                    console.log(
                      profileUserPhoto
                        ? "Видалити фото користувача"
                        : "Додати фото користувача"
                    );
                  }}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.wrapIconLogOut}
              onPress={() => {
                console.log("Logout");
              }}
            >
              <MaterialIcons name="logout" size={24} color="#E8E8E8" />
            </TouchableOpacity>
            <View style={styles.textWrap}>
              <Text style={styles.title}>Natali Romanova</Text>
            </View>
            <View style={styles.post}>
              <Image source={postPhoto_1} style={styles.postPhoto} />
              <View style={styles.nameWrap}>
                <Text style={styles.postName}>Ліс</Text>
              </View>
              <View style={styles.wrapper}>
                <View style={styles.reactionsWrap}>
                  <View style={styles.reactionWrap}>
                    <FontAwesome
                      name="comment"
                      size={24}
                      color="#FF6C00"
                      onPress={() => {
                        navigation.navigate("CommentsScreen");
                      }}
                    />
                    <Text>8</Text>
                  </View>
                  <View style={styles.reactionWrap}>
                    <AntDesign name="like2" size={24} color="#FF6C00" />
                    <Text>153</Text>
                  </View>
                </View>
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
                  <Text style={styles.postLocation}>Ukraine</Text>
                </View>
              </View>
            </View>
            <View style={styles.post}>
              <Image source={postPhoto_2} style={styles.postPhoto} />
              <View style={styles.nameWrap}>
                <Text style={styles.postName}>Захід на Чорному морі</Text>
              </View>
              <View style={styles.wrapper}>
                <View style={styles.reactionsWrap}>
                  <View style={styles.reactionWrap}>
                    <FontAwesome
                      name="comment"
                      size={24}
                      color="#FF6C00"
                      onPress={() => {
                        navigation.navigate("CommentsScreen");
                      }}
                    />
                    <Text>3</Text>
                  </View>
                  <View style={styles.reactionWrap}>
                    <AntDesign name="like2" size={24} color="#FF6C00" />
                    <Text>200</Text>
                  </View>
                </View>
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
                  <Text style={styles.postLocation}>Ukraine</Text>
                </View>
              </View>
            </View>
            <View style={styles.post}>
              <Image source={postPhoto_3} style={styles.postPhoto} />
              <View style={styles.nameWrap}>
                <Text style={styles.postName}>Старий будиночок у Венеції</Text>
              </View>
              <View style={styles.wrapper}>
                <View style={styles.reactionsWrap}>
                  <View style={styles.reactionWrap}>
                    <FontAwesome
                      name="comment"
                      size={24}
                      color="#FF6C00"
                      onPress={() => {
                        navigation.navigate("CommentsScreen");
                      }}
                    />
                    <Text>50</Text>
                  </View>
                  <View style={styles.reactionWrap}>
                    <AntDesign name="like2" size={24} color="#FF6C00" />
                    <Text>200</Text>
                  </View>
                </View>
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
                  <Text style={styles.postLocation}>Italy</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    maxWidth: 375,
    justifyContent: "flex-end",
    backgroundColor: "#ffffff",
  },
  backgroundImg: {
    flex: 1,
    justifyContent: "flex-end",
  },
  scroll: {
    flex: 0,
  },
  profile: {
    flex: 1,
    position: "relative",
    marginTop: 147,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingBottom: 11,
    ...Platform.select({
      android: {
        paddingTop: 70,
        paddingBottom: 8,
      },
    }),
  },
  profileUserPhotoWrap: {
    position: "absolute",
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    left: 127,
    right: 128,
    top: -60,
    width: 120,
    height: 120,
    ...Platform.select({
      android: {
        top: -55,
        width: 110,
        height: 110,
      },
    }),
  },
  profileUserPhoto: {
    borderRadius: 16,
    width: 120,
    height: 120,
    ...Platform.select({
      android: {
        width: 110,
        height: 110,
      },
    }),
  },
  iconControlUserPhoto: {
    position: "absolute",
    right: -12,
    bottom: 14,
  },
  wrapIconLogOut: {
    position: "absolute",
    right: 16,
    top: 22,
  },
  textWrap: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 32,
  },
  title: {
    fontFamily: "Roboto500",
    color: "#212121",
    fontWeight: 500,
    letterSpacing: 0.01,
    fontSize: 30,
  },
  post: {
    marginBottom: 32,
    position: "relative",
    display: "flex",
    gap: 8,
    backgroundColor: "#ffffff",
  },
  postPhoto: {
    position: "relative",
    borderRadius: 8,
    width: "100%",
    height: 240,
    ...Platform.select({
      android: {
        overflow: "hidden",
      },
    }),
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
  reactionsWrap: {
    display: "flex",
    flexDirection: "row",
    gap: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  reactionWrap: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  likeWrap: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
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

export default ProfileScreen;
