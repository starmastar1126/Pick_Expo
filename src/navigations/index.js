import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { 
  Splash, 
  Search, Map, Calendar, Car, CarDetail, Bill, Payment,
  VehicleDetail, VehicleNext, VehicleAll, 
  DriveLock, DriveNext, DriveDetail, DriveBefore, DriveCheck, DriveAfter,
  ServiceMap, ServiceDrivers, ServicePay, ServiceDetail,
} from '@screens';
import BottomTabNavigator from '@navigations/BottomTabNavigator';
import AuthStack from '@navigations/StackNavigators/AuthStackNavigator';
import MessageStack from '@navigations/StackNavigators/MessageStackNavigator';
import ProfileStack from '@navigations/StackNavigators/ProfileStackNavigator';
import WalletStack from '@navigations/StackNavigators/WalletStackNavigator';
import { navOptionHandler } from '@constants/functions';

const StackApp = createStackNavigator();
class AppContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
        <StackApp.Navigator initialRouteName={"Splash"}>
          <StackApp.Screen name="Splash" component={Splash} options={navOptionHandler} />
          <StackApp.Screen name="App" component={BottomTabNavigator} options={navOptionHandler} />
          <StackApp.Screen name="Auth" component={AuthStack} options={navOptionHandler} />

          <StackApp.Screen name="Messages" component={MessageStack} options={navOptionHandler} />
          <StackApp.Screen name="Profile" component={ProfileStack} options={navOptionHandler} />

          <StackApp.Screen name="Search" component={Search} options={navOptionHandler} />
          <StackApp.Screen name="Map" component={Map} options={navOptionHandler} />
          <StackApp.Screen name="Calendar" component={Calendar} options={navOptionHandler} />
          <StackApp.Screen name="Car" component={Car} options={navOptionHandler} />
          <StackApp.Screen name="CarDetail" component={CarDetail} options={navOptionHandler} />
          <StackApp.Screen name="Bill" component={Bill} options={navOptionHandler} />
          <StackApp.Screen name="Payment" component={Payment} options={navOptionHandler} />

          <StackApp.Screen name="VehicleDetail" component={VehicleDetail} options={navOptionHandler} />
          <StackApp.Screen name="VehicleNext" component={VehicleNext} options={navOptionHandler} />
          <StackApp.Screen name="VehicleAll" component={VehicleAll} options={navOptionHandler} />

          <StackApp.Screen name="DriveLock" component={DriveLock} options={navOptionHandler} />
          <StackApp.Screen name="DriveNext" component={DriveNext} options={navOptionHandler} />
          <StackApp.Screen name="DriveDetail" component={DriveDetail} options={navOptionHandler} />
          <StackApp.Screen name="DriveBefore" component={DriveBefore} options={navOptionHandler} />
          <StackApp.Screen name="DriveCheck" component={DriveCheck} options={navOptionHandler} />
          <StackApp.Screen name="DriveAfter" component={DriveAfter} options={navOptionHandler} />

          <StackApp.Screen name="ServiceMap" component={ServiceMap} options={navOptionHandler} />
          <StackApp.Screen name="ServiceDrivers" component={ServiceDrivers} options={navOptionHandler} />
          <StackApp.Screen name="ServicePay" component={ServicePay} options={navOptionHandler} />
          <StackApp.Screen name="ServiceDetail" component={ServiceDetail} options={navOptionHandler} />
          
          <StackApp.Screen name="Wallet" component={WalletStack} options={navOptionHandler} />
        </StackApp.Navigator>
      </NavigationContainer>
    );
  }
}
export default AppContainer;