// import React from 'react'
import * as React from 'react';
import {View, Text} from 'react-native';

const CardSection = (props) => {
    const {textStyle, viewStyle,cardsectionStyle} = styles;
    return (
        <View style={[cardsectionStyle, props.style]}>
           {props.children}
        </View>
    )
};
const styles = {
    textStyle: {
        fontSize: 20,

    },
    viewStyle: {
        backgroundColor: '#E0E0E0',
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        shadowColor: '#000',
        shadowOffset: {widget: 0, height: 2},
        shadowOpacity: 0.3

    },
    cardsectionStyle: {
        //borderBottomWidth: 1,
        backgroundColor: '#FFF',
        padding: 8,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'

    }

};

export default CardSection;
