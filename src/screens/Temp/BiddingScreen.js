import React from 'react';
import {
    StatusBar,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Image
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

class BiddingScreen extends React.Component {
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
                        {
                            this.state.tab === 'NewBids' ? this.renderNewBids() :
                                this.state.tab === 'Pending' ? this.renderPending() : this.renderApproved()}
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
                <Text style={{ fontSize: 20, color: colors.BLACK }}>{i18n.translate('My_Bidding')}</Text>
                <View style={styles.tab}>
                    <TouchableOpacity
                        style={tab === 'NewBids' ? styles.tabButton : styles.tabButton1}
                        onPress={() => this.setState({ tab: 'NewBids' })}>
                        <Text style={{ color: tab === 'NewBids' ? colors.WHITE : colors.GREY.TAB }}>{i18n.translate('New_Bids')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tab === 'Pending' ? styles.tabButton : styles.tabButton1}
                        onPress={() => this.setState({ tab: 'Pending' })}>
                        <Text style={{ color: tab === 'Pending' ? colors.WHITE : colors.GREY.TAB }}>{i18n.translate('Pending')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tab === 'Approved' ? styles.tabButton : styles.tabButton1}
                        onPress={() => this.setState({ tab: 'Approved' })}>
                        <Text style={{ color: tab === 'Approved' ? colors.WHITE : colors.GREY.TAB }}>{i18n.translate('Approved')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    renderNewBids() {
        const { step } = this.state;
        return (
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <View style={styles.dot} />
                        <View style={styles.line1} />
                        <View style={styles.dot} />
                    </View>
                    <View style={{ width: '100%' }}>
                        <View>
                            <Text style={{ marginLeft: 20 }}>Jeddah Mall</Text>
                            <Text style={{ marginLeft: 20, fontSize: 12, color: colors.GREY.SECONDARY }}>Main Jeddah mall, Saudi Arabia</Text>
                        </View>
                        <View style={{ marginTop: 20, marginBottom: 20, marginLeft: 20, marginRight: 20, width: '90%', height: 1, backgroundColor: colors.GREY.SECONDARY }} />
                        <View>
                            <Text style={{ marginLeft: 20 }}>Jeddah Mall</Text>
                            <Text style={{ marginLeft: 20, fontSize: 12, color: colors.GREY.SECONDARY }}>Main Jeddah mall, Saudi Arabia</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity>
                    <Text style={{ color: colors.BLUE.TAB, marginLeft: 35, marginTop: 20 }}>{i18n.translate('Change_Address')}</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, width: '100%' }}>
                    <View style={{ width: wp('30.0%'), justifyContent: 'center', paddingLeft: 10 }}>
                        <Text style={{ fontSize: 12 }}>{i18n.translate('From')}</Text>
                        <Text style={{ fontSize: 12 }}>22 Mar 2020</Text>
                    </View>
                    <View style={{ width: wp('30.0%'), justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name='arrowright' type='antdesign' color={colors.BLACK} size={18} />
                    </View>
                    <View style={{ width: wp('30.0%'), justifyContent: 'center', paddingLeft: 20 }}>
                        <Text style={{ fontSize: 12 }}>{i18n.translate('To')}</Text>
                        <Text style={{ fontSize: 12 }}>22 Mar 2020</Text>
                    </View>
                </View>
                <View style={{ marginTop: 20, paddingLeft: 10, paddingRight: 10, width: '100%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 10 }}>
                        <Text style={{ fontSize: 10, width: wp('30%'), textAlign: 'left' }}>Amount Offered</Text>
                        <View>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 10, color: colors.BLUE.TAB, width: wp('20%'), textAlign: 'right' }}>{i18n.translate('Edit')}</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 10, width: wp('20%'), textAlign: 'right' }}>$100</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 10 }}>
                        <Text style={{ fontSize: 10, width: wp('30%'), textAlign: 'left' }}>Amount Offered</Text>
                        <Text style={{ fontSize: 10, color: colors.RED.DEFAULT, width: wp('20%'), textAlign: 'right' }}>Requesting</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 20 }}>
                        <Text style={{ fontSize: 10, width: wp('30%'), textAlign: 'left' }}>Amount Offered</Text>
                        <Text style={{ fontSize: 10, color: colors.RED.DEFAULT, width: wp('20%'), textAlign: 'right' }}>5 Days</Text>
                    </View>
                </View>
            </View>
        );
    }
    renderPending() {
        return (
            <View style={{height: hp('50%')}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: 20, height: 40 }}>
                    <Text style={{width: wp('60%'), textAlign: 'left' }}>You added a bid on Sunday</Text>
                    <TouchableOpacity style={styles.viewButton}>
                        <Text style={{ fontSize: 11, color: colors.WHITE }}>{i18n.translate('View')}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: 20, height: 40 }}>
                    <Text style={{width: wp('60%'), textAlign: 'left' }}>You added a bid on Sunday</Text>
                    <TouchableOpacity style={styles.viewButton}>
                        <Text style={{ fontSize: 11, color: colors.WHITE }}>{i18n.translate('View')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    renderApproved() {
        return (
            <View style={{height: hp('50%')}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: 20, height: 40 }}>
                    <Text style={{width: wp('60%'), textAlign: 'left' }}>Congratulations. Your bid has been approved.</Text>
                    <TouchableOpacity style={styles.viewButton}>
                        <Text style={{ fontSize: 11, color: colors.WHITE }}>{i18n.translate('View')}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: 20, height: 40 }}>
                    <Text style={{width: wp('60%'), textAlign: 'left' }}>Congratulations. Your bid has been approved.</Text>
                    <TouchableOpacity style={styles.viewButton}>
                        <Text style={{ fontSize: 11, color: colors.WHITE }}>{i18n.translate('View')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    renderButton() {
        return (
            <View style={styles.booking}>
                <TouchableOpacity style={styles.bidButton} onPress={()=> this.props.navigation.navigate('CreateBidScreen')}>
                    <Text style={{ fontSize: 11, color: colors.WHITE }}>{i18n.translate('Make_a_New_Bid')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton}>
                    <Text style={{ fontSize: 11, color: colors.RED.DEFAULT }}>{i18n.translate('Cancel_Bid')}</Text>
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
        alignItems: 'center',
        width: wp('100.0%'),
        height: 120,
        paddingTop: 30,
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

export default BiddingScreen;