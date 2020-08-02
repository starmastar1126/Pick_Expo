import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons, EvilIcons } from "@expo/vector-icons";
import { Header, Left, Right, Button } from "native-base";
import {Icon} from 'react-native-elements';

import { themes, colors } from '@constants/themes';

const Heading = ({onMessage, onProfile}) => {
  return (
    <Header transparent>
      <Left />
      <Right>
        <Button transparent onPress={onMessage}>
          <Icon type='zocial' name='email' size={23} color={colors.BLUE.TAB}/>
        </Button>
        <Button transparent onPress={onProfile}>
          <Icon type='material-community' name='account-circle' size={23} color={colors.BLUE.TAB} />
        </Button>
      </Right>
    </Header>
  );
};

export default Heading;
