import { createStackNavigator } from 'react-navigation';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

const Nav = createStackNavigator({
  Login: { screen: Login },
  Signup: { screen: Signup },
});

export default Nav;
