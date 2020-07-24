// import React from 'react';
import * as React from 'react';
// import {createStackNavigator} from "react-navigation";
import {createStackNavigator} from '@react-navigation/stack';
import ShopDetilScreen from './home/ShopDetilScreen';
import HomeScreen from './home/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Shop"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        options={{headerTransparent: true}}
        name="Detils"
        component={ShopDetilScreen}
      />
    </Stack.Navigator>
  );
}

// const HomeNavigator = createStackNavigator({
//   Shop: HomeScreen,
//   Detils: ShopDetilScreen,
// });
//* 隐藏底部导航栏 */
// HomeNavigator.navigationOptions = ({navigation}) => {
//     let tabBarVisible = true;
//     if (navigation.state.index > 0) {
//         tabBarVisible = false;
//     }
//
//     return {
//         tabBarVisible,
//     };
// };

export default HomeNavigator;
