// import homeSvg from "./Images/home_indicator.svg";
import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
// import { inline } from "react-native-web/dist/cjs/exports/StyleSheet/compiler";

const RegistrationScreen = () => {
  const [logIn, setLogIn] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.form}>
      <View style={styles.textWrap}>
        <Text style={styles.title}>Реєстрація</Text>
      </View>
      <View style={styles.inputsWrap}>
        <TextInput
          style={styles.input}
          placeholder="Логін"
          onChangeText={setLogIn}
          value={logIn}
        />
        <TextInput
          style={styles.input}
          placeholder="Адреса електронної пошти"
          onChangeText={setEmail}
          keyboardType="email-address"
          value={email}
        />
        <View style={styles.passwordInputWrap}>
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            onChangeText={setPassword}
            keyboardType="numeric"
            value={password}
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
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log("Зареєстуватися");
        }}
      >
        <View style={styles.textWrap}>
          <Text style={styles.buttonTitle}>Зареєстуватися</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => {
          console.log("Вже є акаунт? Увійти");
        }}
      >
        <Text style={styles.linkText}>Вже є акаунт? Увійти</Text>
      </TouchableOpacity>

      {/* <Image source={homeSvg} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#ffffff",
    borderRadius: 25,
    width: 375,
    height: 549,
  },
  inputsWrap: {
    display: "flex",
    gap: 16,
    marginTop: 32,
    marginBottom: 43,
  },
  textWrap: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    fontFamily: "Roboto500",
    color: "#212121",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 3.17,
    letterSpacing: 0.01,
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
    flex: 1,
    position: "relative",
  },
  showPasswordLink: {
    position: "absolute",
    right: "5%",
    bottom: "50%",
  },
  showPasswordText: {
    fontFamily: "Roboto400",
    fontWeight: "Regular",
    fontSize: 16,
    lineHeight: 1.19,
    color: "#1B4371",
  },
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    marginBottom: 16,
  },
  buttonTitle: {
    fontFamily: "Roboto400",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.19,
    letterSpacing: 0.01,
    textAlign: "center",
    color: "#FFFFFF",
  },
  link: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  linkText: {
    fontFamily: "Roboto400",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.19,
    textAlign: "center",
    color: "#1B4371",
  },
});

export default RegistrationScreen;
