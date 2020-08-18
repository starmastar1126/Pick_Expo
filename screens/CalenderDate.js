import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { Button } from "native-base";
import {
  Ionicons,
  MaterialCommunityIcons,
  EvilIcons,
} from "@expo/vector-icons";
export default class CalenderDate extends Component {
  constructor() {
    super();
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date, type) {
    if (type === "END_DATE") {
      this.setState({
        selectedEndDate: date,
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: date,
      });
    }
  }

  render() {
    const { selectedStartDate, selectedEndDate } = this.state;
    const minDate = new Date(2018, 1, 1); // Min date
    const maxDate = new Date(2050, 6, 3); // Max date
    const startDate = selectedStartDate ? selectedStartDate.toString() : ""; //Start date
    const endDate = selectedEndDate ? selectedEndDate.toString() : ""; //End date
    const start = startDate.split(" ");
    const end = endDate.split(" ");
    const starting_date = start[2] + " " + start[1] + " " + start[3];
    const ending_date = end[2] + " " + end[1] + " " + end[3];

    return (
      <View style={styles.container}>
        <View>
          <Ionicons
            name="ios-arrow-round-back"
            size={30}
            style={styles.backbtn}
          />
        </View>
        <View style={styles.titlehead}>
          <Text style={styles.titletxt}>Choose Date</Text>
        </View>
        <View style={styles.searchSection}>
          <Text>
            From{"\n"}
            {starting_date}
          </Text>
          <Text>|</Text>
          <Text>
            To{"\n"}
            {ending_date}
          </Text>
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
            minDate={minDate}
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
          <Button rounded style={{ width: "50%", justifyContent: "center" }}>
            <Text style={styles.btntxt}>Choose</Text>
          </Button>
        </View>
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
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 0,
    height: 100,
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
