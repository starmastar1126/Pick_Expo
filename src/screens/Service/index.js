import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Container, Content, Item, Input } from "native-base";
import { SimpleLineIcons } from "@expo/vector-icons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { Loading, Carcard1, Tophost, Earningcard } from "@components";
import { isEmpty } from "@constants/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: isEmpty(this.props.route.params)
        ? ""
        : this.props.route.params.search,
      data: [],
      allServices: [],
      popularServices: [],
      topAgents: [],
    };
  }
  async componentDidMount() {
    await axios
      .get("Mobile/Services")
      .then((result) => this.setState({ data: result.data }))
      .then(() =>
        this.setState({
          allServices: this.state.data.allServices,
          popularServices: this.state.data.popularServices,
          topAgents: this.state.data.topAgents,
        })
      )
      .catch((e) => console.log(e));
  }
  render() {
    return (
      <Container>
        <View
          style={{
            width: "100%",
            height: 80,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "500" }}>Pick Services</Text>
        </View>
        <Content>
          <View style={styles.searchSection}>
            <Item rounded style={styles.searchbox}>
              <Input
                placeholder={i18n.translate("Search your desired service")}
                style={styles.searchtxt}
                onFocus={() => this.props.navigation.navigate("ServiceMap")}
              />
              <SimpleLineIcons
                name="magnifier"
                size={20}
                color="black"
                style={styles.searchicon}
                onPress={() => this.props.navigation.navigate("ServiceMap")}
              />
            </Item>
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
              {i18n.translate("Popular Services")}
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {this.state.popularServices.map((item, key) => {
              return (
                <Carcard1
                  key={key}
                  name={item.name}
                  image={item.image}
                  price={item.rate}
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
              {i18n.translate("All Services")}
            </Text>
          </View>

          {/* <View style={styles.params1}>
            <TouchableOpacity key={1} style={styles.item1}
              onPress={() => this.props.navigation.navigate('ServiceDrivers')}>
              <Icon
                name="car-hatchback"
                type="material-community"
                color={colors.BLUE.TAB}
                size={35}
              />
              <Text style={{ fontSize: 10 }}>{i18n.translate("Tovy")}</Text>
            </TouchableOpacity>
            <TouchableOpacity key={2} style={styles.item1}
              onPress={() => this.props.navigation.navigate('ServiceDrivers')}>
              <Icon
                name="shopify"
                type="fontisto"
                color={colors.BLUE.TAB}
                size={30}
              />
              <Text style={{ fontSize: 10 }}>
                {i18n.translate("Tire Shop")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity key={3} style={styles.item1}
              onPress={() => this.props.navigation.navigate('ServiceDrivers')}>
              <Icon
                name="gas-station"
                type="material-community"
                color={colors.BLUE.TAB}
                size={35}
              />
              <Text style={{ fontSize: 10 }}>
                {i18n.translate("Gasonline")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity key={4} style={styles.item1}
              onPress={() => this.props.navigation.navigate('ServiceDrivers')}>
              <Icon
                name="car-battery"
                type="font-awesome-5"
                color={colors.BLUE.TAB}
                size={35}
              />
              <Text style={{ fontSize: 10 }}>{i18n.translate("Battery")}</Text>
            </TouchableOpacity>
          </View> */}

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingLeft: 10 }}>
            {this.state.allServices.map((item, key) => {
              return (
                <TouchableOpacity key={key} style={styles.item1}
                  onPress={() => this.props.navigation.navigate('ServiceDrivers')}>
                  <Image
                    source={
                      isEmpty(item.image)
                        ? require("@assets/images/download.jpeg")
                        : { uri: configs.resourceURL + item.image }
                    }
                    style={{ width: 40, height: 40, borderRadius: 20 }}
                  />
                  <Text style={{ fontSize: 10, marginTop: 5 }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
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
              {i18n.translate("Top Agents")}
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {this.state.topAgents.map((item, key) => {
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
              {i18n.translate("Serve_Earn")}
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
    marginRight: 5,
  },
  searchtxt: {
    marginLeft: 5,
    fontSize: 15,
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
  params1: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    width: "100%",
  },
  item1: {
    justifyContent: "center",
    alignItems: "center",
    width: wp("21.0%"),
    height: 80,
    margin: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
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

export default Service;
