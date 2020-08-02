import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Profile} from '@screens';
import { navOptionHandler } from '@constants/functions';

const StactProfile = createStackNavigator();
export default function ProfileStack() {
  return (
    <StactProfile.Navigator initialRouteName="Profile">
      <StactProfile.Screen name="Profile" component={Profile} options={navOptionHandler} />
    </StactProfile.Navigator>
  )
}