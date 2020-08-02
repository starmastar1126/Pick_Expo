import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Host } from '@screens';
import { navOptionHandler } from '@constants/functions';

const StactHost = createStackNavigator();
export default function HostStack() {
  return (
    <StactHost.Navigator initialRouteName="Host">
      <StactHost.Screen name="Host" component={Host} options={navOptionHandler} />
    </StactHost.Navigator>
  )
}