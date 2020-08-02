import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

const UserCard = ({ UserName, UserDes, UserNum, UserEmail }) => {
  return (
    <View>
      <View style={styles.usrInform}>
        <Image source={require("@assets/images/60093.jpg")} style={styles.img} />

        <View style={styles.usertxtview}>
          <Text style={{ fontSize: 24, fontWeight: "300" }}>{UserName}</Text>
          <Text style={{ fontSize: 10, fontWeight: "300", marginLeft: 2 }}>
            {UserDes}
          </Text>
          <Text style={styles.txtcircle}>.....</Text>
        </View>
      </View>

      <View style={styles.usernum}>
        <MaterialIcons name="phone" size={20} color="rgb(86, 101, 115)" />
        <Text style={[styles.icnInfo, { fontSize: 12, fontWeight: "400" }]}>
          {UserNum}
        </Text>
      </View>

      <View style={[styles.usernum, { marginTop: 2 }]}>
        <MaterialIcons name="email" size={18} color="rgb(86, 101, 115)" />
        <Text style={[styles.icnInfo, { marginLeft: 22, fontSize: 11 }]}>
          {UserEmail}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  usrInform: {
    flexDirection: "row",
    marginHorizontal: 32,
  },
  img: { height: 100, width: 100, borderRadius: 50 },
  txtcircle: {
    position: "absolute",
    fontSize: 50,
    bottom: -25,
    color: "blue",
  },
  icnInfo: {
    marginLeft: 20,
    color: "rgb(86, 101, 115)",
    fontSize: 13,
  },
  usertxtview: { alignSelf: "center", marginTop: 5, marginLeft: 20 },
  usernum: { flexDirection: "row", marginLeft: 35, marginTop: 20 },
});

export default UserCard;