import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Vehicle, VehicleDone, VehicleProfile } from '@screens';
import { navOptionHandler } from '@constants/functions';

const StactVehicle = createStackNavigator();
export default function VehicleStack() {
  return (
    <StactVehicle.Navigator initialRouteName="Vehicle">
      <StactVehicle.Screen name="Vehicle" component={Vehicle} options={navOptionHandler} />
      <StactVehicle.Screen name="VehicleDone" component={VehicleDone} options={navOptionHandler} />
      <StactVehicle.Screen name="VehicleProfile" component={VehicleProfile} options={navOptionHandler} />
    </StactVehicle.Navigator>
  )
}