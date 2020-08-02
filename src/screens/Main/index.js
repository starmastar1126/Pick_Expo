import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, Image, StatusBar, TouchableOpacity, TextInput } from "react-native";
import { Container, Content, Button, Item } from "native-base";
import { SimpleLineIcons } from "@expo/vector-icons";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import { connect } from "react-redux";
import { Loading, Carcard, Tophost, Destination, Earningcard } from '@components';
import { isEmpty } from "@constants/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: isEmpty(this.props.route.params)
        ? ""
        : this.props.route.params.search,
      data: [],
      popularCar: [],
      popularHosts: [],
      todayFeeds: [],
      topDestinations: [],
    };
  }

  async componentDidMount() {
    await axios
      .get("Mobile/Home")
      .then((result) => this.setState({ data: result.data }))
      .then(() =>
        this.setState({
          popularCar: this.state.data.popularCars,
          popularHosts: this.state.data.popularHosts,
          todayFeeds: this.state.data.todayFeeds,
          topDestinations: this.state.data.topDestinations,
        })
      )
      .catch((e) => console.log(e));
  }

  renderHeading() {
    return (
      <View style={{ flexDirection: "row", width: wp("100.0%"), height: 50 }}>
        <View style={{ width: 80, padding: 10 }} />
        <View style={{ width: wp("100.0%") - 160 }} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            padding: 10,
          }}
        >
          <Button
            transparent
            onPress={() => this.props.navigation.navigate("Messages")}
          >
            <Icon
              type="zocial"
              name="email"
              size={23}
              color={colors.BLUE.TAB}
            />
          </Button>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate("Profile")}
          >
            <Icon
              type="material-community"
              name="account-circle"
              size={23}
              color={colors.BLUE.TAB}
            />
          </Button>
        </View>
      </View>
    );
  }

  render() {
    return (
      <Container>
        <StatusBar hidden />
        {this.renderHeading()}
            <View style={styles.searchSection}>
              <Item rounded style={styles.searchbox}>
                <TextInput
                  value={this.state.search.formatted_address}
                  placeholder={i18n.translate("Location place or category")}
                  style={styles.searchtxt}
                  onFocus={() => this.props.navigation.navigate("Search")}
                />
                <SimpleLineIcons
                  name="magnifier"
                  size={20}
                  color="black"
                  style={styles.searchicon}
                  onPress={() => this.props.navigation.navigate("Search")}
                />
              </Item>
            </View>
        <Content style={{marginTop: 10}}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 15,
                marginRight: 15,
                marginTop: 20,
                marginBottom: 5,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                {i18n.translate("Popular Cars")}
              </Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Car')}>
                <Text style={{ fontSize: 14 }}>
                  {i18n.translate("View all")}
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {this.state.popularCar.map((item, key) => {
                return (
                  <Carcard
                    key={key}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    onPress={() => this.props.navigation.navigate('CarDetail')}
                  />
                );
              })}
            </ScrollView>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 15,
                marginRight: 15,
                marginTop: 20,
                marginBottom: 5,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                {i18n.translate("Top Host")}
              </Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {this.state.popularHosts.map((item, key) => {
                return (
                  <Tophost
                    key={key}
                    name={item.name}
                    image={item.image}
                    bookings={item.bookings}
                  />
                );
              })}
            </ScrollView>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 15,
                marginRight: 15,
                marginTop: 20,
                marginBottom: 5,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                {i18n.translate("Todays Feed")}
              </Text>
            </View>
            <View>
              <Image
                source={require("@assets/images/car.jpg")}
                style={styles.carImage}
                resizeMode="stretch"
              />
              <Text style={styles.cartext}>Ferrari New Launch 2020</Text>
              <Text style={styles.cartext2}>Ferrari New Launch 2020</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 15,
                marginRight: 15,
                marginTop: 20,
                marginBottom: 5,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                {i18n.translate("Popular Destination")}
              </Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 14 }}>
                  {i18n.translate("View all")}
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {this.state.topDestinations.map((item, key) => {
                return (
                  <Destination
                    key={key}
                    name={item.name}
                    image={item.image}
                    // onPress={() => this.props.navigation.navigate('Car')}
                  />
                );
              })}
            </ScrollView>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 15,
                marginRight: 15,
                marginTop: 20,
                marginBottom: 5,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                {i18n.translate("Start earning today")}
              </Text>
            </View>
            <Earningcard
              onPress={() => this.props.navigation.navigate('Vehicle')} />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 15,
                marginRight: 15,
                marginTop: 20,
                marginBottom: 5,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                {i18n.translate("Go for ride")}
              </Text>
            </View>
            <Earningcard
              onPress={() => this.props.navigation.navigate('Vehicle')} />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  searchbox: {
    marginHorizontal: 20,
    marginLeft: 18,
  },
  searchicon: {
    marginRight: 10,
  },
  searchtxt: {
    marginLeft: 10,
    fontSize: 15,
    width: "90%",
  },
  Category: {
    marginVertical: 10,
  },
  cartext: {
    position: "absolute",
    color: "white",
    marginLeft: 30,
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  cartext2: {
    position: "absolute",
    color: "white",
    marginLeft: 30,
    marginTop: 35,
    fontSize: 12,
    fontWeight: "400",
  },
  carImage: {
    width: "95%",
    height: 150,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  searchSection: {
    marginHorizontal: 20,
  },
  searchbox: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    padding: 15,
    width: "100%",
    height: 50,
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
});

export default Main;
