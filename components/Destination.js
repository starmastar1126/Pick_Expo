import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  ImageBackground,
  Image,
} from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content,
  Item,
  Input,
} from "native-base";
import { Entypo } from "@expo/vector-icons";

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
          source={require("../assets/lace.jpeg")}
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
