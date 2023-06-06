import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View, Button, ScrollView, Image, Switch, TextInput } from 'react-native';
// import { RegistrationScreen } from './components/RegistrationScreen/RegistrationScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>?|?|?|!/\/\/\/</Text>
      <Button />
      <ScrollView />
      <Image />
      <Switch />
      <TextInput />
      {/* <SafeAreaView>
        <TextInput
          // style={styles.input}
          // onChangeText={onChangeText}
          // value={text}
        />
        </SafeAreaView> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
