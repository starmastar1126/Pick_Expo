import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Dimensions,
  TextInput,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
const WIDTH = Dimensions.get("screen").width;

const TimeModel = ({
  visible,
  Notvisible,
  datestart,
  timetxt,
  routeScreen,
}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Timing Details</Text>
            <Text style={styles.modalText}>{datestart}</Text>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                marginLeft: 32,
              }}
            >
              <Text style={{ marginTop: 3 }}>Start Timing</Text>
              <TextInput placeholder="24/hour-format" onChangeText={timetxt} />
            </View>
            <TouchableHighlight
              style={{
                ...styles.openButton,
                backgroundColor: "#2196F3",
                position: "absolute",
                bottom: 5,
                alignSelf: "center",
              }}
              onPress={routeScreen}
            >
              <Text style={styles.textStyle}>Proceed</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 200,
    width: WIDTH - 100,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default TimeModel;
