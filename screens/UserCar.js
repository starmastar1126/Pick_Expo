import React, { Component } from "react";
import { Container, Header, Left, Right, Button, Content } from "native-base";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Platform,
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
} from "react-native";
import DriverProfileDetails from "../components/DriverProfileDetails";
import Categoryheader from "../components/Categoryheader";
import UserCard from "../components/UserCard";
import Carcard from "../components/Carcard";
const Heading = () => {
  return (
    <Header transparent>
      <Left />
      <Right>
        <Button transparent style={{ marginBottom: 8 }}>
          <MaterialCommunityIcons
            name="pencil-minus-outline"
            size={24}
            color="black"
          />
        </Button>
      </Right>
    </Header>
  );
};

export class UserCar extends Component {
  render() {
    return (
      <View style={styles.cont}>
        <Heading />
        <UserCard
          UserName="Umar Khan"
          UserEmail="ahsanali@gmail.com"
          UserDes="I love to drive"
          UserNum="+92 301 70 200 45"
        />
        <View style={{ flexDirection: "row", marginTop: 40 }}>
          <DriverProfileDetails Name="Trip" Number="1000" />
          <DriverProfileDetails Name="Rating" Number="5.0" />
          <DriverProfileDetails Name="Responses" Number="990" />
        </View>

        <View style={styles.Category}>
          <Categoryheader head1="Umar's" head2="Cars" />
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
      </View>
    );
  }
}

export default UserCar;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: "white",
  },

  Category: {
    marginVertical: 10,
    marginTop: 20,
    marginHorizontal: 10,
  },
});
