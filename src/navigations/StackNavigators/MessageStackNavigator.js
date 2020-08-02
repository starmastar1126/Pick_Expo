import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Messages, Message} from '@screens';
import { navOptionHandler } from '@constants/functions';

const StactMessage = createStackNavigator();
export default function MessageStack() {
  return (
    <StactMessage.Navigator initialRouteName="Messages">
      <StactMessage.Screen name="Messages" component={Messages} options={navOptionHandler} />
      <StactMessage.Screen name="Message" component={Message} options={navOptionHandler} />
    </StactMessage.Navigator>
  )
}