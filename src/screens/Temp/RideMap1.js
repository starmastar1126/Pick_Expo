import React, { Component } from "react";
import { StatusBar, Text, View, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native";
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

export class RideMap1 extends Component {
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
            title={i18n.translate('Ocean Mall')}
            description={"Lahore, Pakistan"}
          />
          {/* )} */}
        </MapView>
        <View style={styles.bannerView}>
          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 16, fontWeight: '500' }}>{i18n.translate('Book a Ride')}</Text>
            <Icon name='calendar-month' type='material-community' size={22} />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <View>
              <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: colors.GREY.TAB }} />
              <View style={{ width: 1, height: 30, backgroundColor: colors.BLACK, marginLeft: 4.5 }} />
              <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: colors.BLUE.TAB }} />
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ color: colors.BLUE.TAB }}>{i18n.translate('Current Location')}</Text>
              <TextInput
                style={{ marginTop: 20, width: wp('80%'), height: 30, backgroundColor: colors.GREY.PRIMARY, borderRadius: 10, paddingLeft: 10 }}
                secureTextEntry={true}
                placeholder={i18n.translate('Battery Health')}
                placeholderTextColor={colors.BLACK}
              />
            </View>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <TouchableOpacity style={styles.nextButton} onPress={() => this.props.navigation.navigate('MatchScreen1')}>
              <Text style={{ fontSize: 16, color: colors.WHITE }}>{i18n.translate('Confirm')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default RideMap1;

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
    height: 200,
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
});
