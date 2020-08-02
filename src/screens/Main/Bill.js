import React, { Component } from "react";
import { Text, View, StyleSheet, Platform, TouchableOpacity, Image } from "react-native";
import { Button, Content } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import { connect } from "react-redux";
import { Loading } from '@components';
import { isEmpty } from '@constants/functions';
import configs from '@constants/configs';
import { themes, colors } from '@constants/themes';
import { images, icons } from '@constants/assets';
import axios, { setClientToken } from '@utils/axios';
import i18n from '@utils/i18n';

const DetailsComp = ({ section, price }) => {
  return (
    <View style={styles.Comp}>
      <Text style={styles.Comptxt}>{section}</Text>
      <Text style={styles.Comptxt}>{price}</Text>
    </View>
  );
};

class Bill extends Component {

  renderHeading() {
    return (
      <View style={{ flexDirection: 'row', width: wp('100.0%'), height: 50 }}>
        <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: 80, padding: 10 }}>
          <Icon name="keyboard-backspace" type="material" size={24} onPress={() => this.props.navigation.goBack()} />
        </View>
        <View style={{ width: wp('100.0%') - 160, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: "300", marginTop: 5 }}>
            Bill
          </Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'flex-end', width: 80, padding: 10 }}>

        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.cont}>
        <View style={styles.head}>
        {this.renderHeading()}
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
        <Content>
          <View style={styles.cardetail}>
            <Image
              source={require("@assets/images/ferrari.jpeg")}
              style={styles.carImg}
            />
            <View>
              <Text
                style={{ fontSize: 22, fontWeight: "300", paddingBottom: 3 }}
              >
                Ferrari XYZ
              </Text>
              <Text style={{ color: "#aab5ad" }}>
                2 bags, SAR 350/day and 2 seats
              </Text>
            </View>
          </View>
          <View style={styles.details}>
            <Text style={{ fontSize: 20, fontWeight: "300", color: "#636e66" }}>
              Bill Breakup
            </Text>
            <DetailsComp section="Total MRP" price="SAR1500" />
            <DetailsComp section="GST" price="SAR100" />
            <DetailsComp section="Estimated Tax" price="SAR50" />
            <DetailsComp section="Security Deposit" price="SAR1500" />

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
            <Text style={styles.price}>SAR 350/day</Text>
            <Text style={styles.subtxt}>Subtotal</Text>
          </View>
          <Button rounded style={{ marginRight: 20, height: 35 }} onPress={() => this.props.navigation.navigate('Payment')}>
            <Text style={styles.btntxt}>Next</Text>
          </Button>
        </View>
      </View>
    );
  }
}

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
    height: Platform.OS === "android" ? 200 : 200,
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
    alignItems: 'center',
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

export default Bill;
