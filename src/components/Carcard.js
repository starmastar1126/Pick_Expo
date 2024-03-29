import React from "react";
import {
  Text,
  View,
  Image,
} from "react-native";
import {
  Button,
} from "native-base";
import { Entypo } from "@expo/vector-icons";

export default function Carcard() {
  return (
    <View>
      <View style={{ marginLeft: 10 }}>
        <Image
          source={require("@assets/images/download.jpeg")}
          style={{ width: 200, height: 220, borderRadius: 20 }}
        />
        <Text
          style={{
            position: "absolute",
            color: "white",
            fontWeight: "bold",
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          Audi A6
        </Text>

        <Text
          style={{
            position: "absolute",
            color: "white",
            fontWeight: "400",
            marginLeft: 20,
            marginTop: 40,
          }}
        >
          SAR350/DAY
        </Text>
        <Button
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            borderTopLeftRadius: 20,
            borderBottomEndRadius: 19,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", padding: 10 }}>
            Rent Now
          </Text>
          <Entypo
            name="chevron-small-right"
            size={24}
            color="white"
            style={{ marginTop: 6 }}
          />
        </Button>
      </View>
    </View>
  );
}
