import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Mainscreen from "./Mainscreen";
import SearchCar from "./screens/SearchCar";
import Carscreen from "./screens/Carscreen";
const Appnav = createStackNavigator(
  {
    Mainscreen: {
      screen: Mainscreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    SearchCar: {
      screen: SearchCar,
      navigationOptions: {
        headerShown: false,
      },
    },

    Carscreen: {
      screen: Carscreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },

  {
    initialRouteName: "SearchCar",
  }
);

export default createAppContainer(Appnav);
