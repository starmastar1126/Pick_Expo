import React from "react";
import { Text, Platform } from "react-native";
import {
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { Button, Footer, FooterTab } from "native-base";

import { colors } from "@constants/themes";

const Foot = ({ selected, navigation }) => {
  return (
    <Footer>
      <FooterTab
        style={{ backgroundColor: Platform.OS === "ios" ? null : "white" }}
      >
        <Button onPress={() => navigation.navigate("MainScreen")}>
          <MaterialIcons
            name="search"
            size={35}
            color={selected == "Main" ? colors.BLUE.TAB : "grey"}
          />
        </Button>
        <Button onPress={() => navigation.navigate("RideMap")}>
          <MaterialIcons
            name="camera"
            size={30}
            color={selected == "Ride" ? colors.BLUE.TAB : "grey"}
          />
        </Button>
        <Button onPress={() => navigation.navigate("HostScreen")}>
          <FontAwesome
            name="car"
            size={24}
            color={selected == "Host" ? colors.BLUE.TAB : "grey"}
          />
        </Button>
        <Button onPress={() => navigation.navigate("MyPickScreen")}>
          <MaterialCommunityIcons
            name="steering"
            size={30}
            color={selected == "MyPick" ? colors.BLUE.TAB : "grey"}
          />
        </Button>
        <Button onPress={() => navigation.navigate("ServiceScreen")}>
          <Text
            style={{
              position: "absolute",
              top: 12,
              fontSize: 12,
              color: selected == "Service" ? colors.BLUE.TAB : "grey",
            }}
          >
            SAR
          </Text>
          <FontAwesome5
            name="hand-holding"
            size={24}
            color={selected == "Service" ? colors.BLUE.TAB : "grey"}
          />
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default Foot;
