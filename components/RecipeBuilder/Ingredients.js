import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Ingredients() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={this.toggleExpanded}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Ingredients</Text>
        </View>
      </TouchableOpacity>

      <Collapsible collapsed={this.state.collapsed} align='center'>
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder='Input Your Ingredients'
          />
        </View>
      </Collapsible>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  input: {
    textAlign: 'center',
    height: 30,
    borderBottomWidth: 1,
    color: 'black',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
});
