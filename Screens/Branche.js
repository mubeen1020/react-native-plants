import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import TabBar from '../Config/Top_Tab';

const branches = [
  { id: '1', name: 'Nagan Branch', address: '123 Main 45, Karachi, Pakistan', image: require('../assets/Images/shop1.jpg') },
  { id: '2', name: 'Up Branch', address: '456 Park 67, Karachi, Pakistan', image: require('../assets/Images/shop2.webp') },
  { id: '3', name: 'Saddar Branch', address: '789 Main 29, Karachi, Pakistan', image: require('../assets/Images/shop6.jpeg') },
];

function PlantShopBranches({ navigation }) {
  const renderBranch = ({ item }) => (
    <TouchableOpacity style={styles.branchContainer} onPress={() => navigation.navigate('Home')}>
      <Image source={item.image} style={styles.branchImage} />
      <View style={styles.branchInfo}>
        <Text style={styles.branchName}>{item.name}</Text>
        <Text style={styles.branchAddress}>{item.address}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
    
    <View style={styles.container}>
    <View>
        <TabBar navigation={navigation}/>
    </View>
      <FlatList
        data={branches}
        keyExtractor={item => item.id}
        renderItem={renderBranch}
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  branchContainer: {
    backgroundColor: 'black',
    padding: 10,
    border:3,
    borderColor:"white",
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  branchImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  branchInfo: {
    flex: 1,
  },
  branchName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  branchAddress: {
    fontSize: 14,
    color: 'green',
  },
});

export default PlantShopBranches;
