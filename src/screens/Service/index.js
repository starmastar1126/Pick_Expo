import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Container, Content, Item, Input } from "native-base";
import { SimpleLineIcons } from "@expo/vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "react-native-elements";

import { connect } from "react-redux";
import { Heading, Categoryheader, Carcard1, Tophost, Destination, Earningcard, } from '@components';
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import API, { setClientToken } from "@utils/API";
import i18n from "@utils/i18n";

export default class Service extends React.Component {
  constructor(props) {
    super(props);
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
          <ScrollView>
            <View style={styles.searchSection}>
              <Item rounded style={styles.searchbox}>
                <Input
                  placeholder={i18n.translate("Search your desired service")}
                  style={styles.searchtxt}
                />
                <SimpleLineIcons
                  name="magnifier"
                  size={20}
                  color="black"
                  style={styles.searchicon}
                  onPress={() => this.props.navigation.navigate("RideMap1")}
                />
              </Item>
            </View>

            <View style={styles.Category}>
              <Categoryheader
                head1={i18n.translate("Popular")}
                head2={i18n.translate("Services")}
              />
            </View>
            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: "row" }}>
                  <Carcard1 />
                  <Carcard1 />
                  <Carcard1 />
                </View>
              </ScrollView>
            </View>
            <View style={styles.Category}>
              <Categoryheader
                head1={i18n.translate("All")}
                head2={i18n.translate("Service")}
              />
            </View>
            <View style={styles.params1}>
              <TouchableOpacity key={1} style={styles.item1}>
                <Icon
                  name="car-hatchback"
                  type="material-community"
                  color={colors.BLUE.TAB}
                  size={35}
                />
                <Text style={{ fontSize: 10 }}>{i18n.translate("Tovy")}</Text>
              </TouchableOpacity>
              <TouchableOpacity key={2} style={styles.item1}>
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
              <TouchableOpacity key={2} style={styles.item1}>
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
              <TouchableOpacity key={2} style={styles.item1}>
                <Icon
                  name="car-battery"
                  type="font-awesome-5"
                  color={colors.BLUE.TAB}
                  size={35}
                />
                <Text style={{ fontSize: 10 }}>
                  {i18n.translate("Battery")}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.Category}>
              <Categoryheader
                head1={i18n.translate("Top")}
                head2={i18n.translate("Agents")}
              />
            </View>
            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Tophost />
                <Tophost />
                <Tophost />
              </ScrollView>
            </View>

            <View style={[styles.Category, { marginTop: 10 }]}>
              <Categoryheader head1={i18n.translate("Serve_Earn")} />
            </View>
            <View>
              <Earningcard />
            </View>
          </ScrollView>
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
    marginRight: 20,
  },
  searchtxt: {
    marginLeft: 10,
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
