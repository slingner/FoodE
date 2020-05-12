import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function Dashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <Text>Dashboard</Text>
      <Text>Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
});
