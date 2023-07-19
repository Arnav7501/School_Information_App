import React, {useState, useEffect} from 'react';
import { Text,TextInput, View, StyleSheet, Alert, Pressable, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { DataStore } from '@aws-amplify/datastore';
import {SportsInfo} from '../../models';
import * as ImagePicker from 'expo-image-picker';
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
 
} from "@expo/vector-icons";
// You can import from local files

// or any pure javascript modules available in npm
const update_Array = async(identifier, MeetingTimes,HowToSignUp,TimeCommitment,Description, Image) => {
    const original = await DataStore.query(SportsInfo, (p) =>
    p.Identifier("eq", identifier)
  );
    if (original.length == 0) {
  
        await DataStore.save(
            new SportsInfo({
              Identifier: identifier,
              MeetingTimes: MeetingTimes,
              HowToSignUp: HowToSignUp,
              TimeCommitment: TimeCommitment,
              Description: Description,
              Image: Image
            })
          );
    }

    else {
    await DataStore.save(
      SportsInfo.copyOf(original[0], updated => {
        updated.Identifier = identifier,
        updated.MeetingTimes = MeetingTimes,
        updated.HowToSignUp = HowToSignUp,
        updated.TimeCommitment = TimeCommitment,
        updated.Description = Description
        updated.Image = Image
      })
    );
  }
  Alert.alert("Saved")
}

export default function SportsEditScreen() {
   
    const [MeetingTimes, setMeetingTimes] = useState('');
    const [HowToSignUp, setHowToSignUp] = useState('');
    const [TimeCommitment, setTimeCommitment] = useState('');
    const [Description, setDescription] = useState('');


    const [image, setImage] = useState('');
    const navigation = useNavigation()
    const route = useRoute()
    const schoolname1 = route.params.schoolname;

    useEffect(() => {
      // declare the data fetching function
      const get_info = async() => {
        const original = await DataStore.query(SportsInfo, (p) =>
          p.Identifier("eq", schoolname1)
        );

        setMeetingTimes(original[0].MeetingTimes)
        setHowToSignUp(original[0].HowToSignUp)
        setTimeCommitment(original[0].TimeCommitment)
        setDescription(original[0].Description)
      }
      
      // call the function
      get_info()
    }, [])

    const signOut = async() => {
        navigation.goBack()
      }
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
      
      
  return (
    <ScrollView>
    <View style={styles.container}>

<Text style = {{ top:'1%', fontSize: RFPercentage(5.5), alignSelf: 'center', textAlign: 'center', color: '#000000', fontWeight: 'bold', marginBottom: '8%'}}>
         Edit Sport Information </Text>



        <Text style ={{fontSize: RFPercentage(2.5)}}>Meeting Times:</Text>
        <TextInput 
          defaultValue={MeetingTimes}
          style = {{
          fontSize: 12,
          marginTop: '1%',
          padding: 12,
          borderWidth: 1,
          borderColor: '#ccc',
          backgroundColor: '#FAF7F6',
          borderRadius: 10,
          marginBottom: '5%'
        }}
          placeholder = "Meeting Times:"
          onChangeText={newText => setMeetingTimes(newText)}
          >

        </TextInput>
        <Text style ={{fontSize: RFPercentage(2.5)}}>How to Sign Up:</Text>
        <TextInput 
        defaultValue={HowToSignUp}
          style = {{
          fontSize: 12,
          marginTop: '1%',
          padding: 12,
          borderWidth: 1,
          borderColor: '#ccc',
          backgroundColor: '#FAF7F6',
          borderRadius: 10,
          marginBottom: '5%'
          
        }}
          placeholder = "How to Sign Up:"
          onChangeText={newText => setHowToSignUp(newText)}
          >

        </TextInput>
        <Text style ={{fontSize: RFPercentage(2.5)}}>Average Time Commitment:</Text>
        <TextInput 
        defaultValue={TimeCommitment}
          style = {{
          fontSize: 12,
          marginTop: '1%',
          padding: 12,
          borderWidth: 1,
          borderColor: '#ccc',
          backgroundColor: '#FAF7F6',
          borderRadius: 10,
          marginBottom: '5%'
          
        }}
          placeholder = "Average Time Commitment"
          onChangeText={newText => setTimeCommitment(newText)}
          >

        </TextInput>
        <Text style ={{fontSize: RFPercentage(2.5)}}>Description of Club:</Text>
        <TextInput 
        defaultValue={Description}
          style = {{
          fontSize: 12,
          marginTop: '1%',
          padding: 12,
          borderWidth: 1,
          borderColor: '#ccc',
          backgroundColor: '#FAF7F6',
          borderRadius: 10
          
        }}
          placeholder = "Description of club"
          onChangeText={newText => setDescription(newText)}
          >

        </TextInput>

        <Pressable style={[styles.button, { backgroundColor: "royalblue" }]}    onPress={() => pickImage()}>
        <AntDesign name="pluscircle" size={16} color="white" />
        <Text 
        style={[styles.buttonText, { color: "white" }]}>
        Add new Image
        </Text>
      </Pressable>
        <Text
         onPress={() => {
          update_Array(schoolname1, MeetingTimes,HowToSignUp,TimeCommitment,Description, image)}}
           style = {{
             width: '100%',
             textAlign: 'center',
             color: 'blue',
             marginVertical: 20,
             fontSize: 20
           }}>
             Save
         </Text>
        <Text
         onPress={signOut}
           style = {{
             width: '100%',
             textAlign: 'center',
             color: 'black',
             fontWeight: 'bold',
             marginTop: 'auto',
             marginVertical: 20,
             fontSize: 20,
             top: '25%'
           }}>
             Back
         </Text>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    marginTop: '5%',
    alignSelf: "stretch",
    flexDirection: "row",
    backgroundColor: "gainsboro",
    margin: 5,
    padding: 7,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,

  },
  buttonText: {
    marginHorizontal: 5,
    fontWeight: "500",
  },
});
