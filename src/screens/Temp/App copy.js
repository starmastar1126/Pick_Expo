import React from "react";
import { View, Text } from "react-native";

import "react-native-gesture-handler";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "./screens/MainScreen";
import MessageScreenView from "./screens/MessageBoxView";
import Messages from "./screens/Messages";
import DriverScreen from "./screens/DriverProfile";
import BiddingScreen from "./screens/BiddingScreen";
import CreateBidScreen from "./screens/CreateBidScreen";
import SearchScreen from "./screens/SearchScreen";

import HostScreen from "./screens/HostScreen";
import HostDetail1Screen from "./screens/HostDetail1Screen";
import HostDetail2Screen from "./screens/HostDetail2Screen";
import DriverView from "./screens/DriverView";
import CongratulationScreen from "./screens/CongratulationScreen";
import DriverViewAll from "./screens/DriverViewAll";

import RideMap from "./screens/RideMap";
import MatchScreen from "./screens/MatchScreen";
import SeatScreen from "./screens/SeatScreen";
import TripMap from "./screens/TripMap";
import TripDetail from "./screens/TripDetail";
import EndTrip from "./screens/EndTrip";
import Thankyou from "./screens/Thankyou";

import MyPickScreen from "./screens/MyPickScreen";
import LockScreen from "./screens/LockScreen";
import UnLockScreen from "./screens/UnLockScreen";
import DetailScreen from "./screens/DetailScreen";
import BeforeScreen from "./screens/BeforeScreen";
import CheckScreen from "./screens/CheckScreen";
import AfterScreen from "./screens/AfterScreen";
import ServiceScreen from "./screens/ServiceScreen";
import RideMap1 from "./screens/RideMap1";
import MatchScreen1 from "./screens/MatchScreen1";
import RideMap2 from "./screens/RideMap2";
import Trip2Detail from "./screens/Trip2Detail";

import SearchCar from "./screens/SearchCar";
import CarScreen from "./screens/CarScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import SplashScreen from "./screens/SplashScreen";
import CarListing from "./screens/CarListing";

import PositionMap from "./screens/PositionMap";
import CalenderDate from "./screens/CalenderDate";
import BillScreen from "./screens/BillScreen";
import Payment from "./screens/Payment";
import UserCar from "./screens/UserCar";
import Responses from "./screens/Reponses";
import CarLocked from "./screens/Carlocked";

import WalletMain from "./screens/Wallet/WalletMain";
import Avalaible from "./screens/Wallet/Available";
import Withdraw from "./screens/Wallet/Withdraw";
import Congratulation from "./screens/Wallet/Congratulation";

//Redux Store
import store from "./store";
import { Provider } from "react-redux";

console.disableYellowBox = true;

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCO0aoGEC4VNb74h7xFOQzDBIvZ5_Tsir4",
  authDomain: "pick-aa5e2.firebaseapp.com",
  databaseURL: "https://pick-aa5e2.firebaseio.com",
  projectId: "pick-aa5e2",
  storageBucket: "pick-aa5e2.appspot.com",
  messagingSenderId: "255238314976",
  appId: "1:255238314976:web:d7444a422ba09bcf53e985",
  measurementId: "G-NH1HW72TDG",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

import i18n from "@services/i18n";
i18n.setI18nConfig();

const Appnav = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    SignInScreen: {
      screen: SignInScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    SignUpScreen: {
      screen: SignUpScreen,
      navigationOptions: {
        headerShown: false,
      },
    },

    MainScreen: {
      screen: MainScreen,
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
    DriverScreen: {
      screen: DriverScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    BiddingScreen: {
      screen: BiddingScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    CreateBidScreen: {
      screen: CreateBidScreen,
      navigationOptions: {
        headerShown: false,
      },
    },

    HostScreen: {
      screen: HostScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    HostDetail1Screen: {
      screen: HostDetail1Screen,
      navigationOptions: {
        headerShown: false,
      },
    },
    HostDetail2Screen: {
      screen: HostDetail2Screen,
      navigationOptions: {
        headerShown: false,
      },
    },
    DriverView: {
      screen: DriverView,
      navigationOptions: {
        headerShown: false,
      },
    },
    CongratulationScreen: {
      screen: CongratulationScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    DriverViewAll: {
      screen: DriverViewAll,
      navigationOptions: {
        headerShown: false,
      },
    },

    RideMap: {
      screen: RideMap,
      navigationOptions: {
        headerShown: false,
      },
    },
    MatchScreen: {
      screen: MatchScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    SeatScreen: {
      screen: SeatScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    TripMap: {
      screen: TripMap,
      navigationOptions: {
        headerShown: false,
        gestureDirection: "vertical",
      },
    },
    TripDetail: {
      screen: TripDetail,
      navigationOptions: {
        headerShown: false,
        gestureDirection: "vertical",
      },
    },
    EndTrip: {
      screen: EndTrip,
      navigationOptions: {
        headerShown: false,
        gestureDirection: "vertical",
      },
    },
    Thankyou: {
      screen: Thankyou,
      navigationOptions: {
        headerShown: false,
        gestureDirection: "vertical",
      },
    },

    MyPickScreen: {
      screen: MyPickScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    LockScreen: {
      screen: LockScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    UnLockScreen: {
      screen: UnLockScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    DetailScreen: {
      screen: DetailScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    BeforeScreen: {
      screen: BeforeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    CheckScreen: {
      screen: CheckScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    AfterScreen: {
      screen: AfterScreen,
      navigationOptions: {
        headerShown: false,
      },
    },

    ServiceScreen: {
      screen: ServiceScreen,
      navigationOptions: {
        headerShown: false,
        gestureDirection: "vertical",
      },
    },
    RideMap1: {
      screen: RideMap1,
      navigationOptions: {
        headerShown: false,
      },
    },
    MatchScreen1: {
      screen: MatchScreen1,
      navigationOptions: {
        headerShown: false,
      },
    },
    RideMap2: {
      screen: RideMap2,
      navigationOptions: {
        headerShown: false,
      },
    },
    Trip2Detail: {
      screen: Trip2Detail,
      navigationOptions: {
        headerShown: false,
        gestureDirection: "vertical",
      },
    },

    SearchCar: {
      screen: SearchCar,
      navigationOptions: {
        headerShown: false,
      },
    },
    CarScreen: {
      screen: CarScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    CarListing: {
      screen: CarListing,
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
    BillScreen: {
      screen: BillScreen,
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

    SearchScreen: {
      screen: SearchScreen,
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

    WalletMain: {
      screen: WalletMain,
      navigationOptions: {
        headerShown: false,
      },
    },
    Available: {
      screen: Avalaible,
      navigationOptions: {
        headerShown: false,
      },
    },

    Withdraw: {
      screen: Withdraw,
      navigationOptions: {
        headerShown: false,
      },
    },

    Congratulation: {
      screen: Congratulation,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: "SignUpScreen",
  }
);
const Appstack = createAppContainer(Appnav);

const App = () => {
  return (
    <Provider store={store}>
      <Appstack />
    </Provider>
  );
};

export default App;
