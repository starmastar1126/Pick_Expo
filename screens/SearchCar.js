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
} from "react-native";

//File Import
import SearchcarCard from "../components/searchcarCard";
import Foot from "../components/Foot";

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
            placeholder="Search for your dream car"
            underlineColorAndroid="transparent"
          />
          <EvilIcons name="search" size={24} style={styles.searchIcon} />
        </View>
        <View style={styles.btnlist}>
          <Button rounded style={{ marginHorizontal: 10, height: 32 }}>
            <Text style={{ fontSize: 14 }}>Popular</Text>
          </Button>
          <Button rounded transparent style={{ marginHorizontal: 10 }}>
            <Text style={styles.txtColor}>Mercedes</Text>
          </Button>
          <Button rounded transparent style={{ marginHorizontal: 10 }}>
            <Text style={styles.txtColor}>Audi</Text>
          </Button>
          <AntDesign
            name="arrowright"
            size={20}
            color="blue"
            style={{ marginHorizontal: 10, marginTop: 10 }}
          />
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
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Container>
        <Heading />
        <Content>
          <ScrollView>
            <View style={{ marginBottom: 5 }}>
              <SearchcarCard Carname="Ferrari XYZ" Price="$350/day" />
            </View>
            <View style={{ marginVertical: 5 }}>
              <SearchcarCard Carname="Mercedes XYZ" Price="$350/day" />
            </View>
            <View style={{ marginVertical: 5 }}>
              <SearchcarCard Carname="Ferrari XYZ" Price="$350/day" />
            </View>
          </ScrollView>
        </Content>

        <View style={styles.bannerView}>
          <Text style={[styles.bannertxt, { left: 20 }]}>
            From {"\n"}22 Mar 2020
          </Text>
          <AntDesign
            name="arrowright"
            size={18}
            color="white"
            style={{ alignSelf: "center" }}
          />
          <Text style={[styles.bannertxt, { right: 20 }]}>
            To {"\n"}28 Mar 2020
          </Text>
        </View>
        <Foot />
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
});
