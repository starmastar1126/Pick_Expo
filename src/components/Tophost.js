import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import {
  Body,
  Card,
} from "native-base";

import { colors } from "@constants/themes";

const Tophost = () => {
  return (
    <View>
      <View style={{ flexDirection: "row", marginLeft: 10, elevation: 20 }}>
        <Card style={{ borderRadius: 20 }}>
          <Body>
            <View style={{ flexDirection: "row", width: 200, height: 120 }}>
              <Image
                source={require("@assets/images/60093.jpg")}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 50,
                  alignSelf: "center",
                }}
              />
              <View style={{ width: 100 }}>
                <View
                  style={{
                    marginTop: 10,
                    alignSelf: "flex-end",
                  }}
                >
                  <View style={styles.ratingview}>
                    <View style={styles.rating} />
                    <View style={styles.rating} />
                    <View style={styles.rating} />
                    <View style={styles.rating} />
                    <View style={styles.rating} />
                  </View>
                </View>
                <Text style={{ marginTop: 30, fontWeight: "600" }}>
                  Uzair Khan
                </Text>
                <Text style={{ fontWeight: "300", fontSize: 10 }}>
                  100 Offers
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