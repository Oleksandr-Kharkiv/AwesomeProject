import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import * as Font from "expo-font";
import { MaterialIcons } from "@expo/vector-icons";
import postPhoto from "../../Images/rectangle_23.jpg";

const CreatePostsScreen = () => {
  return (
    <ScrollView>
    <View style={styles.body}>
      <TouchableOpacity style={styles.postPhotoWrap}>
        <Image source={postPhoto} style={styles.postPhoto} />
        <Text style={styles.editPostPhoto}>Редагувати фото</Text>
      </TouchableOpacity>
      <View style={styles.postInputsWrap}>
      <View>
        <TextInput
          style={styles.postTitleInput}
          placeholder="Назва"
          autoCompleteType="off"
          />
        {/* <Text style={styles.postPhotoTitle}>Ліс</Text> */}
      </View>
      <View>
        <TextInput
          style={styles.postTitleInput}
          placeholder="Місцевість"
          autoCompleteType="off"
          />
        {/* <Text style={styles.postPhotoLocation}>Ivano-Frankivs'k Region, Ukraine</Text> */}
      </View>
      </View>
      <TouchableOpacity
        style={styles.publishPostBtn}
        onPress={console.log(`Опублікувати`)}
        >
        <Text style={styles.btnTitle}>Опублікувати</Text>
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
  body: {
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
    marginBottom: 32,
  },
  postPhoto: {
    width: "100%",
    maxHeight: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  editPostPhoto: {
    fontFamily: "Roboto400",
    color: "#BDBDBD",
    fontWeight: 400,
    fontSize: 17,
  },
  postInputsWrap:{
    display: "flex",
    gap: 16,
    marginBottom: 32,
  },
  postTitleInput:{
    height: 50,
    borderColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  postPhotoTitle: {
    fontFamily: "Roboto500",
    color: "#212121",
    fontWeight: 500,
    fontSize: 16,
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
});

export default CreatePostsScreen;
