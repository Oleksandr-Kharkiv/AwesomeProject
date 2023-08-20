import React from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
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
import { MaterialIcons } from "@expo/vector-icons";
import postPhoto_2 from "../../images/img_24.jpg";
import comentAvatar1 from "../../images/comentAvatar1.jpg";
import comentAvatar2 from "../../images/comentAvatar2.jpg";

const CommentsScreen = ({ navigation, route }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.wrapIconBack}
            onPress={() => {
              console.log("goBack");
              navigation.goBack();
            }}
          >
            <MaterialIcons
              name="keyboard-backspace"
              size={24}
              color="#BDBDBD"
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Коментарі</Text>
        </View>
        <ScrollView>
          <View style={styles.comments}>
            <Image source={postPhoto_2} style={styles.postPhoto} />

            <View style={styles.wrapComments}>
              <View style={styles.comment}>
                <Image
                  source={comentAvatar2}
                  resizeMode="cover"
                  style={styles.commentAvatar}
                />
                <View style={styles.commentWrap}>
                  <Text style={styles.commentText}>
                    Really love your most recent photo. I’ve been trying to
                    capture the same thing for a few months and would love some
                    tips!
                  </Text>
                  <Text style={{ ...styles.commentDate, textAlign: "right" }}>
                    09 червня, 2020 | 08:40
                  </Text>
                </View>
              </View>
              <View style={styles.comment}>
                <View style={styles.commentWrap}>
                  <Text style={styles.commentText}>
                    A fast 50mm like f1.8 would help with the bokeh. I’ve been
                    using primes as they tend to get a bit sharper images.
                  </Text>
                  <Text style={styles.commentDate}>
                    09 червня, 2020 | 09:14
                  </Text>
                </View>
                <Image
                  source={comentAvatar1}
                  resizeMode="cover"
                  style={styles.commentAvatar}
                />
              </View>
            </View>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              keyboardVerticalOffset={Platform.OS === "ios" ? 180 : 0}
            >
              <View style={styles.commentInputWrap}>
                <TextInput
                  style={styles.commentInput}
                  placeholder="Коментувати..."
                  autoCompleteType="off"
                />
                <TouchableOpacity
                  style={styles.sendCommentBtn}
                  onPress={() => {
                    console.log("Додати коментар");
                  }}
                >
                  <MaterialIcons
                    name="arrow-upward"
                    size={24}
                    color="#FFFFFF"
                  />
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
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
  wrapIconBack: {
    position: "absolute",
    left: 16,
    bottom: 10,
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
    height: "100%",
    paddingTop: 32,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    display: "flex",
    backgroundColor: "#ffffff",
    flex: 1,
  },
  postPhoto: {
    borderRadius: 8,
    width: "100%",
    height: 240,
  },
  wrapComments: {
    paddingTop: 32,
    paddingBottom: 32,
    display: "flex",
    gap: 24,
  },
  comment: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    gap: 16,
  },
  commentWrap: {
    flex: 1,
    gap: 8,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    padding: 16,
    borderRadius: 6,
  },
  commentText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },
  commentDate: {
    fontSize: 10,
    color: "#BDBDBD",
  },

  commentInputWrap: {
    position: "relative",
  },
  commentInput: {
    backgroundColor: "#E8E8E8",
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
