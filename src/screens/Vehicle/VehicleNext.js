import React from "react";
import { StatusBar, StyleSheet, ScrollView, View, Text, TouchableOpacity, Image, TextInput, Alert, FlatList } from "react-native";
import { Container, Content, Item, Input, Picker } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon, CheckBox } from 'react-native-elements';
import { connect } from "react-redux";
import { Loading } from '@components';
import { isEmpty } from '@constants/functions';
import configs from '@constants/configs';
import { themes, colors } from '@constants/themes';
import { images, icons } from '@constants/assets';
import axios, { setClientToken } from '@utils/axios';
import i18n from '@utils/i18n';

class VehicleNext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,

      Make: undefined,
      Model: undefined,
      Trim: undefined,
      Styled: undefined,
      Fueltype: undefined,
      Fuelgrade: undefined,
      makelist: [],
      modelist: [],
      trimlist: [],
      stylelist: [],
      fueltypelist: [],
      fuelgradelist: [],

      Year: "",
      Name: "",
      ModelTxt: "",
      CityConsum: "",
      HighwayConsum: "",
      Door: "",
      Seats: "",
      Odometer: "",
      Transmission: "",
      MarketsVal: "",
      Condition: "",
      SeatbeltType: "",
      VehicleDetail: "",
      AdvNoticehrs: "",
      ShortTrip: "",
      Longtrip: "",
      PlateNum: "",
      LicenceState: "",
      Cardescrip: "",
      Maxprice: "",
      Minprice: "",
      Defaultprice: "",
      Hourlyprice: "",
      Freekm: "",
      SevenDayDiscount: "",
      ThirtyDayDiscount: "",
      Allbelt: false,
      AutomaticPrice: false,
      IsSalvage: false,
      CreatedAt: "",
      VehicleImageDto: {
        id: 0,
        image: "",
        thumbNail: "",
        isMain: true,
        vehicleId: 0,
      },
      VehicleFeaturesDto: {
        id: 0,
        name: "Check",
        vehicleId: 0,
      },
      image: null,
      imagepath: "",
    };
  }

  async componentDidMount() {
    this.Makelistget();
    this.FuelListget();
    this.FuelGradeListget();
    this.getPermissionAsync();
    this.getLocationAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  getLocationAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
      }
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({
      carLocationLatitude: location.coords.latitude,
      carLocationLongitude: location.coords.longitude
    });
  };
  
  DataSentToServer = async () => {
    this.setState({
      VehicleImageDto: {
        ...this.state.VehicleFeaturesDto,
        image: this.state.imagepath,
      },
    });
    if (
      Number(this.state.Year) < 1970 &&
      this.state.Make === undefined &&
      this.state.Fueltype === undefined &&
      Number(this.state.CityConsum) <= 0 &&
      Number(this.state.HighwayConsum) <= 0 &&
      Number(this.state.Door) <= 0 &&
      this.state.Seats.length < 0 &&
      Number(this.state.Transmission) <= 0 &&
      Number(this.state.MarketsVal) <= 0 &&
      Number(this.state.AdvNoticehrs) <= 0 &&
      Number(this.state.ShortTrip) <= 0 &&
      Number(this.state.Longtrip) <= 0 &&
      Number(this.state.Minprice) <= 0 &&
      Number(this.state.Maxprice) &&
      Number(this.state.Defaultprice) <= 0 &&
      Number(this.state.Hourlyprice) <= 0 &&
      Number(this.state.Freekm) < 0 &&
      Number(this.state.SevenDayDiscount) < 0 &&
      Number(this.state.ThirtyDayDiscount) < 0
    ) {
      alert("Please Check Out Your Field");
    } else {
      let date = new Date();
      await axios.post("Vehicle", {
        carLocationLatitude: !isEmpty(this.state.carLocationLatitude) ? this.state.carLocationLatitude : 48.8152937,
        carLocationLongitude: !isEmpty(this.state.carLocationLongitude) ? this.state.carLocationLongitude : 2.4597668,
        carLocation: "",
        country: !isEmpty(this.props.route.params.Country) ? this.props.route.params.Country : "",
        streetAddress: !isEmpty(this.props.route.params.Street) ? this.props.route.params.Street : "",
        city: !isEmpty(this.props.route.params.City) ? this.props.route.params.City : "",
        state: !isEmpty(this.props.route.params.State) ? this.props.route.params.State : "",
        zipCode: !isEmpty(this.props.route.params.ZipCode) ? this.props.route.params.ZipCode : "",
        year: !isEmpty(this.state.Year) ? Number(this.state.Year) : 2020,
        makeId: !isEmpty(this.state.Make) ? this.state.Make : "",
        name: !isEmpty(this.state.Name) ? this.state.Name : "",
        modelId: !isEmpty(this.state.Model) ? this.state.Model : "",
        trimId: !isEmpty(this.state.Trim) ? Number(this.state.Trim) : null,
        styleId: !isEmpty(this.state.Styled) ? Number(this.state.Styled) : null,
        model: !isEmpty(this.state.ModelTxt) ? this.state.ModelTxt : "",
        fuelTypeId: !isEmpty(this.state.Fueltype) ? this.state.Fueltype : "",
        fuelGradeId: !isEmpty(this.state.Fuelgrade) ? this.state.Fuelgrade : "",
        cityConsumption: !isEmpty(this.state.CityConsum) ? Number(this.state.CityConsum) : 0,
        highWayConsumption: !isEmpty(this.state.HighwayConsum) ? Number(this.state.HighwayConsum) : 0,
        doors: !isEmpty(this.state.Door) ? Number(this.state.Door) : 0,
        seats: !isEmpty(this.state.Seats) ? Number(this.state.Seats) : 0,
        odoMeter: !isEmpty(this.state.Odometer) ? Number(this.state.Odometer) : 0,
        transmission: !isEmpty(this.state.Transmission) ? Number(this.state.Transmission) : 0,
        isSalvageTitle: !isEmpty(this.state.IsSalvage) ? this.state.IsSalvage : false,
        marketValue: !isEmpty(this.state.MarketsVal) ? Number(this.state.MarketsVal) : 0,
        vehicleCondition: !isEmpty(this.state.Condition) ? Number(this.state.Condition) : 0,
        allSeatBelt: !isEmpty(this.state.Allbelt) ? this.state.Allbelt : false, 
        seatBeltType: !isEmpty(this.state.SeatbeltType) ? Number(this.state.SeatbeltType) : 0,
        vehicleDetails: !isEmpty(this.state.VehicleDetail) ? this.state.VehicleDetail : "",
        advanceNoticeHrs: !isEmpty(this.state.AdvNoticehrs) ? Number(this.state.AdvNoticehrs) : 0,
        shortestPossibleTrip: !isEmpty(this.state.ShortTrip) ? Number(this.state.ShortTrip) : 0,
        longestPossibleTrip: !isEmpty(this.state.Longtrip) ? Number(this.state.Longtrip) : 0,
        licensePlateNumber: !isEmpty(this.state.PlateNum) ? this.state.PlateNum : "",
        licenseState: !isEmpty(this.state.LicenceState) ? this.state.LicenceState : "",
        carDescription: !isEmpty(this.state.Cardescrip) ? this.state.Cardescrip : "",
        automaticPricing: !isEmpty(this.state.AutomaticPrice) ? this.state.AutomaticPrice : false,
        minimumPrice: !isEmpty(this.state.Minprice) ? Number(this.state.Minprice) : 0,
        maximumPrice: !isEmpty(this.state.Maxprice) ? Number(this.state.Maxprice) : 0,
        defaultPrice: !isEmpty(this.state.Defaultprice) ? Number(this.state.Defaultprice) : 0,
        hourlyPrice: !isEmpty(this.state.Hourlyprice) ? Number(this.state.Hourlyprice) : 0,
        freeKm: !isEmpty(this.state.Freekm) ? Number(this.state.Freekm) : 0,
        sevenDayDiscount: !isEmpty(this.state.SevenDayDiscount) ? Number(this.state.SevenDayDiscount) : 0,
        thirtyDayDiscount: !isEmpty(this.state.ThirtyDayDiscount) ? Number(this.state.ThirtyDayDiscount) : 0,
        createdAt: date.getTime(),
        vehicleImages: [!isEmpty(this.state.VehicleImageDto) ? this.state.VehicleImageDto : {}],
        vehicleFeatures: [!isEmpty(this.state.VehicleFeaturesDto) ? this.state.VehicleFeaturesDto : {}]
      }).then(res => {
        console.log(res)
        this.props.navigation.navigate('VehicleDone');
      }).catch((e) => {
        console.log(e)
      });
    }
  };

  onValueChange = (value) => {
    this.setState({ selected: value });
  };
  Makelistget = async () => {
    await axios.get("Make/GetAll")
      .then((result) => this.setState({ makelist: result.data }))
      .then(() => console.log(this.state.makelist))
      .catch((e) => console.log(e));
  };
  onValueMakeChange = async (value) => {
    this.setState({ Make: value });
    await axios.get("Model/GetAll?make=" + Number(value))
      .then((result) => this.setState({ modelist: result.data }))
      .then(() => console.log(this.state.modelist))
      .catch((e) => console.log(e));
  };
  onValueModelChange = async (value) => {
    this.setState({ Model: value });
    await axios.get("Trim/GetAll?model=" + Number(value))
      .then((result) => this.setState({ trimlist: result.data }))
      .then(() => console.log(this.state.trimlist))
      .catch((e) => console.log(e));
  };
  onValueTrimChange = async (value) => {
    this.setState({ Trim: value });
    await axios.get("Style/GetAll?trim=" + Number(value))
      .then((result) => this.setState({ stylelist: result.data }))
      .then(() => console.log(this.state.stylelist))
      .catch((e) => console.log(e));
  };

  onValueStyleChange = async (value) => {
    this.setState({ Styled: value });
  };
  FuelListget = async () => {
    await axios.get("FuelType/GetAll")
      .then((result) => this.setState({ fueltypelist: result.data }))
      .then(() => console.log(this.state.fueltypelist))
      .catch((e) => console.log(e));
  };
  onValueFuelTypeChange = async (value) => {
    this.setState({ Fueltype: value });
  };
  FuelGradeListget = async () => {
    await axios.get("FuelGrade/GetAll")
      .then((result) => this.setState({ fuelgradelist: result.data }))
      .then(() => console.log(this.state.fuelgradelist))
      .catch((e) => console.log(e));
  };
  onValueFuelGradeChange = async (value) => {
    this.setState({ Fuelgrade: value });
  };

  pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,

        aspect: [4, 3],
        quality: 0.6,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
      setTimeout(() => {
        let UploadData = new FormData();
        UploadData.append("file", {
          uri: this.state.image,
          type: "image/jpg",
          name: this.state.filename || `filename1.jpg`,
        });
        UploadData.append("folder", "vehicles");

        fetch("https://6cbd535.online-server.cloud/api/Shared/upload", {
          method: "post",
          headers: {
            Accept: "application/x-www-form-urlencoded",
          },
          body: UploadData,
        }).then((results) => results.text())
          .then((response) => this.setState({ imagepath: response }))
          .catch((e) => console.log(e));
      }, 1000);
    } catch (E) {
      console.log(E);
    }
  };
  renderHeading() {
    return (
      <View style={{ flexDirection: 'row', width: wp('100.0%'), height: 50 }}>
        <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: 80, padding: 10 }}>
          <Icon name="keyboard-backspace" type="material" size={24} onPress={() => this.props.navigation.goBack()} />
        </View>
        <View style={{ width: wp('100.0%') - 160, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: "400", marginTop: 5 }}>
            {i18n.translate("Car Details")}
          </Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'flex-end', width: 80, padding: 10 }}>
        </View>
      </View>
    );
  };

  render() {
    return (
      <Container>
        {this.renderHeading()}
        <View style={{ alignItems: "center", marginTop: 30 }}>
          <Text style={{ fontSize: 12, marginBottom: 10 }}>
            {i18n.translate("Please enter following details correctly")}
          </Text>
        </View>
        <Content>
          <StatusBar hidden />
          <ScrollView contentContainerStyle={styles.main}>
            <TextInput
              keyboardType="number-pad"
              style={styles.Lists}
              placeholder={i18n.translate("Year")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ Year: txt })}
            />
            <View style={styles.picker}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-drop-down" type="material" />}
                placeholder="Select your Make "
                placeholderStyle={{
                  color: colors.GREY.SECONDARY,
                  fontSize: 14,
                  marginRight: 20,
                  fontWeight: "400",
                  marginLeft: -10,
                }}
                placeholderIconColor="grey"
                style={{ width: wp("90.0%"), height: 35 }}
                selectedValue={this.state.Make}
                onValueChange={(txt) => this.onValueMakeChange(txt)}
              >
                {this.state.makelist.map((item, key) => {
                  return <Picker.Item key={key} label={item.name} value={item.id} />;
                })}
              </Picker>
            </View>
            <TextInput
              style={styles.Lists}
              placeholder={i18n.translate("Name")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ Name: txt })}
            />

            <View style={styles.picker}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-drop-down" type="material" />}
                placeholder="Select your Model"
                placeholderStyle={{
                  color: colors.GREY.SECONDARY,
                  fontSize: 14,
                  marginRight: 20,
                  fontWeight: "400",
                  marginLeft: -10,
                }}
                placeholderIconColor="grey"
                style={{ width: wp("90.0%"), height: 35 }}
                selectedValue={this.state.Model}
                onValueChange={(txt) => this.onValueModelChange(txt)}
              >
                {this.state.modelist.map((item, key) => {
                  return <Picker.Item key={key} label={item.name} value={item.id} />;
                })}
              </Picker>
            </View>

            <View style={styles.picker}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-drop-down" type="material" />}
                placeholder="Select your Trim "
                placeholderStyle={{
                  color: colors.GREY.SECONDARY,
                  fontSize: 14,
                  marginRight: 20,
                  fontWeight: "400",
                  marginLeft: -10,
                }}
                placeholderIconColor="grey"
                style={{ width: wp("90.0%"), height: 35 }}
                selectedValue={this.state.Trim}
                onValueChange={(txt) => this.onValueTrimChange(txt)}
              >
                {this.state.trimlist.map((item, key) => {
                  return <Picker.Item key={key} label={item.name} value={item.id} />;
                })}
              </Picker>
            </View>
            <View style={styles.picker}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-drop-down" type="material" />}
                placeholder="Select your Style"
                placeholderStyle={{
                  color: colors.GREY.SECONDARY,
                  fontSize: 14,
                  marginRight: 20,
                  fontWeight: "400",
                  marginLeft: -10,
                }}
                placeholderIconColor="grey"
                style={{ width: wp("90.0%"), height: 35 }}
                selectedValue={this.state.Styled}
                onValueChange={(txt) => this.onValueStyleChange(txt)}
              >
                {this.state.stylelist.map((item, key) => {
                  return <Picker.Item key={key} label={item.name} value={item.id} />;
                })}
              </Picker>
            </View>
            <TextInput
              style={styles.Lists}
              placeholder={i18n.translate("Model")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ ModelTxt: txt })}
            />
            <View style={styles.picker}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-drop-down" type="material" />}
                placeholder="Select your FuelType"
                placeholderStyle={{
                  color: colors.GREY.SECONDARY,
                  fontSize: 14,
                  marginRight: 20,
                  fontWeight: "400",
                  marginLeft: -10,
                }}
                placeholderIconColor="grey"
                style={{ width: wp("90.0%"), height: 35 }}
                selectedValue={this.state.Fueltype}
                onValueChange={(txt) => this.onValueFuelTypeChange(txt)}
              >
                {this.state.fueltypelist.map((item, key) => {
                  return <Picker.Item key={key} label={item.name} value={item.id} />;
                })}
              </Picker>
            </View>
            <View style={styles.picker}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-drop-down" type="material" />}
                placeholder="Select your FuelGrade"
                placeholderStyle={{
                  color: colors.GREY.SECONDARY,
                  fontSize: 14,
                  marginRight: 20,
                  fontWeight: "400",
                  marginLeft: -10,
                }}
                placeholderIconColor="grey"
                style={{ width: wp("90.0%"), height: 35 }}
                selectedValue={this.state.Fuelgrade}
                onValueChange={(txt) => this.onValueFuelGradeChange(txt)}
              >
                {this.state.fuelgradelist.map((item, key) => {
                  return <Picker.Item key={key} label={item.name} value={item.id} />;
                })}
              </Picker>
            </View>
            <TextInput
              keyboardType="numeric"
              style={styles.Lists}
              placeholder={i18n.translate("City Consumption")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ CityConsum: txt })}
            />
            <TextInput
              keyboardType="numeric"
              style={styles.Lists}
              placeholder={i18n.translate("Highway Consumption")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ HighwayConsum: txt })}
            />

            <TextInput
              keyboardType="numeric"
              style={styles.Lists}
              placeholder={i18n.translate("Doors")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ Door: txt })}
            />

            <TextInput
              keyboardType="numeric"
              style={styles.Lists}
              placeholder={i18n.translate("Seats")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ Seats: txt })}
            />

            <TextInput
              keyboardType="numeric"
              style={styles.Lists}
              placeholder={i18n.translate("Odometer")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ Odometer: txt })}
            />

            <TextInput
              keyboardType="numeric"
              style={styles.Lists}
              placeholder={i18n.translate("Transmission")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ Transmission: txt })}
            />

            <TextInput
              keyboardType="numeric"
              style={styles.Lists}
              placeholder={i18n.translate("Markets Value")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ MarketsVal: txt })}
            />

            <TextInput
              keyboardType="numeric"
              style={styles.Lists}
              placeholder={i18n.translate("Vehicle Condition")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ Condition: txt })}
            />

            <TextInput
              keyboardType="numeric"
              style={styles.Lists}
              placeholder={i18n.translate("Seat Belt Type")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ SeatbeltType: txt })}
            />

            <TextInput
              style={styles.Lists}
              placeholder={i18n.translate("Vehicle Details")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ VehicleDetail: txt })}
            />

            <TextInput
              keyboardType="numeric"
              style={styles.Lists}
              placeholder={i18n.translate("Advance Notice Hours")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ AdvNoticehrs: txt })}
            />

            <TextInput
              keyboardType="numeric"
              style={styles.Lists}
              placeholder={i18n.translate("Shortest Possible Trip")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ ShortTrip: txt })}
            />

            <TextInput
              keyboardType="numeric"
              style={styles.Lists}
              placeholder={i18n.translate("Longest Possible Trip")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ Longtrip: txt })}
            />

            <TextInput
              style={styles.Lists}
              placeholder={i18n.translate("License Number Plate")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ PlateNum: txt })}
            />

            <TextInput
              style={styles.Lists}
              placeholder={i18n.translate("License State")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ LicenceState: txt })}
            />

            <TextInput
              style={styles.Lists}
              placeholder={i18n.translate("Car Description")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ Cardescrip: txt })}
            />

            <TextInput
              keyboardType="numeric"
              style={styles.Lists}
              placeholder={i18n.translate("Maximum Price")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ Maxprice: txt })}
            />

            <TextInput
              keyboardType="numeric"
              style={styles.Lists}
              placeholder={i18n.translate("Minimum Price")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ Minprice: txt })}
            />

            <TextInput
              keyboardType="numeric"
              style={styles.Lists}
              placeholder={i18n.translate("Default Price")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ Defaultprice: txt })}
            />

            <TextInput
              keyboardType="numeric"
              style={styles.Lists}
              placeholder={i18n.translate("Hourly Price")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ Hourlyprice: txt })}
            />

            <TextInput
              keyboardType="numeric"
              style={styles.Lists}
              placeholder={i18n.translate("Free kilometer")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ Freekm: txt })}
            />

            <TextInput
              keyboardType="numeric"
              style={styles.Lists}
              placeholder={i18n.translate("Seven Day Discount")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ SevenDayDiscount: txt })}
            />

            <TextInput
              keyboardType="numeric"
              style={styles.Lists}
              placeholder={i18n.translate("Thirty Day Discount")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ ThirtyDayDiscount: txt })}
            />

            <CheckBox
              title="All seat Belts"
              checked={this.state.Allbelt}
              iconLeft
              onPress={() => this.setState({ Allbelt: !this.state.Allbelt })}
              containerStyle={{
                width: wp('90.0%'),
                backgroundColor: "white",
                borderWidth: 0,
                color: colors.GREY.SECONDARY,
              }}
            />

            <CheckBox
              title="Automatic Pricing"
              checked={this.state.AutomaticPrice}
              iconLeft
              onPress={() =>
                this.setState({ AutomaticPrice: !this.state.AutomaticPrice })
              }
              containerStyle={{
                width: wp('90.0%'),
                backgroundColor: "white",
                borderWidth: 0,
                color: colors.GREY.SECONDARY,
              }}
            />
            <CheckBox
              title="Salvage Title"
              checked={this.state.IsSalvage}
              iconLeft
              onPress={() =>
                this.setState({ IsSalvage: !this.state.IsSalvage })
              }
              containerStyle={{
                width: wp('90.0%'),
                backgroundColor: "white",
                borderWidth: 0,
                color: colors.GREY.SECONDARY,
              }}
            />
            {this.state.image && (
              <Image
                source={{ uri: this.state.image }}
                style={{ width: 200, height: 200 }}
              />
            )}
            <TouchableOpacity
              style={styles.viewButton}
              onPress={() => {
                this.pickImage();
              }}
            >
              <Text style={{ color: colors.WHITE }}>
                {i18n.translate("Upload Images")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.viewButton}
              onPress={() => {
                this.DataSentToServer();
              }}
            >
              <Text style={{ color: colors.WHITE }}>
                {i18n.translate("Next")}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  back: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 10,
    width: 50,
    height: 50,
    zIndex: 1000,
  },
  main: {
    alignItems: "center",
    width: wp("100.0%"),
    // paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  viewButton: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    width: wp("60%"),
    padding: 10,
    borderRadius: 20,
    backgroundColor: colors.BLUE.TAB,
    shadowColor: colors.BLACK,
    shadowOffset: { height: 5, width: 5 },
    shadowOpacity: 0.35,
    shadowRadius: 5,
  },
  nextButton: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    width: wp("70.0%"),
    height: 40,
    borderRadius: 50,
    backgroundColor: colors.BLUE.TAB,
    shadowColor: colors.BLACK,
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 70,
    marginRight: 3,
  },
  params: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp("28.0%"),
    height: 60,
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  params1: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    width: "100%",
  },
  item1: {
    justifyContent: "center",
    alignItems: "center",
    width: wp("28.0%"),
    height: 80,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  Lists: {
    marginTop: 20,
    width: "99%",
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: colors.GREY.SECONDARY,
    marginLeft: 10,
  },
  picker: {
    alignSelf: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: colors.GREY.SECONDARY,
    marginTop: 20,
    width: "100%",
  },
});

const mapStateToProps = (state) => {
  return {
    users: state,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(VehicleNext);