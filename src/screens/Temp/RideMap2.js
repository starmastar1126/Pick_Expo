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

export class RideMap2 extends Component {
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
      <View>
        <StatusBar hidden />
        <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
          <Icon name='arrow-back' type='material' color={colors.WHITE} size={25} />
        </TouchableOpacity>
        <MapView
          style={styles.mapStyle}
          region={this.state.region}
          // annotations={this.state.region}
          onPress={(e) => this.setState({ marker: e.nativeEvent.coordinate })}
        >
          {/* {this.state.marker && ( */}
          <MapView.Marker
            pinColor="blue"
            coordinate={this.state.region}
            title={"Ocean Mall"}
            description={"Lahore, Pakistan"}
          />
          {/* )} */}
        </MapView>
        <TouchableOpacity style={styles.point}>
          <Icon name='my-location' type='material' size={22} />
        </TouchableOpacity>
        <View style={styles.bannerView}>
          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 16, fontWeight: '500' }}>{i18n.translate('How would you like to pay')}</Text>
            <Icon name='calendar-month' type='material-community' size={22} />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', width: '90%', marginLeft: '5%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10, width: wp('35%'), height: 50, borderRadius: 10, borderWidth: 1, borderColor: colors.GREY.SECONDARY }}>
              <Image style={{ width: 50, height: 30, marginRight: 5 }} source={images.visa} />
              <View>
                <Text>{i18n.translate('Visa')}</Text>
                <Text style={{ fontSize: 10, color: colors.GREY.SECONDARY }}>Ending 1947</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10, width: wp('35%'), height: 50, borderRadius: 10, borderWidth: 1, borderColor: colors.GREY.SECONDARY }}>
              <Icon name='cash-100' type='material-community' size={35} color={colors.GREEN.DEFAULT} style={{ marginTop: -5 }} />
              <View>
                <Text>{i18n.translate('Cash')}</Text>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', width: '90%', marginLeft: '5%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10, width: wp('35%'), height: 50, borderRadius: 10, borderWidth: 1, borderColor: colors.GREY.SECONDARY }}>
              <Image style={{ width: 50, height: 30, marginRight: 5 }} source={images.visa} />
              <View>
                <Text>{i18n.translate('Visa')}</Text>
                <Text style={{ fontSize: 10, color: colors.GREY.SECONDARY }}>Ending 1947</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10, width: wp('35%'), height: 50, borderRadius: 10, borderWidth: 0, borderColor: colors.GREY.SECONDARY }}>
              <Icon name='plus' type='antdesign' size={30} color={colors.BLUE.TAB} />
              <Text style={{ fontSize: 16, color: colors.BLUE.TAB, marginLeft: 5 }}>{i18n.translate('Add new')}</Text>
            </View>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <TouchableOpacity style={styles.nextButton} onPress={() => this.props.navigation.navigate('Trip2Detail')}>
              <Text style={{ fontSize: 16, color: colors.WHITE }}>{i18n.translate('Pay with card')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default RideMap2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  back: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 10,
    left: 0,
    width: 50,
    height: 50,
    // zIndex: 1000
  },
  mapStyle: {
    // zIndex: 900,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  bannerView: {
    height: 250,
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
    alignItems: 'center',
    marginLeft: '10%',
    height: 50,
    width: "80%",
    position: "absolute",
    paddingLeft: 20,
    paddingRight: 20,
    bottom: 276,
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
    marginTop: 20,
    width: wp('60.0%'),
    height: 40,
    borderRadius: 50,
    backgroundColor: colors.BLUE.TAB,
    shadowColor: colors.BLACK,
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5
  },
  point: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 260,
    right: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5
  }
});
