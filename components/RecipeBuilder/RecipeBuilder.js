import React, { Component, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Button,
} from "react-native";
import Constants from "expo-constants";
import Collapsible from "react-native-collapsible";
import Icon from "react-native-vector-icons/Ionicons";
import { addRecipe } from "../api/foodeApi";

export default class RecipeBuilder extends Component {
  state = {
    activeSections: [],
    ingredientsCollapsed: true,
    instructionsCollapsed: true,
    notesCollapsed: true,
    title: "",
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
    this.setState({ title: text });
  };

  handleImages = (image) => {
    this.setState({ img: image });
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

  onRecipeAdd = (recipe) => {
    console.log("recipe added");
    console.log(recipe);
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
              placeholder="Add a title for your recipe"
              placeholderTextColor="darkgrey"
              onChangeText={(text) =>
                this.setState((prevState) => ({
                  title: (prevState.title = text),
                }))
              }
            />
          </View>

          <View>
            <Text style={styles.headerText}>Recipe Images</Text>
            <TextInput
              style={styles.input}
              placeholder="Add images for your recipe"
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
            align="center"
          >
            <View style={styles.content}>
              <TextInput style={styles.input} placeholder="Input Ingredients" />

              {/* Hardcoded ingredients for now */}
              <View style={styles.ingredientContainer}>
                <Text style={styles.content}>1. Apples</Text>
                <Icon name="md-trash" style={styles.deleteButton} />
                <Text style={styles.content}>2. Oranges</Text>
                <Icon name="md-trash" style={styles.deleteButton} />
                <Text style={styles.content}>3. Bananas</Text>
                <Icon name="md-trash" style={styles.deleteButton} />
                <Text style={styles.content}>4. Apples</Text>
                <Icon name="md-trash" style={styles.deleteButton} />
                <Text style={styles.content}>5. Oranges</Text>
                <Icon name="md-trash" style={styles.deleteButton} />
                <Text style={styles.content}>6. Bananas</Text>
                <Icon name="md-trash" style={styles.deleteButton} />
              </View>
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
            align="center"
          >
            <View style={styles.content}>
              <Text style={styles.label}>Prep</Text>
              <TextInput
                style={styles.input}
                placeholder="Input Prep Instructions"
              />
              <View style={styles.ingredientContainer}>
                <Text style={styles.content}>1. Apples</Text>
                <Icon name="md-trash" style={styles.deleteButton} />
                <Text style={styles.content}>2. Oranges</Text>
                <Icon name="md-trash" style={styles.deleteButton} />
                <Text style={styles.content}>3. Bananas</Text>
                <Icon name="md-trash" style={styles.deleteButton} />
              </View>
            </View>
            <View style={styles.content}>
              <Text style={styles.label}>Cook</Text>
              <TextInput
                style={styles.input}
                placeholder="Input Cook Instructions"
              />
              <View style={styles.ingredientContainer}>
                <Text style={styles.content}>1. Apples</Text>
                <Icon name="md-trash" style={styles.deleteButton} />
                <Text style={styles.content}>2. Oranges</Text>
                <Icon name="md-trash" style={styles.deleteButton} />
                <Text style={styles.content}>3. Bananas</Text>
                <Icon name="md-trash" style={styles.deleteButton} />
              </View>
            </View>
            <View style={styles.content}>
              <Text style={styles.label}>Plating</Text>
              <TextInput
                style={styles.input}
                placeholder="Input Plating Instructions"
              />
              <View style={styles.ingredientContainer}>
                <Text style={styles.content}>1. Apples</Text>
                <Icon name="md-trash" style={styles.deleteButton} />
                <Text style={styles.content}>2. Oranges</Text>
                <Icon name="md-trash" style={styles.deleteButton} />
                <Text style={styles.content}>3. Bananas</Text>
                <Icon name="md-trash" style={styles.deleteButton} />
              </View>
            </View>
          </Collapsible>

          {/* Notes Section of Recipe Builder */}
          <TouchableOpacity onPress={this.toggleNotesExpanded}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Notes</Text>
            </View>
          </TouchableOpacity>

          <Collapsible collapsed={this.state.notesCollapsed} align="center">
            <View style={styles.content}>
              <Text style={styles.label}>Prep</Text>
              <TextInput style={styles.input} placeholder="Input Notes" />
              <View style={styles.ingredientContainer}>
                <Text style={styles.content}>1. Apples</Text>
                <Icon name="md-trash" style={styles.deleteButton} />
                <Text style={styles.content}>2. Oranges</Text>
                <Icon name="md-trash" style={styles.deleteButton} />
                <Text style={styles.content}>3. Bananas</Text>
                <Icon name="md-trash" style={styles.deleteButton} />
              </View>
            </View>
          </Collapsible>
          <View></View>
          <Button
            title="submit"
            onPress={() =>
              addRecipe(
                {
                  name: this.state.title,
                },
                this.onRecipeAdd
              )
            }
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "300",
    marginBottom: 20,
  },
  header: {
    backgroundColor: "#F5FCFF",
    padding: 10,
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  input: {
    textAlign: "center",
    height: 30,
    borderBottomWidth: 1,
    color: "black",
  },
  content: {
    padding: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  ingredientContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  deleteButton: {
    fontSize: 20,
    color: "red",
    alignSelf: "center",
  },
  saveButton: {
    fontSize: 35,

    color: "black",
    alignSelf: "center",
  },
});

{
  /* <Icon
name="md-checkmark"
style={styles.saveButton}
title="Saved"
onPress={() =>
  addRecipe(
    {
      name: this.state.title,
    },
    this.onRecipeAdd
  )
}
/> */
}
