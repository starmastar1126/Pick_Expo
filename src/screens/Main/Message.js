import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Thumbnail, Container } from "native-base";
import { GiftedChat } from 'react-native-gifted-chat';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import { connect } from "react-redux";
import { Loading } from '@components';
import configs from '@constants/configs';
import { themes, colors } from '@constants/themes';
import { images, icons } from '@constants/assets';
import axios, { setClientToken } from '@utils/axios';
import i18n from '@utils/i18n';

class Message extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      messages: [{
        _id: 1,
        text: 'This is a system message',
        createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
        system: true,
        // Any additional custom parameters are passed through
      }, {
        _id: 1,
        text: 'My message',
        createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://facebook.github.io/react/img/logo_og.png',
        },
        image: 'https://facebook.github.io/react/img/logo_og.png',
        // You can also add a video prop:
        video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        // Mark the message as sent, using one tick
        sent: true,
        // Mark the message as received, using two tick
        received: true,
        // Mark the message as pending with a clock loader
        pending: true,
        // Any additional custom parameters are passed through
      }, {
        _id: 1,
        text: 'This is a quick reply. Do you love Gifted Chat? (radio) KEEP IT',
        createdAt: new Date(),
        quickReplies: {
          type: 'radio', // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: '😋 Yes',
              value: 'yes',
            },
            {
              title: '📷 Yes, let me show you with a picture!',
              value: 'yes_picture',
            },
            {
              title: '😞 Nope. What?',
              value: 'no',
            },
          ],
        },
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
      {
        _id: 2,
        text: 'This is a quick reply. Do you love Gifted Chat? (checkbox)',
        createdAt: new Date(),
        quickReplies: {
          type: 'checkbox', // or 'radio',
          values: [
            {
              title: 'Yes',
              value: 'yes',
            },
            {
              title: 'Yes, let me show you with a picture!',
              value: 'yes_picture',
            },
            {
              title: 'Nope. What?',
              value: 'no',
            },
          ],
        },
        user: {
          _id: 2,
          name: 'React Native',
        },
      }]
    };
  }
  renderHeading() {
    return (
      <View style={styles.header}>
        <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: 50, padding: 10 }}>
          <Icon name="keyboard-backspace" type="material" size={24} onPress={() => this.props.navigation.goBack()} />
        </View>
        <View style={{ flexDirection: 'row', width: wp('100.0%') - 50, alignItems: 'center' }}>
          <Thumbnail source={require("@assets/images/60093.jpg")} />
          <View>
            <Text style={{ fontSize: 16, marginLeft: 10 }}>Syed Ahsan Ali</Text>
            <Text style={{ fontSize: 11, marginLeft: 11 }}>online</Text>
          </View>
        </View>
      </View>
    );
  };
  render() {
    return (
      <Container>
        {this.renderHeading()}
        <View style={{ width: '100%', alignItems: 'center', height: 10 }} />
        <GiftedChat messages={this.state.messages}
          user={{
            _id: 1,
            name: 'Umar Khan',
            avatar: images.person2,
          }} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: wp('100.0%'),
    height: 100,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 2.65,
    elevation: 3,

  },
  DriverDetailsSection: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    marginHorizontal: 1,
    shadowOpacity: 0.3,
    shadowRadius: 2.65,
    elevation: 3,
    height: 120,
  },
  convo1: {
    width: "70%",
    alignSelf: "flex-end",
    padding: 10,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderBottomStartRadius: 20,
    backgroundColor: "#1e83f7",
    marginTop: 12,
    marginRight: 10,
  },
  convo2: {
    width: "70%",
    padding: 10,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
    backgroundColor: "#e3e6e8",
    marginTop: 12,
    marginLeft: 10,
  },
});

export default Message;