import React from 'react'
import {View, Text} from 'react-native'

const Card = (props) => {
    const {textStyle, viewStyle, containerStyle} = styles;
    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    )
};

class SiginUpForm extends React.Component {
    render() {
        return (
            <View>
                <Text>Sigin In Up Form</Text>
            </View>
        )
    }

}

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
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#E0E0E0',
        marginLeft: 8,
        marginRight: 8,
        marginTop: 8


    }

};

export { SiginUpForm } ;
