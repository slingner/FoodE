import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
import Explore from "./components/Explore/Explore";
import Favorites from "./components/Favorites/Favorites";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

export default function App() {
  state = {
    drawerOpen: false,
  };

  const toggleDrawer = () => {
    this.setState({ drawerOpen: true });
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator initalRouteName="Login">
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Signup" component={Signup} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Favorites" component={Favorites} />
        <Drawer.Screen name="Explore" component={Explore} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
