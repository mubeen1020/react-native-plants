import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '../Screens/Home';
import Cart from '../Screens/Cart';
import MapVieW from '../Screens/Map_View';
import Checkout from '../Screens/Checkout';
const Tab = createBottomTabNavigator();

export default function TabRouter() {
  
   
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'shop' : 'shop';
          }else if (route.name === 'Map') {
            iconName = focused ? 'map' : 'map';
          }else if (route.name === 'Checkout') {
            iconName = focused ? 'add-shopping-cart' : 'shopping-cart';
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
        tabBarActiveTintColor: '#fff',
        tabBarActiveBackgroundColor: '#1F1F1F',
        tabBarInactiveBackgroundColor:'#1F1F1F',
        tabBarLabelStyle: {
          fontSize: 12,
          height: 25,
          fontWeight: 'bold',
        },
      })}
      >
      <Tab.Screen name="Home" options={{headerShown:false}} component={Home} />
      <Tab.Screen name="Cart" options={{headerShown:false}} component={Cart}   />
      <Tab.Screen name="Map" options={{headerShown:false}} component={MapVieW}   />
      <Tab.Screen name="Checkout" options={{headerShown:false}} component={Checkout}   />
    </Tab.Navigator>
  );
}