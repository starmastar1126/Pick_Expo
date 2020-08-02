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

class LockScreen extends React.Component {
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
          {data.map((item, key) => {
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
        <Content style={{ marginTop: 250 }}>
          <StatusBar hidden />
          <ScrollView contentContainerStyle={styles.main}>
            <Text style={{ fontSize: 12 }}>
              {i18n.translate("Your car is locked")}
            </Text>
            <Text style={{ marginTop: 3, fontSize: 10 }}>
              {i18n.translate("Please enter password to Unlock")}
            </Text>
            <View style={styles.params}>
              <View key={1} style={styles.item}>
                <View>
                  <Text style={{ fontSize: 10, color: colors.GREY.TAB }}>
                    {i18n.translate("Fuel")}
                  </Text>
                  <Text
                    style={{
                      marginTop: 3,
                      fontSize: 14,
                      color: colors.GREY.TAB,
                    }}
                  >
                    40.0%
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                  <View
                    style={{
                      marginLeft: 2,
                      width: 3,
                      height: 5,
                      backgroundColor: colors.BLUE.TAB,
                    }}
                  />
                  <View
                    style={{
                      marginLeft: 2,
                      width: 3,
                      height: 7,
                      backgroundColor: colors.BLUE.TAB,
                    }}
                  />
                  <View
                    style={{
                      marginLeft: 2,
                      width: 3,
                      height: 10,
                      backgroundColor: colors.GREY.SECONDARY,
                    }}
                  />
                  <View
                    style={{
                      marginLeft: 2,
                      width: 3,
                      height: 14,
                      backgroundColor: colors.GREY.SECONDARY,
                    }}
                  />
                  <View
                    style={{
                      marginLeft: 2,
                      width: 3,
                      height: 20,
                      backgroundColor: colors.GREY.SECONDARY,
                    }}
                  />
                </View>
              </View>
              <View key={2} style={styles.item}>
                <View>
                  <Text style={{ fontSize: 10, color: colors.GREY.TAB }}>
                    {i18n.translate("Mileage")}
                  </Text>
                  <Text
                    style={{
                      marginTop: 3,
                      fontSize: 14,
                      color: colors.GREY.TAB,
                    }}
                  >
                    1280km
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                  <View
                    style={{
                      marginLeft: 2,
                      width: 3,
                      height: 5,
                      backgroundColor: colors.BLUE.TAB,
                    }}
                  />
                  <View
                    style={{
                      marginLeft: 2,
                      width: 3,
                      height: 7,
                      backgroundColor: colors.BLUE.TAB,
                    }}
                  />
                  <View
                    style={{
                      marginLeft: 2,
                      width: 3,
                      height: 10,
                      backgroundColor: colors.GREY.SECONDARY,
                    }}
                  />
                  <View
                    style={{
                      marginLeft: 2,
                      width: 3,
                      height: 14,
                      backgroundColor: colors.GREY.SECONDARY,
                    }}
                  />
                  <View
                    style={{
                      marginLeft: 2,
                      width: 3,
                      height: 20,
                      backgroundColor: colors.GREY.SECONDARY,
                    }}
                  />
                </View>
              </View>
              <View key={3} style={styles.item}>
                <View>
                  <Text style={{ fontSize: 10, color: colors.GREY.TAB }}>
                    {i18n.translate("Battery")}
                  </Text>
                  <Text
                    style={{
                      marginTop: 3,
                      fontSize: 14,
                      color: colors.GREY.TAB,
                    }}
                  >
                    90.0%
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                  <View
                    style={{
                      marginLeft: 2,
                      width: 3,
                      height: 5,
                      backgroundColor: colors.BLUE.TAB,
                    }}
                  />
                  <View
                    style={{
                      marginLeft: 2,
                      width: 3,
                      height: 7,
                      backgroundColor: colors.BLUE.TAB,
                    }}
                  />
                  <View
                    style={{
                      marginLeft: 2,
                      width: 3,
                      height: 10,
                      backgroundColor: colors.BLUE.TAB,
                    }}
                  />
                  <View
                    style={{
                      marginLeft: 2,
                      width: 3,
                      height: 14,
                      backgroundColor: colors.BLUE.TAB,
                    }}
                  />
                  <View
                    style={{
                      marginLeft: 2,
                      width: 3,
                      height: 20,
                      backgroundColor: colors.GREY.SECONDARY,
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={styles.password}>
              <TextInput
                secureTextEntry={true}
                placeholder={i18n.translate("Enter Password")}
                placeholderTextColor={colors.GREY.SECONDARY}
                style={styles.textInput}
              />
            </View>
            <TouchableOpacity style={{ marginTop: 5 }}>
              <Text style={{ fontSize: 12, color: colors.BLUE.TAB }}>
                {i18n.translate("Forgot Password")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => this.props.navigation.navigate("UnLockScreen")}
            >
              <Text style={{ fontSize: 16, color: colors.WHITE }}>
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
  params: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
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
  password: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    width: wp("70.0%"),
    height: 40,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.GREY.SECONDARY,
  },
  textInput: {
    width: wp("64.0%"),
    height: 35,
    textAlign: "center",
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
});

export default LockScreen;
