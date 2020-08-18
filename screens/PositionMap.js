import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";
import { EvilIcons } from "@expo/vector-icons";
import { Button } from "native-base";
export class PositionMap extends Component {
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
        <MapView
          style={styles.mapStyle}
          region={this.state.region}
          onPress={(e) => this.setState({ marker: e.nativeEvent.coordinate })}
        >
          {this.state.marker && (
            <MapView.Marker
              pinColor="blue"
              coordinate={this.state.marker}
              title={"Ocean Mall"}
              description={"Lahore, Pakistan"}
            />
          )}
        </MapView>
        <View style={styles.bannerView}>
          <View style={{ margin: 18 }}>
            <View style={{ flexDirection: "row" }}>
              <EvilIcons name="location" size={24} color="blue" />
              <Text style={styles.bannertxt}>Ocean Mall, Lahore</Text>
            </View>
            <Text style={[styles.bannertxt, { marginLeft: 25 }]}>
              33232, Lahore
            </Text>
            <View style={styles.bannerbtn}>
              <Button
                rounded
                style={{ width: "100%", justifyContent: "center" }}
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

export default PositionMap;

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
    width: "50%",
    alignSelf: "flex-end",
  },
});
