import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Button } from "native-base";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import { connect } from "react-redux";
import { signOut } from "@modules/account/actions";
import { Loading, ChartCard, Playingvideo } from '@components';
import configs from '@constants/configs';
import { themes, colors } from '@constants/themes';
import { images, icons } from '@constants/assets';
import axios, { removeClientToken } from '@utils/axios';
import i18n from '@utils/i18n';

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
          {i18n.translate("Total Earning")}
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

class Wallet extends Component {

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
        <ScrollView>
          <EarningView
            price={"SAR7,820.00"}
            onpresshistory={() => alert("Button Pressed")}
          />
          <View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15, marginRight: 15, marginTop: 20, marginBottom: 5 }}>
              <Text style={{ fontSize: 16, fontWeight: '500' }}>{i18n.translate('Wallet Summary')}</Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 14 }}>{i18n.translate('View all')}</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <ChartCard data={data} Name={"Available"} Price={"SAR35,00.00"} onPress={() => this.props.navigation.navigate('Available')} />
              <ChartCard data={data} Name={"Withdraw"} Price={"SAR150.00"} onPress={() => this.props.navigation.navigate('Withdraw')} />
              <ChartCard data={data} Name={"Pending"} Price={"SAR2,00.00"} onPress={() => this.props.navigation.navigate('Complete')} />
            </ScrollView>
          </View>

          <View style={styles.SummaryView}>
            <Text style={{ fontSize: 18, fontWeight: "200" }}>
              {i18n.translate("Weekly Tips")}
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

export default Wallet;
