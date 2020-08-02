import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Button } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import WalletHeader from "../../components/WalletHeader";
import { LineChart } from "react-native-chart-kit";
import i8 from "../../services/i18n";

const WIDTH = Dimensions.get("window").width;

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

export class Available extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <WalletHeader Heading={"Available"} />
        <View style={{ left: -30, marginTop: 60 }}>
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
          <View style={styles.txtView}>
            <Text style={{ fontSize: 13, fontWeight: "300" }}>
              {i18n.t("Available Funds")}
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "400", marginLeft: 3 }}>
              SAR300,00.00
            </Text>
          </View>

          <View style={styles.btnView}>
            <Button rounded style={styles.btn}>
              <Text style={{ color: "white" }}>{i18n.t("Withdraw")}</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

export default Available;

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 10,
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
    height: 130,
    borderColor: "#406bed",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    width: WIDTH - 40,
    marginHorizontal: 20,
  },
  txtView: {
    marginVertical: 25,
    marginLeft: 20,
  },
  btnView: {
    alignSelf: "flex-end",
    marginRight: 20,
    width: 120,
    marginBottom: 16,
  },
  btn: {
    width: "100%",
    justifyContent: "center",
  },
});
