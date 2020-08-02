import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Rating from "./Rating";
import { isEmpty } from "@constants/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

const UserCard = ({ UserName, UserDes, UserNum, UserEmail, UserImage }) => {
  return (
    <View>
      <View style={styles.usrInform}>
        <Image
          source={
            isEmpty(UserImage)
              ? require("@assets/images/avatar.jpg")
              : { uri: configs.baseURL + UserImage }
          }
          style={styles.img}
        />

        <View style={styles.usertxtview}>
          <Text style={{ fontSize: 24, fontWeight: "300" }}>{UserName}</Text>
          <Text style={{ fontSize: 10, fontWeight: "300", marginLeft: 2 }}>
            {UserDes}
          </Text>
          <View style={{ marginTop: 5 }} />
          <Rating rating={3.5} />
        </View>
      </View>

      <View style={styles.usernum}>
        <MaterialIcons name="phone" size={20} color="rgb(86, 101, 115)" />
        <Text style={[styles.icnInfo, { fontSize: 12, fontWeight: "400" }]}>
          {isEmpty(UserNum) ? "+XX XXX XXXX XXXX" : UserNum}
        </Text>
      </View>

      <View style={[styles.usernum, { marginTop: 2 }]}>
        <MaterialIcons name="email" size={18} color="rgb(86, 101, 115)" />
        <Text style={[styles.icnInfo, { fontSize: 12 }]}>{UserEmail}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  usrInform: {
    flexDirection: "row",
    marginHorizontal: 32,
  },
  img: {
    height: 90,
    width: 90,
    borderRadius: 45,
  },
  txtcircle: {
    position: "absolute",
    fontSize: 50,
    bottom: -25,
    color: colors.BLUE.TAB,
  },
  icnInfo: {
    marginLeft: 10,
    color: "rgb(86, 101, 115)",
    fontSize: 13,
  },
  usertxtview: { alignSelf: "center", marginTop: 5, marginLeft: 20 },
  usernum: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 35,
    marginTop: 20,
  },
});

export default UserCard;
