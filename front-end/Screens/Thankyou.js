import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ThankYouScreen = ({navigation}) => {
useEffect(()=>{
  setTimeout(()=>{
navigation.navigate("Add-to-Cart")
  },2000)
},[])
    const get_id=()=>{}
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/Images/plant90.webp')}
        style={styles.image}
      />
      <Text style={{color:"pink"}}>order id : #0099ff</Text>
      <Text style={styles.title}>Thank You!</Text>
      <Text style={styles.message}>Your order has been placed successfully!</Text>
      <Text style={styles.message}>We hope you enjoy your plants!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:"white"
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color:"white"
  },
});

export default ThankYouScreen;
