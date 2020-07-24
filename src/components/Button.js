import React from 'react'
import {TouchableOpacity, Text} from 'react-native'

const Button = (props) => {
    const {textStyle, buttonStyle} = styles;
    return (
        <TouchableOpacity style={buttonStyle}>
            <Text style={textStyle}>
                购买
            </Text>
        </TouchableOpacity>
    )
};
const styles = {
    buttonStyle:{
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#007AFF',
        padding:8

    },
    textStyle: {
        fontSize: 14,
        color:'#007AFF',
        marginLeft: 138,
        marginRight: 138

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
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#E0E0E0',
        marginLeft: 8,
        marginRight: 8,
        marginTop:8


    }

};

export default Button;
