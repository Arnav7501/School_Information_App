import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import User_Home from '../carpool/schoolLocation';
import { useNavigation} from '@react-navigation/native'
import SignInScreen from '../screens/SignInScreens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreens';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreens/NewPasswordScreen';
import HomeScreen from '../../HomeScreen';
import SchoolHomepageScreen from '../screens/SchoolHomepageScreens/SchoolHomepageScreen';

import Clubinterimscreen from '../screens/ClubScreens/clubinterimscreen'
import ClubHomeScreen from '../screens/ClubScreens/clubhomescreen'
import ClubEditScreen from '../screens/ClubScreens/clubeditscreen'

import CoursesInterimScreen from '../screens/CoursesScreens/coursesInterimScreen';
import CoursesHomeScreen from '../screens/CoursesScreens/coursesHomeScreen';
import CoursesEditScreen from '../screens/CoursesScreens/coursesEditScreen';

import SportsInterimScreen from '../screens/SportsScreens/sportsInterimScreen';
import SportsHomeScreen from '../screens/SportsScreens/sportsHomeScreen';
import SportsEditScreen from '../screens/SportsScreens/sportseditscreen';

import TeachersInterimScreen from '../screens/TeachersScreens/teachersInterimScreen';
import TeachersHomeScreen from '../screens/TeachersScreens/teachersHomeScreen';
import TeacherPostScreen from '../screens/TeachersScreens/clubreviewscreen';

import CreatePostScreen2 from '../screens/ClubScreens/clubreviewscreen';
import FeedScreen2 from '../screens/ClubScreens/clubreviewfeed';
import TeacherFeedScreen from '../screens/TeachersScreens/teacherreviewfeed';
import FeedPost from '../screens/ClubScreens/clubpostscreen';

import MyMap from '../carpool/carpool';
import { Auth, Hub, DataStore} from 'aws-amplify';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome, AntDesign, Entypo, MaterialIcons} from "@expo/vector-icons";
import {Carpool } from "../models";
 
const Stack = createNativeStackNavigator()


const Navigation = () => {
  const [user, setUser] = useState(undefined)
  

    const checkuser = async() => {
      try { 
      const authuser = await Auth.currentAuthenticatedUser({bypassCache :true})
      setUser(authuser)
    } catch (e) {
      setUser(null)
      }
     
    }
  useEffect(() => {
    checkuser();
  }, [])
 
  useEffect(() => {
    const listener = (data) => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkuser()
      }
    }

    Hub.listen('auth', listener)
    return () => Hub.remove('auth', listener)
  }, [])



  if (user === undefined) {
    return (
      <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    )
  }
  


  return (
    <NavigationContainer>
        {user ? (
          <Stack.Navigator screenOptions={{headerShown: false}}>
             <Stack.Screen 
            name = "Home" 
            component={HomeScreen} 
            options={{ headerShown: false }}
            />
            <Stack.Screen 
         name = "userhome" 
            component={User_Home} 
    options={{ headerShown: true, title: "Set your locations" }}
    />
          <Stack.Screen 
          name = "carpool" 
          component={MyMap}   

         options={{ headerShown: true, title: "Carpool",

        }}
            />    
            <Stack.Screen 
            name = "SchoolHomePage" 
            component={SchoolHomepageScreen} 
            options =  {{
              title: "School Homepage",
              headerShown: true
            }}
            />
            <Stack.Screen 
            name = "clubinterimscreen" 
            component={Clubinterimscreen} 
            options =  {{
              title: "clubinterimscreen"
            }}
            />
            <Stack.Screen 
            name = "teachersInterimScreen" 
            component={TeachersInterimScreen} 
            options =  {{
              title: "clubinterimscreen"
            }}
            />
             <Stack.Screen 
            name = "sportsInterimScreen" 
            component={SportsInterimScreen} 
            options =  {{
              title: "clubinterimscreen"
            }}
            />
             <Stack.Screen 
            name = "sportsEditScreen" 
            component={SportsEditScreen} 
            options =  {{
              title: "ClubHomeScreen"
            }}
            />
             <Stack.Screen 
            name = "coursesInterimScreen" 
            component={CoursesInterimScreen} 
            options =  {{
              title: "clubinterimscreen"
            }}
            />
             <Stack.Screen 
            name = "coursesEditScreen" 
            component={CoursesEditScreen} 
            options =  {{
              title: "clubinterimscreen"
            }}
            />
             <Stack.Screen 
            name = "clubhomescreen" 
            component={ClubHomeScreen} 
            options =  {{
              title: "ClubHomeScreen"
            }}
            />
            <Stack.Screen 
            name = "coursesHomeScreen" 
            component={CoursesHomeScreen} 
            options =  {{
              title: "ClubHomeScreen"
            }}
            />
            <Stack.Screen 
            name = "teachersHomeScreen" 
            component={TeachersHomeScreen} 
            options =  {{
              title: "ClubHomeScreen"
            }}
            />
            <Stack.Screen 
            name = "teachersPostScreen" 
            component={TeacherPostScreen} 
            options =  {{
              title: "teachersPostScreen"
            }}
            />
            <Stack.Screen 
            name = "teachersFeedScreen" 
            component={TeacherFeedScreen} 
            options =  {{
              title: "Teacher Reviews",
              headerShown: true
            }}
            />
            <Stack.Screen 
            name = "sportsHomescreen" 
            component={SportsHomeScreen} 
            options =  {{
              title: "ClubHomeScreen"
            }}
            />
            <Stack.Screen 
            name = "clubeditscreen" 
            component={ClubEditScreen} 
            options =  {{
              title: "clubeditscreen"
            }}
            />
             <Stack.Screen 
            name = "clubreviewscreen" 
            component={CreatePostScreen2} 
            options =  {{
              title: "clubreviewscreen"
            }}
            />
               <Stack.Screen 
            name = "clubfeedscreen" 
            component={FeedScreen2} 
            options =  {{
              title: "Reviews",
              headerShown: true
            }}
            />
              <Stack.Screen 
            name = "clubfeedpost" 
            component={FeedPost} 
            options =  {{
              title: "clubfeedpost"
            }}
            />
           
      </Stack.Navigator>
       
       
        ) : (
          <Stack.Navigator screenOptions={{headerShown: false}}>
          <>
          <Stack.Screen 
        name = "SignIn" 
        component={SignInScreen} 
        />
        <Stack.Screen 
        name = "SignUp" 
        component={SignUpScreen} 
        />
        <Stack.Screen 
        name = "ConfirmEmail" 
        component={ConfirmEmailScreen} 
        />
        <Stack.Screen 
        name = "ForgotPassword" 
        component={ForgotPasswordScreen} 
        />
        <Stack.Screen 
        name = "NewPassword" 
        component={NewPasswordScreen} 
        />
          
        </>
        </Stack.Navigator>
        )}
  
   
    </NavigationContainer>
  );
}

export default Navigation;