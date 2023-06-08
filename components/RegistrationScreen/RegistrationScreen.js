import React from "react";
import { View, StyleSheet, TextInput, Text, Button } from "react-native";

const RegistrationScreen = () => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  return (
    <View style={styles.form}>
      <Text style={styles.text}>Реєстрація</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Логін"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={text}
        placeholder="Адреса електронної пошти"
        // keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Пароль"
      />
      <Button style={styles.button}/>
    </View>
  );
};

const styles = StyleSheet.create({
  // form: {
  //   position: absolute,
  //   width: 375,
  //   height: 549,
  //   left: 0,
  //   top: 263,
  //   backgroundColor: FFFFFF,
  //   borderRadius: 25,
  // },
  text: {
    textAlign: "center",
    fontFamily: "Roboto",
    color: "212121",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 3.17,
    letterSpacing: 0.01,
    marginBottom: 32,
  },
  input: {
    backgroundColor: "F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "E8E8E8",
    borderRadius: 8,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  // button: {
    // display: flex,
    // flexDirection: column,
    // alignItems: center,
    // paddingTop: 16,
    // paddingBottom: 16,
    // paddingLeft: 32,
    // paddingRight: 32,
    // gap: 12,
    // // position: absolute,
    // height: 51,
    // left: 16,
    // right: 16,
    // bottom: 113,

    // background: "FF6C00",
    // borderRadius: 100,
  // },
});

export default RegistrationScreen;
