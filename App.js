import React from 'react';
import 'react-native-gesture-handler';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import Explore from './components/Explore/Explore';
import Favorites from './components/Favorites/Favorites';
import RecipeBuilder from './components/RecipeBuilder/RecipeBuilder';
import RecipeView from './components/Recipe/RecipeView';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const Navigator = createStackNavigator({
  Login: { screen: Login },
  Signup: { screen: Signup },
  Dashboard: { screen: Dashboard },
  Profile: { screen: Profile },
  Favorites: { screen: Favorites },
  Explore: { screen: Explore },
  RecipeBuilder: { screen: RecipeBuilder },
  RecipeView: { screen: RecipeView },
});

const App = createAppContainer(Navigator);

export default App;
