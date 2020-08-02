import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
} from "react-native";

/**
 * @author
 * @function SimpleCard
 **/

const SimpleCard = ({ Data, navigation }) => {
  const [PROPS_DATA, setPROPS_DATA] = React.useState(Data);

  const Item = ({ id, image, status, per_Day_charge, name }) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.imgContainer}>
          <Image source={image} style={styles.img} resizeMode="cover" />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.Details}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.per_Day_charge_txt}>
              SAR{per_Day_charge}/day
            </Text>
          </View>

          {status == "1" ? (
            <Text style={styles.statusTxt}>verifyed</Text>
          ) : (
            <Text style={{ ...styles.statusTxt, color: "red" }}>un verify</Text>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.flatlistContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {PROPS_DATA.map((item) => (
              <Item
                key={item.id}
                name={item.name}
                id={item.id}
                status={item.status}
                per_Day_charge={item.per_Day_charge}
                image={item.image}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  flatlistContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: "white",
  },
  cardContainer: {
    width: Dimensions.get("window").width / 2 - 20,
    borderRadius: 15,
    height: Dimensions.get("window").width / 2.5,
    elevation: 3,
    margin: 5,
    backgroundColor: "white",
  },
  imgContainer: {
    flex: 2,
  },
  img: {
    borderTopLeftRadius: 15,
    width: "100%",
    height: "100%",
    borderTopRightRadius: 15,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    // alignItems:'ce'
  },
  Details: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
  nameTxt: {
    fontSize: 15,
    fontWeight: "bold",
  },
  per_Day_charge_txt: {
    fontSize: 12,
  },
  statusTxt: {
    fontSize: 12,
    color: "#0077ff",
    marginHorizontal: 5,
  },
});
export default SimpleCard;
