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

class Thankyou extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        {/* <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
                    <Icon name='arrow-back' type='material' color={colors.BLACK} size={25} />
                </TouchableOpacity> */}
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ width: wp("100%") }}
            source={images.congratulation}
            resizeMode="contain"
          />
        </View>
        <Content>
          <StatusBar hidden />
          <View style={styles.main}>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 8,
                  marginLeft: 5,
                  backgroundColor: colors.BLUE.TAB,
                }}
              />
              <View
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 8,
                  marginLeft: 5,
                  backgroundColor: colors.BLUE.TAB,
                }}
              />
              <View
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 8,
                  marginLeft: 5,
                  backgroundColor: colors.BLUE.TAB,
                }}
              />
              <View
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 8,
                  marginLeft: 5,
                  backgroundColor: colors.BLUE.TAB,
                }}
              />
              <View
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 8,
                  marginLeft: 5,
                  backgroundColor: colors.BLUE.TAB,
                }}
              />
            </View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 30,
                fontWeight: "500",
                marginTop: 10,
              }}
            >
              {" "}
              {i18n.translate("Thank You")}{" "}
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 12,
                fontWeight: "500",
                marginTop: 10,
              }}
            >
              {i18n.translate("We are glad you liked the trip")}
            </Text>
            <View
              style={{
                width: "80%",
                height: 50,
                borderWidth: 1,
                borderColor: colors.GREY.SECONDARY,
                borderRadius: 10,
                marginTop: 20,
                backgroundColor: colors.GREY.PRIMARY,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: colors.GREY.SECONDARY }}>
                {i18n.translate("Any Comments")}
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                width: "50%",
                height: 70,
                borderBottomColor: colors.GREY.SECONDARY,
                borderBottomWidth: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "300",
                  marginTop: 10,
                }}
              >
                {" "}
                {i18n.translate("Tip your captain")}{" "}
              </Text>
              <Text style={{ marginTop: 10, color: colors.GREY.SECONDARY }}>
                SAR50
              </Text>
            </View>
            <TouchableOpacity style={styles.viewButton}>
              <Text style={{ fontSize: 16, color: colors.WHITE }}>
                {i18n.translate("Done")}
              </Text>
            </TouchableOpacity>
          </View>
        </Content>
        {/* <Foot selected='Host' navigation={this.props.navigation} /> */}
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
  panel: {
    // justifyContent: 'center',
    alignItems: "center",
    marginTop: 100,
    width: wp("90%"),
    height: hp("70.0%"),
    borderRadius: 20,
    backgroundColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  viewButton: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
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

export default Thankyou;
