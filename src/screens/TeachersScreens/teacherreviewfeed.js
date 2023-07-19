import { FlatList, StyleSheet, Image, Text, Pressable } from "react-native";
import FeedPost from "./teacherpostscreen";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { DataStore, SortDirection, Predicates } from "aws-amplify";
import { Post2 } from '../../models';

const img =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png";

const TeacherFeedScreen = () => {
  const navigation = useNavigation();
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
    
    schoolname =  clubschoolname + " " + schoolname + " teacher"

    
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const subscription = DataStore.observeQuery(Post2, Predicates.ALL, {
      sort: (s) => s.createdAt(SortDirection.DESCENDING),
    }).subscribe(({ items }) => setPosts(items));

    return () => subscription.unsubscribe();
  }, []);
  

  var newpost = posts
  var array = []
  for (let i = 0; i < posts.length; i++) {
    if (newpost[i].identifier == schoolname) {
        array.push(newpost[i])
    }
};

  const createPost = () => {
    navigation.navigate("teachersPostScreen", {
        schoolname: schoolname
      });
  };

  return (
    <FlatList
      data={array}
      renderItem={({ item }) => <FeedPost post={item} />}
      showsVerticalScrollIndicator={false}
      initialNumToRender={5} 
      ListHeaderComponent={() => (
        <Pressable onPress={createPost} style={styles.header}>

          <Text style={styles.name}>Submit a Review</Text>
          <Entypo
            name="images"
            size={24}
            color="limegreen"
            style={styles.icon}
          />
        </Pressable>
      )}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    color: "gray",
  },
  icon: {
    marginLeft: "auto",
  },
});

export default TeacherFeedScreen;
