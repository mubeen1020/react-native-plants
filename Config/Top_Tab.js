import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Home from '../Screens/Home';
import PlantInstructions from '../Screens/Plant_intruction';

function TabBar({ navigation, route }){
  const [selectedTab, setSelectedTab] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.tab,
          { backgroundColor: selectedTab === 0 ? 'black' : 'black' },
        ]}
        onPress={() => {setSelectedTab(0);navigation.navigate('Home')}}
      >
        <Text style={styles.tabTitle}>Top</Text>
      </TouchableOpacity>
      {/* {selectedTab == 0 && <Home/>} */}
      <TouchableOpacity
        style={[
          styles.tab,
          { backgroundColor: selectedTab === 1 ? 'black' : 'black' },
          
        ]}
        onPress={() => {setSelectedTab(1);navigation.navigate('Instruction');
        }}
      >
        <Text style={styles.tabTitle}>Instruction</Text>
        
      </TouchableOpacity>
      {/* {selectedTab == 1 && <PlantInstructions/>} */}
      <TouchableOpacity
        style={[
          styles.tab,
          { backgroundColor: selectedTab === 2 ? 'black' : 'black' },
        ]}
        onPress={() => {navigation.navigate('Shop');}}
      >
        <Text style={styles.tabTitle}>Branches</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor:"white"
  },
  tab: {
    height: 50,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TabBar;
