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

const gradient = `linear-gradient(0deg, rgba(255,255,255,1) 14%, rgba(255,255,255,0.75) 46%, rgba(255,255,255,0) 100%)`;

const commentInfo = [
  {
    title: "Taylor",
    data: ["Excellent Technique!"],
  },
  {
    title: "Scott",
    data: ["Used Extra Scooby Snacks and what a differance!"],
  },
  {
    title: "Shaggy",
    data: ["Brah did you eat all the scooby snacks?!"],
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function Comments() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={commentInfo}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
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
  item: {
    backgroundColor: "#9197BF",
    padding: 10,
    maxWidth: "100%",
    marginVertical: 8,
    borderRadius: 10,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
  },
});
