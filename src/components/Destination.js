import React from "react";
import {
  Text,
  View,
  Image,
} from "react-native";

export default function Destination() {
  return (
    <View>
      <View
        style={{
          marginLeft: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("@assets/images/lace.jpeg")}
          style={{ width: 150, height: 180, borderRadius: 20 }}
        />
        <Text
          style={{
            position: "absolute",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Abu Dhabi
        </Text>
      </View>
    </View>
  );
}
