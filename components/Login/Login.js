import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App({ navigation }) {
  function login() {
    console.log('Login!');
  }

  return (
    <View style={styles.container}>
      <Text>FoodE</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        autoFocus={true}
        placeholder='UserName'
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder='Password'
      />
      <Button
        onPress={() => {
          navigation.navigate('Signup');
        }}
        title='Login'
        color='#841584'
        accessibilityLabel='Learn more about this purple button'
      />
      <Button
        onPress={() => {
          navigation.navigate('Dashboard');
        }}
        title='Dashboard'
        color='#841584'
        accessibilityLabel='Go to Dashboard'
      />
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
