import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class Login extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>FoodE</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          placeholder='UserName'
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          placeholder='Password'
        />
        <Button
          onPress={() => navigate('Dashboard')}
          title='Login'
          color='#841584'
          accessibilityLabel='Learn more about this purple button'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
