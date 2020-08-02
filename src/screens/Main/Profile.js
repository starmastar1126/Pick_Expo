import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, AsyncStorage } from "react-native";
import { Container, Content, } from "native-base";
import { Ionicons, MaterialCommunityIcons, MaterialIcons, EvilIcons, FontAwesome, AntDesign } from "@expo/vector-icons";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import { connect } from "react-redux";
import { signOut } from "@modules/account/actions";
import { Loading, DriverProfileDetails, UserCard } from '@components';
import configs from '@constants/configs';
import { themes, colors } from '@constants/themes';
import { images, icons } from '@constants/assets';
import axios, { removeClientToken } from '@utils/axios';
import i18n from '@utils/i18n';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async signOut() {
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("logged");
    AsyncStorage.removeItem("user_info");
    this.props.signOut(false);
    removeClientToken();
    this.props.navigation.reset({ routes: [{ name: "Auth" }] });
  }
  async componentDidMount() {
    await axios
      .get("Mobile/Profile")
      .then((result) => this.setState({ data: result.data }))
      .then(() => console.log(this.state.data));
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
          />
        </View>
      </View>
    );
  }

  renderFooter() {
    return (
      <TouchableOpacity
        style={{
          position: "absolute",
          backgroundColor: colors.WHITE,
          width: wp("100.0%"),
          height: 50,
          bottom: 0,
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 20,
          zIndex: 1000,
        }}
        onPress={() => this.signOut()}
      >
        <AntDesign name="poweroff" size={25} color="red" />
        <Text style={{ marginLeft: 15, fontSize: 15, color: "red" }}>
          {" "}
          {i18n.translate("Log out")}{" "}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { data } = this.state;
    return (
      <Container>
        {this.renderHeading()}
        {this.renderFooter()}
        <Content>
          <UserCard
            UserName={data.name}
            UserEmail={data.email}
            UserDes={data.description}
            UserNum={data.contactNumber}
            Rating={data.rating}
          />

          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <DriverProfileDetails Name="Wallet" Number={data.wallet} />
            <DriverProfileDetails Name="Orders" Number={data.orders} />
          </View>

          <View style={{ marginTop: 18 }}>
            <TouchableOpacity style={styles.listingitem} onPress={() => this.props.navigation.navigate("Bidding")} >
              <Icon name="hand-point-right" type="font-awesome-5" size={20} color={colors.BLUE.TAB} />
              <Text style={styles.listingtext}>My Bidding</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.listingitem} >
              <Icon name="heart-o" type="font-awesome" size={20} color={colors.BLUE.TAB} />
              <Text style={styles.listingtext}>Your Favourites</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.listingitem} onPress={() => this.props.navigation.navigate("Wallet")} >
              <Icon name="payment" type="material" size={20} color={colors.BLUE.TAB} />
              <Text style={styles.listingtext}>Payment Details</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.listingitem} >
              <Icon name="legal" type="font-awesome" size={20} color={colors.BLUE.TAB} />
              <Text style={styles.listingtext}>Legal</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.listingitem} >
              <Icon name="headphones" type="material-community" size={20} color={colors.BLUE.TAB} />
              <Text style={styles.listingtext}>Help</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.listingitem} >
              <Icon name="ios-settings" type="ionicon" size={20} color={colors.BLUE.TAB} />
              <Text style={styles.listingtext}>Settings</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.listingitem} >
              <Icon name="sharealt" type="antdesign" size={20} color={colors.BLUE.TAB} />
              <Text style={styles.listingtext}>Share With Your Friends</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  listingitem: { flexDirection: "row", marginLeft: 35, marginTop: 20 },
  listingtext: { marginLeft: 20, fontSize: 15, fontWeight: "300" },
});

const mapStateToProps = (state) => {
  return {
    user_info: state.account.user_info,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: (data) => {
      dispatch(signOut(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
