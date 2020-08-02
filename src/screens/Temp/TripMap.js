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

export class TripMap extends Component {
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
        <TouchableOpacity style={{ position: 'absolute', bottom: 200, left: wp('100%')/2 - 20 }} onPress={() => this.props.navigation.navigate('TripDetail')}>
          <Icon name='keyboard-arrow-up' type='material' color={colors.BLACK} size={30} />
        </TouchableOpacity>
        <View style={styles.paramView}>
          <Text style={{ color: colors.WHITE }}>{i18n.translate('Reaching destination in 35 Minutes')}</Text>
        </View>
        <View style={styles.bannerView}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: colors.GREY.SECONDARY }}>
            <Text style={{ fontSize: 16, fontWeight: '500' }}>{i18n.translate('On Trip')}</Text>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <Icon name='sharealt' type='antdesign' size={18} color={colors.BLUE.TAB} />
              <Text style={{ fontSize: 12, color: colors.BLUE.TAB, marginLeft: 10 }}>{i18n.translate('Share trip details')}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.top}>
            <Image style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} source={images.person3} />
            <View style={{ width: '80%', justifyContent: 'center' }}>
              <Text>Muhammad Umar</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                  <Text style={{ fontSize: 12, color: colors.GREY.SECONDARY }}>Suzukl xyz</Text>
                  <Text style={{ fontSize: 12, color: colors.GREY.SECONDARY }}>SA 12 JB 213</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-end' }}>
            <TouchableOpacity style={styles.emailButton}>
              <Icon name='email' type='material-community' color={colors.BLUE.TAB} size={12} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.callButton}>
              <Icon name='call' type='zocial' color={colors.BLACK} size={12} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default TripMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  bannerView: {
    height: 150,
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
    justifyContent: 'center',
    backgroundColor: colors.BLACK,
    alignItems: 'center',
    marginLeft: '10%',
    height: 50,
    width: "80%",
    position: "absolute",
    paddingLeft: 20,
    paddingRight: 20,
    bottom: 150,
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
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
});
