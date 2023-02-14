import * as React from "react"
import { useState,useEffect} from "react";
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import CSButton from '../components/CSButton';
import CSTextField from '../components/CSTextField';
import { getSecrets } from '../Config/Url';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Login({navigation}) {
  const [Email,setEmail]=useState("")
  const [Password,setPassword]=useState("")
  let [loader, setloader] = useState(false);
  const API_URL=getSecrets.API_URL;
  
 
  const handleemail=(value)=>{setEmail(value)}
  
  const handlepassword=(value)=>{setPassword(value)}
  
    let post_data=()=>{ 
      if (!Password.trim()) {
        alert('Please Enter Password');
        return;
      }
       const config={
          email:Email,
          password:Password
       };
       axios.post(API_URL+`/api/userlogin/`,config)
       .then(async(success) => {
        try {
          console.log(success.data.token)
          await AsyncStorage.setItem('token',success.data.token);
          if(success.data.token ){
          navigation.navigate("Tabrouter")
          }
      } catch (error) {
          console.log('Error while setting data:', error);
      }
        
      })
       .catch((err) => {console.log(err)})
    }
  
  return (
  
    
  <View style={{flex: 1, width: null, height: null,backgroundColor:"black"}}>

     
      
      <View style={{width: '100%', height: '100%'}}>
        <View
          style={{position: 'relative', top: 100, padding: 10, marginLeft: 10}}>
          <Text
            style={{
              color: 'white',
              fontWeight: '900',
              fontSize: 45,
              textAlign: 'center',
            }}>
            Login
          </Text>
        </View>

        <View style={{position: 'relative', top: 130}}>
          <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
            <CSTextField
              placeholder="Email"
              placeholderTextColor="white"
              onChangeText={handleemail}
            />
          </View>
          <View style={{paddingHorizontal: 20}}>
            <CSTextField
              placeholder="Password"
              placeholderTextColor="white"
              onChangeText={handlepassword}
            />
          </View>
          <View style={{padding: 13, position: 'relative', left: 15}}>
            <Text style={{color: 'white', fontWeight: '600'}}>
              Forgot Password?
            </Text>
          </View>
          <View style={{paddingHorizontal: 20}}>
            <CSButton
            onPress={post_data}
              label={'Login'}
              color={'black'}
              fs={20}
              fw={'800'}
              loader={loader}
              bgcolor={'white'}
              style={{textAlign:"center"}}
            />
          </View>
          <View style={{alignItems: 'center', position: 'relative', top: 50}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'white', fontSize: 16}}>
                Don't have an account
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: '900',
                  paddingLeft: 8,
                }}
                onPress={()=>{navigation.navigate('Signup')}}
                >
                Sign Up
              </Text>
            </View>
          </View>
        </View>
      </View>
       
     
        
      </View>
     
    
  )
}

export default Login