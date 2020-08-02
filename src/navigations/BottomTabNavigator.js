import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { View, Text } from "react-native";
import { Icon } from 'react-native-elements';

import MainStack from '@navigations/StackNavigators/MainStackNavigator';
import RideStack from '@navigations/StackNavigators/RideStackNavigator';
import VehicleStack from '@navigations/StackNavigators/VehicleStackNavigator';
import DriveStack from '@navigations/StackNavigators/DriveStackNavigator';
import ServiceStack from '@navigations/StackNavigators/ServiceStackNavigator';

import { colors } from "@constants/themes";

const Tab = createMaterialBottomTabNavigator();
export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      activeColor={colors.BLUE.TAB}
    >
      <Tab.Screen name="Main" component={MainStack}
        options={{
          tabBarLabel: '', tabBarColor: colors.WHITE,
          tabBarIcon: ({ color }) => (
            <Icon name="search" type='material' color={colors.GREY.SECONDARY} size={35} />
          ),
        }}
      />
      <Tab.Screen name="Ride" component={RideStack}
        options={{
          tabBarLabel: '', tabBarColor: colors.WHITE,
          tabBarIcon: ({ color }) => (
            <Icon name="camera" type='material' color={colors.GREY.SECONDARY} size={25} />
          ),
        }}
      />
      <Tab.Screen name="Vehicle" component={VehicleStack}
        options={{
          tabBarLabel: '', tabBarColor: colors.WHITE,
          tabBarIcon: ({ color }) => (
            <Icon name="car" type='font-awesome' color={colors.GREY.SECONDARY} size={20} />
          ),
        }}
      />
      <Tab.Screen name="Drive" component={DriveStack}
        options={{
          tabBarLabel: '', tabBarColor: colors.WHITE,
          tabBarIcon: ({ color }) => (
            <Icon name="steering" type='material-community' color={colors.GREY.SECONDARY} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Service" component={ServiceStack}
        options={{
          tabBarLabel: '', tabBarColor: colors.WHITE,
          tabBarIcon: ({ color }) => (
            <View>
              <Text style={{ textAlign: 'right', fontSize: 9, fontWeight: 'bold', color: colors.GREY.SECONDARY}}>SAR</Text>
              <Icon name="hand-holding" type='font-awesome-5' color={colors.GREY.SECONDARY} size={26} style={{marginTop: -15}} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}