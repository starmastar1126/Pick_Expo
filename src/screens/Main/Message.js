import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Thumbnail, Button, Container, Content, Footer } from "native-base";
import { Ionicons, Feather, FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import { connect } from "react-redux";
import { Heading, Categoryheader, Carcard, Tophost, Destination, Earningcard, } from '@components';
import configs from '@constants/configs';
import { themes, colors } from '@constants/themes';
import { images, icons } from '@constants/assets';
import API, { setClientToken } from '@utils/API';
import i18n from '@utils/i18n';

const UserInfom = ({navigation}) => {
  return (
    <View style={styles.DriverDetailsSection}>
      <View style={{ flexDirection: "row", marginLeft: 50, marginTop: 42 }}>
        <Thumbnail source={require("@assets/images/60093.jpg")} />
        <View style={{ marginTop: 10 }} st>
          <Text style={{ fontSize: 16, marginLeft: 10 }}>Syed Ahsan Ali</Text>
          <Text style={{ fontSize: 11, marginLeft: 11 }}>online</Text>
        </View>
        <Button
          transparent
          style={{
            marginLeft: 2,
            position: "absolute",
            left: -40,
            color: "rgb(86, 101, 115)",
          }}
          onPress={()=>navigation.goBack()}
        >
          <Ionicons name="ios-arrow-round-back" size={34} color="black" />
        </Button>
      </View>
    </View>
  );
};

const Inbox = ({ user, Message }) => {
  if (user) {
    return (
      <View style={styles.convo1}>
        <Text style={{ color: "white", fontWeight: "600" }}>{Message}</Text>
      </View>
    );
  }
  return (
    <View style={styles.convo2}>
      <Text style={{ color: "black", fontWeight: "600" }}>{Message}</Text>
    </View>
  );
};

const Foot = () => {
  return (
    <Footer style={{ backgroundColor: "white", marginBottom: 4 }}>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          width: "75%",
          borderRadius: 20,
          justifyContent: "space-between",
          borderColor: "#e6e1e1",
        }}
      >
        <TextInput placeholder="Message" style={{ marginLeft: 14 }} />
        <Feather name="smile" size={24} color="black" style={{ margin: 14 }} />
      </View>

      <FontAwesome
        name="microphone"
        size={24}
        color="black"
        style={{ position: "absolute", right: 8, bottom: 15 }}
      />
    </Footer>
  );
};

export class Message extends Component {
  render() {
    return (
      <Container>
        <Content>
          <UserInfom navigation={this.props.navigation} />
          <View style={{ marginTop: 40 }}>
            <Inbox
              user={true}
              Message="Hey! Are You There I've Been waiting for you at my location. Please message me or call me so I can Know your Location."
            />
            <Inbox user={false} Message="Hey! Please Hold I'm all my way" />

            <Inbox user={true} Message="Okay! and Thankyou" />
          </View>
        </Content>
        <Foot navigation={this.props.navigation} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  DriverDetailsSection: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    marginHorizontal: 1,
    shadowOpacity: 0.3,
    shadowRadius: 2.65,
    elevation: 3,
    height: 120,
  },
  convo1: {
    width: "70%",
    alignSelf: "flex-end",
    padding: 10,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderBottomStartRadius: 20,
    backgroundColor: "#1e83f7",
    marginTop: 12,
    marginRight: 10,
  },
  convo2: {
    width: "70%",
    padding: 10,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
    backgroundColor: "#e3e6e8",
    marginTop: 12,
    marginLeft: 10,
  },
});

export default Message;