import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  SafeAreaView,
  SectionList,
} from "react-native";
import Gradient from "react-native-css-gradient";
import { ScrollView } from "react-native-gesture-handler";
import Comments from "../Comments/Comments";

const gradient = `linear-gradient(0deg, rgba(255,255,255,1) 14%, rgba(255,255,255,0.75) 46%, rgba(255,255,255,0) 100%)`;

const recipeInfo = [
  {
    title: "Ingredients",
    data: ["2 cups Scooby Snack", "1 pinch Oregano", "1 Frozen Pizza"],
  },
  {
    title: "Prep",
    data: [
      "#1 Lay out all ingredients",
      "#2 Eat a handful of scooby snacks",
      "#3 Preheat oven to 350",
    ],
  },
  {
    title: "Cook",
    data: [
      "#1 Eat some more Scooby Snacks, but make sure to save some for the end",
      "#2 Take Frozen Pizza out of box",
      "#3 Place Pizza in Oven",
    ],
  },
  {
    title: "Plate",
    data: [
      "#1 Take Pizza out of Oven when ready",
      "#2 Eat rest of Scooby Snacks",
    ],
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function RecipeView() {
  const onPress = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{}}>
        <View style={styles.imgInfo}>
          <Image
            // eslint-disable-next-line no-undef
            source={require("../RecipeCard/assets/toast.jpg")}
            style={{
              height: 200,
              width: 360,
              borderRadius: 10,
              // backgroundColor:
              //   "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(0,212,255,0) 100%",
            }}
          />
          <Gradient gradient={gradient} style={styles.overlay} />
          <View style={styles.recipeInfo}>
            <Text style={styles.recipeName}>French Toast</Text>
            <TouchableOpacity style={styles.button} onPress={onPress}>
              <Text>Favorite</Text>
            </TouchableOpacity>
            <View style={styles.authorSection}>
              <Image
                source={require("../../assets/profilePic.jpg")}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 50,
                  borderWidth: 1,
                  marginTop: 5,
                }}
              />
              <View style={styles.authorInfo}>
                <Text>By: Scoobert Doo</Text>
                <Text>05/18/2020</Text>
              </View>
            </View>
            <View style={styles.prepTimes}>
              <Text>prep time: 10m</Text>
              <Text>total time: 45m</Text>
              <Text>servings: 4</Text>
            </View>
          </View>
        </View>
        <View style={styles.directions}>
          <SectionList
            sections={recipeInfo}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} />}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
        </View>
        <Comments />
      </ScrollView>
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
  overlay: {
    width: 360,
    height: 200,
    position: "absolute",
    top: 0,
  },
  recipeName: {
    fontSize: 36,
  },
  recipeInfo: {
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
    top: -36,
    paddingLeft: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 100,
    borderRadius: 50,
  },
  authorSection: {
    display: "flex",
    flexDirection: "row",
  },
  authorInfo: {
    justifyContent: "center",
    marginLeft: 5,
  },
  prepTimes: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 5,
    position: "relative",
    top: 20,
  },
  directions: { borderTopWidth: 1 },
  item: {
    backgroundColor: "#9197BF",
    padding: 10,
    maxWidth: "100%",
    marginVertical: 8,
    borderRadius: 10,
  },
  header: {
    fontSize: 28,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
  },
});
