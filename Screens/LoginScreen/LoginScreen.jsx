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
import { useNavigation } from '@react-navigation/native';
import photo_bg from "../../images/photo_bg.jpg";

const LoginScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isKeyboardOpen, setIsKeyboardOpen] = React.useState(false);
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
    
    const navigation = useNavigation();
    
    const onLogIn = () => {
      navigation.navigate("Home");
      console.log("Login form:", `{email: ${email}, password: ${password}}`);
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
            keyboardVerticalOffset={Platform.OS === "ios" ? -280 : 0}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.form}>
                <View style={styles.textWrap}>
                  <Text style={styles.title}>Увійти</Text>
                </View>
                <View style={styles.inputsWrap}>
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
                {Platform.OS === "ios" || !isKeyboardOpen ? (
                  <View style={styles.btnWrap}>
                    <TouchableOpacity
                      style={styles.submitBtn}
                      onPress={onLogIn}
                    >
                      <Text style={styles.btnTitle}>Увійти</Text>
                    </TouchableOpacity>
                    <View style={styles.registrationLinkWrap}>
                    <Text style={styles.registrationLinkText}>
                      Немає акаунту?{" "}
                      </Text>
                      <TouchableOpacity
                        onPress={() => {
                          console.log("Немає акаунту? Зареєструватися");
                        }}
                      >
                        <Text style={styles.registrationLink} 
                        onPress = {() => navigation.navigate("Registration")}>
                          Зареєструватися
                        </Text>
                      </TouchableOpacity>
                  </View></View>
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
    paddingTop: 32,
    paddingBottom: 32,
  },
  textWrap: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  inputsWrap: {
    display: "flex",
    gap: 16,
    marginTop: 32,
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
      ios: {
        paddingBottom: 112,
      },
      android: {
        paddingBottom: 72,
      },
    }),
  },
  submitBtn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 51,
    paddingTop: 16,
    paddingBottom: 16,
  },
  btnTitle: {
    fontFamily: "Roboto400",
    fontSize: 16,
    letterSpacing: 0.01,
    textAlign: "center",
    color: "#FFFFFF",
  },
  registrationLinkWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 45,
    ...Platform.select({
      android: {
        marginBottom: 10,
      },
    }),
  },
  registrationLink: {
    fontSize: 16,
    textAlign: "center",
    color: "#1B4371",
    textDecorationLine: "underline",
  },
  registrationLinkText: {
    fontSize: 16,
    textAlign: "center",
    color: "#1B4371",
  },
});

export default LoginScreen;
