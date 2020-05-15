import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  SafeAreaView,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Recipe",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Recipe",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Recipe",
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.followBar}>
        <Text>Follow</Text>
        <View style={styles.followCircle}>
          <Text>+</Text>
        </View>
      </View>
      <View style={styles.profileInfo}>
        <View style={styles.profilePicture}></View>
        <View style={styles.profileNameView}>
          <Text style={styles.profileName}>Scott</Text>
        </View>
        <View style={styles.profileAbout}>
          <Text>Likes Food.</Text>
        </View>
      </View>
      <View style={styles.profileRecipes}>
        <View style={styles.profileRecipesTitleView}>
          <Text style={styles.profileRecipesTitle}>My Recipes</Text>
        </View>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 30,
  },
  followBar: {
    // marginTop: 20,
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  followCircle: {
    width: 30,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: 50,
    backgroundColor: "#7090FF",
  },
  profilePicture: {
    width: 200,
    height: 200,
    backgroundColor: "#63D7FF",
    borderRadius: 200,
  },
  profileInfo: {
    alignItems: "center",
    width: "100%",
  },
  profileAbout: {
    width: "90%",
    marginTop: 10,
  },
  profileName: {
    fontSize: 32,
    width: "100%",
    // textDecorationLine: "underline",
  },
  profileNameView: {
    borderBottomWidth: 1,
    width: "90%",
  },
  profileRecipesTitleView: {
    borderBottomWidth: 1,
    marginTop: 20,
  },
  profileRecipesTitle: {
    fontSize: 32,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
