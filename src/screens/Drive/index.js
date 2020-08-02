import React from "react";
import { StatusBar, StyleSheet, ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
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
  { step: 1, title: "Requested a car on Sunday 22 Mar" },
  { step: 2, title: "Request accepted on Sunday 22 Mar" },
  { step: 3, title: "Car will be delivered on Monday 1 April" },
  { step: 4, title: "On trip" },
  { step: 5, title: "Return car on Saturday 8 April" },
];

class Drive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "Completed",
      step: 2,
    };
  }

  render() {
    return (
      <Container>
        {this.renderTab()}
        <Content>
          <StatusBar hidden />
          <ScrollView contentContainerStyle={styles.main}>
            {this.state.tab === "Active"
              ? this.renderActive()
              : this.state.tab === "Completed"
              ? this.renderCompleted()
              : this.renderMain()}
          </ScrollView>
        </Content>
        {this.state.tab === "Active"
          ? this.renderButtons()
          : this.state.tab === "Completed"
          ? null
          : this.renderCurrentBooking()}
      </Container>
    );
  }
  renderTab() {
    const { tab } = this.state;
    return (
      <View style={styles.header}>
        <Text style={{ fontSize: 20, color: colors.BLACK }}>
          {i18n.translate("My Picks")}
        </Text>
        <View style={styles.tab}>
          <TouchableOpacity
            style={tab === "Active" ? styles.tabButton : styles.tabButton1}
            onPress={() => this.setState({ tab: "Active" })}
          >
            <Text
              style={{
                color: tab === "Active" ? colors.WHITE : colors.GREY.TAB,
              }}
            >
              {i18n.translate("Active")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tab === "Booked" ? styles.tabButton : styles.tabButton1}
            onPress={() => this.setState({ tab: "Booked" })}
          >
            <Text
              style={{
                color: tab === "Booked" ? colors.WHITE : colors.GREY.TAB,
              }}
            >
              {i18n.translate("Booked")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tab === "Completed" ? styles.tabButton : styles.tabButton1}
            onPress={() => this.setState({ tab: "Completed" })}
          >
            <Text
              style={{
                color: tab === "Completed" ? colors.WHITE : colors.GREY.TAB,
              }}
            >
              {i18n.translate("Completed")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  renderActive() {
    const { step } = this.state;
    return (
      <View
        style={{
          width: "100%",
          height: hp("50%"),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: "500", color: colors.BLACK }}>
          {i18n.translate("No Active Bookings")}
        </Text>
      </View>
    );
  }
  renderMain() {
    const { step } = this.state;
    return (
      <View>
        <Text style={{ fontSize: 14, fontWeight: "500", color: colors.BLACK }}>
          {i18n.translate("Order Summary")}
        </Text>
        <View style={{ height: 20 }} />
        {data.map((item, key) => {
          return (
            <View key={key}>
              <View style={styles.step}>
                <View style={step >= item.step ? styles.dot : styles.dot1} />
                <Text style={{ marginLeft: 20 }}>{item.title}</Text>
              </View>
              {key < 4 ? (
                <View style={step > item.step ? styles.line1 : styles.line} />
              ) : null}
            </View>
          );
        })}
      </View>
    );
  }
  renderCompleted() {
    const { step } = this.state;
    return (
      <View>
        <Text style={{ fontSize: 14, fontWeight: "500", color: colors.BLACK }}>
          {i18n.translate("Order Summary")}
        </Text>
        <View style={{ height: 20 }} />
        {data.map((item, key) => {
          return (
            <View style={styles.booking2}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 10,
                  width: "100%",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: 40,
                  }}
                >
                  <Image
                    style={{ width: 70, height: 40 }}
                    source={images.car}
                  />
                  <View style={{ marginLeft: 10 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Text> </Text>
                    </View>
                    <Text style={{ fontSize: 14 }}>Ferrarl xyz</Text>
                    <Text style={{ fontSize: 11 }}>
                      2 bags, SAR350/day and 2 seats
                    </Text>
                  </View>
                </View>
                <View style={{ justifyContent: "center", height: 40 }}>
                  <View
                    style={{ flexDirection: "row", justifyContent: "flex-end" }}
                  >
                    {/* <Text style={{ fontSize: 11 }}>Current booking</Text> */}
                    <TouchableOpacity>
                      <Text style={{ fontSize: 11, color: colors.BLUE.TAB }}>
                        {i18n.translate("Share")}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={{ fontSize: 11, textAlign: "right" }}>
                    SAR1850
                  </Text>
                  <Text style={{ fontSize: 11, textAlign: "right" }}>
                    {i18n.translate("Sub Total")}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  marginTop: 10,
                  width: "100%",
                  height: 1,
                  backgroundColor: colors.GREY.LIGHT,
                }}
              />
              <View
                style={{
                  width: "100%",
                  marginTop: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 8 }}>
                  From: Jeddah Mall{"\n"}Booked on Sunday 22 Mar 2020
                </Text>
                <Icon
                  name="arrow-right"
                  type="material-community"
                  size={20}
                  color={colors.BLUE.TAB}
                />
                <Text style={{ fontSize: 8 }}>
                  To: Riyadh Mall{"\n"}Booked on Sunday 28 Mar 2020
                </Text>
              </View>
              <View
                style={{
                  marginTop: 20,
                  width: "100%",
                  height: 1,
                  backgroundColor: colors.GREY.LIGHT,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  marginTop: 5,
                }}
              >
                <View>
                  <Text style={{ fontSize: 11 }}>
                    {i18n.translate("Contact Host")}
                  </Text>
                  <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <TouchableOpacity style={styles.emailButton}>
                      <Icon
                        name="email"
                        type="material-community"
                        color={colors.BLUE.TAB}
                        size={12}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.callButton}>
                      <Icon
                        name="call"
                        type="zocial"
                        color={colors.BLACK}
                        size={12}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity style={styles.rentButton}>
                  <Text style={{ fontSize: 11, color: colors.WHITE }}>
                    {i18n.translate("See Detail")}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
  renderCurrentBooking() {
    return (
      <View style={styles.booking}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text style={{ fontSize: 11 }}>Current booking</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 11, color: colors.BLUE.TAB }}>Share</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: 40,
            }}
          >
            <Image style={{ width: 70, height: 40 }} source={images.car} />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 14 }}>Ferrarl xyz</Text>
              <Text style={{ fontSize: 11 }}>
                2 bags, SAR350/day and 2 seats
              </Text>
            </View>
          </View>
          <View style={{ justifyContent: "center", height: 40 }}>
            <Text style={{ fontSize: 11, textAlign: "right" }}>SAR1850</Text>
            <Text style={{ fontSize: 11, textAlign: "right" }}>Sub Total</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            width: "100%",
            height: 1,
            backgroundColor: colors.GREY.LIGHT,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <Text style={{ fontSize: 11 }}>Contact Host</Text>
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
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={{ fontSize: 11, color: colors.RED.DEFAULT }}>
              Cancel Ride
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.viewButton}
            onPress={() => this.props.navigation.navigate("DriveLock")}
          >
            <Text style={{ fontSize: 11, color: colors.WHITE }}>View</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  renderButtons() {
    return (
      <View style={styles.booking1}>
        <TouchableOpacity style={[styles.button, { marginBottom: 10 }]} onPress={() => this.props.navigation.navigate('Search')}>
          <Text style={{ fontSize: 13, color: colors.WHITE }}>
            Rent Your Ride
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.BLACK }]}
        >
          <Text style={{ fontSize: 13, color: colors.WHITE }}>
            List Your Car
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    width: wp("100.0%"),
    height: 120,
    paddingTop: 30,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOffset: { height: 5, width: 5 },
    shadowOpacity: 0.35,
    shadowRadius: 5,
  },
  tab: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
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
  main: {
    width: wp("100.0%"),
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  step: {
    flexDirection: "row",
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: colors.GREY.LIGHT,
    backgroundColor: colors.BLUE.TAB,
  },
  dot1: {
    width: 15,
    height: 15,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: colors.WHITE,
    backgroundColor: colors.GREY.LIGHT,
  },
  line: {
    marginLeft: 7,
    width: 1,
    height: 40,
    backgroundColor: colors.GREY.LIGHT,
  },
  line1: {
    marginLeft: 7,
    width: 1,
    height: 40,
    backgroundColor: colors.BLUE.DEFAULT,
  },
  booking: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 10,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    width: wp("90.0%"),
    height: 150,
    borderRadius: 15,
    backgroundColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOffset: { height: 5, width: 5 },
    shadowOpacity: 0.35,
    shadowRadius: 5,
  },
  booking1: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 70,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    width: wp("90.0%"),
  },
  booking2: {
    justifyContent: "center",
    alignItems: "center",
    // marginLeft: 20,
    // marginRight: 20,
    marginBottom: 20,
    padding: 10,
    width: wp("90.0%"),
    height: 180,
    borderRadius: 15,
    backgroundColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOffset: { height: 5, width: 5 },
    shadowOpacity: 0.35,
    shadowRadius: 5,
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
  cancelButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    padding: 5,
    borderRadius: 20,
    backgroundColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOffset: { height: 5, width: 5 },
    shadowOpacity: 0.35,
    shadowRadius: 5,
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
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    width: wp("60%"),
    padding: 15,
    borderRadius: 20,
    backgroundColor: colors.BLUE.TAB,
    shadowColor: colors.BLACK,
    shadowOffset: { height: 5, width: 5 },
    shadowOpacity: 0.35,
    shadowRadius: 5,
  },
  rentButton: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    width: 80,
    height: 35,
    padding: 0,
    borderRadius: 20,
    backgroundColor: colors.BLUE.TAB,
    shadowColor: colors.BLACK,
    shadowOffset: { height: 5, width: 5 },
    shadowOpacity: 0.35,
    shadowRadius: 5,
  },
});

export default Drive;
