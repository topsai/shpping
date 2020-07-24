import * as React from 'react';
import {
  Dimensions,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CardSection from './src/components/CardSection';
import Card from './src/components/Card';
import MenuIconInfo from './src/components/MenuIconInfo';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeNavigator from './src/page/HomeNavigator';
import {createStackNavigator} from '@react-navigation/stack';
function SettingsScreen() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
// import HomeScreen from '.src/home/HomeScreen';
import HomeScreen from './src/page/home/HomeScreen';
export default function App() {
  return (
    <NavigationContainer>
      {/*<Stack.Navigator>*/}
      {/*  <Stack.Screen*/}
      {/*    name={'首页'}*/}
      {/*    tabBarVisible={'false'}*/}
      {/*    component={HomeNavigator}*/}
      {/*  />*/}
      {/*</Stack.Navigator>*/}
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#e96666',
          inactiveTintColor: '#888888',
        }}>
        <Tab.Screen name="首页" component={HomeNavigator} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
