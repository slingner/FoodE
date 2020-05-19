import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import Explore from './components/Explore/Explore';
import Favorites from './components/Favorites/Favorites';
import RecipeBuilder from './components/RecipeBuilder/RecipeBuilder';
import RecipeView from "./components/Recipe/RecipeView";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator initalRouteName='Login'>
        <Drawer.Screen name='Login' component={Login} />
        <Drawer.Screen name='Signup' component={Signup} />
        <Drawer.Screen name='Dashboard' component={Dashboard} />
        <Drawer.Screen name='Profile' component={Profile} />
        <Drawer.Screen name='Favorites' component={Favorites} />
        <Drawer.Screen name='Explore' component={Explore} />
        <Drawer.Screen name='Recipe Builder' component={RecipeBuilder} />
        <Drawer.Screen name="Recipe View" component={RecipeView} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
