import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

import Foot from "../../components/Foot";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { Header, Content, Footer, Container } from "native-base";
const WIDTH = Dimensions.get("screen").width;

import i8 from "../../services/i18n";

export class Congratulation extends Component {
  render() {
    return (
      <Container>
        <Header transparent />
        <Content>
          <View style={styles.cont}>
            <Image
              source={require("../../assets/congratulation.png")}
              style={{ marginTop: 50 }}
            />
            <Text style={styles.Congo}>{i18n.t("Yeahhhhhhh")}</Text>
            <Text style={styles.txt}>
              {i18n.t("You have successfully withdrawn")} SAR2,500
            </Text>

            <Text style={[styles.txt, { marginTop: 30 }]}>
              {i18n.t(
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
        <Foot />
      </Container>
    );
  }
}

export default Congratulation;

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
