import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import CSTextField from '../components/CSTextField';
import TopBar from '../Config/Top_Tab';
import MyTabs from '../Config/Top_Tab';


const Home= ({navigation}) => {
  const [plants, setPlants] = useState([
    {id:1, name: 'Peace Lily', image: require('../assets/Images/plant6.jpg'),description: 'The Peace Lily is known for its air-purifying abilities.' },
    {id:2, name: 'Sun Flower', image: require('../assets/Images/plant7.jpg') ,description: 'The Sun Flower is known for its air-purifying abilities.'},
    {id:3, name: ' Snake Plant', image: require('../assets/Images/plant8.jpeg'),description: 'The Snake Plant is known for its air-purifying abilities.' },
    {id:4, name: 'Pothos', image: require('../assets/Images/PLANT11.jpg'),description: 'The Peace Lily is known for its air-purifying abilities.' },
  ]);

  const [search, setSearch] = useState('');
  const [filteredPlants, setFilteredPlants] = useState(plants);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = plants.filter(plant => plant.name.toLowerCase().includes(text.toLowerCase()));
    setFilteredPlants(filtered);
  };
console.log(filteredPlants)
  return (
 
  
 <ScrollView>
    <View style={styles.container}>
       
      <Text style={styles.header}>There's a Plants</Text>
      <Text style={styles.header}>for everyone</Text>
     
      <View style={{paddingHorizontal: 20, paddingVertical: 20,width:350}}>
    <CSTextField
      placeholder="Search"
      placeholderTextColor="white"
      onChangeText={handleSearch}
    />
    </View>
    <TopBar navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
     
        {plants.map((plant, index) => (
           <TouchableOpacity onPress={()=>{navigation.navigate("Cart")}}>
          <View style={styles.card} key={index}>
            <Image source={plant.image} style={styles.image} />
            <Text style={styles.text}>{plant.name}</Text>
            <Text style={styles.text}>{plant.description}</Text>
          </View>
          </TouchableOpacity>
        ))}
       
      </ScrollView>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:"white"
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 50,
  },
  card: {
    backgroundColor: '#f2f2f2',
    width: 300,
    height: 300,
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"black"
  },
  image: {
    width: '100%',
    height: '60%',
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowOpacity:20,
    shadowColor:"white"
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color:"white"
  },
});

export default Home;