import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Button } from "native-base";
import { LineChart } from "react-native-chart-kit";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import { connect } from "react-redux";
import { signOut } from "@modules/account/actions";
import { Loading } from '@components';
import configs from '@constants/configs';
import { themes, colors } from '@constants/themes';
import { images, icons } from '@constants/assets';
import axios, { removeClientToken } from '@utils/axios';
import i18n from '@utils/i18n';

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

class Available extends Component {
  renderHeading() {
    return (
      <View style={{ flexDirection: 'row', width: wp('100.0%'), height: 50 }}>
        <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: 80, padding: 10 }}>
          <Icon name="keyboard-backspace" type="material" size={24} onPress={() => this.props.navigation.goBack()} />
        </View>
        <View style={{ width: wp('100.0%') - 160, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: "300", marginTop: 5 }}>
            Wallet
          </Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'flex-end', width: 80, padding: 10 }}>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={{ backgroundColor: "white", flex: 1 }}>
        {this.renderHeading()}
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
              {i18n.translate("Available Funds")}
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "400", marginLeft: 3 }}>
              SAR300,00.00
            </Text>
          </View>

          <View style={styles.btnView}>
            <Button rounded style={styles.btn} onPress={()=> this.props.navigation.navigate('Withdraw')}>
              <Text style={{ color: "white" }}>{i18n.translate("Withdraw")}</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

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

export default Available;
