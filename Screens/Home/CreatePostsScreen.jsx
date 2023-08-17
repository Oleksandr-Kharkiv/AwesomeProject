import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
} from "react-native";
import * as Font from "expo-font";
import { Feather, MaterialIcons, Octicons } from "@expo/vector-icons";
import postPhoto_1 from "../../images/img_23.jpg";

const CreatePostsScreen = () => {
  return (
    <ScrollView>
      <View style={styles.post}>
        <View style={styles.postPhotoWrap}>
          <ImageBackground source={postPhoto_1} style={styles.postPhoto}>
            <TouchableOpacity style={styles.photoCameraIconWrap}>
              <MaterialIcons name="photo-camera" size={24} color="#ffffff" />
            </TouchableOpacity>
          </ImageBackground>
          <Text style={styles.editPostPhoto}>Редагувати фото</Text>
        </View>
        <View style={styles.postInputsWrap}>
          <View>
            <TextInput
              style={styles.postNameInput}
              placeholder="Назва..."
              autoCompleteType="off"
            />
          </View>
          <View style={styles.locationInputWrap}>
            <TextInput
              style={styles.postLocationInput}
              placeholder="Місцевість..."
              autoCompleteType="off"
            />
            <Octicons name="location" size={24} style={styles.postLocationIcon} />
          </View>
        </View>
        <TouchableOpacity
          style={styles.publishPostBtn}
          onPress={console.log(`Опублікувати`)}
        >
          <Text style={styles.btnTitle}>Опублікувати</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deletePostBtn}>
          <Feather name="trash-2" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
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
  post: {
    position: "relative",
    height: "100%",
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#ffffff",
  },
  postPhotoWrap: {
    position: "relative",
    display: "flex",
    gap: 8,
    marginBottom: 32,
    ...Platform.select({
      android: {
        marginBottom: 10,
      },
    }),
  },
  postPhoto: {
    position: "relative",
    borderRadius: 8,
    width: "100%",
    height: 240,
  },
  photoCameraIconWrap: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(1, 1, 1, 0.3)",
  },
  editPostPhoto: {
    fontFamily: "Roboto400",
    color: "#BDBDBD",
    fontWeight: 400,
    fontSize: 17,
  },
  postInputsWrap: {
    display: "flex",
    gap: 16,
    marginBottom: 32,
    ...Platform.select({
      android: {
        gap: 10,
        marginBottom: 26,
      },
    }),
  },
  postNameInput: {
    fontFamily: "Roboto500",
    fontSize: 16,
    fontWeight: 500,
    height: 50,
    borderColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  locationInputWrap:{
    position: "relative",
  },
  postLocationInput: {
    paddingLeft: 28,
    fontFamily: "Roboto500",
    fontSize: 16,
    fontWeight: 500,
    height: 50,
    borderColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  postLocationIcon: {
    position: "absolute",
    left: 0,
    top: 13,
    color: "#BDBDBD",
  },
  publishPostBtn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 51,
    paddingTop: 16,
    paddingBottom: 16,
    ...Platform.select({
      android: {
        height: 44,
        paddingTop: 12,
        paddingBottom: 12,
      },
    }),
  },
  btnTitle: {
    fontSize: 16,
    letterSpacing: 0.01,
    textAlign: "center",
    color: "#FFFFFF",
  },
  deletePostBtn: {
    marginTop: 120,
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 23,
    paddingRight: 23,
    height: 40,
    width: 70,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
    ...Platform.select({
      android: {
        marginTop: 80,
      },
    }),
  },
});

export default CreatePostsScreen;
