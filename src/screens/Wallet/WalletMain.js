import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Button, Content } from "native-base";
import { Ionicons, MaterialIcons, EvilIcons } from "@expo/vector-icons";
import ChartCard from "../../components/ChartCard";
import WalletHeader from "../../components/WalletHeader";
import Playingvideo from "../../components/Playingvideo";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import i8 from "../../services/i18n";
i8.setI18nConfig();
const data = {
  labels: ["Mon", "Tues", "Wed", "Thurs", "Friday", "Sat", "Sun"],
  datasets: [
    {
      data: [300, 300, 600, 1000],
      strokeWidth: 4, // optional
    },
  ],
};

const EarningView = ({ price, onpresshistory }) => {
  return (
    <View style={styles.searchSection}>
      <View style={styles.txtView}>
        <Text style={{ fontSize: 13, fontWeight: "300" }}>
          {i18n.t("Total Earning")}
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "400", marginLeft: 3 }}>
          {price}
        </Text>
      </View>

      <View style={styles.btnView}>
        <Button rounded style={styles.btn} onPress={onpresshistory}>
          <Text style={{ color: "white" }}>History</Text>
        </Button>
      </View>
    </View>
  );
};

export class WalletMain extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <ScrollView>
          <WalletHeader Heading={"Wallet"} />

          <EarningView
            price={"SAR7,820.00"}
            onpresshistory={() => alert("Button Pressed")}
          />

          <View>
            <View style={styles.SummaryView}>
              <Text style={{ fontSize: 18, fontWeight: "200" }}>
                {i18n.t("Wallet Summary")}
              </Text>
              <Text>{i18n.t("view all")}</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <ChartCard data={data} Name={"Available"} Price={"SAR35,00.00"} />
              <ChartCard data={data} Name={"Withdraw"} Price={"SAR150.00"} />
              <ChartCard data={data} Name={"Pending"} Price={"SAR2,00.00"} />
            </ScrollView>
          </View>

          <View style={styles.SummaryView}>
            <Text style={{ fontSize: 18, fontWeight: "200" }}>
              {i18n.t("Weekly Tips")}
            </Text>
          </View>
          <View>
            <Playingvideo
              src={{
                uri:
                  "https://player.vimeo.com/external/405002957.sd.mp4?s=fb4008a42e10f337dba70b6c5872d32273337696&profile_id=139&oauth2_token_id=57447761",
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default WalletMain;

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
    height: 150,
    borderWidth: 1,
    borderColor: "#406bed",
    justifyContent: "space-between",
  },
  txtView: {
    justifyContent: "space-between",
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

  SummaryView: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
});
