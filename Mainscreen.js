import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Container, Content, Item, Input } from "native-base";
import { SimpleLineIcons } from "@expo/vector-icons";

import Categoryheader from "./components/Categoryheader";
import Carcard from "./components/Carcard";
import Tophost from "./components/Tophost";
import Destination from "./components/Destination";
import Earningcard from "./components/Earningcard";
import Heading from "./components/Heading";
import Foot from "./components/Foot";

export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Container>
        <Heading
          MsgScreen={() => this.props.navigation.navigate("MessageScreen")}
        />
        <Content>
          <ScrollView>
            <View style={styles.searchview}>
              <Item rounded style={styles.searchbox}>
                <Input
                  placeholder="Location, place or category"
                  style={styles.searchtxt}
                />
                <SimpleLineIcons
                  name="magnifier"
                  size={20}
                  color="black"
                  style={styles.searchicon}
                />
              </Item>
            </View>
            <View style={styles.Category}>
              <Categoryheader head1="Popular" head2="Cars" />
            </View>
            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: "row" }}>
                  <Carcard />
                  <Carcard />
                  <Carcard />
                </View>
              </ScrollView>
            </View>

            <View style={styles.Category}>
              <Categoryheader head1="Top" head2="Host" />
            </View>
            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Tophost />
                <Tophost />
                <Tophost />
              </ScrollView>
            </View>

            <View style={[styles.Category, { marginTop: 10 }]}>
              <Categoryheader head1="Today's" head2="Feed" />
            </View>

            <View>
              <Image
                source={require("./assets/car.jpg")}
                style={styles.carImage}
                resizeMode="stretch"
              />
              <Text style={styles.cartext}>Ferrari New Launch 2020</Text>
              <Text style={styles.cartext2}>Ferrari New Launch 2020</Text>
            </View>

            <View style={[styles.Category, { marginTop: 10 }]}>
              <Categoryheader head1="Popular" head2="Destination" />
            </View>
            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Destination />
                <Destination />
                <Destination />
              </ScrollView>
            </View>

            <View style={[styles.Category, { marginTop: 10 }]}>
              <Categoryheader head1="Start earning " head2="today" />
            </View>
            <View>
              <Earningcard />
            </View>

            <View style={[styles.Category, { marginTop: 10 }]}>
              <Categoryheader head1="Go for " head2="ride" />
            </View>
            <View>
              <Earningcard />
            </View>
          </ScrollView>
        </Content>
        <Foot props={this.props} />
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
});
