// import React from 'react';
import * as React from 'react';
import {
  Button,
  Dimensions,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import Swiper from 'react-native-swiper';
// import CardSection from '../../components/CardSection';

const {width} = Dimensions.get('window');

class ShopDetilScreen extends React.Component {
  render() {
    return (
      <View>
        {/* 一般注释, 用 {} 包围 */}
        {/* 轮播图 */}
        <View style={styles.container}>
          <Swiper
            style={styles.wrapper}
            height={200}
            horizontal={true}
            autoplay>
            <TouchableOpacity
              style={styles.slide1}
              onPress={() => this.props.navigation.navigate('Detils')}>
              <ImageBackground
                style={{
                  height: 200,
                  width,
                  overflow: 'hidden',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                source={require('../../images/img/1.jpg')}>
                <Text style={styles.text}>Beautiful</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.slide2}
              onPress={() => this.props.navigation.navigate('Detils')}>
              <ImageBackground
                style={{
                  height: 200,
                  width,
                  overflow: 'hidden',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                source={require('../../images/img/2.jpg')}>
                <Text style={styles.text}>Beautiful</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.slide3}
              onPress={() => this.props.navigation.navigate('Detils')}>
              <ImageBackground
                style={{
                  height: 200,
                  width,
                  overflow: 'hidden',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                source={require('../../images/img/3.jpg')}>
                <Text style={styles.text}>Beautiful</Text>
              </ImageBackground>
            </TouchableOpacity>
          </Swiper>
        </View>
        {/* 一般注释, 用 {} 包围 */}
        {/* 商品价格 */}
        <View style={{backgroundColor: '#efefef'}}>
          <View style={{backgroundColor: '#FFF', padding: 8, marginBottom: 8}}>
            <Text style={{color: 'red'}}>￥255.00</Text>
            <Text style={{fontWeight: 'bold', lineHeight: 22}}>
              山泽超五类网线8芯纯无氧铜电脑监控网络宽带线室外50 100 305米
            </Text>
          </View>
          {/* 发货地址 */}
          <View style={{backgroundColor: '#FFF', padding: 8, marginBottom: 8}}>
            <Text>发货</Text>
            <Text>活动</Text>
          </View>
          {/* 型号选择 */}
          <View style={{backgroundColor: '#FFF', padding: 8, marginBottom: 8}}>
            <Text>选择</Text>
            <Text>参数</Text>
          </View>
          {/* 评价 */}
          <View style={{backgroundColor: '#FFF', padding: 8, marginBottom: 8}}>
            <Text>宝贝评价/全部</Text>
            <Text>活动</Text>
          </View>
          {/* 商家信息 */}
          <View style={{backgroundColor: '#FFF', padding: 8, marginBottom: 8}}>
            <Text>山泽、全部宝贝</Text>
            <Text>活动</Text>
          </View>
          <Text style={{textAlign: 'center', marginBottom: 8}}>
            ------ 宝贝详情 ------
          </Text>
          {/* 商品详情 */}
          <View style={{backgroundColor: '#FFF', padding: 8, marginBottom: 8}}>
            <Text>商品详情介绍</Text>
          </View>
        </View>
        <StatusBar
          backgroundColor="#ff0000"
          translucent={true}
          hidden={true}
          animated={true}
        />
      </View>
    );
  }
}

ShopDetilScreen.navigationOptions = ({navigation}) => {
  //  关键这一行设置 header:null
  return {
    headerTransparent: true, // 背景透明
  };
};

const styles = {
  container: {
    //borderWidth: 1,
    height: 200,
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
    backgroundColor: '#9DD6EB',
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
    backgroundColor: '#92BBD9',
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  image: {
    width,
    flex: 1,
  },
};

export default ShopDetilScreen;
