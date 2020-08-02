import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { Button } from "native-base";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { Loading, TimeModel } from "@components";
import { isEmpty } from "@constants/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";
import DateTimePicker from "@react-native-community/datetimepicker";
import Moment from "moment";

function getMonthFromString(mon) {
  return new Date(Date.parse(mon + " 1, 2012")).getMonth() + 1;
}
class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
      selectedStartTime: null,
      selectedEndTime: null,
      timeModal: false,
      time: new Date().getTime(),
      showTimePickerStart: false,
      showTimePickerEnd: false,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date, type) {
    if (type === "END_DATE") {
      this.setState({
        selectedEndDate: date,
        showTimePickerEnd: true,
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,
        showTimePickerStart: true,
      });
    }
  }

  renderHeading() {
    return (
      <View style={{ flexDirection: "row", width: wp("100.0%"), height: 50 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-start",
            width: 80,
            padding: 10,
          }}
        >
          <Icon
            name="keyboard-backspace"
            type="material"
            size={24}
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        <View
          style={{
            width: wp("100.0%") - 160,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "300", marginTop: 5 }}>
            Choose Date
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-end",
            width: 80,
            padding: 10,
          }}
        ></View>
      </View>
    );
  }

  render() {
    const { selectedStartDate, selectedEndDate } = this.state;
    const maxDate = new Date(2050, 6, 3); // Max date
    const startDate = selectedStartDate ? selectedStartDate.toString() : ""; //Start date
    const endDate = selectedEndDate ? selectedEndDate.toString() : ""; //End date
    const start = startDate.split(" ");
    const end = endDate.split(" ");
    const starting_date = start[2] + " " + start[1] + " " + start[3];
    const ending_date = end[2] + " " + end[1] + " " + end[3];
    const startDateTosend =
      start[3] + "-0" + getMonthFromString(start[1]) + "-" + start[2];
    const endDateTosend =
      end[3] + "-0" + getMonthFromString(end[1]) + "-" + end[2];

    return (
      <View style={styles.container}>
        <View style={styles.searchSection}>
          {this.renderHeading()}
          <View
            style={{
              width: wp("100.0"),
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 60,
            }}
          >
            <View style={{ width: wp("35.0%") }}>
              <Text>
                From{"\n"}
                {start[2] === undefined ? "  " : starting_date}
              </Text>
              <Text>
                {this.state.selectedStartTime
                  ? this.state.selectedStartTime
                  : "  "}
              </Text>
            </View>
            <View
              style={{
                width: 1,
                height: 30,
                backgroundColor: colors.BLACK,
                marginLeft: 30,
                marginRight: 30,
              }}
            />
            <View style={{ width: wp("35.0%") }}>
              <Text>
                To{"\n"}
                {end[2] === undefined ? "  " : ending_date}
              </Text>
              <Text>
                {this.state.selectedEndTime ? this.state.selectedEndTime : "  "}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <CalendarPicker
            startFromMonday={true}
            allowRangeSelection={true}
            previousTitle="<"
            nextTitle=">"
            selectedDayColor="#d5dce8"
            monthYearHeaderWrapperStyle={styles.head}
            selectedDayTextColor="white"
            textStyle={{
              color: "#000000",
            }}
            minDate={Moment().startOf("day")}
            maxDate={maxDate}
            weekdays={["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]}
            months={[
              "January",
              "Febraury",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ]}
            onDateChange={this.onDateChange}
            selectedRangeStartStyle={styles.range}
            selectedRangeEndStyle={styles.range}
          />
        </View>
        <View style={styles.btn}>
          <Button
            rounded
            style={{ width: "50%", justifyContent: "center" }}
            onPress={() => {
              if (
                !this.state.selectedStartDate ||
                !this.state.selectedStartTime
              ) {
                alert("Please Select Start Date and Time!");
                return;
              }
              if (!this.state.selectedEndDate || !this.state.selectedEndTime) {
                alert("Please Select End Date and Time!");
                return;
              }

              this.props.navigation.navigate("Car", {
                startDate: !isEmpty(startDateTosend)
                  ? startDateTosend
                  : new Date(),
                startTime: this.state.selectedStartTime,
                endDate: !isEmpty(endDateTosend) ? endDateTosend : new Date(),
                endTime: this.state.selectedEndTime,
                coordinates: {
                  latitude: this.props.route.params.coordinates.latitude,
                  longitude: this.props.route.params.coordinates.longitude,
                },
              });
            }}
          >
            <Text style={styles.btntxt}>Choose</Text>
          </Button>
        </View>

        {this.state.showTimePickerStart ? (
          <DateTimePicker
            value={this.state.time}
            testID="dateTimePicker"
            mode={"time"}
            is24Hour={true}
            display="default"
            onChange={(time) =>
              this.setState({
                selectedStartTime: Moment(time.nativeEvent.timestamp).format(
                  "hh:mm"
                ),
                showTimePickerStart: false,
              })
            }
          />
        ) : this.state.showTimePickerEnd ? (
          <DateTimePicker
            value={this.state.time}
            testID="dateTimePicker"
            mode={"time"}
            is24Hour={true}
            display="default"
            onChange={(time) =>
              this.setState({
                selectedEndTime: Moment(time.nativeEvent.timestamp).format(
                  "hh:mm"
                ),
                showTimePickerEnd: false,
              })
            }
          />
        ) : null}

        {/* <TimeModel
          visible={this.state.timeModal}
          datestart={starting_date}
          timetxt={(txt) => this.setState({ time: txt })}
          dateend={ending_date}
          routeScreen={() => {
            if (!this.state.time) {
              alert("Please Select Time!");
              return;
            }
            this.setState({ timeModal: false });
            this.props.navigation.navigate("Car", {
              startDate: !isEmpty(starting_date) ? starting_date : new Date(),
              endDate: !isEmpty(ending_date) ? ending_date : new Date(),
            });
          }}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  range: {
    backgroundColor: "#3b73e3",
  },
  backbtn: {
    marginLeft: 12,
    marginTop: 22,
  },
  titlehead: {
    justifyContent: "center",
    alignItems: "center",
    height: 70,
  },
  titletxt: {
    fontSize: 25,
    fontWeight: "300",
  },
  searchSection: {
    // alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 0,
    height: 180,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  btn: {
    marginTop: 10,
    alignItems: "center",
  },
  btntxt: {
    color: "white",
    fontSize: 20,
    fontWeight: "300",
  },
});

export default Calendar;
