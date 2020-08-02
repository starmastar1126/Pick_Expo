import React from 'react';
import { StatusBar, StyleSheet, ScrollView, View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { Container, Content } from "native-base";
import Swiper from 'react-native-swiper';

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

const data = [
    { title: 'Ferrari xyz', image: images.car },
    { title: 'Ferrari xyz', image: images.car },
    { title: 'Ferrari xyz', image: images.car },
    { title: 'Ferrari xyz', image: images.car },
    { title: 'Ferrari xyz', image: images.car },
    { title: 'Ferrari xyz', image: images.car }
]

class DriveDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Container>
                <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
                    <Icon name='arrow-back' type='material' color={colors.WHITE} size={25} />
                </TouchableOpacity>
                <Swiper autoplay={true}
                    paginationStyle={{ top: 235 }}
                    dotColor={colors.GREY.SECONDARY}
                    activeDotColor={colors.WHITE}
                >
                    {data.map((item, key) => {
                        return (
                            <View key={key} style={{ width: '100%', height: 250 }}>
                                <Image key={1} style={{ width: '100%', height: '100%' }} source={item.image} />
                                <Text style={{ position: 'absolute', top: 200, left: 10, fontSize: 17, color: colors.WHITE }}>{item.title}</Text>
                            </View>
                        )
                    })}
                </Swiper>
                <Content style={{ marginTop: -60 }}>
                    <StatusBar hidden />
                    <ScrollView contentContainerStyle={styles.main}>
                        <View style={{ width: '100%' }}>
                            <Text style={{ fontSize: 14 }}>{i18n.translate('Vehicle Summary')}</Text>
                            <Text style={{ marginTop: 3, fontSize: 10 }}>1. The passage experienceed a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.</Text>
                            <Text style={{ marginTop: 3, fontSize: 10 }}>2. Today It's seen all around the web: on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.</Text>
                            <Text style={{ marginTop: 3, fontSize: 10 }}>3. Today It's seen all around the web: on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.</Text>
                            <Text style={{ marginTop: 3, fontSize: 10 }}>4. Today It's seen all around the web: on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.</Text>
                        </View>
                        <View style={{ marginTop: 30, width: '100%' }}>
                            <Text style={{ fontSize: 14 }}>{i18n.translate('Car Images')}</Text>
                            <Text style={{ marginTop: 3, fontSize: 10 }}>{i18n.translate('Please see car images before starting')}</Text>
                        </View>
                        <FlatList
                            contentContainerStyle={{marginTop: 5}}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={data}
                            renderItem={({ item, key }) => (
                                <Image key={key} style={styles.image} source={item.image} />
                            )}
                        />
                        <TouchableOpacity style={styles.nextButton} onPress={() => this.props.navigation.navigate('DriveBefore')}>
                            <Text style={{ fontSize: 16, color: colors.WHITE }}>{i18n.translate('Agree')}</Text>
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
    }
});

export default DriveDetail;