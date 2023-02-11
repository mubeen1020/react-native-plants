import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, Image, TouchableOpacity } from 'react-native';

const plants = [
  {
    id: 1,
    name: 'Perperemia',
    description: 'The Perperemiaplant is known for its healing properties.',
    price: 400,
    image: require('../assets/Images/pngplant.png'),
  },
  {
    id: 2,
    name: 'Corton Petra',
    description: 'The Corton Petra is believed to bring good luck and prosperity.',
    price: 200,
    image: require('../assets/Images/plant2.png'),
  },
  {
    id: 3,
    name: 'Nest Farm ',
    description: 'The Farm Nestt is known for its air-purifying abilities.',
    price: 160,
    image: require('../assets/Images/plant3.png'),
  },
  {
    id: 4,
    name: 'Aloe Vera',
    description: 'The Aloe Vera plant is known for its healing properties.',
    price: 210,
    image: require('../assets/Images/plant4.png'),
  },
  {
    id: 5,
    name: 'Water melon',
    description: 'The Water melon plant is known for its healing properties.',
    price: 600,
    image: require('../assets/Images/plant0.png'),
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginBottom:10
  },
  plantContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    marginBottom:10
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  plantDetails: {
    flex: 1,
    paddingLeft: 20,
    color:"white"
  },
  plantName: {
    fontSize: 16,
    fontWeight: 'bold',
    color:"white"
  },
  plantDescription: {
    fontSize: 14,
    color:"white"
  },
  plantPrice: {
    fontSize: 14,
    color: '#00BFFF',
  },
  addToCartButton: {
    backgroundColor: '#00BFFF',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  addToCartButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

const PlantItem = ({ item, onPress }) => (
  <TouchableOpacity style={styles.plantContainer} onPress={onPress}>
    <Image source={item.image} style={styles.image} />
    <View style={styles.plantDetails}>
      <Text style={styles.plantName}>{item.name}</Text>
      <Text style={styles.plantDescription}>{item.description}</Text>
      <Text style={styles.plantPrice}>${item.price}</Text>
    </View>
  </TouchableOpacity>
);

const Cart = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={plants}
        renderItem={({ item }) => (
          <PlantItem item={item} onPress={() => navigation.navigate('Add-to-Cart', { plant: item })} />
        )}
      />
    </View>
  );
};
export default Cart