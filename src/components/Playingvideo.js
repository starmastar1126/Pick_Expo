import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Video } from "expo-av";
const Width = Dimensions.get("screen").width;
import { AntDesign } from "@expo/vector-icons";

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

export default Playingvideo;

const styles = StyleSheet.create({
  video: {
    width: Width - 20,
    height: 200,
    paddingBottom: 10,
    borderRadius: 25,
  },
});
