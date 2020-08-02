import React from "react";
import { Text, View, Image } from "react-native";
import { Button } from "native-base";
import { Entypo } from "@expo/vector-icons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { isEmpty } from "@constants/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

export default function Carcard1({ key, name, image, price, onPress }) {
  return (
    <View key={key}>
      <View style={{ marginLeft: 10 }}>
        <Image
          source={
            isEmpty(image)
              ? require("@assets/images/download.jpeg")
              : { uri: configs.resourceURL + image }
          }
          style={{ width: 200, height: 220, borderRadius: 20 }}
        />
        <Text
          style={{
            position: "absolute",
            color: "white",
            fontWeight: "bold",
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          {name}
        </Text>

        <Text
          style={{
            position: "absolute",
            color: "white",
            fontWeight: "400",
            marginLeft: 20,
            marginTop: 40,
          }}
        >
          SAR{price}/DAY
        </Text>
        <Button
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            borderTopLeftRadius: 20,
            borderBottomEndRadius: 19,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", padding: 10 }}>
            Request Now
          </Text>
          <Entypo
            name="chevron-small-right"
            size={24}
            color="white"
            style={{ marginTop: 6 }}
          />
        </Button>
      </View>
    </View>
  );
}
