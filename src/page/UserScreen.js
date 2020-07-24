import React from "react";
import {Image, Text, View} from "react-native";
import CardSection from "../components/CardSection";
import Card from "../components/Card";
import Icon from "react-native-vector-icons/Ionicons";
import MenuIconInfo from "../components/MenuIconInfo";

class UserScreen extends React.Component {
    render() {
        return (
            <View style={{backgroundColor: '#efefef'}}>
                {/*<CardSection style={{padding: 0, marginBottom: 8}}>*/}
                {/*    <Image style={styles.imageStyle}*/}
                {/*           source={{uri: 'https://my-firstrn-text.oss-cn-beijing.aliyuncs.com/images/img.jpg'}}>*/}
                {/*    </Image>*/}
                {/*</CardSection>*/}

                <CardSection style={{padding: 0, backgroundColor: '#efb200'}}>
                    <Card style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderWidth: 0
                    }}>
                        <Text style={{fontSize: 20}}></Text>
                        <Text></Text>
                    </Card>
                </CardSection>
                <CardSection style={{

                    backgroundColor: '#efb200',
                    flexDirection: 'column',
                    paddingBottom: 28
                }}>

                    <Card style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderWidth: 0,
                    }}>
                        <Image style={{
                            height: 60,
                            width: 60,
                            borderRadius: 50,
                            overflow: 'hidden'
                        }}
                               source={{uri: 'https://my-firstrn-text.oss-cn-beijing.aliyuncs.com/images/img.jpg'}}>
                        </Image>

                        <Card style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            borderWidth: 0
                        }}>
                            <Text style={{fontSize: 20}}>往事666</Text>
                            <Text>退款/售后</Text>
                        </Card>

                    </Card>


                    <Card style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderWidth: 0,
                        padding: 18,
                    }}>

                        <View style={{alignItems: 'center'}}>
                            <Text>23</Text>
                            <Text>收藏夹</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Text>23</Text>
                            <Text>收藏夹</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Text>23</Text>
                            <Text>收藏夹</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Text>23</Text>
                            <Text>收藏夹</Text>
                        </View>
                    </Card>
                </CardSection>


                <CardSection style={{
                    marginTop: -28,
                    margin: 8,
                    flexDirection: 'column',
                    backgroundColor: '#FFF',
                    borderRadius: 10,
                }}>

                    <Card style={{
                        padding: 0,
                        marginBottom:8,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderWidth: 0,
                        alignItems: 'center',
                        // lineHeight: 40
                    }}>
                        <Text style={{fontSize: 18}}>评价</Text>
                        <Text>退款/售后</Text>
                    </Card>

                </CardSection>


                <CardSection style={{
                    margin: 8,
                    padding: 0,
                    paddingBottom: 8,
                    flexDirection: 'column',
                    backgroundColor: '#FFF',
                    borderRadius: 10
                }}>

                    <Card style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderWidth: 0,
                        borderBottomWidth: 1,
                    }}>
                        <Text style={{fontSize: 18}}>
                            <Icon name='md-person' size={20}/> 我的订单
                        </Text>
                        <Text>查看全部订单></Text>
                    </Card>
                    <Card style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderWidth: 0
                    }}>
                        <MenuIconInfo name={'md-wallet'} text={"待付款"}/>
                        <MenuIconInfo name={'ios-list-box'} text={"待发货"}/>
                        <MenuIconInfo name={'md-jet'} text={"待收货"}/>
                        <MenuIconInfo name={'md-chatboxes'} text={"评价"}/>
                        <MenuIconInfo name={'ios-contacts'} text={"退款/售后"}/>
                    </Card>
                    <Card style={{backgroundColor: '#efefef', borderRadius: 10, borderWidth: 0, padding: 8}}>
                        <Text>退款/售后></Text>
                    </Card>


                </CardSection>


                <CardSection style={{
                    margin: 8,
                    padding: 0,
                    paddingBottom: 8,
                    flexDirection: 'column',
                    backgroundColor: '#FFF',
                    borderRadius: 10
                }}>

                    <Card style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderWidth: 0,
                        borderBottomWidth: 1,
                    }}>
                        <Text style={{fontSize: 20}}>必备工具</Text>
                        <Text>查看全部工具></Text>
                    </Card>
                    <Card style={{
                        padding: 18,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderWidth: 0
                    }}>
                        <View style={{alignItems: 'center'}}>
                            <Icon name='md-wallet' size={25}/>
                            <Text>待付款</Text>
                        </View>

                        <View style={{alignItems: 'center'}}>
                            <Icon name='ios-list-box' size={25}/>
                            <Text>待发货</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Icon name='md-jet' size={25}/>
                            <Text>待收货</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Icon name='md-chatboxes' size={25}/>
                            <Text>评价</Text>
                        </View>
                    </Card>
                    <Card style={{
                        padding: 18,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderWidth: 0
                    }}>
                        <View style={{alignItems: 'center'}}>
                            <Icon name='md-wallet' size={25}/>
                            <Text>待付款</Text>
                        </View>

                        <View style={{alignItems: 'center'}}>
                            <Icon name='ios-list-box' size={25}/>
                            <Text>待发货</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Icon name='md-jet' size={25}/>
                            <Text>待收货</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Icon name='md-chatboxes' size={25} color='orange'/>
                            <Text>评价</Text>
                        </View>
                    </Card>


                </CardSection>
            </View>

        );
    }
}

export default UserScreen;