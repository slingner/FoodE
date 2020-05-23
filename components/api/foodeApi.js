import firebase from "react-native-firebase";

export function addRecipe(recipe, addComplete) {
  firebase
    .firestore()
    .collection("recipes")
    .add({
      name: recipe.name,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then((snapshot) => snapshot.get())
    .then((recipeData) => recipeData.data())
    .catch((error) => console.log(error));
}
