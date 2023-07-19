import { useEffect, useState } from "react";
import { useRoute } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Button,
  KeyboardAvoidingView,
  Linking
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DataStore, loadingLogo, Storage } from "aws-amplify";
import {Post2} from '../../models';
import { useNavigation } from "@react-navigation/native";
import { v4 as uuidv4 } from "uuid";



const CreatePostScreen2 = () => {
  const dummy_img =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png";
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [numlikes, setnumlikes] = useState("");
  const route = useRoute()
  const schoolname = route.params.schoolname;
  

  const onPost = async () => {
    console.log("schooolname", schoolname)
    const newPost = {
      name: name,
      description: description,
      number_of_likes: 0,
      number_of_shares: 1020,
      _version: 1,
      identifier: schoolname
    };
    if (image) {
      newPost.image = await uploadFile(image);
    }
    await DataStore.save(new Post2(newPost));

    setDescription("");
    setnumlikes(0)
    setImage("");
    
    navigation.navigate('clubfeedscreen', {
      schoolname: schoolname
    })
  };

  const uploadFile = async (fileUri) => {
    try {
      const response = await fetch(fileUri);
      const blob = await response.blob();
      const key = `${uuidv4()}.png`;
      await Storage.put(key, blob, {
        contentType: "image/png", // contentType is optional
      });
      return key;
    } catch (err) {
      console.log("Error uploading file:", err);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container, { marginBottom: insets.bottom }]}
      contentContainerStyle={{ flex: 1 }}
      keyboardVerticalOffset={150}
    >
      <View style={styles.header}>
  
      

        <Entypo
          onPress={pickImage}
          name="images"
          size={24}
          color="limegreen"
          style={styles.icon}
        />
      </View>
      <TextInput
        placeholderTextColor="purple"
        placeholder="Enter your name here"
        value={name}
        onChangeText={setName}
        style = {{top: '-5%'}}
    
      />

      <Text>{'In the below input, enter your review of the respective club'}</Text>
      <TextInput
        placeholder= {'Enter information here'}
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        multiline 
      />

    
      {image && <Image source={{ uri: image }} style={styles.image} />}

      <View style={styles.buttonContainer}>
        <Button onPress={onPost} title="Post" disabled={!description} />
      </View>

      
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    padding: 10,
  },
  header: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: "500",
  },
  input: {top: '5%'},
  buttonContainer: {
    marginTop: "auto",
    marginVertical: 10,
  },
  icon: {
    marginLeft: "auto",
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
  },
});

export default CreatePostScreen2;
