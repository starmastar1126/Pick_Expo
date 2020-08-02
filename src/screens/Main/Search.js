import React, { Component } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { Loading } from '@components';
import { isEmpty } from '@constants/functions';
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

const API_KEY = "AIzaSyCXU9mYBzIVbb3ljhHbwWj1IHAP373_RO4";
// const API_KEY = "AIzaSyB4OQqx5QLNa_cnz862r8abRec-ACIgt5A";

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

class Search extends Component {
  constructor() {
    super();
    this.state = {
      place: "",
    };
  }

  renderHeading() {
    return (
      <View style={{ flexDirection: 'row', width: wp('100.0%'), height: 50 }}>
        <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: 80, padding: 10 }}>
          <Icon name="keyboard-backspace" type="material" size={24} onPress={() => this.props.navigation.goBack()} />
        </View>
        <View style={{ width: wp('100.0%') - 160, justifyContent: 'center', alignItems: 'center' }}>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'flex-end', width: 80, padding: 10 }}>
          <Icon name="pencil-minus-outline" type="material-community" size={24} />
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={{ backgroundColor: "white", flex: 1 }}>
        {this.renderHeading()}
        <View style={{width: wp('100.0%'), height: '100%', padding: 20}}>
        <GooglePlacesAutocomplete
          placeholder='Search'
          minLength={2}
          debounce={200}
          autoFocus={true}
          currentLocation={true}
          currentLocationLabel="Current location"
          enablePoweredByContainer={false}
          returnKeyType={'search'}
          listViewDisplayed='auto'
          fetchDetails={true}
          predefinedPlacesAlwaysVisible={true}
          renderDescription={row => row.description}
          textInputProps={{ clearButtonMode: 'while-editing' }}
          renderDescription={(row) => row.description || row.formatted_address || row.name}
          nearbyPlacesAPI='GoogleReverseGeocoding'
          predefinedPlaces={[homePlace, workPlace]}
          GooglePlacesDetailsQuery={{
            fields: "geometry",
          }}
          query={{
            key: API_KEY,
            language: 'en'
          }}
          onPress={(data, details = null) => {
            this.props.navigation.navigate('Map', { data: data, details: details });
          }}
          styles={{
            currentLocation: {
              color: colors.BLACK,
            },
            container: {
              backgroundColor: colors.WHITE
            },
            textInputContainer: {
              borderTopWidth: 0,
              borderBottomWidth: 0,
              width: '100%',
              height: 45,
              backgroundColor: colors.WHITE,
              borderRadius: 10,
              shadowColor: colors.BLACK,
              shadowOffset: { width: 2, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 5,
              elevation: 3,
            },
            description: {
              height: hp('50%'),
              color: colors.BLUE
            },
          }}
        /></View>
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
    height: hp('50%'),
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
