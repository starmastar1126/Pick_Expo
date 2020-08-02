import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Container, Header, Content, Button } from "native-base";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import i8 from "../services/i18n";
i8.setI18nConfig();
const chartConfig = {
  color: (opacity = 0) => `rgba(5, 36, 130, ${opacity})`,
  backgroundColor: "white",
  barPercentage: 0.5,
  backgroundGradientFrom: "white",
  backgroundGradientTo: "white",
};
const ChartCard = ({ data, Name, Price }) => {
  return (
    <View
      style={{
        marginLeft: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderBottomLeftRadius: 30,
        borderBottomEndRadius: 30,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}
    >
      <View
        style={[
          {
            width: 150,
            height: 220,
            elevation: 50,
          },
        ]}
      >
        <View style={{ position: "absolute", zIndex: 100, top: 10, left: 10 }}>
          <Text style={{ fontWeight: "300" }}>{i18n.t(Name)}</Text>
          <Text style={{ fontSize: 10, fontWeight: "300", marginTop: 3 }}>
            {Price}
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 50,
            left: 0,
          }}
        >
          <LineChart
            data={data}
            width={120}
            height={100}
            chartConfig={chartConfig}
            withInnerLines={false}
            withDots={false}
            withOuterLines={false}
            withVerticalLabels={false}
            withHorizontalLabels={false}
            withShadow={true}
          />
        </View>
        <Button full primary style={styles.btn}>
          <Text style={{ color: "white" }}>{i18n.t("Check Now")}</Text>
        </Button>
      </View>
    </View>
  );
};

export default ChartCard;
const styles = StyleSheet.create({
  ChartSection: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    marginTop: 20,
    height: 230,
    width: 145,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  btn: {
    width: "101%",
    position: "absolute",
    bottom: -1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    left: -1,
  },
});
