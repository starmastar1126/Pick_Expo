import React from 'react';
import { StatusBar, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Container, Content } from "native-base";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { Loading, Rating } from '@components';
import { isEmpty } from '@constants/functions';
import configs from "@constants/configs";
import { themes, colors } from "@constants/themes";
import { images, icons } from "@constants/assets";
import axios, { setClientToken } from "@utils/axios";
import i18n from "@utils/i18n";

const data = [
    { type: 'guest', name: 'Lexus', image: images.person1, date: '13 Apr 2020' },
    { type: 'guest', name: 'Merc', image: images.person3, date: '06 Jun 2020' },
    { type: 'guest', name: 'Hamza', image: images.person2, date: '25 Mar 2020' },
    { type: 'host', name: 'Silas', image: images.person4, date: '11 Dec 2020' },
    { type: 'host', name: 'Edla', image: images.person5, date: '01 Oct 2020' },
]

class VehicleAll extends React.Component {
    constructor(props) {
        super(props);
    }

    renderItem(item, key) {
        return (
            <TouchableOpacity key={key} style={styles.item}>
                <Image style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} source={item.image} />
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text>{item.name}</Text>
                        <Rating rating={4.3} />
                    </View>
                    <Text style={{ fontSize: 8, width: '70%' }}>Limar is so nice and palent Meat and deam car and very humble. Recogniged</Text>
                    <Text style={{ fontSize: 8, width: '70%', marginTop: 10 }}>{item.date}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    renderHeading() {
        return (
            <View style={{ flexDirection: 'row', width: wp('100.0%'), height: 50 }}>
                <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: 80, padding: 10 }}>
                    <Icon name="keyboard-backspace" type="material" size={24} onPress={() => this.props.navigation.goBack()} />
                </View>
                <View style={{ width: wp('100.0%') - 160, justifyContent: 'center', alignItems: 'center' }}>
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
                        <Text style={{ fontWeight: '500', width: '100%', marginBottom: 10 }}>{i18n.translate('Guests Responses')}</Text>
                        {
                            data.map((item, key) => {
                                return (
                                    item.type == 'guest' ?
                                        this.renderItem(item, key) : null
                                )
                            })
                        }
                        <TouchableOpacity>
                            <Text style={{ fontWeight: '500', color: colors.BLUE.TAB, marginBottom: 10 }}>{i18n.translate('View all')} (100)</Text>
                        </TouchableOpacity>
                        <Text style={{ fontWeight: '500', width: '100%', marginBottom: 10 }}>{i18n.translate('Hosts Responses')}</Text>
                        {
                            data.map((item, key) => {
                                return (
                                    item.type == 'host' ?
                                        this.renderItem(item, key) : null
                                )
                            })
                        }
                        <TouchableOpacity>
                            <Text style={{ fontWeight: '500', color: colors.BLUE.TAB, marginBottom: 10 }}>{i18n.translate('View all')} (6)</Text>
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
        marginTop: 20,
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
        // justifyContent: 'space-between',
        // alignItems: 'center',
        marginBottom: 10,
        width: wp('90.0%'),
        height: 80,
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

const mapStateToProps = state => {
  return {
    user_info: state.account.user_info,
  }
}

export default connect(mapStateToProps, undefined)(VehicleAll);