import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Service } from '@screens';
import { navOptionHandler } from '@constants/functions';

const StactService = createStackNavigator();
export default function ServiceStack() {
  return (
    <StactService.Navigator initialRouteName="Service">
      <StactService.Screen name="Service" component={Service} options={navOptionHandler} />
    </StactService.Navigator>
  )
}