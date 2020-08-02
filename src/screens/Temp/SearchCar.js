//Library Import
import React, { Component } from "react";
import {
  Container,
  Header,
  Body,
  Button,
  Text,
  Content,
  Footer,
} from "native-base";
import { Ionicons, Entypo, EvilIcons, AntDesign } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { themes, colors } from "@constants/themes";
//File Import
import SearchcarCard from "../components/searchcarCard";
import Foot from "../components/Foot";
import i18n from "@services/i18n";
import { AppLoading } from "expo";
import * as Font from "expo-font";

const Heading = () => {
  return (
    <Header
      transparent
      style={{ height: 160, marginTop: Platform.OS === "android" ? 18 : 0 }}
    >
      <Ionicons name="ios-arrow-round-back" size={35} style={styles.backbtn} />
      <Entypo name="menu" size={24} color="black" style={styles.menubtn} />
      <Body>
        <View style={styles.searchSection}>
          <TextInput
            style={styles.input}
            placeholder={i18n.translate("Search for your dream car")}
            underlineColorAndroid="transparent"
          />
          <EvilIcons name="search" size={24} style={styles.searchIcon} />
        </View>
      </Body>
    </Header>
  );
};
export default class searchCar extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
      tab: "Audi",
      startDate: "",
      endDate: "",
    };
  }

  async componentDidMount() {
    this.loadNativebase();
    const start = this.props.navigation.getParam("startDate");
    const end = this.props.navigation.getParam("endDate");
    this.setState({ startDate: start, endDate: end });
  }
  loadNativebase = async () => {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  };
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Container>
        <Heading />
        {this.renderTab()}
        <Content>
          <ScrollView>
            <View style={{ marginBottom: 5 }}>
              <SearchcarCard Carname="Ferrari XYZ" Price="SAR350/day" />
            </View>
            <View style={{ marginVertical: 5 }}>
              <SearchcarCard Carname="Populars XYZ" Price="SAR350/day" />
            </View>
            <View style={{ marginVertical: 5 }}>
              <SearchcarCard Carname="Ferrari XYZ" Price="SAR350/day" />
            </View>
          </ScrollView>
        </Content>

        <View style={styles.bannerView}>
          <Text style={[styles.bannertxt, { left: 20 }]}>
            From {"\n"}
            {this.state.startDate}
          </Text>
          <AntDesign
            name="arrowright"
            size={18}
            color="white"
            style={{ alignSelf: "center" }}
          />
          <Text style={[styles.bannertxt, { right: 20 }]}>
            To {"\n"}
            {this.state.endDate}
          </Text>
        </View>
        <Foot />
      </Container>
    );
  }
  renderTab() {
    const { tab } = this.state;
    return (
      <View style={styles.header}>
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
              Populars
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
      </View>
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
    backgroundColor: "black",
    position: "absolute",
    justifyContent: "center",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    bottom: 40,
    left: 20,
    flex: 1,
  },
  bannertxt: {
    position: "absolute",
    color: "white",
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

    width: wp("100.0%"),
    paddingLeft: 30,
    paddingRight: 30,
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
