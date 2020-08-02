import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import i8 from "../services/i18n";
const WalletHeader = ({ Heading }) => {
  return (
    <View>
      <View>
        <Button transparent style={styles.bckbtn}>
          <Ionicons name="ios-arrow-round-back" size={34} color="black" />
        </Button>
        <Text style={styles.title}>{i18n.t(Heading)}</Text>
      </View>
    </View>
  );
};

export default WalletHeader;

const styles = StyleSheet.create({
  bckbtn: {
    color: "rgb(86, 101, 115)",
    marginLeft: 10,
    marginTop: 10,
  },
  title: {
    alignSelf: "center",
    fontSize: 17,
    fontWeight: "300",
  },
});
