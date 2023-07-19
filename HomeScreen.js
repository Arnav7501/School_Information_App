import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Alert,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Auth, Storage } from "aws-amplify";
import SearchableDropdown from "react-native-searchable-dropdown";
import { TextInput } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Logo from "./assets/images/schoolimagereal.png";

import { DataStore } from "@aws-amplify/datastore";
import { SchoolArray } from "./src/models";

const HomeScreen = () => {
  const [items, setItems] = useState([]);
  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const update_Array = async (newname) => {
    await DataStore.save(
      new SchoolArray({
        name: newname,
      })
    );
    //items.push({name: newname})
    get_data();
  };

  const get_data = async () => {
    const items1 = [{ name: "Irvington" }];
    const posts = await DataStore.query(SchoolArray);
    var arrayLength = posts.length;
    for (var i = 0; i < arrayLength; i++) {
      items1.push({ name: posts[i].name });
    }
    setItems(items1);
  };

  const navigation = useNavigation();
  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);
  const [newschoolname, setnewschoolname] = useState("");
  const { height } = useWindowDimensions();

  useEffect(() => {
    get_data();
  }, []);
  const signOut = () => {
    Auth.signOut();
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.titleText}>Find your School</Text>

      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.29 }]}
        resizeMode="contain"
      ></Image>

      <SearchableDropdown
        //On text change listner on the searchable input
        onItemSelect={(item) =>
          navigation.navigate("SchoolHomePage", {
            schoolname: JSON.stringify(item),
          })
        }
        //onItemSelect called after the selection from the dropdown
        containerStyle={{ padding: 5 }}
        //suggestion container style
        textInputStyle={{
          //inserted text style
          marginTop: "-2%",
          padding: 12,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 10,
          backgroundColor: "white",
          fontSize: 20,
        }}
        itemStyle={{
          //single dropdown item style
          padding: 10,
          marginTop: 2,
          backgroundColor: "#FAF9F8",
          borderColor: "#bbb",
          borderWidth: 1,
        }}
        itemTextStyle={{
          //text style of a single dropdown item
          color: "#222",
        }}
        itemsContainerStyle={{
          //items container style you can pass maxHeight
          //to restrict the items dropdown hieght
          maxHeight: "60%",
        }}
        items={items}
        //mapping of item array
        defaultIndex={2}
        //default selected item index
        placeholder="Name of School (City)"
        placeholderTextColor="#000000"
        //place holder for the search input
        resetValue={false}
        //reset textInput Value with true and false state
        underlineColorAndroid="transparent"
        //To remove the underline from the android input
      />
      <Text style={styles.headingText}>
        {" "}
        Don't see your school? Add it to the list{" "}
      </Text>

      <TextInput
        placeholderTextColor="#000000"
        placeholderStyle={{ fontWeight: "bold" }}
        style={{
          top: "10%",
          fontSize: 20,
          marginTop: "5%",
          padding: 12,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 10,
          backgroundColor: "white",
        }}
        placeholder="Name of School (City)"
        onChangeText={(newText) => setnewschoolname(newText)}
      ></TextInput>
      <View style={{ top: "15%" }}>
        <TouchableOpacity
          onPress={() => {
            var newarray = capitalizeWords(newschoolname);
            update_Array(newarray);
            Alert.alert(newarray, "was added successfully");
          }}
          style={styles.button}
        >
          <Text style={styles.text}>Add</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          marginVertical: 0,
          marginTop: "auto",
          borderRadius: 5,
          width: "25%",
          alignSelf: "center",
          height: "5%",
          justifyContent: "center",
        }}
      >
        <Text
          onPress={signOut}
          style={{
            width: "100%",
            textAlign: "center",
            color: "#000000",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Sign Out
        </Text>
      </TouchableOpacity>
    </View>
    //</ImageBackground>
    // </SafeAreaView>
  );
};

export default HomeScreen;

const makeStyles = (fontScale) =>
  StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "center",
    },
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
      padding: 10,
    },
    titleText: {
      fontSize: 37 / fontScale,
      textAlign: "center",
      fontWeight: "bold",
    },
    headingText: {
      fontSize: 30 / fontScale,
      top: "5%",
      textAlign: "center",
      fontWeight: "bold",
    },
    logo: {
      alignContent: "center",
      justifyContent: "center",
      alignSelf: "center",
      width: "100%",
      marginTop: "-5%",
      // maxWidth: 300,
      // maxHeight: 200
    },
    text: {
      fontWeight: "bold",
      color: "#ffffff",
      fontSize: 20,
    },
    button: {
      alignItems: "center",
      backgroundColor: "#000000",
      padding: 10,
      borderRadius: 5,
      height: "25%",
      justifyContent: "center",
    },
  });
