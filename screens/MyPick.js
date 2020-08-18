import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class MyPick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Container>
                <Content>
                    <ScrollView>
                    </ScrollView>
                </Content>
                {/* <Foot /> */}
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default MyPick;