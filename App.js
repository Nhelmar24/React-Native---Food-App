import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/login';

export default function App() {
  return (
    <View>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
});
