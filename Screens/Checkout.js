import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
   Image,
   ScrollView
} from 'react-native';
import { getSecrets } from '../Config/Url';


const Checkout = ({ navigation,props }) => {
  const [name, setName] = useState([]);
  const [username,setUsername]=useState("")
  const [address, setAddress] = useState("");
  const [total, setTotal] = useState([]);
  const [refresh,setRefresh]=useState(false)
  const API_URL=getSecrets.API_URL

  useEffect(() => {
    // setTotal(plant.price);
    handleSubmit();
   
  }, [refresh]);

  const handleusername = (e)=>{
    setUsername(e)
  }
  const handleaddress = (e)=>{
    setAddress(e)
  }

  const handleSubmit = () => {
   axios.get(API_URL+`/api/add-to-cart/`)
   .then((res)=>{
    console.log(res.data)
    setName(res.data.data)
    let totalPrice = res.data.data.reduce((total, item) => {
      return total + (item.price * item.quantity)
    }, 0)
    setTotal(totalPrice)
    console.log("totalprice",totalPrice)
    setRefresh(!refresh)
  }). catch ((error) => {
      console.error(error)});
    // navigation.navigate('Thank-You');
  };


  const submitform=()=>{
  
axios.post(API_URL+`/api/userorder`,{
name:username,
address:address
})
.then((res)=>{
  console.log(res)
if(res.data.data.name){
  axios.delete(API_URL+`/api/add-to-cart/`)
  .then((res)=>{
    navigation.navigate("Thank-You")
   setRefresh(!refresh)
 }). catch ((error) => {
     console.error(error)});
 }
  setRefresh(!refresh)
}). catch ((error) => {
    console.error(error)});
   };
  
 
  return (
    <>
     <ScrollView style={{backgroundColor:"black"}}>
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={handleusername}
        
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        onChangeText={handleaddress}
      />
      <Text style={styles.total}>Total: ${total}</Text>
      <TouchableOpacity style={styles.button} onPress={submitform}>
        <Text style={styles.buttonText}>Purchase</Text>
      </TouchableOpacity>
    </View>
   
    {name  && name.map((i)=>{
      return(
    <View style={styles.cardContainer}>
    <Image source={require("../assets/Images/tik2.jpeg")} style={styles.cardImage} />
   
   
    <View style={styles.cardInfoContainer}>
      <Text style={styles.cardTitle}>Name : {i.title}</Text>
      <Text style={styles.cardDescription}>Quantity  :  {i.quantity}</Text>
      <Text style={styles.cardPrice}>Price  :  {i.price}</Text>
    </View>
    
      
  </View>
    )
  })}
  </ScrollView>
  </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor:"black"
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color:"white"
  },
  input: {
    borderWidth: 1,
    borderColor: 'green',
    padding: 10,
    marginBottom: 20,
    width: '100%',
    backgroundColor:"white",
    borderRadius:10
  },
  total: {
    fontSize: 20,
    marginBottom: 20,
    color:"white"
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    width: '100%',
    border:2,
    borderRadius:10
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cardContainer: {
    width: 310,
    height:  100,
    backgroundColor: 'black',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    margin: 20,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'white',
    
    display:'flex',
    alignItems:"center",
    justifyContent:"center"
  },
  cardImage: {
    width: '30%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  cardInfoContainer: {
    width: '70%',
    height: '100%',
    padding: 10,
    color:"white",
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color:"white",
    textAlign:"center",
    
  },
  cardDescription: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
    textAlign:"center",
    color:"white",
  },
  cardPrice: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'green',
    marginTop: 10,
    textAlign:"center"
  }
});

export default Checkout;
