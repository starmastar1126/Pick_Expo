import React, { Component } from "react";
import {
  AsyncStorage,
  StyleSheet,
  View,
  Image,
} from "react-native";

import { connect } from 'react-redux';
import { setUser, setDeviceToken } from '@modules/account/actions';
import axios, { setClientToken } from '@utils/axios';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  async componentDidMount() {
    // AsyncStorage.removeItem('logged');
    // AsyncStorage.removeItem('user_info');
    setTimeout(() => {
      AsyncStorage.getItem('logged').then((logged) => {
        if (logged === 'true') {
          AsyncStorage.getItem('user_info').then((user_info) => {
            this.props.setUser(JSON.parse(user_info));
            AsyncStorage.getItem('token').then((token) => {
              setClientToken(token);
              this.props.navigation.navigate('App');
            })
          });
        } else {
          this.props.navigation.navigate('Auth');
        }
      });
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container} >
        <Image source={require("@assets/images/Splash-Gif.gif")} style={styles.backgroundImage} />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignSelf: "center",
  },
});

const mapDispatchToProps = dispatch => {
  return {
    setDeviceToken: (data) => {
      dispatch(setDeviceToken(data))
    },
    setUser: (data) => {
      dispatch(setUser(data))
    },
  }
}
export default connect(undefined, mapDispatchToProps)(Splash)
