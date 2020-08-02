import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import SplashScreen from './SplashScreen';


const RootStack = createStackNavigator();

/**
 * 
 * Login , SignUp , Splash screens are in a single container called RootStack 
 * then we call the RootStack in the App.js to render the Screens inside them 
 *  
 * */


/**
* @author Technovier
* @function RootStackScreen
**/
const RootStackScreen = (props) => {

  return (
    <RootStack.Navigator headerMode="none" initialRouteName="SplashScreen">

      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="SignIn" component={SignInScreen} />
      <RootStack.Screen name="SignUp" component={SignUpScreen} />

    </RootStack.Navigator>
  )
}



export default RootStackScreen