import React from "react";
import { Text, View, Image } from "react-native";
import { Button } from "native-base";
import { Entypo } from "@expo/vector-icons";

export default function Earningcard({onPress}) {
  return (
    <View>
      <View style={{ marginLeft: 10 }}>
        <Image
          source={require("@assets/images/earning.jpeg")}
          style={{ width: "97%", height: 200, borderRadius: 20 }}
        />
        <Text
          style={{
            position: "absolute",
            color: "white",
            fontWeight: "bold",
            marginLeft: 20,
            marginTop: 20,
            fontSize: 25,
          }}
        >
          Earn up to
        </Text>

        <Text
          style={{
            position: "absolute",
            color: "white",
            fontWeight: "400",
            marginLeft: 20,
            marginTop: 60,
            fontSize: 25,
          }}
        >
          SAR100/Month
        </Text>
        <Button
          style={{
            position: "absolute",
            bottom: 0,
            right: 12,
            borderTopLeftRadius: 20,
            borderBottomEndRadius: 19,
          }}
          onPress={onPress}
        >
          <Text style={{ color: "white", fontWeight: "bold", padding: 10 }}>
            Become a host
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
