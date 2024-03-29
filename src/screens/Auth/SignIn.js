import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";

import * as firebase from "firebase";
import * as Facebook from "expo-facebook";
import * as AppleAuthentication from "expo-apple-authentication";
import * as Crypto from "expo-crypto";
import * as AppAuth from "expo-app-auth";
import * as GoogleSignIn from "expo-google-sign-in";

import { connect } from "react-redux";

const { URLSchemes } = AppAuth;

class SignIn extends Component {
  recaptchaVerifier = null;
  firebaseConfig = firebase.apps.length ? firebase.app().options : undefined;

  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: null,
      verificationId: null,
      verificationCode: null,
      email: "",
      password: "",
    };
  }
  async componentDidMount() {
    await GoogleSignIn.initAsync({
      clientId: "255238314976-l063tsikif1d8it445r56moobi45b5ae.apps.googleusercontent.com"
    });
  }

  async googleSignin() {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === "success") {
        this.props.navigation.navigate("App");
      }
    } catch ({ message }) {
      alert("login: Error:" + message);
    }
  }

  async FbLogin() {
    try {
      await Facebook.initializeAsync("273817440552455");
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
      });
      if (type === "success") {
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        firebase
          .auth()
          .signInWithCredential(credential)
          .then((user) => {
            if (user) {
              if (user.additionalUserInfo.isNewUser == true) {
                var data = user.additionalUserInfo;
                data.profile.mobile = "";
                this.props.navigation.navigate("App");
              } else {
                this.props.navigation.navigate("App");
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        alert("facebook_login_error");
      }
    } catch ({ message }) {
      alert(`${message}`);
    }
  }

  async appleSigin() {
    const csrf = Math.random().toString(36).substring(2, 15);
    const nonce = Math.random().toString(36).substring(2, 10);
    const hashedNonce = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      nonce
    );
    try {
      const applelogincredentials = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
        state: csrf,
        nonce: hashedNonce,
      });
      const provider = new firebase.auth.OAuthProvider("apple.com");
      const credential = provider.credential({
        idToken: applelogincredentials.identityToken,
        rawNonce: nonce,
      });
      firebase
        .auth()
        .signInWithCredential(credential)
        .then((user) => {
          if (user) {
            if (user.additionalUserInfo.isNewUser == true) {
              var data = user.additionalUserInfo;
              this.props.navigation.navigate("App");
            } else {
              this.props.navigation.navigate("App");
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (e) {
      if (e.code === "ERR_CANCELED") {
        console.log("Cencelled");
      } else {
        console.log(e);
      }
    }
  }

  SignInReq = async () => {
    this.props.navigation.navigate("App");
    // const { email, password } = this.state;
    // await fetch("https://6cbd535.online-server.cloud/api/Auth/Login", {
    //   method: "POST",
    //   headers: {
    //     accept: "application/json",
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     userName: email,
    //     password: password,
    //     deviceType: Platform.OS,
    //   }),
    // })
    //   .then((result) => result.json())
    //   .then((response) => {
    //     if (!response.StatusCode) {
    //       this.props.setUser(response);
    //       this.props.navigation.navigate("Main");
    //     } else {
    //       alert(response.Message);
    //     }
    //   })
    //   .catch((e) => console.log(e));
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.logoContainer}>
          <Image
            source={require("@assets/images/pickLogo.jpeg")}
            style={styles.pickLogo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.formContainer}>
          <TextInput
            keyboardType="email-address"
            placeholder="Email"
            style={styles.txtInput}
            placeholderTextColor="white"
            onChangeText={(txt) => this.setState({ email: txt })}
          />
          <TextInput
            keyboardType="visible-password"
            placeholder="Password"
            style={styles.txtInput}
            placeholderTextColor="white"
            onChangeText={(txt) => this.setState({ password: txt })}
          />
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => this.SignInReq()}
          >
            <Text style={styles.loginBtnTxt}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.contTXt}>Or Continue with</Text>
          <TouchableOpacity
            style={styles.soicalMediaBtnView}
            onPress={() => this.appleSigin()}
          >
            <Entypo name="app-store" color="white" size={20} />
            <Text style={styles.soicalMediaBtnTxt}>Continue with apple</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.soicalMediaBtnView}
            onPress={() => this.googleSignin()}
          >
            <Image source={require("@assets/images/google.png")} />
            <Text style={{ ...styles.soicalMediaBtnTxt, marginLeft: 10 }}>
              Continue with google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.soicalMediaBtnView}
            onPress={() => this.FbLogin()}
          >
            <FontAwesome
              name="facebook"
              color="blue"
              size={20}
              style={styles.fbLogo}
            />
            <Text style={styles.soicalMediaBtnTxt}>Continue with facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.PickImgContainer}>
          <TouchableOpacity
            style={styles.SignUpBtn}
            onPress={() => {
              this.props.navigation.navigate("SignUp");
            }}
          >
            <Text style={styles.SignUpBtnTxt}>Not a member_Sign Up</Text>
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
});

const mapDispatchToProps = dispatch => {
  return {
    setUser: (data) => {
      dispatch(setUser(data))
    }
  }
}

export default connect(undefined, mapDispatchToProps)(SignIn);
