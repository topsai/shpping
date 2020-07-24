// import React from 'react'
import * as React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const MenuIconInfo = (props) => {
    const {iconStyle} = styles;
    return (
        <View style={iconStyle}>
            <Icon name={props.name} size={25}/>
            <Text>{props.text}</Text>
        </View>
    )
};
const styles = {
    iconStyle: {
        alignItems: 'center',
        padding: 8
    }

};
// 返回一个上面是图标，下面是文字的玩意
export default MenuIconInfo;
