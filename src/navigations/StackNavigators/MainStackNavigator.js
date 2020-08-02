import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Main, Complete } from '@screens';

import { navOptionHandler } from '@constants/functions';

const StactMain = createStackNavigator();
export default function MainStack() {
  return (
    <StactMain.Navigator initialRouteName="Main">
      <StactMain.Screen name="Main" component={Main} options={navOptionHandler} />
      <StactMain.Screen name="Complete" component={Complete} options={navOptionHandler} />
    </StactMain.Navigator>
  )
}