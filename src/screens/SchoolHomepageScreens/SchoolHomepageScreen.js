import React from 'react';
import { View, Text, Image, StyleSheet,
     ScrollView, TouchableOpacity, useWindowDimensions } from 'react-native'

import { useRoute } from '@react-navigation/native';
import { RFPercentage } from "react-native-responsive-fontsize";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation} from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 



const SchoolHomepageScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const schoolname1 = route.params.schoolname;
    var schoolname = ""
    const {height} = useWindowDimensions()
  
    for(let i = 9; i < schoolname1.length; i++){
        if (schoolname1[i] != "\"" && schoolname[i+1] != "}") {
            schoolname += schoolname1[i]
        }
        else {
            break
        }
    }

   
    return (
      <ScrollView contentContainerStyle={{ paddingBottom: height * 0.25}}>
       <SafeAreaView style = {{backgroundColor: "#000000"}}>
       <View style={{justifyContent: 'center', alignItems: 'center'}}>

     
             <Text style = {{
                fontSize: 40,
                fontWeight: 'bold',
                color: "#ffffff",
                textAlign: 'center'
             }}>{schoolname}</Text>
   </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('clubinterimscreen', {
              schoolname: schoolname
            })
          }
            >
            
            <Text style = {styles.buttonFont}>Clubs</Text>
            <MaterialIcons name="computer" size={120} color="black" style = {{ marginLeft: 'auto'}} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('teachersInterimScreen', {
              schoolname: schoolname
            })
          }
            >
            
            <Text style = {styles.buttonFont}>Teachers</Text>
            <FontAwesome5 name="chalkboard-teacher" size={90} color="black" style = {{ marginLeft: 'auto',}}  />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('sportsInterimScreen', {
              schoolname: schoolname
            })
          }
            
            >
             
            <Text style = {styles.buttonFont}>Sports</Text>
            <MaterialIcons name="sports-football" size={100} color="black" style = {{ marginLeft: 'auto'}} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('coursesInterimScreen', {
              schoolname: schoolname
            })
          }>
               
            <Text style = {styles.buttonFont}>Courses</Text>
            <Entypo name="book" size={100} color="black" style = {{ marginLeft: 'auto',}} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('userhome', {
              schoolname: schoolname
            })
          }>
               
            <Text style = {styles.buttonFont}>Carpool</Text>
            <FontAwesome name="car" size={80} color="black" style = {{ marginLeft: 'auto',}}  />
          </TouchableOpacity>
          
         
        </SafeAreaView>
        </ScrollView>


      );
    };



export default SchoolHomepageScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 0
    },
    button: {
      flexDirection: 'row',
      alignItems: "center",
      backgroundColor: "#ffffff",
      padding: 10,
      height: "20.5%",
      justifyContent: 'center',
      borderColor: "#000000",
      borderWidth: 2,
    
    },
    countContainer: {
      alignItems: "center",
      padding: 10,
      
    },

    buttonFont: {
        fontSize: RFPercentage(8)
    },
    buttonImageIconStyle: {
      flexDirection: 'row',
      marginRight: '0%',
      height: '90%',
      width: '30%',
      resizeMode: 'stretch',
      marginLeft: 'auto',
      justifyContent: 'flex-start',
      
    },
  });