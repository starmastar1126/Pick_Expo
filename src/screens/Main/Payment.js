import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Button } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import { connect } from "react-redux";
import { Loading, PayItem } from '@components';
import { isEmpty } from '@constants/functions';
import configs from '@constants/configs';
import { themes, colors } from '@constants/themes';
import { images, icons } from '@constants/assets';
import axios, { setClientToken } from '@utils/axios';
import i18n from '@utils/i18n';

class Payment extends Component {

  renderHeading() {
    return (
      <View style={{ flexDirection: 'row', width: wp('100.0%'), height: 50 }}>
        <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: 80, padding: 10 }}>
          <Icon name="keyboard-backspace" type="material" size={24} onPress={() => this.props.navigation.goBack()} />
        </View>
        <View style={{ width: wp('100.0%') - 160, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: "300", marginTop: 5 }}>
            Payment
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
        {this.renderHeading()}
        <Text
          style={{
            marginLeft: 30,
            marginTop: 25,
            fontSize: 15,
            fontWeight: "400",
          }}
        >
          How would you like to pay, {"\n$1850"} ?
      </Text>
        <View style={styles.img}>
          <Ionicons name="ios-arrow-back" size={24} color="black" />
          <Image
            source={require("@assets/images/Card.png")}
            style={{ width: "80%", height: 180, marginVertical: 40 }}
            resizeMode="cover"
          />
          <MaterialIcons name="navigate-next" size={30} color="black" />
        </View>
        <View style={{
          position: 'absolute',
          bottom: 0,
          width: wp('100%'),
          height: 270,
          paddingTop: 20,
          backgroundColor: colors.WHITE,
          borderRadius: 20,
          shadowColor: "#000",
          shadowOffset: { width: 4, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 10,
          elevation: 10,
        }}>
          <PayItem />
          <View style={{width: wp('100%'), alignItems: 'center', marginTop: 20}}>
          <Button rounded style={{ justifyContent: "center", width: "70%" }}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "300" }}>
              Pay with card
            </Text>
          </Button>
          </View>
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
