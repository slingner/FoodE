import React, { Component, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import Collapsible from 'react-native-collapsible';

export default class RecipeBuilder extends Component {
  state = {
    activeSections: [],
    ingredientsCollapsed: true,
    instructionsCollapsed: true,
    notesCollapsed: true,
    title: '',
    images: [],
    ingredients: [],
    prep: [],
    cook: [],
    plating: [],
    notes: [],
  };

  toggleIngredientsExpanded = () => {
    this.setState({
      ingredientsCollapsed: !this.state.ingredientsCollapsed,
    });
  };
  toggleInstructionsExpanded = () => {
    this.setState({
      instructionsCollapsed: !this.state.instructionsCollapsed,
    });
  };
  toggleNotesExpanded = () => {
    this.setState({
      notesCollapsed: !this.state.notesCollapsed,
    });
  };

  handleTitle = (text) => {
    this.setState({ ingredients: text });
  };

  handleImages = (image) => {
    this.setState({ ingredients: image });
  };

  handleIngredients = (text) => {
    this.setState({ ingredients: text });
  };

  handleInstructions = (text) => {
    this.setState({ instructions: text });
  };

  handleNotes = (text) => {
    this.setState({ notes: text });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
          <Text style={styles.title}>Recipe Builder</Text>
          <View>
            <Text style={styles.headerText}>Recipe Title</Text>
            <TextInput
              style={styles.input}
              placeholder='Add a title for your recipe'
              placeholderTextColor='darkgrey'
            />
          </View>

          <View>
            <Text style={styles.headerText}>Recipe Images</Text>
            <TextInput
              style={styles.input}
              placeholder='Add images for your recipe'
            />
          </View>

          {/* Ingredients Section of Recipe Builder */}
          <TouchableOpacity onPress={this.toggleIngredientsExpanded}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Ingredients</Text>
            </View>
          </TouchableOpacity>

          <Collapsible
            collapsed={this.state.ingredientsCollapsed}
            align='center'
          >
            <View style={styles.content}>
              <Text style={styles.label}>Prep</Text>
              <TextInput
                style={styles.input}
                placeholder='Input Prep Instructions'
              />
            </View>
          </Collapsible>

          {/* Instructions Section of Recipe Builder */}
          <TouchableOpacity onPress={this.toggleInstructionsExpanded}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Instructions</Text>
            </View>
          </TouchableOpacity>

          <Collapsible
            collapsed={this.state.instructionsCollapsed}
            align='center'
          >
            <View style={styles.content}>
              <Text style={styles.label}>Prep</Text>
              <TextInput
                style={styles.input}
                placeholder='Input Prep Instructions'
              />
            </View>
            <View style={styles.content}>
              <Text style={styles.label}>Cook</Text>
              <TextInput
                style={styles.input}
                placeholder='Input Cook Instructions'
              />
            </View>
            <View style={styles.content}>
              <Text style={styles.label}>Plating</Text>
              <TextInput
                style={styles.input}
                placeholder='Input Plating Instructions'
              />
            </View>
          </Collapsible>

          {/* Notes Section of Recipe Builder */}
          <TouchableOpacity onPress={this.toggleNotesExpanded}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Notes</Text>
            </View>
          </TouchableOpacity>

          <Collapsible collapsed={this.state.notesCollapsed} align='center'>
            <View style={styles.content}>
              <Text style={styles.label}>Prep</Text>
              <TextInput style={styles.input} placeholder='Input Notes' />
            </View>
          </Collapsible>
        </ScrollView>
      </View>
    );
  }
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
});
