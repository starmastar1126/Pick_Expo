import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Button } from "native-base";
import MapView from "react-native-maps";
import { EvilIcons } from "@expo/vector-icons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import {
  Loading,
  Carcard,
  Tophost,
  Destination,
  Earningcard,
} from "@components";
import { isEmpty } from "@constants/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

var mapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#dadada",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#c9c9c9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
];

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 24.92009056750823,
      longitude: 67.1012272143364,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
      Description: "",
      marker: null,
      newLoc: null,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            left: 10,
            top: 10,
            width: 30,
            height: 50,
            zIndex: 1000,
          }}
        >
          <Icon
            name="keyboard-backspace"
            type="material"
            size={24}
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        <MapView
          customMapStyle={mapStyle}
          style={styles.mapStyle}
          initialRegion={{
            latitude: this.props.route.params.details.geometry.location.lat,
            longitude: this.props.route.params.details.geometry.location.lng,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
          onPress={(e) => {
            this.setState({ marker: e.nativeEvent.coordinate });
          }}
        >
          <MapView.Marker
            draggable
            pinColor="blue"
            coordinate={{
              latitude: this.props.route.params.details.geometry.location.lat,
              longitude: this.props.route.params.details.geometry.location.lng,
            }}
            // title={this.props.route.params.data.description}
            description={this.props.route.params.data.description}
            onDragEnd={(e) =>
              this.setState({ newLoc: e.nativeEvent.coordinate })
            }
            image={require("../../assets/images/mapPin.png")}
          />
        </MapView>
        <View style={styles.bannerView}>
          <View style={{ margin: 18 }}>
            <View style={{ width: "60%", flexDirection: "row" }}>
              <EvilIcons name="location" size={24} color="blue" />
              <Text style={styles.bannertxt}>
                {this.props.route.params.data.description}
              </Text>
            </View>
            <View style={styles.bannerbtn}>
              <Button
                rounded
                style={{ width: "100%", height: 35, justifyContent: "center" }}
                onPress={() =>
                  this.props.navigation.navigate("Calendar", {
                    coordinates: this.state.newLoc
                      ? this.state.newLoc
                      : {
                          longitude: this.props.route.params.details.geometry
                            .location.lng,
                          latitude: this.props.route.params.details.geometry
                            .location.lat,
                        },
                  })
                }
              >
                <Text style={{ color: "white" }}>Confirm</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

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
    height: 100,
    width: "80%",
    position: "absolute",
    bottom: 2,
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
    marginTop: 5,
    width: "50%",
    alignSelf: "flex-end",
  },
});

export default Map;
