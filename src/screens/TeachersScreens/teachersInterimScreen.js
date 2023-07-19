import React, { Component, useState, useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, useWindowDimensions, Alert, ImageBackground} from 'react-native';

import { useNavigation} from '@react-navigation/native'
import { Auth } from 'aws-amplify';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { TextInput } from 'react-native-gesture-handler';
import { DataStore } from '@aws-amplify/datastore';
import { TeachersArray, SchoolArray } from '../../models';
import { useRoute } from '@react-navigation/native';
import Logo from '../../../assets/images/computericon.png'
import { FontAwesome5 } from '@expo/vector-icons'; 



const TeachersInterimScreen = () => {
  const items = [

  ];
  const route = useRoute()
  const navigation = useNavigation()
  const {fontScale} = useWindowDimensions(); 
  const styles = makeStyles(fontScale);
  const [newschoolname, setnewschoolname] = useState('');
  const {height} = useWindowDimensions(); 
  const schoolname1 = route.params.schoolname;
  var schoolname = schoolname1.toString()

  
  useEffect(() => {
    get_data()
  }, []);

  const signOut = () => {
    navigation.goBack()
  }

  const pass_schoolname = (item) => {
      var new1 = JSON.stringify(item)
      navigation.navigate('teachersFeedScreen', {
      schoolname: new1,
      clubschoolname:  schoolname
    })
  }
  
  const get_data = async() => {
    const posts = await DataStore.query(TeachersArray, (p) =>
    p.identifier("eq", schoolname)
  );
    var arrayLength = posts.length;
    for (var i = 0; i < arrayLength; i++) {
      items.push({name: posts[i].name}) 
  }  
  }

  const update_Array = async(newname) => {
    await DataStore.save(
        new TeachersArray({
          name: newname,
          identifier: schoolname
        })
      );
      items.push({name: newname}) 
  }
  
  return (
   
    //<SafeAreaView style={styles.container}>
   // <ImageBackground source={image2} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
     
        <Text style={styles.titleText}>
          Find your School's Teachers
        </Text>
        <FontAwesome5 name="chalkboard-teacher" size={120} color="black" style = {{alignSelf: 'center'}} />
        <SearchableDropdown
          //On text change listner on the searchable input
          onItemSelect={(item) => pass_schoolname(item)
        }
          //onItemSelect called after the selection from the dropdown
          containerStyle={{ padding: 5 }}
          //suggestion container style
          textInputStyle={{
            //inserted text style
            marginTop: '5%',
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: '#FAF7F6',
            borderRadius: 10,
            fontSize: 20,
          }}
          itemStyle={{
            //single dropdown item style
            padding: 10,
            marginTop: 2,
            backgroundColor: '#FAF9F8',
            borderColor: '#bbb',
            borderWidth: 1,
          }}
          itemTextStyle={{
            //text style of a single dropdown item
            color: '#222',
          }}
          itemsContainerStyle={{
            //items container style you can pass maxHeight
            //to restrict the items dropdown hieght
            maxHeight: '60%',
          }}
          placeholderTextColor = "#000000"
          items={items}
          //mapping of item array
          defaultIndex={2}
          //default selected item index
          placeholder="Name of Teacher"
          //place holder for the search input
          resetValue={false}
          //reset textInput Value with true and false state
          underlineColorAndroid="transparent"
          //To remove the underline from the android input
          
        />
        <Text style={styles.headingText} > Don't see your Teacher? 
        Add them to the list </Text>

         <TextInput 
          style = {{
          top: '10%', 
          fontSize: 12,
          marginTop: '5%',
          padding: 12,
          borderWidth: 1,
          borderColor: '#ccc',
          backgroundColor: '#FAF7F6',
          borderRadius: 10,
          fontSize: 20,
        }}
        placeholderTextColor = "#000000"
          placeholder = "Name of Teacher"
          onChangeText={newText => setnewschoolname(newText)}
          >

        </TextInput>
        < View style = {{top: '15%'}}>
        <TouchableOpacity  
        onPress = {() => 
         {
          update_Array(newschoolname)
          Alert.alert(newschoolname, "was added successfully")
        }
      }
      style={styles.button}>
    <Text style={styles.text}>Add</Text>
  </TouchableOpacity>
        
        </View>
        <Text
        onPress={signOut}
          style = {{
            width: '100%',
            textAlign: 'center',
            color: 'red',
            marginTop: 'auto',
            marginVertical: 20,
            fontSize: 20
          }}>
            Back
        </Text>
        
     </View>
 // </ImageBackground>
   // </SafeAreaView>
    
  );
};

export default TeachersInterimScreen;

const makeStyles = fontScale => StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  titleText: {
    padding: 8,
    fontSize: 35/fontScale,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: '5%'
  },
  headingText: {
    fontSize: 30/fontScale,
    top: '5%',
    textAlign: 'center',
  
  },
  logo:{
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',

    width: '100%',
    maxWidth: 300,  
    maxHeight: 200
},
text: {
  fontWeight: 'bold',
  color: '#ffffff',
  fontSize: 20
},
button: {
  alignItems: 'center',
  backgroundColor: '#000000',
  padding: 10,
  borderRadius: 5,
  height: '25%',
  justifyContent: 'center'
},
});
