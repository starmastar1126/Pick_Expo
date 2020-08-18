import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Categoryheader = ({ head1, head2 }) => {
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ marginLeft: 10 }}>
          <Text>
            <Text style={[styles.Categoryhead, { fontWeight: "500" }]}>
              {head1}{" "}
            </Text>
            <Text style={[styles.Categoryhead, { fontWeight: "200" }]}>
              {head2}
            </Text>
          </Text>
        </View>
        <View>
          <Text style={{ fontWeight: "200", fontSize: 15, marginRight: 10 }}>
            View all
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Categoryheader;

const styles = StyleSheet.create({
  searchicon: {
    marginRight: 20,
  },
  searchtxt: {
    marginLeft: 10,
    fontSize: 15,
  },
  Categoryhead: {
    fontSize: 20,
  },
});
