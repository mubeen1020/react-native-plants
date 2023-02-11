import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import TabBar from '../Config/Top_Tab';

function PlantInstructions ({navigation}){
  return (
    <>
    <ScrollView>
    
    <View style={styles.container}>
     <View style={{marginBottom:30}}>
     <TabBar navigation={navigation}/>
     </View>
      <Image
        style={styles.plantImage}
        source={require('../assets/Images/plant2.png')}
      />
      <View style={styles.instructionsContainer}>
        <Text style={styles.header}>Cortan Petra</Text>
        <Text style={styles.subheader}>Planting Instructions:</Text>
        <Text style={styles.text}>
          1. Choose a well-draining pot with a suitable size for the plant.
        </Text>
        <Text style={styles.text}>
          2. Fill the pot with a good quality potting mix.
        </Text>
        <Text style={styles.text}>
          3. Water the plant thoroughly after planting.
        </Text>
        <Text style={styles.subheader}>Care Instructions:</Text>
        <Text style={styles.text}>
          1. Place the plant in a bright, but indirect light.
        </Text>
        <Text style={styles.text}>
          2. Water the plant regularly, allowing the soil to dry out slightly
          between waterings.
        </Text>
        <Text style={styles.text}>
          3. Fertilize the plant every 6-8 weeks during the growing season.
        </Text>
      </View>
    </View>

    <View style={styles.container}>
      <Image
        style={styles.plantImage}
        source={require('../assets/Images/pngplant.png')}
      />
      <View style={styles.instructionsContainer}>
        <Text style={styles.header}>Perperimia</Text>
        <Text style={styles.subheader}>Planting Instructions:</Text>
        <Text style={styles.text}>
          1. Choose a well-draining pot with a suitable size for the plant.
        </Text>
        <Text style={styles.text}>
          2. Fill the pot with a good quality potting mix.
        </Text>
        <Text style={styles.text}>
          3. Water the plant thoroughly after planting.
        </Text>
        <Text style={styles.subheader}>Care Instructions:</Text>
        <Text style={styles.text}>
          1. Place the plant in a bright, but indirect light.
        </Text>
        <Text style={styles.text}>
          2. Water the plant regularly, allowing the soil to dry out slightly
          between waterings.
        </Text>
        <Text style={styles.text}>
          3. Fertilize the plant every 6-8 weeks during the growing season.
        </Text>
      </View>
    </View>

    <View style={styles.container}>
      <Image
        style={styles.plantImage}
        source={require('../assets/Images/plant3.png')}
      />
      <View style={styles.instructionsContainer}>
        <Text style={styles.header}>Nest Farm</Text>
        <Text style={styles.subheader}>Planting Instructions:</Text>
        <Text style={styles.text}>
          1. Choose a well-draining pot with a suitable size for the plant.
        </Text>
        <Text style={styles.text}>
          2. Fill the pot with a good quality potting mix.
        </Text>
        <Text style={styles.text}>
          3. Water the plant thoroughly after planting.
        </Text>
        <Text style={styles.subheader}>Care Instructions:</Text>
        <Text style={styles.text}>
          1. Place the plant in a bright, but indirect light.
        </Text>
        <Text style={styles.text}>
          2. Water the plant regularly, allowing the soil to dry out slightly
          between waterings.
        </Text>
        <Text style={styles.text}>
          3. Fertilize the plant every 6-8 weeks during the growing season.
        </Text>
      </View>
    </View>

    <View style={styles.container}>
      <Image
        style={styles.plantImage}
        source={require('../assets/Images/plant4.png')}
      />
      <View style={styles.instructionsContainer}>
        <Text style={styles.header}>Alo Vera</Text>
        <Text style={styles.subheader}>Planting Instructions:</Text>
        <Text style={styles.text}>
          1. Choose a well-draining pot with a suitable size for the plant.
        </Text>
        <Text style={styles.text}>
          2. Fill the pot with a good quality potting mix.
        </Text>
        <Text style={styles.text}>
          3. Water the plant thoroughly after planting.
        </Text>
        <Text style={styles.subheader}>Care Instructions:</Text>
        <Text style={styles.text}>
          1. Place the plant in a bright, but indirect light.
        </Text>
        <Text style={styles.text}>
          2. Water the plant regularly, allowing the soil to dry out slightly
          between waterings.
        </Text>
        <Text style={styles.text}>
          3. Fertilize the plant every 6-8 weeks during the growing season.
        </Text>
      </View>
    </View>

    <View style={styles.container}>
      <Image
        style={styles.plantImage}
        source={require('../assets/Images/plant0.png')}
      />
      <View style={styles.instructionsContainer}>
        <Text style={styles.header}>Water melon</Text>
        <Text style={styles.subheader}>Planting Instructions:</Text>
        <Text style={styles.text}>
          1. Choose a well-draining pot with a suitable size for the plant.
        </Text>
        <Text style={styles.text}>
          2. Fill the pot with a good quality potting mix.
        </Text>
        <Text style={styles.text}>
          3. Water the plant thoroughly after planting.
        </Text>
        <Text style={styles.subheader}>Care Instructions:</Text>
        <Text style={styles.text}>
          1. Place the plant in a bright, but indirect light.
        </Text>
        <Text style={styles.text}>
          2. Water the plant regularly, allowing the soil to dry out slightly
          between waterings.
        </Text>
        <Text style={styles.text}>
          3. Fertilize the plant every 6-8 weeks during the growing season.
        </Text>
      </View>
    </View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor:"black",
    border:5,
    borderColor:"white"
  },
  plantImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  instructionsContainer: {
    width: '100%',
    alignItems: 'center',
    color:"white"
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:"white"
  },
  subheader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color:"white"
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color:"white"
  },
});

export default PlantInstructions;
