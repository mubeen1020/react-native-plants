import { NavigationHelpersContext } from '@react-navigation/native';
import axios from 'axios';
import React, { useState,useEffect } from 'react'
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import CSButton from '../components/CSButton';
import CSTextField from '../components/CSTextField';
import { getSecrets } from '../Config/Url';



function Signup({navigation}) {
const [First_Name,setFirst_Name]=useState("");
const [Last_Name,setLast_Name]=useState("");
const [Email,setEmail]=useState("")
const [Password,setPassword]=useState("")
let [loader, setloader] = useState(false);
const API_URL=getSecrets.API_URL;

const handlefirstname=(value)=>{setFirst_Name(value)}

const handlelastname=(value)=>{setLast_Name(value)}

const handleemail=(value)=>{setEmail(value)}

const handlepassword=(value)=>{setPassword(value)}

  let post_data=()=>{ 
    if (!Email.trim()) {
      alert('Please Enter Email');
      return;
    }
    if (!Password.trim()) {
      alert('Please Enter Password');
      return;
    }
     const config={
        first_name:First_Name,
        last_name:Last_Name,
        email:Email,
        password:Password
     };
     axios.post(API_URL+`/api/usersignup/`,config).then((success) => {console.log(success.data);if(success.data['status'] == true){navigation.navigate('Login')}else{navigation.navigate('Signup')}}).catch((err) => {console.log(err)})
  }

  return (
    <>
  <View style={{flex: 1, width: null, height: null,backgroundColor:"black"}}>
        {/* <ImageBackground
          // source={{
          //   uri: 'https://i.pinimg.com/564x/fd/2e/03/fd2e03da7124a91d28f9d814c66c2013.jpg',
          // }}
          style={{width: '100%', height: '100%', flex: 1,backgroundColor:"black"}}> */}
      
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{padding: 10, marginLeft: 18, marginTop: 50,marginBottom:40}}>
            <Text
              style={{
                color: 'white',
                fontWeight: '900',
                fontSize: 45,
                textAlign: 'center',
              }}>
              Sign Up
            </Text>
          </View>

          <View>
            <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
              <CSTextField
                placeholder="First Name"
                placeholderTextColor="white"
                onChangeText={handlefirstname}
                required
              />
            </View>
            <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
              <CSTextField
                placeholder="Last Name"
                placeholderTextColor="white"
               onChangeText={handlelastname}
               required
              />
            </View>
            <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
              <CSTextField
                placeholder="Email"
                placeholderTextColor="white"
               onChangeText={handleemail}
              />
            </View>
            <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
              <CSTextField
                placeholder="Password"
                placeholderTextColor="white"
                onChangeText={handlepassword}
              />
            </View>
          </View>
          <View style={{paddingHorizontal: 20, paddingTop: 16}}>
            <CSButton
            onPress={post_data}
              label={'SignUp'}
              color={'black'}
              bgcolor={'white'}
              loader={loader}
              fs={25}
              fw={'800'}
            />
          </View>
        </ScrollView>
        <View>
          <View style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'row',marginTop:10}}>
              <Text style={{color: 'white', fontSize: 16}}>
                Already have an account
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: '900',
                  paddingLeft: 8,
                }}
                onPress={()=>{navigation.navigate('Login'); }}
               >
                Login
              </Text>
            </View>
          </View>
        </View>
      </View>
       
        {/* </ImageBackground> */}
      </View>
    </>
  )
}

export default Signup