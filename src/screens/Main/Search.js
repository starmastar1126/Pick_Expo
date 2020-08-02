import React, { Component } from "react";
import { Text, View, StyleSheet, Platform, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import { connect } from "react-redux";
import { Heading, Categoryheader, Carcard, Tophost, Destination, Earningcard, } from '@components';
import configs from '@constants/configs';
import { themes, colors } from '@constants/themes';
import { images, icons } from '@constants/assets';
import API, { setClientToken } from '@utils/API';
import i18n from '@utils/i18n';

const API_KEY = "AIzaSyB4OQqx5QLNa_cnz862r8abRec-ACIgt5A";

const homePlace = {
  description: "Home",
  lat: 48.8152937,
  lng: 2.4597668,
};

const ListItem = ({ Place }) => {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.listbtn}>
          <MaterialCommunityIcons
            name="fireplace-off"
            size={24}
            color={colors.BLUE.TAB}
          />
          <Text style={{ marginLeft: 25 }}>{Place}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      place: "",
    };
  }
  render() {
    return (
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <View style={styles.head}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
          >
            <Ionicons
              name="ios-arrow-round-back"
              size={32}
              color={colors.GREY}
              style={{ paddingBottom: 13 }}
            />
          </TouchableOpacity>
          <View style={styles.searchSection}>
            <GooglePlacesAutocomplete
              placeholder="Search"
              minLength={2} // minimum length of text to search
              autoFocus={false}
              fetchDetails={true}
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data);
                console.log(details);
              }}
              getDefaultValue={() => {
                return ""; // text input default value
              }}
              query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: "AIzaSyDsmULnNLOEbWTXEZPBvwwJkZLBn-AIH2E",
                language: "en", // language of the results
              }}
              styles={{
                description: {
                  fontWeight: "bold",
                },
                predefinedPlacesDescription: {
                  color: "#1faadb",
                },
                listView: {
                  color: "black", //To see where exactly the list is
                  zIndex: 1000, //To popover the component outwards
                  position: "absolute",
                  top: 45,
                },
              }}
              currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
              currentLocationLabel="Current location"
              nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
              GoogleReverseGeocodingQuery={
                {
                  // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                }
              }
              GooglePlacesDetailsQuery={{
                // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
                fields: "formatted_address",
              }}
              filterReverseGeocodingByTypes={[
                "locality",
                "administrative_area_level_3",
              ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
              predefinedPlacesAlwaysVisible={true}
            />
          </View>
          <Text style={styles.suggest}>
            Mall Otham Mall, Damman Mall 32236, Saudi Arabia
          </Text>
        </View>
        <View style={styles.Recent}>
          <Text style={{ paddingBottom: 15 }}>
            {i18n.translate('Recently Visited')}
          </Text>
          <ListItem Place={"Al Fateer Beach in Al-Jubail"} />
          <ListItem Place={"Al Beach in Al-Dubai"} />
          <ListItem Place={"Al Fateer Beach in Al-Jubail Al Dubai"} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    padding: 15,
    width: "100%",
    justifyContent: "space-between",
  },
  searchicon: {
    marginRight: 20,
  },
  listbtn: {
    flexDirection: "row",
    marginTop: 8,
  },
  Recent: { marginTop: 15, marginHorizontal: 24 },
  suggest: {
    color: colors.GREY.TAB,
    fontWeight: "300",
    fontSize: 13,
    marginTop: 15,
  },
  head: {
    marginTop: Platform.OS === "ios" ? 32 : 25,
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: Platform.OS === "ios" ? 160 : 170,
    marginHorizontal: 24,
    borderBottomColor: colors.GREY.TAB,
  },
});

export default Search;
