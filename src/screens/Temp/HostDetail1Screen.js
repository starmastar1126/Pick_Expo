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
import { Container, Content, Item, Input } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import Swiper from "react-native-swiper";

import { Foot } from "@components";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import API, { setClientToken } from "@services/API";
import i18n from "@services/i18n";

const data = [
  { title: "Ferrari xyz", image: images.car },
  { title: "Ferrari xyz", image: images.car },
  { title: "Ferrari xyz", image: images.car },
  { title: "Ferrari xyz", image: images.car },
  { title: "Ferrari xyz", image: images.car },
  { title: "Ferrari xyz", image: images.car },
];

class HostDetail1Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <TouchableOpacity
          style={styles.back}
          onPress={() => this.props.navigation.goBack()}
        >
          <Icon
            name="arrow-back"
            type="material"
            color={colors.BLACK}
            size={25}
          />
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
              style={{
                marginTop: 20,
                width: "100%",
                height: 40,
                borderBottomWidth: 1,
                borderBottomColor: colors.GREY.SECONDARY,
              }}
              secureTextEntry={true}
              placeholder={i18n.translate("Country")}
              placeholderTextColor={colors.GREY.SECONDARY}
            />
            <TextInput
              style={{
                marginTop: 20,
                width: "100%",
                height: 40,
                borderBottomWidth: 1,
                borderBottomColor: colors.GREY.SECONDARY,
              }}
              secureTextEntry={true}
              placeholder={i18n.translate("City")}
              placeholderTextColor={colors.GREY.SECONDARY}
            />
            <TextInput
              style={{
                marginTop: 20,
                width: "100%",
                height: 40,
                borderBottomWidth: 1,
                borderBottomColor: colors.GREY.SECONDARY,
              }}
              secureTextEntry={true}
              placeholder={i18n.translate("Street Address")}
              placeholderTextColor={colors.GREY.SECONDARY}
            />
            <TextInput
              style={{
                marginTop: 20,
                width: "100%",
                height: 40,
                borderBottomWidth: 1,
                borderBottomColor: colors.GREY.SECONDARY,
              }}
              secureTextEntry={true}
              placeholder={i18n.translate("State_Region_Province")}
              placeholderTextColor={colors.GREY.SECONDARY}
            />
            <TextInput
              style={{
                marginTop: 20,
                width: "100%",
                height: 40,
                borderBottomWidth: 1,
                borderBottomColor: colors.GREY.SECONDARY,
              }}
              secureTextEntry={true}
              placeholder={i18n.translate("Zip_Postal Code")}
              placeholderTextColor={colors.GREY.SECONDARY}
            />

            <TouchableOpacity
              style={styles.viewButton}
              onPress={() =>
                this.props.navigation.navigate("HostDetail2Screen")
              }
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
});

export default HostDetail1Screen;
