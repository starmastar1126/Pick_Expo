import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DriverProfileDetails = ({ Name, Number }) => {
  return (
    <View style={styles.DriverWallet}>
      <Text style={{ fontSize: 20, fontWeight: "300" }}>{Number}</Text>
      <Text style={{ marginTop: 5, fontWeight: "300" }}>{Name}</Text>
    </View>
  );
};

export default DriverProfileDetails;

const styles = StyleSheet.create({
  DriverWallet: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    borderColor: "#c7c3b9",
  },
});
