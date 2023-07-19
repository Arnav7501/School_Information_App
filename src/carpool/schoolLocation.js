import React, { useState, useEffect} from 'react';
import { ActivityIndicator, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import {Carpool } from "../models";
import { DataStore, Auth, Storage } from "aws-amplify";
import * as geolib from 'geolib';

const new_carpool_location = async (longitude, latitude, longitudeDelta, latitudeDelta, description, home, longitude_destination, latitude_destination) => {
  const user = await Auth.currentUserInfo();
  const newPost = {
    longitude: longitude,
    latitude: latitude,
    latitudeDelta: 0.922,
    longitudeDelta: 0.421,
    identifier: description,
    location: home,
    person_who_posted: user.username,
    longitude2: longitude_destination,
    latitude2: latitude_destination,
  };
  await DataStore.save(new Carpool(newPost));
};

const User_Home = () => {
  useEffect(() => {
  const check_carpool = async () => {
    const user = await Auth.currentUserInfo();
    var array = ''
    const sub2 = DataStore.observeQuery(Carpool, (c) =>
    c.person_who_posted("eq", user.username)
    ).subscribe(({ items }) => {
      if (items.length > 0) {
        navigation.navigate("carpool", {schoolname: items[0].identifier, endpoint: items[0]})
      }
    });

    
    isLoading(true)
    return () => {
      sub2.unsubscribe();
    };
};

check_carpool()

}, []);
  const navigation = useNavigation()

  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });


  const [loading, isLoading] = useState(false);

  const [homeLocation, setHomeLocation] = useState()
  return (
    loading ?
    <View style={{ flex: 1 }}>
        <GooglePlacesAutocomplete
        
        placeholder="Enter your home's name here"
        minLength={2}
        autoFocus={false}
        returnKeyType={'search'}
        listViewDisplayed="auto"
        fetchDetails
        onPress={(data, details = null) => {
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
          })
          setHomeLocation(data.description)
        }}
        query={{
          key: 'AIzaSyDi6SW6cNK2Z9Z8eU1vsa9YiHOHYm3UAQU',
          language: 'en',
        }}
        nearbyPlacesAPI="GoogleReverseGeocoding"
        debounce={200}
      />
        <GooglePlacesAutocomplete
        
        placeholder="Enter your school's name here"
        minLength={2}
        autoFocus={false}
        returnKeyType={'search'}
        listViewDisplayed="auto"
        fetchDetails
        onPress={(data, details = null) => {
          const endpoint1 = ({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
          })

          const distance = geolib.getDistance(region, endpoint1);
          const endpoint = ({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: distance/2000,
            longitudeDelta: distance/2000,
          })
          new_carpool_location(region.longitude, region.latitude, 0.0922, 0.0421, data.description, homeLocation, endpoint.longitude, endpoint.latitude)
          navigation.navigate("carpool", {schoolname: data.description, endpoint: endpoint})
        
     
        }}
        query={{
          key: 'AIzaSyDi6SW6cNK2Z9Z8eU1vsa9YiHOHYm3UAQU',
          language: 'en',
        }}
        nearbyPlacesAPI="GoogleReverseGeocoding"
        debounce={200}
      />
    </View> : 
    <ActivityIndicator/>
  )


};

export default User_Home;
