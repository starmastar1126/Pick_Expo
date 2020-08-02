import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, Image, StatusBar } from "react-native";
import { Container, Content, Item, Input } from "native-base";
import { SimpleLineIcons } from "@expo/vector-icons";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import { connect } from "react-redux";
import { Heading, Categoryheader, Carcard, Tophost, Destination, Earningcard, } from '@components';
import configs from '@constants/configs';
import { themes, colors } from '@constants/themes';
import { images, icons } from '@constants/assets';
import API, { setClientToken } from '@utils/API';
import i18n from '@utils/i18n';
import { TouchableOpacity } from "react-native-gesture-handler";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   const { user } = this.props;
  //   if (!user[0]) {
  //     this.props.navigation.navigate("SignIn");
  //   }
  //   console.log(users);
  // }

  render() {
    return (
      <Container>
        <StatusBar hidden />
        <Heading
          onMessage={() => this.props.navigation.navigate("Message")}
          onProfile={() => this.props.navigation.navigate("Profile")}
        />
        <Content>
          <ScrollView>
            <View style={styles.searchSection}>
              <Item rounded style={styles.searchbox}>
                <Input
                  placeholder="Location, place or category"
                  style={styles.searchtxt}
                  onFocus={() => this.props.navigation.navigate("Search")}
                />
                <SimpleLineIcons
                  name="magnifier"
                  size={20}
                  color="black"
                  style={styles.searchicon}
                  onPress={() => this.props.navigation.navigate("Search")}
                />
              </Item>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15, marginRight: 15, marginTop: 20, marginBottom: 5 }}>
              <Text style={{ fontSize: 16, fontWeight: '500' }}>{i18n.translate('Popular Cars')}</Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 14 }}>{i18n.translate('View all')}</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Carcard />
              <Carcard />
              <Carcard />
            </ScrollView>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15, marginRight: 15, marginTop: 20, marginBottom: 5 }}>
              <Text style={{ fontSize: 16, fontWeight: '500' }}>{i18n.translate('Top Host')}</Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 14 }}>{i18n.translate('View all')}</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Tophost />
              <Tophost />
              <Tophost />
            </ScrollView>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15, marginRight: 15, marginTop: 20, marginBottom: 5 }}>
              <Text style={{ fontSize: 16, fontWeight: '500' }}>{i18n.translate('Todays Feed')}</Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 14 }}>{i18n.translate('View all')}</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Image
                source={require("@assets/images/car.jpg")}
                style={styles.carImage}
                resizeMode="stretch"
              />
              <Text style={styles.cartext}>Ferrari New Launch 2020</Text>
              <Text style={styles.cartext2}>Ferrari New Launch 2020</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15, marginRight: 15, marginTop: 20, marginBottom: 5 }}>
              <Text style={{ fontSize: 16, fontWeight: '500' }}>{i18n.translate('Popular Destination')}</Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 14 }}>{i18n.translate('View all')}</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Destination />
              <Destination />
              <Destination />
            </ScrollView>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15, marginRight: 15, marginTop: 20, marginBottom: 5 }}>
              <Text style={{ fontSize: 16, fontWeight: '500' }}>{i18n.translate('Start earning today')}</Text>
            </View>
            <Earningcard />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15, marginRight: 15, marginTop: 20, marginBottom: 5 }}>
              <Text style={{ fontSize: 16, fontWeight: '500' }}>{i18n.translate('Go for ride')}</Text>
            </View>
            <Earningcard />
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
    marginRight: 10,
  },
  searchtxt: {
    marginLeft: 10,
    fontSize: 15,
    width: "100%",
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

const mapStateToProps = state => {
  return {
    user: state.account.user,
  }
}

export default connect(mapStateToProps, undefined)(Main);
