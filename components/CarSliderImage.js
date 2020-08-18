import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CarSliderImage = () => {
  return (
    <View>
      <Image
        source={require("../assets/ferrari.jpeg")}
        style={{ width: "100%", height: 260 }}
        resizeMode="cover"
      />
      <Ionicons name="ios-arrow-round-back" size={35} style={styles.backbtn} />
      <Text style={styles.Carname}>Ferrari XYZ</Text>
      <Text style={styles.Slider}>.....</Text>
    </View>
  );
};

export default CarSliderImage;

const styles = StyleSheet.create({
  backbtn: {
    position: "absolute",
    left: 10,
    top: 20,
    color: "rgb(255,255,255)",
  },
  Carname: {
    position: "absolute",
    color: "white",
    fontWeight: "500",
    marginLeft: 10,
    marginTop: 20,
    fontSize: 22,
    bottom: 23,
  },
  Slider: {
    position: "absolute",
    color: "white",
    fontWeight: "500",
    marginLeft: 10,
    marginTop: 20,
    fontSize: 25,
    bottom: 6,
    alignSelf: "center",
  },
});
