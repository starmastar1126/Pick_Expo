import React from 'react'
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native'
import SimpleCard from '../components/SimpleCard';
import { Entypo, AntDesign, Feather } from "@expo/vector-icons";

/**
* @author
* @function CarListing
**/

const Data = [
  {
    id: '1',
    name: 'Audi',
    image: require('../assets/ferrari.jpeg'),
    status: '1',
    per_Day_charge: 135
  },
  {
    id: '2',
    name: 'Mercedes Benz',
    image: require('../assets/ferrari.jpeg'),
    status: '2',
    per_Day_charge: 99
  },
  {
    id: '3',
    name: 'Phantom',
    image: require('../assets/ferrari.jpeg'),
    status: '1',
    per_Day_charge: 52
  },
  {
    id: '4',
    name: 'Ford 360',
    image: require('../assets/ferrari.jpeg'),
    status: '2',
    per_Day_charge: 35
  },
  {
    id: '5',
    name: 'Audi A6',
    image: require('../assets/ferrari.jpeg'),
    status: '1',
    per_Day_charge: 65
  },
  {
    id: '6',
    name: 'BMW i5',
    image: require('../assets/ferrari.jpeg'),
    status: '1',
    per_Day_charge: 200
  },
  {
    id: '7',
    name: 'Toyota Corlla',
    image: require('../assets/ferrari.jpeg'),
    status: '2',
    per_Day_charge: 44
  },
  {
    id: '8',
    name: 'Honda City',
    image: require('../assets/ferrari.jpeg'),
    status: '1',
    per_Day_charge: 12
  },
  {
    id: '9',
    name: 'Suzuki Meharan',
    image: require('../assets/ferrari.jpeg'),
    status: '2',
    per_Day_charge: 5
  },
  {
    id: '10',
    name: 'Tata Vindra',
    image: require('../assets/ferrari.jpeg'),
    status: '1',
    per_Day_charge: 5
  },

];



const CarListing = ({ navigation }) => {

  return (
    <View style={styles.container}>


      <Header navigation={navigation} />

      <SimpleCard Data={Data} />

    </View>
  );

}

const Header = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>

      <View style={styles.TopHeader}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <AntDesign name="left" size={20} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Feather name="edit-3" size={20} />
        </TouchableOpacity>
      </View>


      <View style={styles.SearchContainer}>

        <View style={styles.SearchBoxRow}>
          <TextInput
            style={styles.searchBox}
            placeholder="Search for Car's" />
          <Feather name="search" size={20} style={styles.icon} />
        </View>

        <View style={styles.AddBtnContainer}>
          <TouchableOpacity style={styles.AddNewBtn}>
            <Text style={styles.AddNewtxt} > Add New</Text>
          </TouchableOpacity>
        </View>


      </View>

      {/* <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.AddNewBtn}>
          <Text style={styles.AddNewtxt} > Recent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.AddNewBtn}>
          <Text style={styles.AddNewtxt} > all</Text>
        </TouchableOpacity>
      </View> */}




    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

  },
  headerContainer: {
    backgroundColor: 'white',
    marginVertical: 20,
    marginHorizontal: 10,
    height: 90,

  },
  searchBox: {
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: 'white'
  },
  TopHeader: {
    marginVertical: 10,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  SearchContainer:
  {
    flexDirection: 'row',
  },
  SearchBoxRow: {
    justifyContent: 'space-between',
    flex: 3,
    elevation: 3,
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 15,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  icon: {
    paddingRight: 5
  },
  AddBtnContainer: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'center'
  },
  AddNewBtn: {
    padding: 15,
    backgroundColor: '#0077ff',
    borderRadius: 15
  },
  AddNewtxt: {
    color: 'white'
  },
  RecentAndAllBtns: {
    padding: 5,
    backgroundColor: '#0077ff',
    borderRadius: 20,
    marginRight: 2
  }

})
export default CarListing