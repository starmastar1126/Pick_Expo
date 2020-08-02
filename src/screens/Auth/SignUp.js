import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

export class SignUpScreen extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      pass: "",
      phone: "",
      image: null,
    };
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  uploadData = () => {
    const { name, email, pass, phone, image } = this.state;
    let base_url = "";
    let uploadData = new FormData();
    uploadData.append("Submit", "ok");
    uploadData.append("Name", name);
    uploadData.append("Email", email);
    uploadData.append("Password", pass);
    uploadData.append("Phone", phone);
    uploadData.append("File", {
      type: "image/jpg",
      uri: image,
      name: "uploadimage.jpg",
    });
    //   fetch(base_url,{
    //       method:"POST",
    //       headers:{
    //           "accept":"application/json",
    //           "content-type":"application/json"
    //       },
    //       body:uploadData
    //   })
    console.log(uploadData);
  };
  render() {
    Imageview = () => {
      const { image } = this.state;
      if (!image) {
        return (
          <View style={styles.img}>
            <Image
              source={require("@assets/images/person.png")}
              style={{ opacity: 0.5 }}
            />
            <TouchableOpacity
              style={{ position: "absolute" }}
              onPress={this._pickImage}
            >
              <AntDesign name="plus" size={50} color="white" />
            </TouchableOpacity>
          </View>
        );
      }

      return (
        <View style={styles.img}>
          <Image
            source={{ uri: image }}
            style={{ opacity: 0.5, width: 120, height: 120, borderRadius: 60 }}
          />
          <TouchableOpacity
            style={{ position: "absolute" }}
            onPress={this._pickImage}
          >
            <AntDesign name="plus" size={50} color="white" />
          </TouchableOpacity>
        </View>
      );
    };
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("@assets/images/pickLogo.jpeg")}
            style={styles.pickLogo}
            resizeMode="contain"
          />
        </View>

        {Imageview()}

        <View style={styles.formContainer}>
          <TextInput
            keyboardType="ascii-capable"
            placeholder="Name"
            style={styles.txtInput}
            placeholderTextColor="white"
          />
          <TextInput
            keyboardType="email-address"
            placeholder="Email Address"
            style={styles.txtInput}
            placeholderTextColor="white"
          />
          <TextInput
            keyboardType="visible-password"
            placeholder="Password"
            style={styles.txtInput}
            placeholderTextColor="white"
            secureTextEntry={true}
          />
          <TextInput
            keyboardType="phone-pad"
            placeholder="Phone number"
            style={styles.txtInput}
            placeholderTextColor="white"
          />
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => this.uploadData()}
          >
            <Text style={styles.loginBtnTxt}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.PickImgContainer}>
          <TouchableOpacity
            style={styles.SignUpBtn}
            onPress={() => {
              this.props.navigation.navigate("SignIn");
            }}
          >
            <Text style={styles.SignUpBtnTxt}>Already a member? Log In</Text>
          </TouchableOpacity>
          <Image
            source={require("@assets/images/pickCarImg.jpeg")}
            style={styles.carImg}
            resizeMode="cover"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  logoContainer: {
    flex: 0.5,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  formContainer: {
    flex: 3,
    borderWidth: 1,
    marginHorizontal: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  PickImgContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  carImg: {
    height: "100%",
    width: "100%",
  },
  pickLogo: {
    height: 70,
    width: 70,
  },
  txtInput: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
    width: "100%",
    height: 50,
    textAlign: "center",
    fontSize: 15,
    marginVertical: 5,
    color: "white",
  },
  loginBtn: {
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    width: "100%",
    height: 50,
    marginVertical: 5,
  },
  loginBtnTxt: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  soicalMediaBtnView: {
    borderWidth: 1,
    borderColor: "white",
    width: "100%",
    height: 50,
    borderRadius: 20,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  soicalMediaBtnTxt: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    marginLeft: 20,
  },
  SignUpBtn: {
    justifyContent: "center",
    alignItems: "center",
  },
  SignUpBtnTxt: {
    color: "white",
    fontSize: 12,
  },
  googleLogo: {
    marginRight: 10,
    marginLeft: 10,
  },
  fbLogo: {
    marginLeft: 30,
    marginRight: 5,
  },
  contTXt: {
    color: "white",
    fontSize: 12,
    marginVertical: 20,
  },
  img: {
    borderWidth: 1,
    borderColor: "white",
    height: 120,
    width: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignUpScreen;
