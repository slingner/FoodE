import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  SafeAreaView,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Gradient from "react-native-css-gradient";

const gradient = `linear-gradient(0deg, rgba(255,255,255,1) 14%, rgba(255,255,255,0.75) 46%, rgba(255,255,255,0) 100%)`;

export default function RecipeView() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          // eslint-disable-next-line no-undef
          source={require("../RecipeCard/assets/toast.jpg")}
          style={{
            height: 200,
            width: 360,
            // backgroundColor:
            //   "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(0,212,255,0) 100%",
          }}
        />
        <Gradient gradient={gradient} style={styles.overlay} />
        <Text style={styles.recipeName}>French Toast</Text>
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
  overlay: {
    width: 360,
    height: 200,
    position: "absolute",
    top: 0,
  },
  recipeName: {
    display: "flex",
    justifyContent: "flex-start",
    fontSize: 36,
    paddingLeft: 10,
    position: "relative",
    top: -36,
  },
});
