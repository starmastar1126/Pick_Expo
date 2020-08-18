import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons, EvilIcons } from "@expo/vector-icons";
import { Header, Left, Right, Button } from "native-base";

const Heading = ({ MsgScreen }) => {
  return (
    <Header transparent>
      <Left />
      <Right>
        <Button transparent>
          <MaterialIcons
            name="message"
            size={28}
            color="blue"
            onPress={MsgScreen}
          />
          <EvilIcons name="user" size={34} color="blue" />
        </Button>
      </Right>
    </Header>
  );
};

export default Heading;
