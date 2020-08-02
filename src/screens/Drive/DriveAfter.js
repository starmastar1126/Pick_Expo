import React from "react";
import { StatusBar, StyleSheet, ScrollView, View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { Container, Content, Item, Input } from "native-base";
import Swiper from "react-native-swiper";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import { connect } from "react-redux";
import { Loading } from '@components';
import { isEmpty } from '@constants/functions';
import configs from '@constants/configs';
import { themes, colors } from '@constants/themes';
import { images, icons } from '@constants/assets';
import axios, { setClientToken } from '@utils/axios';
import i18n from '@utils/i18n';

const data = [
  { title: "Ferrari xyz", image: images.car },
  { title: "Ferrari xyz", image: images.car },
  { title: "Ferrari xyz", image: images.car },
  { title: "Ferrari xyz", image: images.car },
  { title: "Ferrari xyz", image: images.car },
  { title: "Ferrari xyz", image: images.car },
];

class DriveAfter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Container>
        <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
          <Icon name='arrow-back' type='material' color={colors.WHITE} size={25} />
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
        <Content style={{ marginTop: -60 }}>
          <StatusBar hidden />
          <ScrollView contentContainerStyle={styles.main}>
            <Text style={{ fontSize: 14 }}>
              {i18n.translate("Check_After")}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 30,
                width: "100%",
              }}
            >
              <View
                style={{
                  width: wp("30.0%"),
                  justifyContent: "center",
                  paddingLeft: 10,
                }}
              >
                <Text style={{ fontSize: 12, color: colors.BLUE.TAB }}>
                  {i18n.translate("From")}
                </Text>
                <Text style={{ fontSize: 12, color: colors.BLUE.TAB }}>
                  22 Mar 2020
                </Text>
              </View>
              <View
                style={{
                  width: wp("30.0%"),
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  name="arrowright"
                  type="antdesign"
                  color={colors.BLUE.TAB}
                  size={18}
                />
              </View>
              <View
                style={{
                  width: wp("30.0%"),
                  justifyContent: "center",
                  paddingLeft: 20,
                }}
              >
                <Text style={{ fontSize: 12, color: colors.BLUE.TAB }}>
                  {i18n.translate("To")}
                </Text>
                <Text style={{ fontSize: 12, color: colors.BLUE.TAB }}>
                  22 Mar 2020
                </Text>
              </View>
            </View>
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
            <View style={{ marginTop: 20, width: "100%" }}>
              <Text style={{ fontSize: 12, color: colors.BLACK }}>
                {i18n.translate("Other_Accessories")}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  marginTop: 10,
                }}
              >
                <Text
                  style={{ fontSize: 10, width: wp("30%"), textAlign: "left" }}
                >
                  {i18n.translate("Product")}
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    width: wp("20%"),
                    textAlign: "center",
                  }}
                >
                  {i18n.translate("Qty")}
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    width: wp("20%"),
                    textAlign: "center",
                  }}
                >
                  {i18n.translate("Returned")}
                </Text>
                <Text
                  style={{ fontSize: 10, width: wp("20%"), textAlign: "right" }}
                >
                  {i18n.translate("Price")}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  marginTop: 10,
                }}
              >
                <Text
                  style={{ fontSize: 10, width: wp("30%"), textAlign: "left" }}
                >
                  Android Changer
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    width: wp("20%"),
                    textAlign: "center",
                  }}
                >
                  1
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    color: colors.RED.DEFAULT,
                    width: wp("20%"),
                    textAlign: "center",
                  }}
                >
                  {i18n.translate("No")}
                </Text>
                <Text
                  style={{ fontSize: 10, width: wp("20%"), textAlign: "right" }}
                >
                  SAR20
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  marginTop: 10,
                }}
              >
                <Text
                  style={{ fontSize: 10, width: wp("30%"), textAlign: "left" }}
                >
                  Bluetooth
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    width: wp("20%"),
                    textAlign: "center",
                  }}
                >
                  1
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    color: colors.GREEN.DEFAULT,
                    width: wp("20%"),
                    textAlign: "center",
                  }}
                >
                  {i18n.translate("Yes")}
                </Text>
                <Text
                  style={{ fontSize: 10, width: wp("20%"), textAlign: "right" }}
                >
                  SAR30
                </Text>
              </View>
              <Text
                style={{ marginTop: 10, fontSize: 12, color: colors.BLACK }}
              >
                {i18n.translate("Please_add_car_images")}
              </Text>
            </View>
            <View style={styles.params1}>
              <TouchableOpacity key={1} style={styles.item1}>
                <Icon
                  name="image"
                  type="evilicon"
                  color={colors.BLUE.TAB}
                  size={35}
                />
                <Text style={{ fontSize: 10 }}>
                  {i18n.translate("Gallery")}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity key={2} style={styles.item1}>
                <Icon
                  name="camera"
                  type="evilicon"
                  color={colors.BLUE.TAB}
                  size={35}
                />
                <Text style={{ fontSize: 10 }}>{i18n.translate("Camera")}</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              contentContainerStyle={{ marginTop: 5 }}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={data}
              renderItem={({ item, key }) => (
                <Image key={key} style={styles.image} source={item.image} />
              )}
            />
            <TouchableOpacity style={styles.nextButton}>
              <Text style={{ fontSize: 16, color: colors.WHITE }}>
                {i18n.translate("Confirm")}
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

export default DriveAfter;
