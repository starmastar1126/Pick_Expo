import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
} from "react-native";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("Auth");
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
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

export default Splash;
