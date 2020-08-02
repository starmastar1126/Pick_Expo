import React from 'react';
import { StatusBar, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Container } from "native-base";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import { connect } from "react-redux";
import { Loading } from '@components';
import { isEmpty } from '@constants/functions';
import configs from '@constants/configs';
import { themes, colors } from '@constants/themes';
import { images, icons } from '@constants/assets';
import axios, { setClientToken } from '@utils/axios';
import i18n from '@utils/i18n';

class DriveNext extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Container>
                <StatusBar hidden />
                <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
                    <Icon name='arrow-back' type='material' color={colors.BLACK} size={25} />
                </TouchableOpacity>
                <Image style={{ marginTop: -hp('40%'), width: wp('100%'), height: hp('100%') }} source={images.lock_car} />
                <View style={{ position: 'absolute', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '100%', bottom: 100 }}>
                    <TouchableOpacity style={styles.lockButton}>
                        <Icon name='lock' type='material-community' color={colors.BLACK} size={15} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.powerButton} onPress={() => this.props.navigation.navigate('DriveDetail')}>
                        <Icon name='power-standby' type='material-community' color={colors.BLUE.TAB} size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.unlockButton}>
                        <Icon name='lock' type='material-community' color={colors.RED.DEFAULT} size={15} />
                    </TouchableOpacity>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    back: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
        width: 50,
        height: 50,
        zIndex: 1000
    },
    main: {
        alignItems: 'center',
        width: wp('100.0%'),
        // paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20
    },
    lockButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: colors.BLACK,
        backgroundColor: colors.WHITE,
        shadowColor: colors.BLACK,
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5
    },
    powerButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: colors.BLUE.TAB,
        backgroundColor: colors.WHITE,
        shadowColor: colors.BLACK,
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5
    },
    unlockButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: colors.RED.DEFAULT,
        backgroundColor: colors.WHITE,
        shadowColor: colors.BLACK,
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5
    },
});

export default DriveNext;