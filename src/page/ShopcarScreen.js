import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import CardSection from "../components/CardSection";
import Card from "../components/Card";
import Checkbox from "../components/Checkbox";

class ShopcarScreen extends React.Component {
    render() {
        return (
            <View style={{backgroundColor: '#efefef'}}>
                <CardSection style={{padding: 10, backgroundColor: '#efb200', paddingBottom: 40}}>
                    <Card style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderWidth: 0
                    }}>
                        <Text style={{fontSize: 20}}>购物车</Text>
                        <Text>管理</Text>
                    </Card>
                </CardSection>


                <CardSection style={{
                    marginTop: -28,
                    margin: 18,
                    padding: 18,
                    flexDirection: 'column',
                    backgroundColor: '#FFF',
                    borderRadius: 10,
                    overflow: 'hidden'
                }}>

                    <Card style={{
                        flexDirection: 'row',
                        borderWidth: 0,
                        alignItems: 'center',
                    }}>
                        <Checkbox style={{}}/>
                        <Text style={{fontSize: 18}}>永兴实木家具 > </Text>
                        <Text></Text>
                    </Card>

                    <Card style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderWidth: 0,
                        alignItems: 'center',
                    }}>
                        <Checkbox style={{}}/>


                        <View style={{
                            flexDirection: 'row',
                            flex: 1
                        }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Detils')}>
                                <Image style={{
                                    height: 80,
                                    width: 80,
                                    borderRadius: 8,
                                    overflow: 'hidden'
                                }}
                                       source={{uri: 'https://my-firstrn-text.oss-cn-beijing.aliyuncs.com/images/img.jpg'}}>
                                </Image>
                            </TouchableOpacity>
                            <View style={{flex: 1}}>
                                <TouchableOpacity style={{
                                    paddingLeft: 8
                                }} onPress={() => this.props.navigation.navigate('Detils')}>
                                    <Text numberOfLines={2}
                                          style={{lineHeight: 20}}>
                                        厂家直销实木吧椅厂家直销实木吧椅厂家直销实木吧椅厂家直销实木吧椅厂家直销实木吧椅厂家直销实木吧椅
                                    </Text>
                                </TouchableOpacity>

                                <View style={{
                                    margin: 10,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}>
                                    <Text style={{color: 'red'}}>￥20.00</Text>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start'
                                    }}>
                                        <Text style={{
                                            borderWidth: 0.3,
                                            borderBottomLeftRadius: 3,
                                            borderTopLeftRadius: 3,
                                            // borderRadius: 3,
                                            // paddingLeft: 5,
                                            // paddingRight: 5,
                                            width: 25,
                                            textAlign: 'center',
                                            margin: 0,
                                            borderRightWidth: 0
                                        }}>-</Text>
                                        <Text style={{
                                            borderWidth: 0.3,
                                            // borderRadius: 3,
                                            paddingLeft: 5,
                                            paddingRight: 5,
                                            margin: 0,
                                            width: 25,
                                            textAlign: 'center'
                                        }}>1</Text>
                                        <Text style={{
                                            borderWidth: 0.3,
                                            borderBottomRightRadius: 3,
                                            borderTopRightRadius: 3,
                                            // paddingLeft: 5,
                                            // paddingRight: 5,
                                            width: 25,
                                            textAlign: 'center',
                                            borderLeftWidth: 0
                                        }}>+</Text>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </Card>
                </CardSection>
            </View>
        );
    }
}

export default ShopcarScreen;