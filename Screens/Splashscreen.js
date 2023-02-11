import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Text,
  View,
} from 'react-native';

function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.navigate('Signup');
  }, 2000); 
  return (
    <>
      <View style={{flex: 1, width: null, height: null,backgroundColor:"black"}}>
      
            <View style={{position:'relative',top:100}}>
            <Text style={{textAlign:'center',color: 'white', fontWeight: '800', fontSize: 50}}>
             Plants
            </Text>
            </View>
          <View style={{width:'100%',height:'100%'}}>
          
            <View style={{alignItems:'center',position:'relative',top:100}}>
              <Image
                source={require('../assets/Images/plant3.webp')}
                style={{width: 370, resizeMode: 'contain'}}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                width: '100%',
                position: 'relative',
                top: 120,
              }}>
              <ActivityIndicator size={80} color="black"  />
            </View>
          </View>
        
      </View>
    </>
  );
}

export default SplashScreen;