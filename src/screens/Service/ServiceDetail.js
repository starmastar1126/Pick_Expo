import React, { Component } from "react";
import { StatusBar, Text, View, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";

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

class ServiceDetail extends Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: 24.92009056750823,
        longitude: 67.1012272143364,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      },
      // markers: []        Change this
      marker: null, // to this
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', left: 10, top: 10, width: 30, height: 50, zIndex: 1000 }}>
          <Icon name="keyboard-backspace" type="material" size={24} onPress={() => this.props.navigation.goBack()} />
        </View>
        <View style={styles.bannerView}>
          <Text style={{ fontSize: 14, fontWeight: "500", marginTop: 40 }}>
            {i18n.translate("Your agent is arriving in 5 min")}
          </Text>
          <View style={styles.top}>
            <Image
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                marginRight: 10,
              }}
              source={images.person3}
            />
            <View style={{ width: "80%", justifyContent: "center" }}>
              <Text>Muhammad Umar</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View>
                  <Text style={{ fontSize: 12, color: colors.GREY.SECONDARY }}>
                    Suzukl xyz
                  </Text>
                  <Text style={{ fontSize: 12, color: colors.GREY.SECONDARY }}>
                    SA 12 JB 213
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={{ width: "100%", padding: 20, marginTop: 100 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            {i18n.translate("Your current Trip")}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View>
              <View style={styles.dot} />
              <View style={styles.line1} />
              <View style={styles.dot1} />
            </View>
            <View style={{ width: "100%" }}>
              <View>
                <Text style={{ marginLeft: 20 }}>Jeddah Mall</Text>
                <Text
                  style={{
                    marginLeft: 20,
                    fontSize: 12,
                    color: colors.GREY.SECONDARY,
                  }}
                >
                  Main Jeddah mall, Saudi Arabia
                </Text>
              </View>
              <View
                style={{
                  marginTop: 20,
                  marginBottom: 20,
                  marginLeft: 20,
                  marginRight: 20,
                  width: "90%",
                  height: 1,
                  backgroundColor: colors.GREY.SECONDARY,
                }}
              />
              <View>
                <Text style={{ marginLeft: 20 }}>Jeddah Mall</Text>
                <Text
                  style={{
                    marginLeft: 20,
                    fontSize: 12,
                    color: colors.GREY.SECONDARY,
                  }}
                >
                  Main Jeddah mall, Saudi Arabia
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              marginTop: 10,
              borderBottomWidth: 1,
              borderBottomColor: colors.GREY.SECONDARY,
              paddingBottom: 10,
            }}
          >
            <Text style={{ color: colors.BLUE.TAB, marginLeft: 30 }}>
              {i18n.translate("Change Destination")}
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text>{i18n.translate("Payment")}</Text>
            <Text style={{ color: colors.BLUE.TAB }}>
              SAR12/{i18n.translate("km")}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                name="cc-paypal"
                type="font-awesome"
                size={30}
                color={colors.GREEN.DEFAULT}
              />
              <Text style={{ marginLeft: 10 }}>{i18n.translate("Cash")}</Text>
            </View>
            <Text style={{ color: colors.BLUE.TAB }}>
              {i18n.translate("Switch")}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={[
                styles.nextButton,
                { width: wp("40%"), borderColor: colors.BLUE.TAB },
              ]}
            >
              <Icon
                name="email"
                type="fontisto"
                size={20}
                color={colors.BLUE.TAB}
              />
              <Text
                style={{ fontSize: 16, color: colors.BLUE.TAB, marginLeft: 10 }}
              >
                {i18n.translate("Message")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.nextButton,
                { width: wp("40%"), borderColor: colors.BLACK, marginLeft: 10 },
              ]}
            >
              <Icon
                name="phone-call"
                type="feather"
                size={20}
                color={colors.BLACK}
              />
              <Text
                style={{ fontSize: 16, color: colors.BLACK, marginLeft: 10 }}
              >
                {i18n.translate("Call")}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%", alignItems: "center" }}>
            <TouchableOpacity
              style={styles.nextButton}
            >
              <Text style={{ fontSize: 16, color: colors.RED.DEFAULT }}>
                {i18n.translate("Cancel Ride")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  bannerView: {
    position: "absolute",
    top: 0,
    height: 160,
    width: "100%",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 20,
  },
  paramView: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.BLACK,
    alignItems: "center",
    marginLeft: "10%",
    height: 50,
    width: "80%",
    position: "absolute",
    paddingLeft: 20,
    paddingRight: 20,
    bottom: 550,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 20,
  },
  bannertxt: {
    fontSize: 12,
    color: "#262424",
  },
  bannerbtn: {
    width: "50%",
    alignSelf: "flex-end",
  },
  nextButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    width: wp("60.0%"),
    height: 40,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.GREY.SECONDARY,
    backgroundColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  top: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    width: wp("84.0%"),
    height: 60,
  },
  emailButton: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.BLUE.TAB,
  },
  callButton: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.BLACK,
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: colors.WHITE,
    backgroundColor: colors.BLACK,
  },
  dot1: {
    width: 15,
    height: 15,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: colors.WHITE,
    backgroundColor: colors.BLUE.TAB,
  },
  line1: {
    marginLeft: 6,
    width: 2,
    height: 60,
    backgroundColor: colors.BLACK,
  },
});

export default ServiceDetail;
