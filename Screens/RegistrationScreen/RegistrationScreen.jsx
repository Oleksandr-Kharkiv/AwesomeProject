import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import {AntDesign} from '@expo/vector-icons';
import photo_bg from "../../Images/photo_bg.jpg";


const RegistrationScreen = () => {
  const [logIn, setLogIn] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isKeyboardOpen, setIsKeyboardOpen] = React.useState(false);
  const [userPhoto, setUserPhoto] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsKeyboardOpen(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsKeyboardOpen(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <View style={styles.screen}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground source={photo_bg} style={styles.backgroundImg}>
          <KeyboardAvoidingView
            style={styles.wrap}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            // keyboardVerticalOffset={Platform.OS === "ios" ? -170 : -135}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.form}>
                <TouchableOpacity style={styles.userImgWrap}>
                  <AntDesign name={userPhoto ? "closecircleo" : "pluscircleo"}
                    color={userPhoto ? "black" : "#FF6C00"} 
                    style={styles.iconControlUserPhoto}
                    size={25} />
                </TouchableOpacity>
                <View style={styles.textWrap}>
                  <Text style={styles.title}>Реєстрація</Text>
                </View>
                <View style={styles.inputsWrap}>
                  <TextInput
                    style={styles.input}
                    placeholder="Логін"
                    onChangeText={setLogIn}
                    value={logIn}
                    autoCompleteType="off"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Адреса електронної пошти"
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    value={email}
                    autoCompleteType="off"
                  />
                  <View style={styles.passwordInputWrap}>
                    <TextInput
                      style={styles.input}
                      placeholder="Пароль"
                      onChangeText={setPassword}
                      keyboardType="numeric"
                      value={password}
                      autoCompleteType="off"
                    />
                    <TouchableOpacity
                      style={styles.showPasswordLink}
                      onPress={() => {
                        console.log("Показати");
                      }}
                    >
                      <Text style={styles.showPasswordText}>Показати</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {!isKeyboardOpen && (
                <View style={styles.btnWrap}>
                  <TouchableOpacity
                    style={styles.submitBtn}
                    onPress={() => {
                      console.log("Зареєстуватися");
                    }}
                  >
                    <Text style={styles.btnTitle}>Зареєстуватися</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.loginLink}
                    onPress={() => {
                      console.log("Вже є акаунт? Увійти");
                    }}
                  >
                    <Text style={styles.loginLinkText}>
                      Вже є акаунт? Увійти
                    </Text>
                  </TouchableOpacity>
                </View>
                )}
                {/* <Image source={homeSvg} /> */}
                {/* <StatusBar style="auto" /> */}
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    maxWidth: 375,
    heigth: "100%",
    alignSelf: "center",
  },
  backgroundImg: {
    flex: 1,
    justifyContent: "flex-end",
  },
  form: {
    position: "relative",
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    ...Platform.select({
      ios: {
        paddingTop: 92,
        paddingBottom: 32,
      },
      android: {
        paddingTop: 70,
        paddingBottom: 10,
      },
    }),
  },
  userImgWrap: {
    position: "absolute",
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    left: 127,
    right: 128,
    ...Platform.select({
      ios: {
        top: -60,
        width: 120,
        height: 120,
      },
      android: {
        top: -55,
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
  textWrap: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  inputsWrap: {
    display: "flex",
    ...Platform.select({
      ios: {
        gap: 16,
        marginTop: 32,
      },
      android: {
        gap: 10,
        marginTop: 16,
      },
    }),
  },
  title: {
    fontFamily: "Roboto500",
    color: "#212121",
    fontWeight: 500,
    letterSpacing: 0.01,
    fontSize: 30,
  },
  input: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    height: 40,
    padding: 10,
    placeholderTextColor: "#BDBDBD",
  },
  passwordInputWrap: {
    position: "relative",
  },
  showPasswordLink: {
    position: "absolute",
    top: "25%",
    right: "3%",
    bottom: "25%",
  },
  showPasswordText: {
    fontFamily: "Roboto400",
    fontSize: 16,
    color: "#1B4371",
  },
  btnWrap: {
    ...Platform.select({
      ios: {
        marginTop: 43,
      },
      android: {
        marginTop: 33,
      },
    }),
  },
  submitBtn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    ...Platform.select({
      ios: {
        height: 51,
        paddingTop: 16,
        paddingBottom: 16,
      },
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
  loginLink: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 16,
    ...Platform.select({
      ios: {
        marginBottom: 45,
      },
      android: {
        marginBottom: 10,
      },
    }),
  },
  loginLinkText: {
    fontSize: 16,
    textAlign: "center",
    color: "#1B4371",
  },
});

export default RegistrationScreen;
