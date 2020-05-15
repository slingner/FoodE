import React from 'react';
import { View, StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default function PlusButton() {
  return (
    <ActionButton buttonColor='rgba(231,76,60,1)'>
      <ActionButton.Item
        buttonColor='#9b59b6'
        title='Profile'
        onPress={() => console.log('notes tapped!')}
      >
        <Icon name='md-person' style={styles.actionButtonIcon} />
      </ActionButton.Item>
      <ActionButton.Item
        buttonColor='#3498db'
        title='Explore Recipes'
        onPress={() => {}}
      >
        <Icon name='md-pizza' style={styles.actionButtonIcon} />
      </ActionButton.Item>
      <ActionButton.Item
        buttonColor='#1abc9c'
        title='New Recipe'
        onPress={() => {}}
      >
        <Icon name='md-nutrition' style={styles.actionButtonIcon} />
      </ActionButton.Item>
    </ActionButton>
  );
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
