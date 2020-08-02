import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

import WalletHeader from "../../components/WalletHeader";
import { LineChart } from "react-native-chart-kit";
import PayItem from "../../components/PayItem";
const WIDTH = Dimensions.get("window").width;
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import i8 from "../../services/i18n";

const chartConfig = {
  color: (opacity = 0) => `rgba(0, 0, 255, ${opacity})`,
  backgroundColor: "white",
  barPercentage: 0.5,
  backgroundGradientFrom: "white",
  backgroundGradientTo: "white",
  labelColor: (opacity = 0.7) => `rgba(0, 0, 0, ${opacity})`,
  propsForDots: {
    r: "5",
    strokeWidth: "3",
    stroke: "#fff",
  },
};
const data = {
  labels: ["Mon", "Tues", "Wed", "Thurs", "Friday", "Sat", "Sun"],
  datasets: [
    {
      data: [330, 455, 500, 0, 0, 1000, 30],
      strokeWidth: 4, // optional
    },
  ],
};

export class Withdraw extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <WalletHeader Heading={"Withdraw"} />
        <View style={styles.txtView}>
          <Text style={{ fontSize: 15, fontWeight: "300" }}>
            {i18n.t("Available funds")}
          </Text>
          <Text style={styles.price}>SAR300,00.00</Text>
        </View>
        <View style={{ left: -30 }}>
          <LineChart
            data={data}
            width={WIDTH + 50}
            height={200}
            chartConfig={chartConfig}
            withInnerLines={false}
            withDots={false}
            withOuterLines={false}
            withHorizontalLabels={false}
            withShadow={true}
            withDots={3}
            dec
          />
        </View>

        <View style={styles.searchSection}>
          <Text style={styles.paidtxt}>
            {i18n.t("How would you like to paid?")}
          </Text>
          <View style={{ flex: 1, marginTop: 50 }}>
            <PayItem />
          </View>
        </View>
      </View>
    );
  }
}

export default Withdraw;

const styles = StyleSheet.create({
  searchSection: {
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
    height: 220,
    borderColor: "#406bed",
    position: "absolute",
    bottom: 0,
    width: WIDTH - 40,
    marginHorizontal: 20,
  },
  txtView: {
    marginVertical: 25,
    marginLeft: 20,
    marginTop: 50,
  },
  paidtxt: {
    position: "absolute",
    left: 25,
    top: 18,
    fontWeight: "300",
  },
  price: {
    fontSize: 17,
    fontWeight: "400",
    marginLeft: 3,
    marginTop: 2,
  },
});
