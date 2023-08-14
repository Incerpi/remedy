import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';

import Remedy from './src/screens/Remedy';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar/>
      <Remedy/>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
