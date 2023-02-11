import axios, { Axios } from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList,Image, ScrollView } from 'react-native';
import { getSecrets } from '../Config/Url';

const AddToCart = ({ navigation, route }) => {
const { plant } = route.params;
  const [itemCount, setItemCount] = useState(0);
  const [name1,setName1]=useState("Alo vera")
  const [price1,setPrice1]=useState( 210)
  const [itemCount2, setItemCount2] = useState(0);
  const [name2,setName2]=useState("Corton Petra")
  const [price2,setPrice2]=useState(200)
  const [itemCount3, setItemCount3] = useState(0);
  const [name3,setName3]=useState("Nest Farm")
  const [price3,setPrice3]=useState(160)
  const [itemCount4, setItemCount4] = useState(0);
  const [name4,setName4]=useState("Perperemia")
  const [price4,setPrice4]=useState(400)
  const [itemCount5, setItemCount5] = useState(0);
  const [name5,setName5]=useState("Water melon")
  const [price5,setPrice5]=useState(600)
  

  const API_URL=getSecrets.API_URL

  const addItem = () => {setItemCount(itemCount + 1);}
  const removeItem = () =>{setItemCount(itemCount - 1);}

  const addItem2 = () => {setItemCount2(itemCount2 + 1);}
  const removeItem2 = () =>{setItemCount2(itemCount2 - 1);}

  const addItem3 = () => {setItemCount3(itemCount3 + 1);}
  const removeItem3 = () =>{setItemCount3(itemCount3 - 1);}

  const addItem4 = () => {setItemCount4(itemCount4 + 1);}
  const removeItem4 = () =>{setItemCount4(itemCount4 - 1);}

  const addItem5 = () => {setItemCount5(itemCount5 + 1);}
  const removeItem5 = () =>{setItemCount5(itemCount5 - 1);}
  
  const addToCart1 = async () => {
    axios.post(API_URL+'/api/add-to-cart/',{
      quantity:itemCount,
      product_id:'1',
      price:price1,
      title:name1
    })
    .then((res)=>{
      
    }). catch ((error) => {
        console.error(error)});
      }

      const addToCart2 = async () => {
        axios.post(API_URL+'/api/add-to-cart/',{
          quantity:itemCount2,
          product_id:'2',
          price:price2,
          title:name2
        })
        .then((res)=>{
         
        }). catch ((error) => {
            console.error(error)});
          }

          const addToCart4 = async () => {
            axios.post(API_URL+'/api/add-to-cart/',{
              quantity:itemCount4,
              product_id:'4',
              price:price4,
              title:name4
            })
            .then((res)=>{
            
            }). catch ((error) => {
                console.error(error)});
              }

              const addToCart3 = async () => {
                axios.post(API_URL+'/api/add-to-cart/',{
                  quantity:itemCount3,
                  product_id:'3',
                  price:price3,
                  title:name3
                })
                .then((res)=>{
                  
                }). catch ((error) => {
                    console.error(error)});
                  }
                  const addToCart5 = async () => {
                    axios.post(API_URL+'/api/add-to-cart/',{
                      quantity:itemCount5,
                      product_id:'5',
                      price:price5,
                      title:name5
                    })
                    .then((res)=>{
                    
                    }). catch ((error) => {
                        console.error(error)});
                      }

  
  return (
    <>
    <ScrollView>
          <View style={styles.container}>
            <Image source={require('../assets/Images/plant4.png')} style={styles.image} />
            <View style={styles.plantDetails}>
              <Text style={{color:"white",fontSize: 20}}>{name1}</Text>
              
              <Text style={{color:"white"}}>{price1}</Text>
            </View>
      <View>
      <View style={styles.countContainer}>
        <TouchableOpacity onPress={removeItem} style={styles.buttonContainer}>
          <Text style={styles.button}>-</Text>
        </TouchableOpacity>
        <Text style={styles.input}>{itemCount}</Text>
        <TouchableOpacity onPress={addItem} style={styles.buttonContainer}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={addToCart1}
      >
        <Text style={styles.addButtonText}>Add to Cart</Text>
      
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addButton}
        onPress={()=>{navigation.navigate('Checkout');}}
      >
        <Text style={styles.addButtonText1}>proceed</Text>
      </TouchableOpacity>
    </View>
    </View>


    <View style={styles.container}>
            <Image source={require('../assets/Images/plant2.png')} style={styles.image} />
            <View style={styles.plantDetails}>
              <Text style={{color:"white"}}>{name2}</Text>
              <Text style={{color:"white"}}>{price2}</Text>
            </View>
      <View>
      <View style={styles.countContainer}>
        <TouchableOpacity onPress={removeItem2} style={styles.buttonContainer}>
          <Text style={styles.button}>-</Text>
        </TouchableOpacity>
        <Text style={styles.input}>{itemCount2}</Text>
        <TouchableOpacity onPress={addItem2} style={styles.buttonContainer}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={addToCart2}
      >
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addButton}
        onPress={()=>{navigation.navigate('Checkout');}}
      >
        <Text style={styles.addButtonText1}>proceed</Text>
      </TouchableOpacity>
    </View>
    </View>

    <View style={styles.container}>
            <Image source={require('../assets/Images/plant3.png')} style={styles.image} />
            <View style={styles.plantDetails}>
              <Text style={{color:"white"}}>{name3}</Text>
              <Text style={{color:"white"}}>{price3}</Text>
            </View>
      <View>
      <View style={styles.countContainer}>
        <TouchableOpacity onPress={removeItem3} style={styles.buttonContainer}>
          <Text style={styles.button}>-</Text>
        </TouchableOpacity>
        <Text style={styles.input}>{itemCount3}</Text>
        <TouchableOpacity onPress={addItem3} style={styles.buttonContainer}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={addToCart3}
      >
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addButton}
        onPress={()=>{navigation.navigate('Checkout');}}
      >
        <Text style={styles.addButtonText1}>proceed</Text>
      </TouchableOpacity>
    </View>
    </View>

    <View style={styles.container}>
            <Image source={require('../assets/Images/pngplant.png')} style={styles.image} />
            <View style={styles.plantDetails}>
              <Text style={{color:"white"}}>{name4}</Text>
              <Text style={{color:"white"}}>{price4}</Text>
            </View>
      <View>
      <View style={styles.countContainer}>
        <TouchableOpacity onPress={removeItem4} style={styles.buttonContainer}>
          <Text style={styles.button}>-</Text>
        </TouchableOpacity>
        <Text style={styles.input}>{itemCount4}</Text>
        <TouchableOpacity onPress={addItem4} style={styles.buttonContainer}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={addToCart4}
      >
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addButton}
        onPress={()=>{navigation.navigate('Checkout');}}
      >
        <Text style={styles.addButtonText1}>proceed</Text>
      </TouchableOpacity>
    </View>
    </View>

    <View style={styles.container}>
            <Image source={require('../assets/Images/plant0.png')} style={styles.image} />
            <View style={styles.plantDetails}>
              <Text style={{color:"white"}}>{name5}</Text>
              <Text style={{color:"white"}}>{price5}</Text>
            </View>
      <View>
      <View style={styles.countContainer}>
        <TouchableOpacity onPress={removeItem5} style={styles.buttonContainer}>
          <Text style={styles.button}>-</Text>
        </TouchableOpacity>
        <Text style={styles.input}>{itemCount5}</Text>
        <TouchableOpacity onPress={addItem5} style={styles.buttonContainer}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={addToCart5}
      >
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addButton}
        onPress={()=>{navigation.navigate('Checkout');}}
      >
        <Text style={styles.addButtonText1}>proceed</Text>
      </TouchableOpacity>
    </View>
    </View>
    </ScrollView>
    </>
  )
}



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    backgroundColor:"black",
    justifyContent:"space-between",
    padding:20
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"center",
    marginBottom: 16,
  },
  buttonContainer: {
    backgroundColor: '#eee',
    padding: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  button: {
    fontSize: 24,
    borderRadius:50,
    height:30
  },
  input: {
    fontSize: 24,
    marginHorizontal: 8,
    color:'white'
  },
  addButton: {
    backgroundColor: 'green',
    padding: 16,
    borderRadius: 4,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    marginLeft:6
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  addButtonText1: {
    color: '#fff',
    fontSize: 16,
  },
  cartItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  purchaseButton: {
    backgroundColor: '#0099ff',
    padding: 16,
    borderRadius: 4,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  purchaseButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  image: {
    width: 128,
    height: 128,
    borderRadius: 64,
    marginBottom: 16,
  },
  name: {
    fontWeight: 'bold',
  },
  price: {
    color: 'gray',
  },
  container1: {
    alignItems: 'center',
    padding: 16,
  },
});

export default AddToCart;
