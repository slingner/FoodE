import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  VirtualizedList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const recipeData = [];
const CategoryTitles = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Snacks",
  "Desserts",
  "Other",
];

const getItem = (data, i) => {
  return {
    id: Math.random().toString(12).substring(0),
    title: `Recipe #${i + 1}`,
  };
};

const getItemCount = (data) => {
  return 30;
};

const RecipeItem = ({ title }) => {
  return (
    <View style={styles.recipeItem}>
      <Text style={styles.recipeTitle}>{title}</Text>
    </View>
  );
};

export default function Explore({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.exploreTitle}>Explore</Text>
      <View style={styles.searchBar}>
        <Text style={styles.searchLabel}>Search</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Favorite Recipes"
        />
      </View>
      <View style={styles.categoryList}>
        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryTitle}>Breakfast</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryTitle}>Lunch</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryTitle}>Dinner</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryTitle}>Snacks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryTitle}>Dessert</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryTitle}>Other</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.recipe}>
        <VirtualizedList
          data={recipeData}
          initialNumToRender={4}
          renderItem={({ item }) => <RecipeItem title={item.title} />}
          keyExtractor={(item) => item.id}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  searchBar: {
    width: "90%",
    borderBottomWidth: 1,
    height: 60,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  searchLabel: {
    fontSize: 24,
  },
  exploreTitle: {
    fontSize: 32,
    marginBottom: 10,
  },
  searchInput: {
    height: 30,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 2,
    marginHorizontal: 4,
    width: 100,
  },
  title: {
    fontSize: 12,
  },
  categoryList: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    height: 100,
    width: "100%",
    alignItems: "center",
    backgroundColor: "lightgrey",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  category: {
    width: 80,
    height: 20,
    marginVertical: 5,
    borderBottomWidth: 1,
    marginHorizontal: 10,
  },
  recipeItem: {
    backgroundColor: "#f9c2ff",
    height: 150,
    width: 350,
    justifyContent: "center",
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  recipeTitle: {
    fontSize: 32,
  },
});
