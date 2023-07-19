import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Dimensions,Button } from 'react-native';
import Constants from 'expo-constants';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const trombone_array = [
    require('./Trombone/1.png'),
    require('./Trombone/2.png'),
    require('./Trombone/3.png'),
    require('./Trombone/4.png'),
    require('./Trombone/5.png'),
    require('./Trombone/6.png'),
]

const SightRead = ({navigation}) => {
    return (
      <ScrollView horizontal = {true}
      contentContainerStyle={styles.tinyLogo}
      >
    <Button 
          title="Back"
          onPress={() => navigation.navigate('Home')}
          />
    <View style>
      <Image 
         style = {styles.tinyLogo}
        source = {trombone_array[3]}
      />
    </View>
    </ScrollView>

 

  
   
    );
    



}

const styles = StyleSheet.create({
    tinyLogo: {
        width: null,
        height: null,
        aspectRatio: 1,
        transform: [{rotate: "270deg"}]
      
    },

    container: {
    
          
      }
    
  });

  export default SightRead;