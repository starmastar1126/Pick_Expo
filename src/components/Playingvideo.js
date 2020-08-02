import React, { useState } from "react";
import { View, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { Video } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
const Width = Dimensions.get("screen").width;

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import { connect } from "react-redux";
import { signOut } from "@modules/account/actions";
import configs from '@constants/configs';
import { themes, colors } from '@constants/themes';
import { images, icons } from '@constants/assets';
import axios, { removeClientToken } from '@utils/axios';
import i18n from '@utils/i18n';

const Playingvideo = () => {
  const [play, setplay] = useState(false);
  const [opacity, setopacity] = useState(0);

  onvideoclick = () => {
    setopacity(!opacity);
    setplay(!play);
  };
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", height: 210 }}
    >
      <TouchableOpacity
        style={{
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 100,
          opacity,
        }}
        onPress={() => onvideoclick()}
      >
        <AntDesign name="playcircleo" size={100} color="white" />
      </TouchableOpacity>
      <Video
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={play}
        isLooping
        style={styles.video}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: Width - 20,
    height: 200,
    paddingBottom: 10,
    borderRadius: 25,
  },
});

export default Playingvideo;