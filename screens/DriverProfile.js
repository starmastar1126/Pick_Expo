import React, { Component } from "react";
import { Container, Header, Left, Right, Button, Content } from "native-base";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  EvilIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { Platform, StyleSheet, Image, View, Text } from "react-native";

import DriverProfileDetails from "../components/DriverProfileDetails";
import UserCard from "../components/UserCard";
const Heading = () => {
  return (
    <Header transparent>
      <Left>
        <Button transparent style={{ marginLeft: 2 }}>
          <Ionicons name="ios-arrow-round-back" size={34} color="black" />
        </Button>
      </Left>
      <Right>
        <Button transparent style={{ marginBottom: 8 }}>
          <MaterialCommunityIcons
            name="pencil-minus-outline"
            size={24}
            color="black"
          />
        </Button>
      </Right>
    </Header>
  );
};

const Foot = () => {
  return (
    <View
      style={{
        position: "absolute",
        flexDirection: "row",
        bottom: 15,
        left: 35,
      }}
    >
      <AntDesign name="poweroff" size={25} color="red" />
      <Text style={{ marginLeft: 15, fontSize: 15, color: "red" }}>
        Log out
      </Text>
    </View>
  );
};

export default class DriverProfile extends Component {
  render() {
    return (
      <Container>
        <Heading />
        <Content>
          <UserCard
            UserName="Umar Khan"
            UserEmail="ahsanali@gmail.com"
            UserDes="I love to drive"
            UserNum="+923017020045"
          />

          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <DriverProfileDetails Name="Wallet" Number="$3500" />
            <DriverProfileDetails Name="Orders" Number="100" />
          </View>

          <View style={{ marginTop: 18 }}>
            <View style={styles.listingitem}>
              <EvilIcons name="heart" size={24} color="blue" />
              <Text style={styles.listingtext}>Your Favourites</Text>
            </View>

            <View style={styles.listingitem}>
              <MaterialIcons name="payment" size={20} color="blue" />
              <Text style={styles.listingtext}>Payment Details</Text>
            </View>

            <View style={styles.listingitem}>
              <FontAwesome name="legal" size={20} color="blue" />
              <Text style={styles.listingtext}> Legal</Text>
            </View>

            <View style={styles.listingitem}>
              <MaterialCommunityIcons
                name="headphones"
                size={20}
                color="blue"
              />
              <Text style={styles.listingtext}>Help</Text>
            </View>

            <View style={styles.listingitem}>
              <Ionicons name="ios-settings" size={24} color="blue" />
              <Text style={styles.listingtext}>Settings</Text>
            </View>

            <View style={styles.listingitem}>
              <AntDesign name="sharealt" size={20} color="blue" />
              <Text style={{ marginLeft: 20, fontSize: 15, fontWeight: "300" }}>
                Share With Your Friends
              </Text>
            </View>
          </View>
        </Content>
        <Foot />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  listingitem: { flexDirection: "row", marginLeft: 35, marginTop: 20 },
  listingtext: { marginLeft: 20, fontSize: 15, fontWeight: "300" },
});
