//Library Import
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Container, Header, Body, Text, Content } from "native-base";
import { Ionicons, Entypo, EvilIcons, AntDesign } from "@expo/vector-icons";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { Loading, SearchCarCard } from "@components";
import { isEmpty } from "@constants/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";
import { FlatList } from "react-native-gesture-handler";

import Moment from "moment";

class Car extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
      tab: "Popular",
      data: [],
    };
  }

  async componentDidMount() {
    this.loadNativebase();
    const { params } = this.props.route;
    console.log(params.endDate);
    const dateTime = new Date(params.startDate).getTime();
    const starttimestamp = Math.floor(dateTime / 1000);
    const enddateTime = new Date(params.endDate).getTime();
    const endtimestamp = Math.floor(enddateTime / 1000);

    await axios
      .get(
        "Vehicle/search?startDate=" +
          starttimestamp +
          "&endDate=" +
          endtimestamp +
          "&" +
          "longitude=" +
          params.coordinates.longitude +
          "&latitude=" +
          params.coordinates.latitude
      )
      .then((result) => this.setState({ data: result.data }))
      .catch((e) => console.log(e));
  }
  
  loadNativebase = async () => {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  };

  renderHeading() {
    return (
      <View style={{ flexDirection: "row", width: wp("100.0%"), height: 50 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-start",
            width: 80,
            padding: 10,
          }}
        >
          <Icon
            name="keyboard-backspace"
            type="material"
            size={24}
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        <View
          style={{
            width: wp("100.0%") - 160,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontSize: 20, fontWeight: "300", marginTop: 5 }}
          ></Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-end",
            width: 80,
            padding: 10,
          }}
        >
          <Entypo name="menu" size={24} color="black" style={styles.menubtn} />
        </View>
      </View>
    );
  }

  renderTab() {
    // console.log("Coordinates: ", this.props.route.params.coordinates);
    const { tab } = this.state;
    return (
      <View style={styles.tab}>
        <TouchableOpacity
          style={tab === "Popular" ? styles.tabButton : styles.tabButton1}
          onPress={() => this.setState({ tab: "Popular" })}
        >
          <Text
            style={{
              color: tab === "Popular" ? colors.WHITE : colors.GREY.TAB,
            }}
          >
            Popular
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tab === "Mercedes" ? styles.tabButton : styles.tabButton1}
          onPress={() => this.setState({ tab: "Mercedes" })}
        >
          <Text
            style={{
              color: tab === "Mercedes" ? colors.WHITE : colors.GREY.TAB,
            }}
          >
            Mercedes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tab === "Audi" ? styles.tabButton : styles.tabButton1}
          onPress={() => this.setState({ tab: "Audi" })}
        >
          <Text
            style={{
              color: tab === "Audi" ? colors.WHITE : colors.GREY.TAB,
            }}
          >
            Audi
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tab === "->" ? styles.tabButton : styles.tabButton1}
          onPress={() => this.setState({ tab: "->" })}
        >
          <AntDesign
            name="arrowright"
            size={20}
            color={tab === "->" ? colors.WHITE : colors.GREY.TAB}
          />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const { params } = this.props.route;
    const dateTime = new Date(params.startDate).getTime();
    const starttimestamp = Math.floor(dateTime / 1000);
    const enddateTime = new Date(params.endDate).getTime();
    const endtimestamp = Math.floor(enddateTime / 1000);

    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Container>
        {this.renderHeading()}
        <View style={styles.searchSection}>
          <TextInput
            style={styles.input}
            placeholder={i18n.translate("Search for your dream car")}
            underlineColorAndroid="transparent"
          />
          <EvilIcons name="search" size={24} style={styles.searchIcon} />
        </View>
        {this.renderTab()}
        <Content style={{ marginTop: 10 }}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <View key={item.id} style={{ marginVertical: 5 }}>
                <SearchCarCard
                  Carname={item.model}
                  Price={"SAR" + item.defaultPrice + "/day"}
                  Image={""}
                  //Image={item.vehicleImages[0].images}
                  onPress={() =>
                    this.props.navigation.navigate("CarDetail", {
                      carData: item,
                      info: {
                        startTimeStamp: starttimestamp,
                        endTimeStamp: endtimestamp,
                        longitude: params.coordinates.longitude,
                        latitude: params.coordinates.latitude,
                      },
                    })
                  }
                />
              </View>
            )}
          />
        </Content>

        {/* <View style={styles.bannerView}>
          <Text style={[styles.bannertxt, { left: 20 }]}>
            From {"\n"}
            {this.props.route.params.startDate +
              "  -  " +
              this.props.route.params.startTime}
          </Text>
          <AntDesign
            name="arrowright"
            size={18}
            color={colors.BLUE.TAB}
            style={{ alignSelf: "center" }}
          />
          <Text style={[styles.bannertxt, { right: 20 }]}>
            To {"\n"}
            {this.props.route.params.endDate +
              "  -  " +
              this.props.route.params.endTime}
          </Text>
        </View> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    marginTop: 20,
  },
  searchIcon: {
    color: "rgb(86, 101, 115)",
    marginRight: 10,
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
  backbtn: {
    position: "absolute",
    left: 10,
    top: 10,
    color: "rgb(86, 101, 115)",
  },
  menubtn: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  btnlist: {
    flexDirection: "row",
    marginTop: 9,
  },
  listbtn: {
    marginHorizontal: 6,
  },
  txtColor: {
    color: "rgb(86, 101, 115)",
    fontSize: 14,
  },
  bannerView: {
    height: 100,
    width: "90%",
    backgroundColor: colors.WHITE,
    position: "absolute",
    justifyContent: "center",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    bottom: 40,
    left: 20,
    flex: 1,
  },
  bannertxt: {
    position: "absolute",
    // color: "white",
    fontSize: 12,
  },
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    width: wp("100.0%"),
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOffset: { height: 5, width: 5 },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    paddingBottom: 10,
  },
  tab: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,

    width: wp("100.0%"),
    paddingLeft: 10,
    paddingRight: 10,
  },
  tabButton: {
    justifyContent: "center",
    height: 30,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    backgroundColor: colors.BLUE.TAB,
    shadowColor: colors.BLACK,
    shadowOffset: { height: 5, width: 5 },
    shadowOpacity: 0.35,
    shadowRadius: 5,
  },
  tabButton1: {
    justifyContent: "center",
    height: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default Car;
