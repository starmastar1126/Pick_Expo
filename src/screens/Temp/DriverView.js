import React, { Component } from "react";
import { Container, Header, Left, Right, Button, Content } from "native-base";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  EvilIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { Platform, StyleSheet, Image, View, Text, TouchableOpacity, FlatList } from "react-native";

import DriverProfileDetails from "../components/DriverProfileDetails";
import UserCard from "../components/UserCard";

import { Icon } from 'react-native-elements';
import { Foot } from '@components';
import configs from '@constants/configs';
import { themes, colors } from '@constants/themes';
import { images, icons } from '@constants/assets';
import API, { setClientToken } from '@services/API';
import i18n from '@services/i18n';

const data = [
  { title: 'Ferrari xyz', image: images.car },
  { title: 'Ferrari xyz', image: images.car },
  { title: 'Ferrari xyz', image: images.car },
  { title: 'Ferrari xyz', image: images.car },
  { title: 'Ferrari xyz', image: images.car },
  { title: 'Ferrari xyz', image: images.car }
]

const Heading = ({ navigation }) => {
  return (
    <Header transparent>
      <Left>
        <Button transparent style={{ marginLeft: 2 }} onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-round-back" size={34} color="black" />
        </Button>
      </Left>
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

export default class DriverView extends Component {
  render() {
    return (
      <Container>
        <Heading navigation={this.props.navigation} />
        <Content>
          <UserCard
            UserName="Umar Khan"
            UserEmail="ahsanali@gmail.com"
            UserDes="I love to drive"
            UserNum="+923017020045"
          />

          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <DriverProfileDetails Name={i18n.translate('Trip')} Number="1000" />
            <DriverProfileDetails Name={i18n.translate('Rating')} Number="5.0" />
            <DriverProfileDetails Name={i18n.translate('Responses')} Number="990" />
          </View>

          <View style={{ marginTop: 18 }}>
            <View style={{ width: '100%', paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Umar's Cars</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('DriverViewAll')}>
                <Text>{i18n.translate('View all')}</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: '100%', padding: 20 }}>
              <FlatList
                contentContainerStyle={{ marginTop: 20 }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={data}
                renderItem={({ item, key }) => (
                  <View>
                    {/* <Text style={{marginTop: -200}}>Audi A6</Text> */}
                    <Image key={key} style={styles.image} source={item.image} />
                    <TouchableOpacity style={styles.label}>
                      <Text style={{ fontSize: 12, color: colors.WHITE }}>{i18n.translate('Rent Now')} {'->'}</Text>
                    </TouchableOpacity>
                  </View>
                )}
              /></View>
          </View>
        </Content>
        <Foot selected='Host' navigation={this.props.navigation} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  listingitem: { flexDirection: "row", marginLeft: 35, marginTop: 20 },
  listingtext: { marginLeft: 20, fontSize: 15, fontWeight: "300" },
  image: {
    width: 180,
    height: 200,
    borderRadius: 20,
    marginRight: 10
  },
  label: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -40,
    marginLeft: 80,
    width: 100,
    height: 40,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: colors.BLUE.TAB
  }
});
