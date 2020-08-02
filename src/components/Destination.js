import React from "react";
import { Text, View, Image } from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import { connect } from "react-redux";
import { Loading, Rating } from '@components';
import { isEmpty } from "@constants/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Destination({ key, name, image, onPress }) {
  return (
    <TouchableOpacity key={key} onPress={onPress}>
      <View
        style={{
          marginLeft: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={isEmpty(image) ? require("@assets/images/avatar.jpg") : { uri: image }}
          style={{ width: 150, height: 180, borderRadius: 20 }}
        />
        <Text
          style={{
            position: "absolute",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
