import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
} from "react-native";
import * as Font from "expo-font";
import { Feather, MaterialIcons, Octicons } from "@expo/vector-icons";
import postPhoto_2 from "../../images/img_24.jpg";

const CommentsScreen = () => {
  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Коментарі</Text>
        </View>
        <View style={styles.comments}>
          <Image source={postPhoto_2} style={styles.postPhoto} />
          <View style={styles.commentInputWrap}>
            <TextInput
              style={styles.commentInput}
              placeholder="Коментувати..."
              autoCompleteType="off"
            />
            <TouchableOpacity style={styles.sendCommentBtn}>
            <MaterialIcons name="arrow-upward" size={24} color="#FFFFFF" />
            </TouchableOpacity>
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
  comments: {
    position: "relative",
    height: "100%",
    paddingTop: 32,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    display: "flex",
    backgroundColor: "#ffffff",
  },

  postPhoto: {
    position: "relative",
    borderRadius: 8,
    width: "100%",
    height: 240,
    marginBottom: 32,
  },

  commentInputWrap: {
    position: "relative",
  },
  commentInput:{
    backgroundColor:  "#E8E8E8",
    borderRadius: 100,
    height: 50,
    paddingTop: 16,
    paddingBottom: 15,
    paddingLeft: 16,
    fontSize: 16,
    
  },

  sendCommentBtn: {
    position: "absolute",
    top: 8,
    right: 8,
    bottom: 8,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    width: 34,
    height: 34,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CommentsScreen;
