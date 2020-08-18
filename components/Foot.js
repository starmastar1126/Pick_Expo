import React from "react";
import { View, Text, Platform } from "react-native";
import {
  MaterialIcons,
  SimpleLineIcons,
  FontAwesome,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { Button, Footer, FooterTab } from "native-base";
const Foot = () => {
  return (
    <Footer>
      <FooterTab
        style={{ backgroundColor: Platform.OS === "ios" ? null : "white" }}
      >
        <Button>
          <SimpleLineIcons name="magnifier" size={24} color="blue" />
        </Button>
        <Button>
          <MaterialIcons name="camera" size={24} color="grey" />
        </Button>
        <Button>
          <FontAwesome name="car" size={24} color="grey" />
        </Button>
        <Button>
          <MaterialCommunityIcons name="steering" size={24} color="grey" />
        </Button>
        <Button>
          <FontAwesome5 name="hand-holding-usd" size={24} color="grey" />
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default Foot;
