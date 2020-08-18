import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import { Thumbnail, Button, Container, Content, Footer } from "native-base";
import {
  Ionicons,
  Feather,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";

const Billhead = () => {
  return (
    <View style={styles.head}>
      <Button transparent style={styles.bckbtn}>
        <Ionicons name="ios-arrow-round-back" size={34} color="black" />
      </Button>
      <Text style={{ alignSelf: "center", fontSize: 20, fontWeight: "300" }}>
        Bill
      </Text>
      <View style={styles.loc}>
        <MaterialIcons
          name="location-searching"
          size={18}
          color="black"
          style={styles.icn}
        />
        <Text>Jeddah Mall</Text>
        <TouchableOpacity>
          <Text style={{ color: "#587ded" }}>Share</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subtxt}>Main Jeddah Mall, Saudi Arabia</Text>
      <View style={styles.loc}>
        <MaterialIcons
          name="location-on"
          size={18}
          color="#587ded"
          style={styles.icn}
        />
        <Text>Jeddah Mall</Text>
      </View>
      <Text style={styles.subtxt}>Main Jeddah Mall, Saudi Arabia</Text>

      <View style={styles.loc}>
        <TouchableOpacity>
          <Text style={{ color: "#587ded" }}>Change Address</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DetailsComp = ({ section, price }) => {
  return (
    <View style={styles.Comp}>
      <Text style={styles.Comptxt}>{section}</Text>
      <Text style={styles.Comptxt}>{price}</Text>
    </View>
  );
};

export class Bill extends Component {
  render() {
    return (
      <View style={styles.cont}>
        <Content>
          <Billhead />
          <View style={styles.cardetail}>
            <Image
              source={require("../assets/ferrari.jpeg")}
              style={styles.carImg}
            />
            <View>
              <Text
                style={{ fontSize: 22, fontWeight: "300", paddingBottom: 3 }}
              >
                Ferrari XYZ
              </Text>
              <Text style={{ color: "#aab5ad" }}>
                2 bags, $350/day and 2 seats
              </Text>
            </View>
          </View>
          <View style={styles.details}>
            <Text style={{ fontSize: 20, fontWeight: "300", color: "#636e66" }}>
              Bill Breakup
            </Text>
            <DetailsComp section="Total MRP" price="$1500" />
            <DetailsComp section="GST" price="$100" />
            <DetailsComp section="Estimated Tax" price="$50" />
            <DetailsComp section="Security Deposit" price="$1500" />

            <View style={styles.Comp}>
              <Text style={[styles.Comptxt, { color: "red" }]}>Promo</Text>
              <TouchableOpacity>
                <Text style={[styles.Comptxt, { color: "red" }]}>
                  Apply Promo
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
        <View style={styles.ConfirmationSec}>
          <View>
            <Text style={styles.price}>$350/day</Text>
            <Text style={styles.subtxt}>Subtotal</Text>
          </View>
          <Button rounded style={{ marginRight: 20 }}>
            <Text style={styles.btntxt}>Next</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default Bill;

const styles = StyleSheet.create({
  cont: { backgroundColor: "white", flex: 1 },
  head: {
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
    height: Platform.OS === "android" ? 250 : 230,
  },
  bckbtn: {
    color: "rgb(86, 101, 115)",
    marginLeft: 10,
    marginTop: 10,
  },
  loc: {
    marginTop: 20,
    flexDirection: "row",
    marginHorizontal: 30,
    marginLeft: 50,
    justifyContent: "space-between",
  },
  icn: { position: "absolute", marginLeft: -30 },
  subtxt: { fontSize: 10, marginLeft: 50, color: "#aab5ad" },
  cardetail: {
    flexDirection: "row",
    height: 150,
    alignItems: "center",
  },
  carImg: { height: 70, width: 110, marginHorizontal: 20 },
  details: {
    marginHorizontal: 22,
  },
  Comp: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  Comptxt: { color: "#636e66", fontSize: 13, fontWeight: "300" },
  ConfirmationSec: {
    flexDirection: "row",
    marginTop: 20,
    height: 60,
    justifyContent: "space-between",
  },
  btntxt: {
    width: 150,
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "300",
  },
  price: { marginLeft: 30, fontSize: 20, fontWeight: "300", marginTop: 10 },
});
