//Library Import
import React, { Component } from "react";
import { Container, Body, Text, Content, List, ListItem, Left, Thumbnail, Right } from "native-base";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import { View, StyleSheet, TextInput } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import { connect } from "react-redux";
import { Loading } from '@components';
import configs from '@constants/configs';
import { themes, colors } from '@constants/themes';
import { images, icons } from '@constants/assets';
import axios, { setClientToken } from '@utils/axios';
import i18n from '@utils/i18n';

const MessageItem = ({ navigation }) => {
  return (
    <ListItem avatar style={{ borderBottomWidth: 0, padding: 10 }} onPress={() => navigation.navigate('Message')}>
      <Left>
        <Thumbnail source={require("@assets/images/60093.jpg")} />
      </Left>
      <Body>
        <Text>Kumar Pratik</Text>
        <Text note>Doing what you like will always keep you happy . .</Text>
      </Body>
      <Right>
        <Text note style={{ textAlign: 'right' }}>3:43 pm</Text>
      </Right>
      <View style={styles.badge}>
        <Text style={{ color: "white", fontSize: 10 }}>1</Text>
      </View>
    </ListItem>
  );
};

class Messages extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  renderHeading() {
    return (
      <View style={{ flexDirection: 'row', width: wp('100.0%'), height: 50 }}>
        <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: 80, padding: 10 }}>
          <Icon name="keyboard-backspace" type="material" size={24} onPress={() => this.props.navigation.goBack()} />
        </View>
        <View style={{ width: wp('100.0%') - 160, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: "300", marginTop: 5 }}>
            Messages
          </Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'flex-end', width: 80, padding: 10 }}>
          <Icon name="pencil-minus-outline" type="material-community" size={24} />
        </View>
      </View>
    );
  };

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Container>
        {this.renderHeading()}

        <View style={styles.searchSection}>
          <TextInput style={styles.input} placeholder="Search for a message or user" underlineColorAndroid="transparent" />
          <EvilIcons name="search" size={24} style={styles.searchIcon} />
        </View>
        <Content contentContainerStyle={{ marginTop: 10 }}>
          <List>
            <MessageItem navigation={this.props.navigation} />
            <MessageItem navigation={this.props.navigation} />
            <MessageItem navigation={this.props.navigation} />
            <MessageItem navigation={this.props.navigation} />
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    marginTop: 20,
  },
  searchIcon: {
    color: "rgb(86, 101, 115)",
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingTop: 12,
    paddingRight: 10,
    paddingBottom: 12,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
    marginLeft: 10,
  },
  backbtn: {
    position: "absolute",
    left: 10,
    top: 10,
    color: "rgb(86, 101, 115)",
  },
  menubtn: {
    position: "absolute",
    right: 10,
    top: 48,
  },
  badge: {
    position: "absolute",
    height: 15,
    width: 15,
    backgroundColor: "blue",
    borderRadius: 3,
    right: 25,
    alignItems: "center",
  },
});

export default Messages;