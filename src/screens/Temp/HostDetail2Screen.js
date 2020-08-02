import React from "react";
import {
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import { Container, Content, Item, Input, Picker, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { CheckBox } from "react-native-elements";
import Swiper from "react-native-swiper";
import { Foot } from "@components";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import API, { setClientToken } from "@services/API";
import i18n from "@services/i18n";
import { connect } from "react-redux";
const data = [
  { title: "Ferrari xyz", image: images.car },
  { title: "Ferrari xyz", image: images.car },
  { title: "Ferrari xyz", image: images.car },
  { title: "Ferrari xyz", image: images.car },
  { title: "Ferrari xyz", image: images.car },
  { title: "Ferrari xyz", image: images.car },
];

class HostDetail2Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      make: undefined,
      model: undefined,
      trim: undefined,
      selected: undefined,
      style: undefined,
      fueltype: undefined,
      fuelgrade: undefined,
      makelist: [],
      modelist: [],
      trimlist: [],
      stylelist: [],
      fueltypelist: [],
      fuelGradeList: [],
      Year: "",
      Name: "",
      Model: "",
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
      licenceState: "",
      Cardescrip: "",
      Maxprice: "",
      Minprice: "",
      defaultprice: "",
      Hourlyprice: "",
      Freekm: "",
      SevenDayDiscount: "",
      ThirtyDayDiscount: "",
      Allbelt: false,
      AutomaticPrice: false,
      IsSalvage: false,
      CreatedAt: "",
      VehicleImages: {},
      VehicleFeatures: {},
    };
  }
  onValueChange = (value) => {
    this.setState({
      selected: value,
    });
  };

  onValueMakeChange = async (value) => {
    this.setState({
      make: value,
    });
    await fetch(
      "https://6cbd535.online-server.cloud/api/Model/GetAll?make=" +
        Number(value),
      {
        method: "GET",
        headers: {
          accept: "text/plain",
          Authorization: "Bearer " + this.props.users[0].token,
        },
      }
    )
      .then((results) => results.json())
      .then((response) => this.setState({ modelist: response }))
      .catch((e) => console.log(e));
  };

  onValueModelChange = async (value) => {
    this.setState({
      model: value,
    });
    await fetch(
      "https://6cbd535.online-server.cloud/api/Trim/GetAll" + Number(value),
      {
        method: "GET",
        headers: {
          accept: "text/plain",
          Authorization: "Bearer " + this.props.users[0].token,
        },
      }
    )
      .then((results) => results.json())
      .then((response) => this.setState({ trimlist: response }))
      .catch((e) => console.log(e));
  };

  onValuetrimChange = async (value) => {
    this.setState({
      trim: value,
    });

    await fetch(
      "https://6cbd535.online-server.cloud/api/Style/GetAll?trim=" +
        Number(value),
      {
        method: "GET",
        headers: {
          accept: "text/plain",
          Authorization: "Bearer " + this.props.users[0].token,
        },
      }
    )
      .then((results) => results.json())
      .then((response) => this.setState({ stylelist: response }))
      .catch((e) => console.log(e));
  };

  onValueStyleChange = async (value) => {
    this.setState({
      trim: value,
    });
  };

  onValueFuelTypeChange = async (value) => {
    this.setState({
      fueltype: value,
    });
  };
  onValueFuelGradeChange = async (value) => {
    this.setState({
      fuelgrade: value,
    });
  };

  async componentDidMount() {
    this.Makelistget();
    this.FuelListget();
    this.FuelGradeListget();
  }

  Makelistget = async () => {
    await fetch("https://6cbd535.online-server.cloud/api/Make/GetAll", {
      method: "GET",
      headers: {
        accept: "plain/text",
        Authorization: "Bearer " + this.props.users[0].token,
      },
    })
      .then((response) => response.json())
      .then((result) => this.setState({ makelist: result }))
      .then(() => console.log(this.state.makelist))
      .catch((e) => console.log(e));
  };

  FuelListget = async () => {
    await fetch("https://6cbd535.online-server.cloud/api/FuelType/GetAll", {
      method: "GET",
      headers: {
        accept: "plain/text",
        Authorization: "Bearer " + this.props.users[0].token,
      },
    })
      .then((response) => response.json())
      .then((result) => this.setState({ fueltypelist: result }))
      .then(() => console.log(this.state.fueltypelist))
      .catch((e) => console.log(e));
  };

  FuelGradeListget = async () => {
    await fetch("https://6cbd535.online-server.cloud/api/FuelGrade/GetAll", {
      method: "GET",
      headers: {
        accept: "plain/text",
        Authorization: "Bearer " + this.props.users[0].token,
      },
    })
      .then((response) => response.json())
      .then((result) => this.setState({ fuelGradeList: result }))
      .then(() => console.log(this.state.fuelGradeList))
      .catch((e) => console.log(e));
  };

  render() {
    return (
      <Container>
        <TouchableOpacity
          style={styles.back}
          onPress={() => this.props.navigation.goBack()}
        >
          <Ionicons name="ios-arrow-round-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ alignItems: "center", marginTop: 30 }}>
          <Text style={{ fontSize: 17 }}>{i18n.translate("Car Details")}</Text>
          <Text style={{ marginTop: 50, fontSize: 12, marginBottom: 10 }}>
            {i18n.translate("Please enter following details correctly")}
          </Text>
        </View>
        <Content>
          <StatusBar hidden />
          <ScrollView contentContainerStyle={styles.main}>
            <TextInput
              style={styles.Lists}
              placeholder={i18n.translate("Year")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ Year: txt })}
            />
            <View style={styles.picker}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                placeholder="Select your Make "
                placeholderStyle={{
                  color: colors.GREY.SECONDARY,
                  fontSize: 14,
                  marginRight: 20,
                  fontWeight: "400",
                  marginLeft: -10,
                }}
                placeholderIconColor="grey"
                style={{ width: "80%", height: 30 }}
                selectedValue={this.state.make}
                onValueChange={(txt) => this.onValueMakeChange(txt)}
              >
                {this.state.makelist.map((item) => {
                  return <Picker.Item label={item.name} value={item.id} />;
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
                iosIcon={<Icon name="arrow-down" />}
                placeholder="Select your Model"
                placeholderStyle={{
                  color: colors.GREY.SECONDARY,
                  fontSize: 14,
                  marginRight: 20,
                  fontWeight: "400",
                  marginLeft: -10,
                }}
                placeholderIconColor="grey"
                style={{ width: "80%", height: 30 }}
                selectedValue={this.state.model}
                onValueChange={(txt) => this.onValueModelChange(txt)}
              >
                {this.state.modelist.map((item) => {
                  return <Picker.Item label={item.name} value={item.id} />;
                })}
              </Picker>
            </View>

            <View style={styles.picker}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                placeholder="Select your Trim "
                placeholderStyle={{
                  color: colors.GREY.SECONDARY,
                  fontSize: 14,
                  marginRight: 20,
                  fontWeight: "400",
                  marginLeft: -10,
                }}
                placeholderIconColor="grey"
                style={{ width: "80%", height: 30 }}
                selectedValue={this.state.trim}
                onValueChange={(txt) => this.onValuetrimChangeChange(txt)}
              >
                {this.state.trimlist.map((item) => {
                  return <Picker.Item label={item.name} value={item.id} />;
                })}
              </Picker>
            </View>
            <View style={styles.picker}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                placeholder="Select your Style"
                placeholderStyle={{
                  color: colors.GREY.SECONDARY,
                  fontSize: 14,
                  marginRight: 20,
                  fontWeight: "400",
                  marginLeft: -10,
                }}
                placeholderIconColor="grey"
                style={{ width: "80%", height: 30 }}
                selectedValue={this.state.style}
                onValueChange={(txt) => this.onValueStyleChangeChange(txt)}
              >
                {this.state.stylelist.map((item) => {
                  return <Picker.Item label={item.name} value={item.id} />;
                })}
              </Picker>
            </View>
            <TextInput
              style={styles.Lists}
              placeholder={i18n.translate("Model")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ Model: txt })}
            />
            <View style={styles.picker}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                placeholder="Select your FuelType"
                placeholderStyle={{
                  color: colors.GREY.SECONDARY,
                  fontSize: 14,
                  marginRight: 20,
                  fontWeight: "400",
                  marginLeft: -10,
                }}
                placeholderIconColor="grey"
                style={{ width: "80%", height: 30 }}
                selectedValue={this.state.fueltype}
                onValueChange={(txt) => this.onValueFuelTypeChange(txt)}
              >
                {this.state.fueltypelist.map((item) => {
                  return <Picker.Item label={item.name} value={item.id} />;
                })}
              </Picker>
            </View>
            <View style={styles.picker}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                placeholder="Select your FuelGrade"
                placeholderStyle={{
                  color: colors.GREY.SECONDARY,
                  fontSize: 14,
                  marginRight: 20,
                  fontWeight: "400",
                  marginLeft: -10,
                }}
                placeholderIconColor="grey"
                style={{ width: "80%", height: 30 }}
                selectedValue={this.state.fuelgrade}
                onValueChange={(txt) => this.onValueFuelGradeChange(txt)}
              >
                {this.state.fuelGradeList.map((item) => {
                  return <Picker.Item label={item.name} value={item.id} />;
                })}
              </Picker>
            </View>
            <TextInput
              style={styles.Lists}
              placeholder={i18n.translate("City Consumption")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ CityConsum: txt })}
            />
            <TextInput
              style={styles.Lists}
              placeholder={i18n.translate("Highway Consumption")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ HighwayConsum: txt })}
            />

            <TextInput
              style={styles.Lists}
              placeholder={i18n.translate("Doors")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ Door: txt })}
            />

            <TextInput
              style={styles.Lists}
              placeholder={i18n.translate("Seats")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ Seats: txt })}
            />

            <TextInput
              style={styles.Lists}
              placeholder={i18n.translate("Odometer")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ Odometer: txt })}
            />

            <TextInput
              style={styles.Lists}
              placeholder={i18n.translate("Transmission")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ Transmission: txt })}
            />

            <TextInput
              style={styles.Lists}
              placeholder={i18n.translate("Markets Value")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ MarketsVal: txt })}
            />

            <TextInput
              style={styles.Lists}
              placeholder={i18n.translate("Vehicle Condition")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ Condition: txt })}
            />

            <TextInput
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
              style={styles.Lists}
              placeholder={i18n.translate("Advance Notice Hours")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ AdvNoticehrs: txt })}
            />

            <TextInput
              style={styles.Lists}
              placeholder={i18n.translate("Shortest Possible Trip")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ ShortTrip: txt })}
            />

            <TextInput
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
              onChangeText={(txt) => this.setState({ licenceState: txt })}
            />

            <TextInput
              style={styles.Lists}
              placeholder={i18n.translate("Car Description")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ Cardescrip: txt })}
            />

            <TextInput
              style={styles.Lists}
              secureTextEntry={true}
              placeholder={i18n.translate("Maximum Price")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ Maxprice: txt })}
            />

            <TextInput
              style={styles.Lists}
              placeholder={i18n.translate("Minimum Price")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ Minprice: txt })}
            />

            <TextInput
              style={styles.Lists}
              placeholder={i18n.translate("Default Price")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ defaultprice: txt })}
            />

            <TextInput
              style={styles.Lists}
              placeholder={i18n.translate("Hourly Price")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ Hourlyprice: txt })}
            />

            <TextInput
              style={styles.Lists}
              placeholder={i18n.translate("Free kilometer")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ Freekm: txt })}
            />

            <TextInput
              style={styles.Lists}
              placeholder={i18n.translate("Seven Day Discount")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ SevenDayDiscount: txt })}
            />

            <TextInput
              style={styles.Lists}
              placeholder={i18n.translate("Thirty Day Discount")}
              placeholderTextColor={colors.GREY.SECONDARY}
              onChangeText={(txt) => this.setState({ ThirtyDayDiscount: txt })}
            />

            <CheckBox
              title="All seat Belts"
              checked={this.state.Allbelt}
              iconRight
              onPress={() => this.setState({ Allbelt: !this.state.Allbelt })}
            />

            <CheckBox
              title="Automatic Pricing"
              checked={this.state.AutomaticPrice}
              iconRight
              onPress={() =>
                this.setState({ AutomaticPrice: !this.state.AutomaticPrice })
              }
              style={{ marginTop: 6 }}
            />
            <CheckBox
              title="Salvage Title"
              checked={this.state.IsSalvage}
              iconRight
              onPress={() =>
                this.setState({ IsSalvage: !this.state.IsSalvage })
              }
              style={{ marginTop: 6 }}
            />
            <TouchableOpacity
              style={styles.viewButton}
              onPress={() =>
                this.props.navigation.navigate("CongratulationScreen")
              }
            >
              <Text style={{ color: colors.WHITE }}>
                {i18n.translate("Upload Images")}
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
    marginTop: 100,
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

export default connect(mapStateToProps, mapDispatchToProps)(HostDetail2Screen);
