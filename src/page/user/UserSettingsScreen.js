import React from 'react';
import {
    Text,
    View,
    TextInput,
    Dimensions,
    ImageBackground,
    TouchableOpacity
} from "react-native";
import CardSection from "../../components/CardSection";
import Card from "../../components/Card";
import Checkbox from "../../components/Checkbox";
import MenuIconInfo from "../../components/MenuIconInfo";
import Swiper from 'react-native-swiper';
import Icon from "react-native-vector-icons/Ionicons";

//也可以在这里先取出屏幕的宽高
// let width = Dimensions.get('window').width;
// let windowHeight = Dimensions.get('window').Height;
const {width} = Dimensions.get('window');

class UserSettingsScreen extends React.Component {
    render() {
        return (
            <View>
                <CardSection style={{padding: 0, backgroundColor: '#ef8f04', paddingBottom: 8}}>
                    <Card style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderWidth: 0,
                        alignItems: 'center'
                    }}>
                        <MenuIconInfo name={'ios-add'} text={'扫一扫'}/>
                        <TextInput
                            style={{height: 40, borderRadius: 18, backgroundColor: '#FFF', width: 250}}
                            placeholder=""
                            onChangeText={(text) => this.setState({text})}
                        />
                        <MenuIconInfo name={'ios-add'} text={'会员码'}/>
                    </Card>
                </CardSection>

                {/* 一般注释, 用 {} 包围 */}
                {/* 轮播图 */}

                <View style={styles.container}>
                    <Swiper style={styles.wrapper} height={200} horizontal={true} autoplay>
                        <TouchableOpacity style={styles.slide1}
                                          onPress={() => this.props.navigation.navigate('Detils')}>
                            <ImageBackground style={{
                                height: 200, width, overflow: 'hidden', justifyContent: 'center',
                                alignItems: 'center',
                            }}
                                             source={require('../../images/img/1.jpg')}>
                                <Text style={styles.text}>Beautiful</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.slide2}
                                          onPress={() => this.props.navigation.navigate('Detils')}>

                            <ImageBackground style={{
                                height: 200, width, overflow: 'hidden', justifyContent: 'center',
                                alignItems: 'center',
                            }}
                                             source={require('../../images/img/2.jpg')}>
                                <Text style={styles.text}>Beautiful</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.slide3}
                                          onPress={() => this.props.navigation.navigate('Detils')}>

                            <ImageBackground style={{
                                height: 200, width, overflow: 'hidden', justifyContent: 'center',
                                alignItems: 'center',
                            }}
                                             source={require('../../images/img/3.jpg')}>
                                <Text style={styles.text}>Beautiful</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </Swiper>
                </View>


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

const styles = {
    container: {
        //borderWidth: 1,
        height: 200
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },

    image: {
        width,
        flex: 1
    }
};

UserSettingsScreen.navigationOptions = ({navigation}) => {
    //  关键这一行设置 header:null
    return {
        header: null
    }
};

export default UserSettingsScreen;