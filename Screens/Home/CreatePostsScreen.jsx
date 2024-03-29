import React, { useEffect, useRef, useState } from "react";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import { Feather, Ionicons, MaterialIcons, Octicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import * as MediaLibrary from "expo-media-library";

const CreatePostsScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [postPhoto, setPostPhoto] = useState(null);
  const [photoTitle, setPhotoTitle] = useState("");
  const [locationAdress, setLocationAdress] = useState("");
  const [location, setLocation] = useState(null);
  const [isPostSent, setIsPostSent] = useState(false);
  const isMounted = useRef(true);
  const navigation = useNavigation();

  const disabledBtn =
    !postPhoto || !photoTitle || !locationAdress || isPostSent;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();

    (async () => {
      let { status: locationStatus } =
        await Location.requestForegroundPermissionsAsync();
      if (locationStatus !== "granted") {
        console.error("Location permission not granted");
        return;
      }
    })();

    return () => {
      isMounted.current = false;
    };
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      setPostPhoto(uri);
      await MediaLibrary.createAssetAsync(uri);
    }
  };

  const publishPost = async () => {
    console.log("Опублікувати пост");
    setIsPostSent(true);
    try {
      const location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    } catch (error) {
      console.error("Помилка при опублікуванні посту:", error);
    } finally {
      setIsPostSent(false);
      navigation.navigate("PostsScreen");
      setPostPhoto(null);
      setPhotoTitle("");
      setLocationAdress("");
      // console.log("координати з location:", location);
    }
  };

  const deletePost = () => {
    console.log("Видалити пост");
    setPostPhoto(null);
    setPhotoTitle("");
    setLocationAdress("");
    setLocation(null);
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.post}>
          <View style={styles.postPhotoWrap}>
            {postPhoto ? (
              <Image source={{ uri: postPhoto }} style={styles.postPhoto} />
            ) : (
              <Camera
                style={styles.postPhoto}
                type={type}
                ref={(ref) => setCameraRef(ref)}
              >
                <TouchableOpacity
                  style={styles.flipContainer}
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}
                >
                  <Ionicons
                    name="camera-reverse-outline"
                    size={24}
                    color="#ffffff"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.photoCameraIconWrap}
                  onPress={takePhoto}
                >
                  <MaterialIcons
                    name="photo-camera"
                    size={24}
                    color="#ffffff"
                  />
                </TouchableOpacity>
              </Camera>
            )}
            {postPhoto ? (
              <TouchableOpacity
                onPress={() => {
                  setPostPhoto("");
                }}
              >
                <Text style={styles.editPostPhoto}>Редагувати фото</Text>
              </TouchableOpacity>
            ) : (
              <Text style={styles.editPostPhoto}>Завантажте фото</Text>
            )}
          </View>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
          >
            <View style={styles.postInputsWrap}>
              {isPostSent && <ActivityIndicator style={styles.loader} />}
              <View>
                <TextInput
                  style={styles.postNameInput}
                  placeholder="Назва..."
                  autoCompleteType="off"
                  value={photoTitle}
                  onChangeText={(text) => setPhotoTitle(text)}
                />
              </View>
              <View style={styles.locationInputWrap}>
                <TextInput
                  style={styles.postLocationInput}
                  placeholder="Місцевість..."
                  autoCompleteType="off"
                  value={locationAdress}
                  onChangeText={(text) => setLocationAdress(text)}
                />
                <Octicons
                  name="location"
                  size={24}
                  style={styles.postLocationIcon}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
          <TouchableOpacity
            style={{
              ...styles.publishPostBtn,
              backgroundColor: disabledBtn ? "#F6F6F6" : "#FF6C00",
            }}
            onPress={publishPost}
            disabled={disabledBtn}
          >
            <Text
              style={{
                ...styles.btnTitle,
                color: disabledBtn ? "#BDBDBD" : "#FFFFFF",
              }}
            >
              {!isPostSent ? "Опублікувати" : "Публікую"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deletePostBtn} onPress={deletePost}>
            <Feather name="trash-2" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
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
  flipContainer: {
    marginTop: 5,
    paddingRight: 10,
    flex: 0.1,
    alignSelf: "flex-end",
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
    position: "relative",
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
  locationInputWrap: {
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
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -10 }, { translateY: -30 }],
  },
});

export default CreatePostsScreen;
