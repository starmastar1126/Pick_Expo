import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Container, Content } from "native-base";

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

class Vehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderHeading() {
        return (
            <View style={{ flexDirection: 'row', width: wp('100.0%'), height: 50 }}>
                <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: 80, padding: 10 }}>
                    <Icon name="keyboard-backspace" type="material" size={24} onPress={() => this.props.navigation.goBack()} />
                </View>
                <View style={{ width: wp('100.0%') - 160, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: "400", marginTop: 5 }}>
                        {i18n.translate('Host Benefits')}
                    </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'flex-end', width: 80, padding: 10 }}>
                </View>
            </View>
        );
    };

    render() {
        return (
            <Container>
                {this.renderHeading()}
                <Content>
                    <StatusBar hidden />
                    <View style={styles.main}>
                        <View style={styles.panel}>
                            <Image style={{ marginTop: 70, width: 120, height: 120 }} source={images.host} />
                            <Text style={{ textAlign: 'center', fontSize: 12, marginTop: 30 }}>
                                {i18n.translate('Get extra bonus and lot more gifts')}{'\n'}
                                {i18n.translate('by keeping a five star performance')}.{'\n'}
                                {i18n.translate('Give satisfactory convenience to your')}{'\n'}
                                {i18n.translate('rider and get loyalty points')}.
                            </Text>
                            <TouchableOpacity style={styles.viewButton} onPress={() => this.props.navigation.navigate('VehicleDetail')}>
                                <Text style={{ color: colors.WHITE }}>{i18n.translate('Next')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Content>
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
    panel: {
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        width: wp('90%'),
        height: hp('70.0%'),
        borderRadius: 20,
        backgroundColor: colors.WHITE,
        shadowColor: colors.BLACK,
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5
    },
    viewButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        width: wp('60%'),
        padding: 10,
        borderRadius: 20,
        backgroundColor: colors.BLUE.TAB,
        shadowColor: colors.BLACK,
        shadowOffset: { height: 5, width: 5 },
        shadowOpacity: 0.35,
        shadowRadius: 5,
    },
    nextButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        width: wp('70.0%'),
        height: 40,
        borderRadius: 50,
        backgroundColor: colors.BLUE.TAB,
        shadowColor: colors.BLACK,
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5
    },
    image: {
        width: 100,
        height: 70,
        marginRight: 3
    },
    params: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: '100%'
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: wp('28.0%'),
        height: 60,
        padding: 10,
        borderRadius: 10,
        backgroundColor: colors.WHITE,
        shadowColor: colors.BLACK,
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5
    },
    params1: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        width: '100%'
    },
    item1: {
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('28.0%'),
        height: 80,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: colors.WHITE,
        shadowColor: colors.BLACK,
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5
    },
});

export default Vehicle;