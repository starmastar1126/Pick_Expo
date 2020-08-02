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

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { Loading } from "@components";
import { isEmpty } from "@constants/functions";
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

class SignUpScreen extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      pass: "",
      phone: "",
      image: null,
      loading: false,
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
        this.uploadImage();
      }
    } catch (E) {
      console.log(E);
    }
  };

  uploadImage = async () => {
    let UploadData = new FormData();
    UploadData.append("file", {
      uri: this.state.image,
      type: "image/jpg",
      name: this.state.filename || `filename1.jpg`,
    });
    UploadData.append("folder", "vehicles");

    await fetch("https://6cbd535.online-server.cloud/api/Shared/upload", {
      method: "post",
      headers: {
        Accept: "application/x-www-form-urlencoded",
      },
      body: UploadData,
    })
      .then((results) => results.text())
      .then((response) => this.setState({ imagepath: response }))
      .then(() => console.log("Image Path: ", this.state.imagepath))
      .catch((e) => console.log("err: ", e));
  };

  uploadData = async () => {
    const { name, email, pass, phone, image } = this.state;

    if (!name) {
      alert("Please enter name!");
      return;
    }
    if (!email) {
      alert("Please enter email!");
      return;
    }
    if (!pass) {
      alert("Please enter password!");
      return;
    }
    if (!phone) {
      alert("Please enter phone number!");
      return;
    }

    this.setState({ loading: true });

    // let userData = {
    //   id: 0,
    //   firstName: name,
    //   middleName: "string",
    //   lastName: "string",
    //   contactNumber: phone,
    //   countryCode: "string",
    //   email: email,
    //   password: pass,
    //   roleId: 0,
    //   profilePicture: image ? image : "",
    //   drivingLicense: "string",
    //   issueCountry: "string",
    //   drivingLicenseFirstName: "string",
    //   drivingLicenseMiddleName: "string",
    //   drivingLicenseLastName: "string",
    //   drivingLicenseImage: "string",
    //   drivingLicenseExpiryDate: "2020-07-15T08:30:52.669Z",
    //   deviceType: Platform.OS,
    //   deviceToken: "string",
    //   loginType: "string",
    //   socialId: "string",
    //   otpNumber: 0,
    // };

    await axios
      .post("User", {
        id: 0,
        firstName: name,
        middleName: "",
        lastName: "",
        contactNumber: phone,
        countryCode: "",
        email: email,
        password: pass,
        roleId: 0,
        profilePicture: image ? image : "",
        drivingLicense: "",
        issueCountry: "",
        drivingLicenseFirstName: "",
        drivingLicenseMiddleName: "",
        drivingLicenseLastName: "",
        drivingLicenseImage: "",
        drivingLicenseExpiryDate: "",
        deviceType: Platform.OS,
        deviceToken: "",
        loginType: "",
        socialId: "",
        otpNumber: 0,
      })
      .then((res) => {
        if (res.status == 200) {
          this.setState({ loading: false });
          alert("SignUp Successfull");
          this.setState({
            name: "",
            email: "",
            pass: "",
            phone: "",
            image: null,
          });
        } else {
          this.setState({ loading: false });
          alert("SignUp Fail");
          this.setState({
            name: "",
            email: "",
            pass: "",
            phone: "",
            image: null,
          });
        }
      })
      .catch((error) => {
        this.setState({ loading: false });
        console.log(error.message);
        this.setState({
          name: "",
          email: "",
          pass: "",
          phone: "",
          image: null,
        });
      });
  };

  render() {
    const { name, email, pass, phone } = this.state;
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
            value={name}
            onChangeText={(value) => this.setState({ name: value })}
          />
          <TextInput
            keyboardType="email-address"
            placeholder="Email Address"
            style={styles.txtInput}
            placeholderTextColor="white"
            value={email}
            onChangeText={(value) => this.setState({ email: value })}
          />
          <TextInput
            keyboardType="visible-password"
            placeholder="Password"
            style={styles.txtInput}
            placeholderTextColor="white"
            secureTextEntry={true}
            value={pass}
            onChangeText={(value) => this.setState({ pass: value })}
          />
          <TextInput
            keyboardType="phone-pad"
            placeholder="Phone number"
            style={styles.txtInput}
            placeholderTextColor="white"
            value={phone}
            onChangeText={(value) => this.setState({ phone: value })}
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
        <Loading loading={this.state.loading} />
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
