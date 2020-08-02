import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PayItem = () => {
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View style={styles.CardViewComp}>
          <Image
            source={require("../assets/visa.png")}
            style={{ width: 30, height: 30 }}
          />
          <TouchableOpacity>
            <Text style={{ marginLeft: 10, fontWeight: "300" }}>Visa</Text>
            <Text style={{ marginLeft: 12, fontSize: 9, fontWeight: "200" }}>
              Value
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.CardViewComp}>
          <Image source={require("../assets/paypal.png")} />
          <TouchableOpacity>
            <Text style={{ marginLeft: 10, fontWeight: "300" }}>Paypal</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 15,
        }}
      >
        <View style={styles.CardViewComp}>
          <Image source={require("../assets/payoneer.png")} />
          <TouchableOpacity>
            <Text style={{ marginLeft: 10, fontWeight: "300" }}>Payoneer</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.CardViewComp}>
          <Ionicons name="ios-add" size={24} color="black" />
          <TouchableOpacity>
            <Text style={{ marginLeft: 10, fontWeight: "300" }}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default PayItem;

const styles = StyleSheet.create({
  CardViewComp: {
    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    height: 70,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#b6c1d6",
  },
});
