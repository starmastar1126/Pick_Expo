import React from "react";
import { Text, View, Image } from "react-native";
import { Button } from "native-base";

export default function Carcard1() {
  return (
    <View>
      <View style={{ marginLeft: 10 }}>
        <Image
          source={require("@assets/images/driver3.jpg")}
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
          Chauffeur
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
          SAR12/km
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
            Request Now
          </Text>
        </Button>
      </View>
    </View>
  );
}
