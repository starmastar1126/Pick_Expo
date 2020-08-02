import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Main, Message, Profile, Search } from '@screens';
import { navOptionHandler } from '@constants/functions';

const StactMain = createStackNavigator();
export default function MainStack() {
  return (
    <StactMain.Navigator initialRouteName="Main">
      <StactMain.Screen name="Main" component={Main} options={navOptionHandler} />
      <StactMain.Screen name="Message" component={Message} options={navOptionHandler} />
      <StactMain.Screen name="Profile" component={Profile} options={navOptionHandler} />
      <StactMain.Screen name="Search" component={Search} options={navOptionHandler} />
    </StactMain.Navigator>
  )
}