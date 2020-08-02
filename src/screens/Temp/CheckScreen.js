import React from 'react';
import {
    StatusBar,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList
} from 'react-native';
import { Container, Content, Item, Input } from "native-base";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import Swiper from 'react-native-swiper';

import { Foot } from '@components';
import configs from '@constants/configs';
import { themes, colors } from '@constants/themes';
import { images, icons } from '@constants/assets';
import API, { setClientToken } from '@services/API';
import i18n from '@services/i18n';

const data = [
    { title: 'Ferrari xyz', image: images.car },
    { title: 'Ferrari xyz', image: images.car },
    { title: 'Ferrari xyz', image: images.car },
    { title: 'Ferrari xyz', image: images.car },
    { title: 'Ferrari xyz', image: images.car },
    { title: 'Ferrari xyz', image: images.car }
]

class CheckScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Container>
                <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
                    <Icon name='arrow-back' type='material' color={colors.BLACK} size={25} />
                </TouchableOpacity>
                <View style={{ alignItems: 'center', marginTop: 30 }}>
                    <Text style={{ fontSize: 17 }}>{i18n.translate('Check_Before')}</Text>
                    <Text style={{ marginTop: 10, fontSize: 12, marginBottom: 10 }}>
                    {i18n.translate('Please_enter_following_details_correctly')}</Text>
                </View>
                <Content>
                    <StatusBar hidden />
                    <ScrollView contentContainerStyle={styles.main}>
                        <TextInput
                            style={{ marginTop: 20, width: '100%', height: 40, borderBottomWidth: 1, borderBottomColor: colors.GREY.SECONDARY }}
                            secureTextEntry={true}
                            placeholder={i18n.translate('Fuel')}
                            placeholderTextColor={colors.GREY.SECONDARY}
                        />
                        <TextInput
                            style={{ marginTop: 20, width: '100%', height: 40, borderBottomWidth: 1, borderBottomColor: colors.GREY.SECONDARY }}
                            secureTextEntry={true}
                            placeholder={i18n.translate('Mileage')}
                            placeholderTextColor={colors.GREY.SECONDARY}
                        />
                        <TextInput
                            style={{ marginTop: 20, width: '100%', height: 40, borderBottomWidth: 1, borderBottomColor: colors.GREY.SECONDARY }}
                            secureTextEntry={true}
                            placeholder={i18n.translate('Battery_Health')}
                            placeholderTextColor={colors.GREY.SECONDARY}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TextInput
                                style={{ marginTop: 20, width: '100%', height: 40, borderBottomWidth: 1, borderBottomColor: colors.GREY.SECONDARY }}
                                secureTextEntry={true}
                                placeholder={i18n.translate('Accessories')}
                                placeholderTextColor={colors.GREY.SECONDARY}
                            />
                            <TouchableOpacity style={{ marginLeft: -20, marginTop: 30 }} >
                                <Icon name='plus' type='feather' color={colors.BLUE.TAB} size={25} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                            <TextInput
                                style={{ marginTop: 20, width: '45%', height: 40, borderBottomWidth: 1, borderBottomColor: colors.GREY.SECONDARY }}
                                secureTextEntry={true}
                                placeholder={i18n.translate('Quantity')}
                                placeholderTextColor={colors.GREY.SECONDARY}
                            />
                            <TextInput
                                style={{ marginTop: 20, width: '45%', height: 40, borderBottomWidth: 1, borderBottomColor: colors.GREY.SECONDARY }}
                                secureTextEntry={true}
                                placeholder={i18n.translate('Price_dollar')}
                                placeholderTextColor={colors.GREY.SECONDARY}
                            />
                        </View>
                        <View style={{ marginTop: 20, width: '100%' }}>
                            <Text style={{ marginTop: 10, fontSize: 12, color: colors.BLACK }}>{i18n.translate('Please_add_car_images')}</Text>
                        </View>
                        <View style={styles.params1}>
                            <TouchableOpacity key={1} style={styles.item1}>
                                <Icon name='image' type='evilicon' color={colors.BLUE.TAB} size={35} />
                                <Text style={{ fontSize: 10 }}>{i18n.translate('Gallery')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity key={2} style={styles.item1}>
                                <Icon name='camera' type='evilicon' color={colors.BLUE.TAB} size={35} />
                                <Text style={{ fontSize: 10 }}>{i18n.translate('Camera')}</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            contentContainerStyle={{ marginTop: 20 }}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={data}
                            renderItem={({ item, key }) => (
                                <Image key={key} style={styles.image} source={item.image} />
                            )}
                        />
                        <TouchableOpacity style={styles.nextButton} onPress={() => this.props.navigation.navigate('AfterScreen')}>
                            <Text style={{ fontSize: 16, color: colors.WHITE }}>{i18n.translate('Confirm')}</Text>
                        </TouchableOpacity>
                    </ScrollView>
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

export default CheckScreen;