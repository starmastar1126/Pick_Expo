import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "native-base";
import { Ionicons } from "@expo/vector-icons";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import { connect } from "react-redux";
import { signOut } from "@modules/account/actions";
import configs from '@constants/configs';
import { themes, colors } from '@constants/themes';
import { images, icons } from '@constants/assets';
import axios, { removeClientToken } from '@utils/axios';
import i18n from '@utils/i18n';

const WalletHeader = ({ Heading }) => {
  return (
    <View>
      <View>
        <Button transparent style={styles.bckbtn}>
          <Ionicons name="ios-arrow-round-back" size={34} color="black" />
        </Button>
        <Text style={styles.title}>{i18n.translate(Heading)}</Text>
      </View>
    </View>
  );
};

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

export default WalletHeader;
