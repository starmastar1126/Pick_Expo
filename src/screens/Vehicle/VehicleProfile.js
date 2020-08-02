import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Container, Content } from "native-base";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { Loading, DriverProfileDetails, UserCard } from "@components";
import { isEmpty } from "@constants/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

const data = [
  { title: "Ferrari xyz", image: images.car },
  { title: "Ferrari xyz", image: images.car },
  { title: "Ferrari xyz", image: images.car },
  { title: "Ferrari xyz", image: images.car },
  { title: "Ferrari xyz", image: images.car },
  { title: "Ferrari xyz", image: images.car },
];

class VehicleProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      profile_info: null,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    await axios
      .get("Mobile/HostProfile")
      .then((res) => {
        this.setState({ loading: false, profile_info: res.data });
      })
      .then(() => console.log(this.state.profile_info));
  }

  renderHeading() {
    return (
      <View style={{ flexDirection: "row", width: wp("100.0%"), height: 50 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-start",
            width: 80,
            padding: 10,
          }}
        >
          <Icon
            name="keyboard-backspace"
            type="material"
            size={24}
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        <View
          style={{
            width: wp("100.0%") - 160,
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-end",
            width: 80,
            padding: 10,
          }}
        >
          <Icon
            name="pencil-minus-outline"
            type="material-community"
            size={24}
            onPress={() => this.props.navigation.navigate('Vehicle')}
          />
        </View>
      </View>
    );
  }

  render() {
    const { profile_info } = this.state;
    if (isEmpty(profile_info)) {
      return (
        <Container>
          <Loading loading={this.state.loading} />
        </Container>
      );
    } else {
      return (
        <Container>
          {this.renderHeading()}
          <Content>
            <UserCard
              UserName={profile_info.name}
              UserEmail={profile_info.email}
              UserDes={
                profile_info.description === ""
                  ? "I love to drive"
                  : profile_info.description
              }
              UserNum={
                profile_info.contactNumber === " "
                  ? null
                  : profile_info.contactNumber
              }
              UserImage={profile_info.profilePicture}
            />

            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <DriverProfileDetails
                Name={i18n.translate("Trip")}
                Number={profile_info.wallet}
              />
              <DriverProfileDetails
                Name={i18n.translate("Rating")}
                Number={profile_info.rating}
              />
              <DriverProfileDetails
                Name={i18n.translate("Responses")}
                Number={profile_info.orders}
              />
            </View>

            <View style={{ marginTop: 18 }}>
              <View
                style={{
                  width: "100%",
                  paddingLeft: 20,
                  paddingRight: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>{profile_info.name}'s Cars</Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("VehicleAll")}
                >
                  <Text>{i18n.translate("View all")}</Text>
                </TouchableOpacity>
              </View>
              <View style={{ width: "100%", padding: 20 }}>
                <FlatList
                  contentContainerStyle={{ marginTop: 20 }}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={this.state.profile_info.myCars}
                  renderItem={({ item, key }) => (
                    <View>
                      <Image
                        key={key}
                        style={styles.image}
                        source={
                          isEmpty(item.image)
                            ? require("@assets/images/car.jpg")
                            : { uri: configs.resourceURL + item.image }
                        }
                        onPress={() => this.props.navigation.navigate('DriveDetail')}
                      />
                      {/* <Text style={{marginTop: -200}}>Audi A6</Text> */}
                      <TouchableOpacity style={styles.label}>
                        <Text style={{ fontSize: 12, color: colors.WHITE }}>
                          {i18n.translate("Rent Now")} {"->"}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                />
              </View>
            </View>
          </Content>
          <Loading loading={this.state.loading} />
        </Container>
      );
    }
  }
}

const styles = StyleSheet.create({
  listingitem: { flexDirection: "row", marginLeft: 35, marginTop: 20 },
  listingtext: { marginLeft: 20, fontSize: 15, fontWeight: "300" },
  image: {
    width: 180,
    height: 200,
    borderRadius: 20,
    marginRight: 10,
  },
  label: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -40,
    marginLeft: 80,
    width: 100,
    height: 40,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: colors.BLUE.TAB,
  },
});

export default VehicleProfile;
