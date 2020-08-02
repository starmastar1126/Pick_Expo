import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Drive } from '@screens';
import { navOptionHandler } from '@constants/functions';

const StactDrive = createStackNavigator();
export default function DriveStack() {
  return (
    <StactDrive.Navigator initialRouteName="Drive">
      <StactDrive.Screen name="Drive" component={Drive} options={navOptionHandler} />
    </StactDrive.Navigator>
  )
}