import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Button } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import PayItem from "../components/PayItem";
const Head = ({ price }) => {
  return (
    <View>
      <Button transparent style={styles.bckbtn}>
        <Ionicons name="ios-arrow-round-back" size={34} color="black" />
      </Button>
      <Text style={styles.title}>Payment</Text>
      <Text
        style={{
          marginLeft: 30,
          marginTop: 25,
          fontSize: 15,
          fontWeight: "400",
        }}
      >
        How would you like to pay, {"\n" + price} ?
      </Text>
    </View>
  );
};

export class Payment extends Component {
  render() {
    return (
      <View style={styles.cont}>
        <Head price="SAR1850" />
        <View style={styles.img}>
          <Ionicons name="ios-arrow-back" size={24} color="black" />
          <Image
            source={require("../assets/Card.png")}
            style={{ width: "80%", height: 180, marginVertical: 40 }}
            resizeMode="cover"
          />
          <MaterialIcons name="navigate-next" size={30} color="black" />
        </View>
        <View>
          <PayItem />
        </View>

        <View style={{ marginTop: 30, alignItems: "center" }}>
          <Button rounded style={{ justifyContent: "center", width: "70%" }}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "300" }}>
              Pay with card
            </Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default Payment;

const styles = StyleSheet.create({
  cont: { backgroundColor: "white", flex: 1 },
  title: { alignSelf: "center", fontSize: 17, fontWeight: "300" },
  bckbtn: {
    color: "rgb(86, 101, 115)",
    marginLeft: 10,
    marginTop: 10,
  },
  img: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  CardViewComp: {
    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    height: 70,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
