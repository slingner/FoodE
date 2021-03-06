import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function Signup({ navigation }) {
  function signUp() {
    console.log('signUp!');
  }

  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        autoFocus={true}
        placeholder='Name'
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        autoFocus={true}
        placeholder='UserName'
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder='Password'
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder='Email'
      />
      <Button
        // onPress={() => {
        //   navigation.navigate('Login');
        // }}
        title='Signup'
        color='#841584'
        accessibilityLabel='Learn more about this purple button'
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
