import React from "react";
import { Text, View, Image } from "react-native";
import { Button } from "native-base";
import { Entypo } from "@expo/vector-icons";

export default function searchcarCard({ Carname, Price }) {
  return (
    <View style={{ marginLeft: 10 }}>
      <Image
        source={require("../assets/ferrari.jpeg")}
        style={{ width: "97%", height: 160, borderRadius: 20 }}
        resizeMode="cover"
      />
      <Text
        style={{
          position: "absolute",
          color: "white",
          fontWeight: "bold",
          marginLeft: 20,
          marginTop: 20,
          fontSize: 22,
        }}
      >
        {Carname}
      </Text>

      <Text
        style={{
          position: "absolute",
          color: "white",
          fontWeight: "400",
          marginLeft: 20,
          marginTop: 45,
          fontSize: 20,
        }}
      >
        {Price}
      </Text>
      <Button
        style={{
          position: "absolute",
          bottom: 0,
          right: 12,
          borderTopLeftRadius: 20,
          borderBottomEndRadius: 19,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", padding: 10 }}>
          Rent now
        </Text>
        <Entypo
          name="chevron-small-right"
          size={24}
          color="white"
          style={{ marginTop: 6 }}
        />
      </Button>
    </View>
  );
}
