import React from 'react';
import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import Explore from './components/Explore/Explore';
import Favorites from './components/Favorites/Favorites';
import RecipeBuilder from './components/RecipeBuilder/RecipeBuilder';
import RecipeView from './components/Recipe/RecipeView';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

// const Drawer = createDrawerNavigator();

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

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initalRouteName='Login'>
//         <Drawer.Screen name='Login' component={Login} />
//         <Drawer.Screen name='Signup' component={Signup} />
//         <Drawer.Screen name='Dashboard' component={Dashboard} />
//         <Drawer.Screen name='Profile' component={Profile} />
//         <Drawer.Screen name='Favorites' component={Favorites} />
//         <Drawer.Screen name='Explore' component={Explore} />
//         <Drawer.Screen name='Recipe Builder' component={RecipeBuilder} />
//         <Drawer.Screen name='Recipe View' component={RecipeView} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
