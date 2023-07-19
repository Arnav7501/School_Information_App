import React, { useEffect, useState } from 'react';
import { View, Text, Alert, ActivityIndicator} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {Carpool } from "../models";
import { DataStore, Auth, Predicates } from "aws-amplify";
import Navigation from '../navigation';
import { useNavigation } from '@react-navigation/native';

const MyMap = ({route}) => {
  const navigation = useNavigation()
  const [region, setRegion] = useState([{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421}])

  const [userHome, setUserHome] = useState([{
    latitude: 1,
    longitude: 1,
    latitudeDelta: 0.922,
    longitudeDelta: 0.421,
    longitude2: 1,
    latitude2: 2,
    identifier: "hi",
    location: "ll"

  }])

    const [endpoint2, setEndPoint] = useState({
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421})

  const [travelTime, setTravelTime] = useState()

  const {schoolname} = route.params 

    useEffect(() => {
      const fetchSchoolUsers = async () => {
        const user = await Auth.currentUserInfo();
        const sub = DataStore.observeQuery(Carpool, (c) =>
      c.identifier("eq", schoolname)
    ).subscribe(({ items }) => {
      setRegion(items)
    });
    const sub2 = DataStore.observeQuery(Carpool, (c) =>
    c.person_who_posted("eq", user.username)
    ).subscribe(({ items }) => {
    
    setUserHome(items)
    });
   
      return () => {
        sub.unsubscribe();
        sub2.unsubscribe();
      };
      };
      
      fetchSchoolUsers();
      
    //  setEndPoint({latitude: userHome[0].latitude2, longitude: userHome[0].longitude2})
    
    }, []);
    
var endpoint = '' 
try {
   endpoint = {latitude: userHome[0].latitude2, longitude: userHome[0].longitude2, latitudeDelta: 1, longitudeDelta: 1}}
catch {


}
const delete_userhome = async() => {
  try {
    navigation.navigate("userhome")  
  await DataStore.delete(userHome[0])}
  catch {
  navigation.navigate("userhome")}
  console.log("Deleted")
}

const apiKey = 'AIzaSyDi6SW6cNK2Z9Z8eU1vsa9YiHOHYm3UAQU';
const mode = 'driving';


const findDirections = (url, item) => {
fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
    setTravelTime(`Duration: ${responseJson.rows[0].elements[0].duration.text}`)
    Alert.alert(`Duration: ${responseJson.rows[0].elements[0].duration.text}`, item.location)
  })
  .catch((error) => {
    Alert.alert('Error', error.message);
    
  });

}

 for (let i = 0; i < region.length; i++) {
   if (region[i].location === userHome[0].location) {
     region.splice(i, 1)
 }
 }

  return (
    userHome[0].latitude !== 1 ?
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 5}} region={endpoint}>
  
         {region.map((item, index) => {

        let myVariable = item.latitude.toString() + ',' +  item.longitude.toString();
        return  <Marker 
        coordinate={item}  
        onPress = {() => {
        var origin = userHome[0].latitude.toString() + ',' +  userHome[0].longitude.toString()
        findDirections(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${myVariable}&mode=driving&key=${apiKey}`, item)
       
      }}>
      </Marker  >
      })}  
    
        <Marker coordinate={endpoint} pinColor = 'gold' /> 
        {<Marker 
        coordinate={{latitude: userHome[0].latitude, longitude: userHome[0].longitude}} pinColor = 'blue'
        onPress={() => {
          Alert.alert('Your house', `${userHome[0].location}`, [
            {
              text: 'Delete location',
              onPress: () => delete_userhome(),
              style: 'cancel',
            },
            {text: 'OK'},
          ]);
        }}
        />     }
              </MapView>  
    </View> :
    <ActivityIndicator />
  ) 
}
;

export default MyMap;
