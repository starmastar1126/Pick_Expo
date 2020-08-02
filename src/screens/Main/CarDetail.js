import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Thumbnail, Button, Container, Content } from "native-base";
import Swiper from "react-native-swiper";
import { AppLoading } from "expo";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { Loading, Rating } from "@components";
import { isEmpty } from "@constants/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

const Driver = (info) => {
  return (
    <View style={styles.DriverDetailsSection}>
      <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 22 }}>
        <Thumbnail
          source={
            info.data.profilePicture
              ? { uri: info.data.profilePicture }
              : require("@assets/images/60093.jpg")
          }
        />
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 12, marginLeft: 10 }}>
            {info.data.firstName +
              " " +
              info.data.middleName +
              " " +
              info.data.lastName}
          </Text>
          <Text style={{ fontSize: 11, marginLeft: 10 }}>
            {info.data.issueCountry ? info.data.issueCountry : "Lahore"}
          </Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>
            {info.data.contactNumber ? info.data.contactNumber : 43434343434}
          </Text>
        </View>
      </View>

      <View
        style={{
          position: "absolute",
          right: 15,
          top: 15,
        }}
      >
        <Rating rating={4.3} />
      </View>
    </View>
  );
};

class CarDetail extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
      carDetailData: [],
      carImages: [
        { title: "Ferrari xyz", image: images.car },
        { title: "Ferrari xyz", image: images.car },
        { title: "Ferrari xyz", image: images.car },
        { title: "Ferrari xyz", image: images.car },
        { title: "Ferrari xyz", image: images.car },
        { title: "Ferrari xyz", image: images.car },
      ],
    };
  }

  async componentDidMount() {
    const { params } = this.props.route;
    const carData = params.carData;
    const info = params.info;

    await axios
      .get(
        "Vehicle/detail/" +
          carData.id +
          "?startDate=" +
          info.startTimeStamp +
          "&endDate=" +
          info.endTimeStamp +
          "&" +
          "longitude=" +
          info.longitude +
          "&latitude=" +
          info.latitude
      )
      .then((result) =>
        this.setState({
          carDetailData: result.data,
          isReady: true,
        })
      )
      .catch((e) => console.log(e));
  }

  render() {
    const { carDetailData, carImages } = this.state;
    const ownerInfo = carDetailData.owner;
    console.warn("imges", carImages);

    if (!this.state.isReady) {
      return <AppLoading />;
    } else {
      return (
        <Container>
          <TouchableOpacity
            style={styles.back}
            onPress={() => this.props.navigation.goBack()}
          >
            <Icon
              name="arrow-back"
              type="material"
              color={colors.WHITE}
              size={25}
            />
          </TouchableOpacity>
          <Swiper
            autoplay={true}
            paginationStyle={{ top: 235 }}
            dotColor={colors.GREY.SECONDARY}
            activeDotColor={colors.WHITE}
          >
            {carImages.map((item, key) => {
              return (
                <View key={key} style={{ width: "100%", height: 250 }}>
                  <Image
                    key={1}
                    style={{ width: "100%", height: "100%" }}
                    source={item.image}
                  />
                  <Text
                    style={{
                      position: "absolute",
                      top: 200,
                      left: 10,
                      fontSize: 17,
                      color: colors.WHITE,
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
              );
            })}
          </Swiper>
          <Content style={{ marginTop: -60 }}>
            <StatusBar hidden />
            <View style={styles.cardrow}>
              <View style={styles.item}>
                <MaterialCommunityIcons
                  name="car-electric"
                  size={24}
                  color="black"
                />
                <Text style={{ marginTop: 10 }}>V10 6.21 fsi</Text>
                <Text>620 hp</Text>
              </View>
              <View style={styles.item}>
                <MaterialCommunityIcons
                  name="car-seat"
                  size={24}
                  color="black"
                />
                <Text style={{ marginTop: 10 }}>{carDetailData.seats}</Text>
              </View>
              <View style={styles.item}>
                <Ionicons name="md-speedometer" size={24} color="black" />
                <Text style={{ marginTop: 10 }}>0-100 kph</Text>
                <Text>3.7s</Text>
              </View>
            </View>
            <View style={styles.cardrow}>
              <View style={styles.item}>
                <MaterialCommunityIcons
                  name="car-electric"
                  size={24}
                  color="black"
                />
                <Text style={{ marginTop: 10 }}>V10 6.21 fsi</Text>
                <Text>620 hp</Text>
              </View>
              <View style={styles.item}>
                <MaterialCommunityIcons
                  name="car-seat"
                  size={24}
                  color="black"
                />
                <Text style={{ marginTop: 10 }}>{carDetailData.seats}</Text>
              </View>
              <View style={styles.item}>
                <Ionicons name="md-speedometer" size={24} color="black" />
                <Text style={{ marginTop: 10 }}>0-100 kph</Text>
                <Text>3.7s</Text>
              </View>
            </View>
            <View
              style={{
                width: Dimensions.get("screen").width - 50,
                marginTop: 10,
                marginLeft: 20,
              }}
            >
              <Driver data={ownerInfo} />
            </View>
            <View style={styles.ConfirmationSec}>
              <Text style={styles.price}>SAR350/day</Text>
              <Button
                rounded
                style={{ marginRight: 20 }}
                onPress={() => this.props.navigation.navigate("Bill")}
              >
                <Text style={styles.btntxt}>Confirm</Text>
              </Button>
            </View>
          </Content>
        </Container>
      );
    }
  }
}

const styles = StyleSheet.create({
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
  backbtn: {
    position: "absolute",
    left: 10,
    top: 20,
    color: "rgb(255,255,255)",
  },
  cardrow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  item: {
    marginTop: 10,
    height: 100,
    width: 100,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "rgb(0,0,0)",
    elevation: 5,
    borderColor: "rgb( 235, 237, 239)",
  },
  DriverDetailsSection: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 7,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 2,
    marginTop: 14,
    height: 100,
  },
  searchIcon: {
    color: "rgb(86, 101, 115)",
  },
  input: {
    flex: 1,
    paddingTop: 12,
    paddingRight: 10,
    paddingBottom: 12,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
    marginLeft: 10,
  },
  ConfirmationSec: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    height: 60,
    justifyContent: "space-between",
  },
  btntxt: {
    width: 150,
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "300",
  },
  price: { marginLeft: 30, fontSize: 22, fontWeight: "300" },
});

export default CarDetail;
