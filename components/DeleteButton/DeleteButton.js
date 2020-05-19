import React from 'react';
import { StyleSheet, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default function DeleteButton() {
  return (
    <View>
      <Icon name='md-trash' style={styles.actionButtonIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
