import React from 'react';
import {View, Text, TextInput} from 'react-native';

export default class Login extends React.Component {
    render() {
        return (
            <View style={styles.TextInputStyles}>
                <Text>Name:

                </Text>

                <TextInput placeholder="asfsf"/>
            </View>
        )
    }
}
const styles = {
    TextInputStyles: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#E0E0E0',
        marginLeft: 8,
        marginRight: 8,
        marginTop: 8
    }
};