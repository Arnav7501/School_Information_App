import React, {useState, useEffect} from 'react';
import { StatusBar, StyleSheet,  Text, View,
     Image,
     TouchableOpacity,useWindowDimensions, ScrollView, Button} from 'react-native';

import { useRoute } from '@react-navigation/native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useNavigation, useFocusEffect} from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker';
import { DataStore } from '@aws-amplify/datastore';
import {SportsInfo} from '../../models';

const SportsHomeScreen = () => {
  
    const [image, setImage] = useState(""); 
    const [meetingtimes, setMeetingTimes] = useState("");
    const [howtosignup, setHowToSignUp] = useState("");
    const [averagetimecommitment, setAverageTimeCommitment] = useState("");
    const [descriptionofclub, setDescriptionOfClub] = useState("");
    const [show_Hide, setShowHide] = useState("");

    const {height, width} = useWindowDimensions();
    
   
    const [text, setText] = useState('Hide Image Component');
 
   
    const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.canceled) {

      setImage(result.assets[0].uri);
    
    }
    else {
        return
    }
    
  };
  const navigation = useNavigation()
  const route = useRoute()
  const schoolname1 = route.params.schoolname;
  const clubschoolname = route.params.schoolclubname
    var schoolname = ""
  
    for(let i = 9; i < schoolname1.length; i++){
        if (schoolname1[i] != "\"" && schoolname[i+1] != "}") {
            schoolname += schoolname1[i]
        }
        else {
            break
        }
    }
    
    schoolname =  clubschoolname + " " + schoolname
    
    useEffect(() => {
      const get_info = async() => {
        const original = await DataStore.query(SportsInfo, (p) =>
          p.Identifier("eq", schoolname)
        );
        setMeetingTimes(original[0].MeetingTimes)
        setHowToSignUp(original[0].HowToSignUp)
        setAverageTimeCommitment(original[0].TimeCommitment)
        setDescriptionOfClub(original[0].Description)
        setImage(original[0].Image)
        console.log("original", original[0])
      }
      // call the function
      get_info()
      }, [])

     useFocusEffect(
       React.useCallback(() => {
        const get_info = async() => {
        const original = await DataStore.query(SportsInfo, (p) =>
        p.Identifier("eq", schoolname)
      );
      setMeetingTimes(original[0].MeetingTimes)
      setHowToSignUp(original[0].HowToSignUp)
      setAverageTimeCommitment(original[0].TimeCommitment)
      setDescriptionOfClub(original[0].Description)
      setImage(original[0].Image)
      console.log("original", original[0])
    }
    // call the function
    get_info()
       }, [])
     );

 
  const signOut = async() => {
    navigation.goBack()
  }

 
    return (
        <View style={{padding: 10, flex: 1}}>
      <ScrollView contentContainerStyle={{ paddingBottom: height * 0.2}}>

        <Text style = {{ top:'1%', fontSize: RFPercentage(5.5), alignSelf: 'center', textAlign: 'center', color: '#000000', fontWeight: 'bold'}}>
         {schoolname} </Text>

        {image !== null && image.length > 0 ? 
        
        <Image 
        resizeMode="stretch"
        source={{uri: image}}
        style = {{
          height: height/3,
          width: 1.5 * width,
          alignSelf: 'center',
          marginTop: '5%',
          marginBottom: '3%',
          display: image == "" ? "none" : "flex"
         }}
         
        >
        </Image>
       : <></>}

       <Text style = {styles.infofont}>Meeting times:  </Text>
       <Text style = {styles.infofont2}>{meetingtimes}</Text>
       <Text style = {styles.infofont}>How To Sign Up:  </Text>
       <Text style = {styles.infofont2}>{howtosignup}</Text>
       <Text style = {styles.infofont}>Average Time Commitment: </Text>
       <Text style = {styles.infofont2}>{averagetimecommitment}</Text>
       <Text style = {styles.infofont}>Description of Sport: </Text>
       <Text style = {styles.infofont2}>{descriptionofclub}  </Text>

    
      
       <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>

      <TouchableOpacity  
       onPress={() => navigation.navigate('sportsEditScreen', {
        schoolname: schoolname
      })
    }
      style={styles.button}>
    <Text style={styles.text}>Edit Information</Text>
  </TouchableOpacity>
  </View>
  
   <TouchableOpacity  
       onPress={() => navigation.navigate('clubfeedscreen', {
        schoolname: schoolname
      })
    }
      style={styles.button}>
    <Text style={styles.text}>See Reviews</Text>
  </TouchableOpacity>



        </ScrollView>
               
     <Text
         onPress={signOut}
           style = {{
             width: '100%',
             textAlign: 'center',
             color: 'black',
             fontWeight: 'bold',
             marginTop: 'auto',
             marginVertical: 20,
             fontSize: 20
           }}>
             Back
         </Text>
        </View>
       );
}

const styles = StyleSheet.create({
  buttonStyle: {
    top:'2%',
    alignSelf: 'stretch',
    backgroundColor: '#A6E4FF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    marginTop: '5%'
},

container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 60,
    padding: 10
  },
  scrollView: {
    backgroundColor: '#ffffff',
    flex: 1
    

  },
    title: {
  
      color: 'black',
      fontSize: 32,
      fontWeight: "bold",
      letterSpacing: 3,
      
    },
   infofont: {
    fontSize: RFPercentage(2.8),
    marginTop: '2%',
    alignContent: 'flex-end',
    color: 'black',
    fontWeight: 'bold'
   
   },
   infofont2: {
    fontSize: RFPercentage(2.8),
    alignContent: 'flex-end',
    color: 'black',
   },
 
   button: {
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center',  
    flex: 1, 
    marginTop: '5%'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },

   
  });
 

export default SportsHomeScreen;