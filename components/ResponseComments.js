import React from "react";
import { View, Text, StyleSheet, Dimensions, Platform } from "react-native";
import { Thumbnail, Button } from "native-base";

const ResponseComments = ({ Name, Msg }) => {
  return (
    <View>
      <View style={styles.DriverDetailsSection}>
        <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 5 }}>
          <Thumbnail
            source={require("../assets/60093.jpg")}
            style={{ height: 40, width: 40 }}
          />
          <View style={{ marginTop: 2 }}>
            <Text style={styles.name}>{Name}</Text>
            <Text style={styles.comment} numberOfLines={2}>
              {Msg}
            </Text>
            <Text style={styles.date}>17 April 2017</Text>
          </View>
          <Text style={styles.Rating}>.....</Text>
        </View>
      </View>
    </View>
  );
};

export default ResponseComments;

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
    shadowRadius: 4.65,
    elevation: 3,
    height: 70,
    marginHorizontal: 13,
    marginTop: 6,
  },
  Rating: {
    position: "absolute",
    left: 90,
    fontSize: 50,
    top: Platform.OS === "ios" ? -35 : -40,
    color: "#4883f0",
  },
  date: {
    fontSize: 7,
    marginLeft: 3,
    width: 190,
    color: "#b8b3a9",
    lineHeight: 12,
    marginTop: 6,
  },
  comment: {
    fontSize: 7,
    marginLeft: 3,
    width: 190,
    color: "#b8b3a9",
    lineHeight: 12,
  },
  name: { marginLeft: 2, fontSize: 13, fontWeight: "300" },
});
