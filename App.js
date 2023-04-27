import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Home/>

    </View>
  );
}

const styles = StyleSheet.create({
  
});
