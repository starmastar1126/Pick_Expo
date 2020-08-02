import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Thumbnail, Button, Header, Content, Item, Input } from "native-base";

import CarSliderImage from "../components/CarSliderImage";

const CarPartsDetail = ({ name, usage }) => {
  return (
    <View style={styles.DetailsSection}>
      <View>
        <Text style={{ fontSize: 9, fontWeight: "200" }}>{name}</Text>
        <Text style={{ fontSize: 12, fontWeight: "400" }}>{usage}</Text>
      </View>
      <View>
        <FontAwesome name="signal" size={24} color="#4883f0" />
      </View>
    </View>
  );
};

export class Carscreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <CarSliderImage />
        <View style={styles.msg}>
          <Text style={styles.txt}>Your car is locked</Text>
          <Text style={[styles.txt, { fontSize: 12 }]}>
            Please enter the password to unlock
          </Text>
        </View>

        <View style={styles.details}>
          <CarPartsDetail name="Fuel" usage="40.0%" />
          <CarPartsDetail name="Milage" usage="12890km" />
          <CarPartsDetail name="Battery" usage="90.0%" />
        </View>

        <View style={styles.inp}>
          <Item rounded style={styles.txtinp}>
            <Input placeholder="" style={styles.txt} secureTextEntry />
          </Item>
          <TouchableOpacity>
            <Text style={styles.forget}>Forget Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center", marginTop: 40 }}>
          <Button rounded style={styles.btn}>
            <Text style={{ color: "white", fontWeight: "500" }}>Next</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default Carscreen;

const styles = StyleSheet.create({
  cardrow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  msg: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  txt: {
    fontSize: 15,
    fontWeight: "300",
  },
  DetailsSection: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    marginHorizontal: 1,
    shadowOpacity: 0.3,
    shadowRadius: 2.65,
    elevation: 3,
    height: 65,
    width: "30%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  txt: {
    fontSize: 14,
    textAlign: "center",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  inp: {
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 50,
  },
  txtinp: {
    alignSelf: "center",
  },
  forget: { fontSize: 12, color: "#4883f0", marginTop: 10 },
  btn: { width: "60%", justifyContent: "center" },
});
