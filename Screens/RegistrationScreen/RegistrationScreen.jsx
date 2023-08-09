import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import * as Font from "expo-font";
import {AntDesign} from '@expo/vector-icons';
import photo_bg from "../../Images/photo_bg.jpg";

const RegistrationScreen = () => {
  const [logIn, setLogIn] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isKeyboardOpen, setIsKeyboardOpen] = React.useState(false);
  const [userPhoto, setUserPhoto] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

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

  const onRegistration = () => {
    console.log("Registration form:", `{logIn: ${logIn}, email: ${email}, password: ${password}}`);
  };

  const handleShowPassword = () => {
    setShowPassword(true);
    console.log("Показати пароль:", `${password}`);
  };

  const handleHidePassword = () => {
    setShowPassword(false);
  };

  return (
    <View style={styles.screen}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground source={photo_bg} style={styles.backgroundImg}>
          <KeyboardAvoidingView
            style={styles.wrap}
            behavior={Platform.OS === "ios" ? "padding" : null}
            keyboardVerticalOffset={Platform.OS === "ios" ? -170 : -10}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.form}>
                <TouchableOpacity style={styles.userImgWrap}>
                  <AntDesign name={userPhoto ? "closecircleo" : "pluscircleo"}
                    color={userPhoto ? "#E8E8E8" : "#FF6C00"} 
                    style={styles.iconControlUserPhoto}
                    size={25} 
                    onPress={() => {
                      console.log(userPhoto ? "Видалити фото користувача" : "Додати фото користувача");
                    }}/>
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
                      keyboardType="default"
                      secureTextEntry={!showPassword}
                      value={password}
                      autoCompleteType="off"
                    />
                    <TouchableOpacity
                      style={styles.showPasswordLink}
                      onPressIn={handleShowPassword}
                      onPressOut={handleHidePassword}
                    >
                      <Text style={styles.showPasswordText}>Показати</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {Platform.OS === 'ios' || !isKeyboardOpen ? (
                <View style={styles.btnWrap}>
                  <TouchableOpacity
                    style={styles.submitBtn}
                    onPress={onRegistration}
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
                 ) : null}
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
    alignSelf: "center",
    backgroundColor: "#ffffff",
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
    paddingTop: 92,
    paddingBottom: 32,
    ...Platform.select({
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
    gap: 16,
    marginTop: 32,
    ...Platform.select({
      android: {
        gap: 8,
        marginTop: 12,
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
    fontSize: 16,
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
    marginTop: 43,
    ...Platform.select({
      android: {
        marginTop: 33,
      },
    }),
  },
  submitBtn: {
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
  loginLink: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 16,
    marginBottom: 45,
    ...Platform.select({
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
