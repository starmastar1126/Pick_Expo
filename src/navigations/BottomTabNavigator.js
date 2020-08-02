import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform } from "react-native";
import { Icon } from 'react-native-elements';

import MainStack from '@navigations/MainStackNavigator';
import RideStack from '@navigations/RideStackNavigator';
import HostStack from '@navigations/HostStackNavigator';
import DriveStack from '@navigations/DriveStackNavigator';
import ServiceStack from '@navigations/ServiceStackNavigator';

import { colors } from "@constants/themes";

const Tab = createMaterialBottomTabNavigator();
export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      activeColor={colors.BLUE.TAB}
    >
      <Tab.Screen name="Main" component={MainStack}
        options={{ tabBarLabel: '', tabBarColor: colors.WHITE,
          tabBarIcon: ({ color }) => (
            <Icon name="search" type='material' color={colors.GREY.SECONDARY} size={35} />
          ),
        }}
      />
      <Tab.Screen name="Ride" component={RideStack}
        options={{ tabBarLabel: '', tabBarColor: colors.WHITE,
          tabBarIcon: ({ color }) => (
            <Icon name="camera" type='material' color={colors.GREY.SECONDARY} size={25} />
          ),
        }}
      />
      <Tab.Screen name="Host" component={HostStack}
        options={{ tabBarLabel: '', tabBarColor: colors.WHITE,
          tabBarIcon: ({ color }) => (
            <Icon name="car" type='font-awesome' color={colors.GREY.SECONDARY} size={20} />
          ),
        }}
      />
      <Tab.Screen name="Drive" component={DriveStack}
        options={{ tabBarLabel: '', tabBarColor: colors.WHITE,
          tabBarIcon: ({ color }) => (
            <Icon name="steering" type='material-community' color={colors.GREY.SECONDARY} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Service" component={ServiceStack}
        options={{ tabBarLabel: '', tabBarColor: colors.WHITE,
          tabBarIcon: ({ color }) => (
            <Icon name="hand-holding" type='font-awesome-5' color={colors.GREY.SECONDARY} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}