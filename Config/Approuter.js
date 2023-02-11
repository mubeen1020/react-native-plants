import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Screens/Splashscreen';
import Signup from '../Screens/Signup';
import Login from '../Screens/Login';
import Tabrouter from './Tabrouter';
import MapVieW from '../Screens/Map_View';
import Cart from '../Screens/Cart';
import Home from '../Screens/Home';
import AddToCart from '../Screens/Add_to_cart';
import Checkout from '../Screens/Checkout';
import ThankYouScreen from '../Screens/Thankyou';
import PlantInstructions from '../Screens/Plant_intruction';
import TabBar from './Top_Tab';
import PlantShopBranches from '../Screens/Branche';

const Stack = createNativeStackNavigator();
function AppRouter() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator>
        <Stack.Screen name="SplashScreen" options={{headerShown:false}}  component={SplashScreen} />
        <Stack.Screen name="Signup" options={{headerShown:false}}  component={Signup} />
        <Stack.Screen name="Login" options={{headerShown:false}}  component={Login} />
        <Stack.Screen name="Tabrouter" options={{headerShown:false}}  component={Tabrouter} />
        <Stack.Screen name="Map" options={{headerShown:false}}  component={MapVieW} />
        <Stack.Screen name="Home" options={{headerShown:false}}  component={Home} />
        <Stack.Screen name="Cart" options={{headerShown:false}}  component={Cart} />
        <Stack.Screen name="Add-to-Cart" options={{headerShown:false}}  component={AddToCart} />
        <Stack.Screen name="Checkout" options={{headerShown:false}}  component={Checkout} />
        <Stack.Screen name="Thank-You" options={{headerShown:false}}  component={ThankYouScreen} />
        <Stack.Screen name="Instruction" options={{headerShown:false}}  component={PlantInstructions} />
        <Stack.Screen name="Tab-Bar" options={{headerShown:false}}  component={TabBar} />
        <Stack.Screen name="Shop" options={{headerShown:false}}  component={PlantShopBranches} />
        </Stack.Navigator>
        </NavigationContainer>
  );
}

export default AppRouter;