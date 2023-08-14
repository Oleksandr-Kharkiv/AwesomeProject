import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Font from "expo-font";
import authorPhoto from "../../Images/authorPhoto.jpg";

const PostsScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.body}>
        <TouchableOpacity style={styles.publicationAuthorWrap} onPress={() => {
                      console.log("Natali Romanova");
                    }}>
          <Image source={authorPhoto} style={styles.authorPhoto} />
          <View style={styles.wrap} >
          <Text style={styles.authorLogin}>Natali Romanova</Text>
          <Text style={styles.authorEmail}>email@example.com</Text>
          </View>
        </TouchableOpacity>
      </View>
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
    fontFamily: 'Roboto500',
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
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#ffffff",
  },
  publicationAuthorWrap: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  authorPhoto: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  wrap: {
    justifyContent: 'center',
  },
  authorLogin: {
    fontSize: 13,
    fontWeight: 700,

  },
  authorEmail: {
    borderRadius: 16,
  },

});

export default PostsScreen;
