import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Wallet, Available, Withdraw } from '@screens';
import { navOptionHandler } from '@constants/functions';

const StactWallet = createStackNavigator();
export default function WalletStack() {
  return (
    <StactWallet.Navigator initialRouteName="Wallet">
      <StactWallet.Screen name="Wallet" component={Wallet} options={navOptionHandler} />
      <StactWallet.Screen name="Available" component={Available} options={navOptionHandler} />
      <StactWallet.Screen name="Withdraw" component={Withdraw} options={navOptionHandler} />
    </StactWallet.Navigator>
  )
}