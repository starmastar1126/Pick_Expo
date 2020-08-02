import React, { Component } from "react";
import { Text, View, Image, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { Header, Content, Footer, Container } from "native-base";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

const WIDTH = Dimensions.get("screen").width;

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import { connect } from "react-redux";
import { signOut } from "@modules/account/actions";
import { Loading, ChartCard, Playingvideo } from '@components';
import configs from '@constants/configs';
import { themes, colors } from '@constants/themes';
import { images, icons } from '@constants/assets';
import axios, { removeClientToken } from '@utils/axios';
import i18n from '@utils/i18n';

class Complete extends Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={styles.cont}>
            <Image
              source={require("@assets/images/congratulation.png")}
              style={{ marginTop: 50 }}
            />
            <Text style={styles.Congo}>{i18n.translate("Yeahhhhhhh")}</Text>
            <Text style={styles.txt}>
              {i18n.translate("You have successfully withdrawn")} SAR2,500
            </Text>

            <Text style={[styles.txt, { marginTop: 30 }]}>
              {i18n.translate(
                "Invite your friend and family and enjoy upto $100 free ride"
              )}
            </Text>

            <View style={styles.icn}>
              <TouchableOpacity>
                <FontAwesome name="whatsapp" size={20} color="green" />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="instagram" size={20} color="red" />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="facebook-square" size={20} color="blue" />
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  txt: { fontSize: 12, fontWeight: "300" },
  Congo: { fontSize: 50, marginTop: 30, fontWeight: "300" },
  icn: {
    flexDirection: "row",
    marginTop: 5,
    padding: 10,
    width: 100,
    justifyContent: "space-evenly",
  },
});

export default Complete;
