import React from 'react';
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

class VehicleDone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Container>
                <View style={{ alignItems: 'center' }}>
                    <Image style={{ width: wp('100%') }} source={images.congratulation} resizeMode='contain' />
                </View>
                <Content>
                    <StatusBar hidden />
                    <View style={styles.main}>
                        <Text style={{ textAlign: 'center', fontSize: 40, fontWeight: '500', marginTop: 30 }}> {i18n.translate('Congratulation')} </Text>
                        <Text style={{ textAlign: 'center', fontSize: 12, fontWeight: '500', marginTop: 10 }}>
                        {i18n.translate('You have successfull added you car')}</Text>
                        <Text style={{ textAlign: 'center', fontSize: 12, color: colors.GREY.SECONDARY, marginTop: 10 }}>
                        {i18n.translate('Share with your friends and family to get more orders')}</Text>
                        <View style={{flexDirection: 'row', marginTop: 20}}>
                            <Icon name='facebook' type='fontisto' color={colors.BLUE.TAB} size={18} onPress={() => alert("Facebook")}/>
                            <Icon name='instagram' type='antdesign' color={colors.RED.DEFAULT} size={20} style={{marginLeft: 10, marginRight: 10}} onPress={() => alert("Instagram")}/>
                            <Icon name='whatsapp' type='font-awesome' color={colors.GREEN.DEFAULT} size={20} onPress={() => alert("Whatsapp")}/>
                        </View>
                        <TouchableOpacity style={styles.viewButton} onPress={() => this.props.navigation.navigate('VehicleProfile')}>
                            <Text style={{ color: colors.WHITE }}>{i18n.translate('View Profile')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.viewButton, { marginTop: 10, backgroundColor: colors.BLACK}]} onPress={() => this.props.navigation.navigate('VehicleProfile')}>
                            <Text style={{ color: colors.WHITE }}>{i18n.translate('Add More')}</Text>
                        </TouchableOpacity>

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
        marginTop: 50,
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

export default VehicleDone;