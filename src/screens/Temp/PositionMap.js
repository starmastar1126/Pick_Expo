import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";
import { EvilIcons } from "@expo/vector-icons";
import { Button } from "native-base";
export class PositionMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 24.92009056750823,
      longitude: 67.1012272143364,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
      params: props.navigation.state.params,
      Description: "",
      // markers: []        Change this
      marker: null, // to this
    };
  }
  componentDidMount() {
    const { navigation } = this.props;
    const Data = navigation.getParam("place");
    console.log("Param Set :");
    console.log(this.state.params.place);
    this.setState({ latitude: this.state.params.place.lat });
    this.setState({ longitude: this.state.params.place.lng });
    this.setState({ Description: this.state.params.place.description });
    if (this.state.marker === null) {
      this.setState({
        marker: {
          longitude: this.state.longitude,
          latitude: this.state.latitude,
        },
      });
      console.log(this.state.marker);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
          onPress={(e) => {
            this.setState({ marker: e.nativeEvent.coordinate });
            console.log(this.state.marker);
          }}
        >
          {this.state.marker && (
            <MapView.Marker
              pinColor="blue"
              coordinate={this.state.marker}
              title={this.state.Description}
              description={"Lahore, Pakistan"}
            />
          )}
        </MapView>
        <View style={styles.bannerView}>
          <View style={{ margin: 18 }}>
            <View style={{ flexDirection: "row" }}>
              <EvilIcons name="location" size={24} color="blue" />
              <Text style={styles.bannertxt}>{this.state.Description}</Text>
            </View>
            <Text style={[styles.bannertxt, { marginLeft: 25 }]}>Lahore</Text>
            <View style={styles.bannerbtn}>
              <Button
                rounded
                style={{ width: "100%", justifyContent: "center" }}
                onPress={() => this.props.navigation.navigate("CalenderDate")}
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
