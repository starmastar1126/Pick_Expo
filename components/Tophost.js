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
  Footer,
  FooterTab,
  Card,
  CardItem,
} from "native-base";

import StarRating from "react-native-star-rating";
const Tophost = () => {
  return (
    <View>
      <View style={{ flexDirection: "row", marginLeft: 10, elevation: 20 }}>
        <Card style={{ borderRadius: 20 }}>
          <Body>
            <View style={{ flexDirection: "row", width: 200, height: 120 }}>
              <Image
                source={require("../assets/60093.jpg")}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 50,
                  alignSelf: "center",
                }}
              />
              <View style={{ width: 100 }}>
                <View
                  style={{
                    marginTop: 10,
                    alignSelf: "flex-end",
                  }}
                >
                  <StarRating
                    maxStars={5}
                    starSize={10}
                    rating={5}
                    color="blue"
                  />
                </View>
                <Text style={{ marginTop: 30, fontWeight: "600" }}>
                  Uzair Khan
                </Text>
                <Text style={{ fontWeight: "300", fontSize: 10 }}>
                  100 Offers
                </Text>
              </View>
            </View>
          </Body>
        </Card>
      </View>
    </View>
  );
};

export default Tophost;
