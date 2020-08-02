import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { isEmpty } from '@constants/functions';
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

const Rating = ({ rating }) => {
  return (
    <View style={{ flexDirection: 'row'}}>
      <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: rating >= 1 ? colors.BLUE.TAB : colors.GREY.SECONDARY, marginLeft: 3 }} />
      <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: rating >= 2 ? colors.BLUE.TAB : colors.GREY.SECONDARY, marginLeft: 2 }} />
      <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: rating >= 3 ? colors.BLUE.TAB : colors.GREY.SECONDARY, marginLeft: 2 }} />
      <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: rating >= 4 ? colors.BLUE.TAB : colors.GREY.SECONDARY, marginLeft: 2 }} />
      <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: rating >= 5 ? colors.BLUE.TAB : colors.GREY.SECONDARY, marginLeft: 2 }} />
    </View>
  );
};

export default Rating;