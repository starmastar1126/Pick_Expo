import React, { Component } from "react";
import { StatusBar, Text, View, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import { EvilIcons } from "@expo/vector-icons";

import { Container, Content, Button } from "native-base";
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Foot } from '@components';
import configs from '@constants/configs';
import { themes, colors } from '@constants/themes';
import { images, icons } from '@constants/assets';
import API, { setClientToken } from '@services/API';
import i18n from '@services/i18n';

export class EndTrip extends Component {
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
        <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.navigate('Thankyou')}>
          <Icon name='close' type='antdesign' color={colors.BLACK} size={15} />
        </TouchableOpacity>
        <View style={{ width: '100%', padding: 20, marginTop: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: '500', marginTop: 10, marginBottom: 10 }}>{i18n.translate('Thanks for riding')}, Umar</Text>
          <Text style={{ fontSize: 12, width: '50%', color: colors.GREY.SECONDARY }}>{i18n.translate('We hope you enjoyed your ride this morning')}</Text>
        </View>
        <View style={{ width: '100%', padding: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>{i18n.translate('Trip Detials')}</Text>
        </View>
        <View style={[styles.paramView, { zIndex: 1000 }]}>
          <Text style={{ fontSize: 10, color: colors.WHITE }}>22nd Mar 2020 10:00am</Text>
          <Text style={{ fontSize: 10, color: colors.WHITE }}>15km | 40min</Text>
        </View>
        <Image style={{ width: '100%', height: 150, borderRadius: 20, marginTop: -20 }} source={images.map} />
        <View style={{ flexDirection: 'row', padding: 20 }}>
          <View>
            <View style={styles.dot} />
            <View style={styles.line1} />
            <View style={styles.dot1} />
          </View>
          <View style={{ width: '100%' }}>
            <View>
              <Text style={{ marginLeft: 20 }}>Jeddah Mall</Text>
              <Text style={{ marginLeft: 20, fontSize: 12, color: colors.GREY.SECONDARY }}>Main Jeddah mall, Saudi Arabia</Text>
              <Text style={{ marginLeft: 20, fontSize: 12, color: colors.BLUE.TAB }}>10:00am</Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={{ marginLeft: 20 }}>Jeddah Mall</Text>
              <Text style={{ marginLeft: 20, fontSize: 12, color: colors.GREY.SECONDARY }}>Main Jeddah mall, Saudi Arabia</Text>
              <Text style={{ marginLeft: 20, fontSize: 12, color: colors.BLUE.TAB }}>10:00am</Text>
            </View>
          </View>
        </View>
        <View style={styles.bannerView}>
          <Text>{i18n.translate('Rate your trip with')} Umar</Text>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <View style={{ width: 15, height: 15, borderRadius: 8, marginLeft: 5, backgroundColor: colors.GREY.SECONDARY }} />
            <View style={{ width: 15, height: 15, borderRadius: 8, marginLeft: 5, backgroundColor: colors.GREY.SECONDARY }} />
            <View style={{ width: 15, height: 15, borderRadius: 8, marginLeft: 5, backgroundColor: colors.GREY.SECONDARY }} />
            <View style={{ width: 15, height: 15, borderRadius: 8, marginLeft: 5, backgroundColor: colors.GREY.SECONDARY }} />
            <View style={{ width: 15, height: 15, borderRadius: 8, marginLeft: 5, backgroundColor: colors.GREY.SECONDARY }} />
          </View>
        </View>
      </View>
    );
  }
}

export default EndTrip;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: "center",
  },
  back: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 10,
    right: 0,
    width: 50,
    height: 50,
    zIndex: 1000
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  bannerView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: "100%",
    position: "absolute",
    padding: 20,
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.BLUE.TAB,
    alignItems: 'center',
    height: 50,
    width: "80%",
    paddingLeft: 20,
    paddingRight: 20,
    // bottom: 550,
    borderRadius: 10,
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    width: wp('60.0%'),
    height: 40,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.GREY.SECONDARY,
    backgroundColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5
  },
  top: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    marginBottom: 10,
    width: wp('84.0%'),
    height: 60,
    padding: 10,
  },
  emailButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.BLUE.TAB
  },
  callButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.BLACK
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
    backgroundColor: colors.BLACK
  },
});
