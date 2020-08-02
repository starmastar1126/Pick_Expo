import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Body, Card } from "native-base";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import { connect } from "react-redux";
import { Loading, Rating } from '@components';
import { isEmpty } from "@constants/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

const Tophost = ({ key, name, image, bookings }) => {
  return (
    <View key={key}>
      <View style={{ flexDirection: "row", marginLeft: 10, elevation: 20 }}>
        <Card style={{ borderRadius: 20 }}>
          <Body>
            <View style={{ flexDirection: "row", width: 200, height: 120 }}>
              <Image
                source={isEmpty(image) ? require("@assets/images/avatar.jpg") : {uri: configs.resourceURL + "/" + image}}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 50,
                  alignSelf: "center",
                  marginLeft: 10,
                  marginRight: 10,
                }}
              />
              <View style={{ width: 100 }}>
                <View
                  style={{
                    marginTop: 10,
                    marginRight: 10,
                    alignSelf: "flex-end",
                  }}
                >
                  <Rating rating={3.5} />
                </View>
                <Text style={{ marginTop: 30, fontWeight: "600" }}>{name}</Text>
                <Text style={{ fontWeight: "300", fontSize: 10 }}>
                  {bookings} Offers
                </Text>
              </View>
            </View>
          </Body>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingview: {
    height: 6,
    width: 6,
    flexDirection: "row",
    position: "absolute",
    right: 18,
    top: 8,
  },
  rating: {
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: colors.BLUE.TAB,
    marginRight: 2,
  },
});

export default Tophost;
