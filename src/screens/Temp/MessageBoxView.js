//Library Import
import React, { Component } from "react";
import {
  Container,
  Header,
  Body,
  Button,
  Text,
  Content,
  Footer,
  List,
  ListItem,
  Left,
  Thumbnail,
  Right,
} from "native-base";
import {
  Ionicons,
  MaterialCommunityIcons,
  EvilIcons,
  AntDesign,
} from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Platform,
} from "react-native";

//File Import
import SearchcarCard from "../components/searchcarCard";
import Foot from "../components/Foot";

import { AppLoading } from "expo";
import * as Font from "expo-font";

const Heading = ({navigation}) => {
  return (
    <Header
      transparent
      style={{ height: 160, marginTop: Platform.OS === "android" ? 18 : 0 }}
    >
      <Ionicons name="ios-arrow-round-back" size={35} style={styles.backbtn} onPress={() => navigation.goBack()} />
      <MaterialCommunityIcons
        name="pencil-minus-outline"
        size={24}
        color="black"
        style={[styles.menubtn]}
      />
      <Body>
        <View>
          <Text
            style={{
              marginLeft: Platform.OS === "android" ? 20 : 0,
              fontSize: 22,
              fontWeight: "300",
              marginTop: 5,
            }}
          >
            Messages
          </Text>
        </View>
        <View style={styles.searchSection}>
          <TextInput
            style={styles.input}
            placeholder="Search for a message or user"
            underlineColorAndroid="transparent"
          />
          <EvilIcons name="search" size={24} style={styles.searchIcon} />
        </View>
      </Body>
    </Header>
  );
};

const Messagesbox = ({navigation}) => {
  return (
    <ListItem avatar style={{ borderBottomWidth: 0 }} onPress={() => navigation.navigate('Messages')}>
      <Left>
        <Thumbnail source={require("../assets/60093.jpg")} />
      </Left>
      <Body>
        <Text>Kumar Pratik</Text>
        <Text note>Doing what you like will always keep you happy . .</Text>
      </Body>
      <Right>
        <Text note>3:43 pm</Text>
      </Right>
      <View style={styles.badge}>
        <Text style={{ color: "white", fontSize: 10 }}>1</Text>
      </View>
    </ListItem>
  );
};
export default class MessageScreenView extends Component {
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
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Container>
        <Heading navigation={this.props.navigation}/>
        <Content>
          <List>
            <Messagesbox navigation={this.props.navigation}/>
            <Messagesbox navigation={this.props.navigation} />
            <Messagesbox navigation={this.props.navigation} />
            <Messagesbox navigation={this.props.navigation} />
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
    right: 10,
    alignItems: "center",
  },
});
