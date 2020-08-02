import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Ride } from '@screens';
import { navOptionHandler } from '@constants/functions';

const StactRide = createStackNavigator();
export default function RideStack() {
  return (
    <StactRide.Navigator initialRouteName="Ride">
      <StactRide.Screen name="Ride" component={Ride} options={navOptionHandler} />
    </StactRide.Navigator>
  )
}