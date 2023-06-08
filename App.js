import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, Button, ScrollView, Image, Switch, TextInput } from 'react-native';
import RegistrationScreen from './components/RegistrationScreen/RegistrationScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-Medium.ttf'),
  });
  return (
    <View style={styles.container}>
      <RegistrationScreen/>
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
