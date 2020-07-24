import React from 'react'
import {View, Text} from 'react-native'

const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.children}</Text>
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
        shadowOffset:{widget: 0, height: 2},
        shadowOpacity:0.3

    },

};

export default Header;
