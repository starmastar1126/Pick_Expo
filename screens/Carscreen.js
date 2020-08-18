import React, { Component } from "react";
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Thumbnail, Button, Header, Content } from "native-base";

import Foot from "../components/Foot";
import CarSliderImage from "../components/CarSliderImage";
import { ScrollView } from "react-native-gesture-handler";

const Driver = () => {
  return (
    <View style={styles.DriverDetailsSection}>
      <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 22 }}>
        <Thumbnail source={require("../assets/60093.jpg")} />
        <View style={{ marginTop: 10 }} st>
          <Text style={{ fontSize: 12, marginLeft: 10 }}>Syed Ahsan Ali</Text>
          <Text style={{ fontSize: 11, marginLeft: 10 }}>Lahore</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>43434343434</Text>
        </View>
      </View>

      <Text
        style={{
          position: "absolute",
          right: 8,
          fontSize: 40,
          top: -15,
          color: "blue",
        }}
      >
        ....
      </Text>
    </View>
  );
};

export class Carscreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Content>
          <ScrollView>
            <CarSliderImage />
            <View style={styles.cardrow}>
              <View style={styles.item}>
                <MaterialCommunityIcons
                  name="car-electric"
                  size={24}
                  color="black"
                />
                <Text style={{ marginTop: 10 }}>V10 6.21 fsi</Text>
                <Text>620 hp</Text>
              </View>
              <View style={styles.item}>
                <MaterialCommunityIcons
                  name="car-seat"
                  size={24}
                  color="black"
                />
                <Text style={{ marginTop: 10 }}>2 seats</Text>
              </View>
              <View style={styles.item}>
                <Ionicons name="md-speedometer" size={24} color="black" />
                <Text style={{ marginTop: 10 }}>0-100 kph</Text>
                <Text>3.7s</Text>
              </View>
            </View>
            <View style={styles.cardrow}>
              <View style={styles.item}>
                <MaterialCommunityIcons
                  name="car-electric"
                  size={24}
                  color="black"
                />
                <Text style={{ marginTop: 10 }}>V10 6.21 fsi</Text>
                <Text>620 hp</Text>
              </View>
              <View style={styles.item}>
                <MaterialCommunityIcons
                  name="car-seat"
                  size={24}
                  color="black"
                />
                <Text style={{ marginTop: 10 }}>2 seats</Text>
              </View>
              <View style={styles.item}>
                <Ionicons name="md-speedometer" size={24} color="black" />
                <Text style={{ marginTop: 10 }}>0-100 kph</Text>
                <Text>3.7s</Text>
              </View>
            </View>
            <View
              style={{
                width: Dimensions.get("screen").width - 50,
                marginTop: 10,
                marginLeft: 20,
              }}
            >
              <Driver />
            </View>
            <View style={styles.ConfirmationSec}>
              <Text style={styles.price}>$350/day</Text>
              <Button rounded style={{ marginRight: 20 }}>
                <Text style={styles.btntxt}>Confirm</Text>
              </Button>
            </View>
          </ScrollView>
        </Content>
        <Foot />
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
  item: {
    marginTop: 10,
    height: 100,
    width: 100,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "rgb(0,0,0)",
    elevation: 5,
    borderColor: "rgb( 235, 237, 239)",
  },
  DriverDetailsSection: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 7,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 2,
    marginTop: 14,
    height: 100,
  },
  searchIcon: {
    color: "rgb(86, 101, 115)",
  },
  input: {
    flex: 1,
    paddingTop: 12,
    paddingRight: 10,
    paddingBottom: 12,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
    marginLeft: 10,
  },
  ConfirmationSec: {
    flexDirection: "row",
    marginTop: 30,
    height: 60,
    justifyContent: "space-between",
  },
  btntxt: {
    width: 150,
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "300",
  },
  price: { marginLeft: 30, fontSize: 28, fontWeight: "300" },
});
