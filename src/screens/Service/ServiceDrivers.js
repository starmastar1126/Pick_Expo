import React from "react";
import { StatusBar, StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Container, Content } from "native-base";

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
  {
    image: images.person1,
    name: "Muhammad Umar",
    type: "suzkl xyz",
    modal: "SA 12 JB 213",
    cost: "SAR12",
    pick: "Jeddah Mall",
    drop: "Rlyadh Mall",
    match: 98,
    seat: 2,
  },
  {
    image: images.person2,
    name: "Hamza",
    type: "hehe xyz",
    modal: "WY 12 JB 213",
    cost: "SAR20",
    pick: "Jeddah Mall",
    drop: "Rlyadh Mall",
    match: 50,
    seat: 3,
  },
  {
    image: images.person3,
    name: "Edla Zaganjori",
    type: "haha xyz",
    modal: "ZX 12 JB 213",
    cost: "SAR22",
    pick: "Jeddah Mall",
    drop: "Rlyadh Mall",
    match: 80,
    seat: 4,
  },
];

class ServiceDrivers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem(item, key) {
    return (
      <TouchableOpacity key={key} style={styles.item}>
        <View
          style={[
            styles.top,
            { borderBottomWidth: 1, borderBottomColor: colors.GREY.SECONDARY },
          ]}
        >
          <Image
            style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }}
            source={item.image}
          />
          <View style={{ width: "80%", justifyContent: "center" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>{item.name}</Text>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: colors.BLUE.TAB,
                    marginLeft: 5,
                  }}
                />
                <View
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: colors.BLUE.TAB,
                    marginLeft: 2,
                  }}
                />
                <View
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: colors.BLUE.TAB,
                    marginLeft: 2,
                  }}
                />
                <View
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: colors.BLUE.TAB,
                    marginLeft: 2,
                  }}
                />
                <View
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: colors.BLUE.TAB,
                    marginLeft: 2,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Text style={{ fontSize: 12, color: colors.GREY.SECONDARY }}>
                  {item.type}
                </Text>
                <Text style={{ fontSize: 12, color: colors.GREY.SECONDARY }}>
                  {item.modal}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 15,
                  width: "30%",
                  textAlign: "right",
                  marginTop: 10,
                }}
              >
                {item.cost}/{i18n.translate("km")}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            marginTop: 5,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.emailButton}>
              <Icon
                name="email"
                type="material-community"
                color={colors.BLUE.TAB}
                size={12}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.callButton}>
              <Icon name="call" type="zocial" color={colors.BLACK} size={12} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.viewButton}
            onPress={() => this.props.navigation.navigate("ServicePay")}
          >
            <Text style={{ fontSize: 11, color: colors.WHITE }}>
              {i18n.translate("Request")}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }

  renderHeading() {
    return (
      <View style={{ flexDirection: 'row', width: wp('100.0%'), height: 50 }}>
        <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: 80, padding: 10 }}>
          <Icon name="keyboard-backspace" type="material" size={24} onPress={() => this.props.navigation.goBack()} />
        </View>
      </View>
    );
  };

  render() {
    return (
      <Container>
      {this.renderHeading()}
        <Content>
          <StatusBar hidden />
          <View style={styles.main}>
            <Text
              style={{ fontWeight: "500", width: "100%", marginBottom: 10 }}
            >
              {i18n.translate("Tow Agents near you")}
            </Text>
            {data.map((item, key) => {
              return this.renderItem(item, key);
            })}
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
    marginTop: 5,
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
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    marginBottom: 10,
    width: wp("90.0%"),
    height: 140,
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  top: {
    flexDirection: "row",
    // justifyContent: 'space-between',
    // alignItems: 'center',
    marginBottom: 10,
    width: wp("84.0%"),
    height: 80,
    padding: 10,
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
  emailButton: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.BLUE.TAB,
  },
  callButton: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.BLACK,
  },
  viewButton: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    width: 80,
    padding: 5,
    borderRadius: 20,
    backgroundColor: colors.BLUE.TAB,
    shadowColor: colors.BLACK,
    shadowOffset: { height: 5, width: 5 },
    shadowOpacity: 0.35,
    shadowRadius: 5,
  },
});

export default ServiceDrivers;
