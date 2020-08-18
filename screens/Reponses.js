import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Thumbnail, Button } from "native-base";
import ResponseComments from "../components/ResponseComments";
export class Reponses extends Component {
  render() {
    return (
      <View style={styles.cont}>
        <View style={styles.guest}>
          <Text style={styles.txthead}>Guest Responses</Text>
        </View>
        <View>
          <ResponseComments
            Name="Ahsan"
            Msg="Umar is so nice and patient. He keep his car clean and is very
              humble recommended"
          />
          <ResponseComments
            Name="Ahsan"
            Msg="Umar is so nice and patient. He keep his car clean and is very
              humble recommended"
          />
          <ResponseComments
            Name="Ahsan"
            Msg="Umar is so nice and patient. He keep his car clean and is very
              humble recommended"
          />
        </View>

        <Button transparent style={{ justifyContent: "center" }}>
          <Text style={{ color: "#4883f0", fontWeight: "500" }}>
            View all(100)
          </Text>
        </Button>

        <View style={[styles.guest, { marginTop: 10 }]}>
          <Text style={styles.txthead}>Host Responses</Text>
        </View>
        <View>
          <ResponseComments
            Name="Ahsan"
            Msg="Umar is so nice and patient. He keep his car clean and is very
              humble recommended"
          />
          <ResponseComments
            Name="Ahsan"
            Msg="Umar is so nice and patient. He keep his car clean and is very
              humble recommended"
          />
        </View>

        <Button transparent style={{ justifyContent: "center" }}>
          <Text style={{ color: "#4883f0", fontWeight: "500" }}>
            View all(6)
          </Text>
        </Button>
      </View>
    );
  }
}

export default Reponses;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },

  guest: {
    marginTop: 80,
    marginLeft: 20,
    marginBottom: 10,
  },
  txthead: {
    fontWeight: "300",
    fontSize: 13,
  },
  DriverDetailsSection: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    marginHorizontal: 1,
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 3,
    height: 70,
    marginHorizontal: 13,
  },
});
