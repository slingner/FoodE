import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Nav(props) {
  function onHamburgerClick() {
    props.toggleDrawer();
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onHamburgerClick}>
        <Text>Ham</Text>
      </TouchableOpacity>
      <Text>FoodE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    marginTop: 30,
  },
});
