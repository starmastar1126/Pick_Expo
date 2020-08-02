import React from 'react';
import {
    StatusBar,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';
import { Container, Content, Item, Input } from "native-base";
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Foot } from '@components';
import configs from '@constants/configs';
import { themes, colors } from '@constants/themes';
import { images, icons } from '@constants/assets';
import API, { setClientToken } from '@services/API';
import i18n from '@services/i18n';

const data = [
    { step: 1, title: 'Requested a car on Sunday 22 Mar' },
    { step: 2, title: 'Request accepted on Sunday 22 Mar' },
    { step: 3, title: 'Car will be delivered on Monday 1 April' },
    { step: 4, title: 'On trip' },
    { step: 5, title: 'Return car on Saturday 8 April' }
];

class CreateBidScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'NewBids',
            step: 2
        };
    }

    render() {
        return (
            <Container>
                <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
                    <Icon name='arrow-back' type='material' color={colors.BLACK} size={25} />
                </TouchableOpacity>
                {this.renderTab()}
                <Content>
                    <StatusBar hidden />
                    <ScrollView contentContainerStyle={styles.main}>
                        {this.renderNewBids()}
                    </ScrollView>
                </Content>
                {this.renderButton()}
            </Container>
        );
    }
    renderTab() {
        const { tab } = this.state;
        return (
            <View style={styles.header}>
                <Text style={{ fontSize: 20, color: colors.BLACK }}>{i18n.translate('Create a Bid')}</Text>
            </View>
        );
    }
    renderNewBids() {
        const { step } = this.state;
        return (
            <View>
                <Text style={{ marginBottom: 20, fontWeight: 'bold' }}>{i18n.translate('Add Location')}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <View style={styles.dot} />
                        <View style={styles.line1} />
                        <View style={styles.dot} />
                    </View>
                    <View style={{ width: '100%' }}>
                        <View style={{ marginLeft: 20 }}>
                            <TextInput
                                style={{ width: '90%', height: 20, borderBottomWidth: 1, borderBottomColor: colors.GREY.SECONDARY }}
                                secureTextEntry={true}
                                placeholder={i18n.translate('From')}
                                placeholderTextColor={colors.GREY.SECONDARY}
                            />
                        </View>
                        <View style={{ marginLeft: 20, marginTop: 45 }}>
                            <TextInput
                                style={{ width: '90%', height: 20, borderBottomWidth: 1, borderBottomColor: colors.GREY.SECONDARY }}
                                secureTextEntry={true}
                                placeholder={i18n.translate('To')}
                                placeholderTextColor={colors.GREY.SECONDARY}
                            />
                        </View>
                    </View>
                </View>
                <Text style={{ marginTop: 20, fontWeight: 'bold' }}>Add Calendar</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, width: '100%' }}>
                    <View style={{ width: wp('30.0%'), justifyContent: 'center', paddingLeft: 10 }}>
                        <Text style={{ fontSize: 12, color: colors.BLUE.TAB }}>{i18n.translate('From')}</Text>
                        <Text style={{ fontSize: 12, color: colors.BLUE.TAB }}>22 Mar 2020</Text>
                    </View>
                    <View style={{ width: wp('30.0%'), justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name='arrowright' type='antdesign' color={colors.BLUE.TAB} size={18} />
                    </View>
                    <View style={{ width: wp('30.0%'), justifyContent: 'center', paddingLeft: 20 }}>
                        <Text style={{ fontSize: 12, color: colors.BLUE.TAB }}>{i18n.translate('To')}</Text>
                        <Text style={{ fontSize: 12, color: colors.BLUE.TAB }}>22 Mar 2020</Text>
                    </View>
                </View>
                <Text style={{ marginTop: 20, fontWeight: 'bold' }}>{i18n.translate('Add Bidding Amount')}</Text>
                        <View style={{ marginTop: 20, marginBottom: 20, width: '100%', height: 1, backgroundColor: colors.GREY.SECONDARY }} />
            </View>
        );
    }
    renderButton() {
        return (
            <View style={styles.booking}>
                <TouchableOpacity style={styles.bidButton}>
                    <Text style={{ fontSize: 11, color: colors.WHITE }}>{i18n.translate('Add Now')}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('100.0%'),
        height: 120,
        // paddingTop: 20,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: colors.WHITE,
        shadowColor: colors.BLACK,
        shadowOffset: { height: 5, width: 5 },
        shadowOpacity: 0.35,
        shadowRadius: 5,
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
    tab: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        width: wp('100.0%'),
        paddingLeft: 30,
        paddingRight: 30
    },
    tabButton: {
        justifyContent: 'center',
        height: 30,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20,
        backgroundColor: colors.BLUE.TAB,
        shadowColor: colors.BLACK,
        shadowOffset: { height: 5, width: 5 },
        shadowOpacity: 0.35,
        shadowRadius: 5,
    },
    tabButton1: {
        justifyContent: 'center',
        height: 30,
        paddingLeft: 20,
        paddingRight: 20
    },
    main: {
        width: wp('100.0%'),
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20
    },
    step: {
        flexDirection: 'row',
    },
    dot: {
        width: 15,
        height: 15,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: colors.WHITE,
        backgroundColor: colors.BLACK,
    },
    dot1: {
        width: 15,
        height: 15,
        borderRadius: 10,
        borderWidth: 4,
        borderColor: colors.WHITE,
        backgroundColor: colors.GREY.LIGHT,
    },
    line: {
        marginLeft: 7,
        width: 1,
        height: 40,
        backgroundColor: colors.BLACK
    },
    line1: {
        marginLeft: 6,
        width: 2,
        height: 60,
        backgroundColor: colors.BLACK
    },
    booking: {
        position: 'absolute',
        bottom: 70,
        width: wp('100.0%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    emailButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.BLUE.TAB
    },
    callButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.BLACK
    },
    cancelButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        width: 120,
        padding: 10,
        borderRadius: 20,
        backgroundColor: colors.WHITE,
        shadowColor: colors.BLACK,
        shadowOffset: { height: 5, width: 5 },
        shadowOpacity: 0.35,
        shadowRadius: 5,
    },
    bidButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        padding: 10,
        borderRadius: 20,
        backgroundColor: colors.BLUE.TAB,
        shadowColor: colors.BLACK,
        shadowOffset: { height: 5, width: 5 },
        shadowOpacity: 0.35,
        shadowRadius: 5,
    },
    viewButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        padding: 5,
        borderRadius: 20,
        backgroundColor: colors.BLUE.TAB,
        shadowColor: colors.BLACK,
        shadowOffset: { height: 5, width: 5 },
        shadowOpacity: 0.35,
        shadowRadius: 5,
    },
});

export default CreateBidScreen;