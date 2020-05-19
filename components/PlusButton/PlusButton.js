import React from 'react';
import { View, StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class PlusButton extends React.Component {
  render() {
    console.log(this.props);
    const { navigate } = this.props;
    return (
      <ActionButton buttonColor='rgba(231,76,60,1)'>
        <ActionButton.Item
          buttonColor='#9b59b6'
          title='Profile'
          onPress={() => navigate('Profile')}
        >
          <Icon name='md-person' style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor='#3498db'
          title='Explore Recipes'
          onPress={() => navigate('Explore')}
        >
          <Icon name='md-pizza' style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor='#1abc9c'
          title='New Recipe'
          onPress={() => navigate('RecipeBuilder')}
        >
          <Icon name='md-nutrition' style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
