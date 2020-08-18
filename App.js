//App.js
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Mainscreen from "./Mainscreen";
import MyPickscreen from "./screens/MyPick";
import SearchCar from "./screens/SearchCar";
import Carscreen from "./screens/Carscreen";
import DriverScreen from "./screens/DriverProfile";
import MessageScreenView from "./screens/MessageBoxView";
import Messages from "./screens/Messages";
import PositionMap from "./screens/PositionMap";
import CalenderDate from "./screens/CalenderDate";
import Bill from "./screens/Bill";
import Payment from "./screens/Payment";
import UserCar from "./screens/UserCar";
import Responses from "./screens/Reponses";
import CarLocked from "./screens/Carlocked";

const Appnav = createStackNavigator(
  {
    Mainscreen: {
      screen: Mainscreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    MyPickscreen: {
      screen: MyPickscreen,
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

    DriverScreen: {
      screen: DriverScreen,
      navigationOptions: {
        headerShown: false,
      },
    },

    MessageScreen: {
      screen: MessageScreenView,
      navigationOptions: {
        headerShown: false,
      },
    },

    Messages: {
      screen: Messages,
      navigationOptions: {
        headerShown: false,
      },
    },

    PositionMap: {
      screen: PositionMap,
      navigationOptions: {
        headerShown: false,
      },
    },

    CalenderDate: {
      screen: CalenderDate,
      navigationOptions: {
        headerShown: false,
      },
    },

    Bill: {
      screen: Bill,
      navigationOptions: {
        headerShown: false,
      },
    },

    Payment: {
      screen: Payment,
      navigationOptions: {
        headerShown: false,
      },
    },

    UserCar: {
      screen: UserCar,
      navigationOptions: {
        headerShown: false,
      },
    },

    Responses: {
      screen: Responses,
      navigationOptions: {
        headerShown: false,
      },
    },

    CarLocked: {
      screen: CarLocked,
      navigationOptions: {
        headerShown: false,
      },
    },
  },

  {
    initialRouteName: "CarLocked",
  }
);

export default createAppContainer(Appnav);
