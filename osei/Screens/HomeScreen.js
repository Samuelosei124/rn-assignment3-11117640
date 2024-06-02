import React from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  Text,
} from "react-native";
import SearchBar from "../components/SearchBar";
import Category from "../components/Category";

const categories = [
  {
    id: "1",
    title: "Exercise",
    task: 4,
    image: require("../assets/Exercise.jpeg")
  },
  {
    id: "2",
    title: "Study",
    task: 6,
    image: require("../assets/Study.jpg"),
  },
  {
    id: "3",
    title: "Code",
    task: 8,
    image: require("../assets/code.jpeg")
  },
  {
    id: "4",
    title: "Cook",
    task: 9,
    image: require("../assets/cook.jpeg")
  },
  {
    id: "5",
    title: "Videos",
    task: 5,
    image: require("../assets/videos.jpeg")
  },
  {
    id: "6",
    title: "Health",
    task: 10,
    image: require("../assets/health.jpeg")
  },
  {
    id: "7",
    title: "Work",
    task: 9,
    image: require("../assets/work.jpeg")
  },
  {
    id: "8",
    title: "Relax",
    task: 11,
    image: require("../assets/relax.jpeg")
  }

];

const tasks = [
  { id: "1", title: "Mobile App Development" },
  { id: "2", title: "Web Development" },
  { id: "3", title: "UI/UX Design" },
  { id: "4", title: "Networking" },
  { id: "5", title: "Machine Learning" },
  { id: "6", title: "Artificial Intelligence" },
  { id: "7", title: "Digital Marketing" },
  { id: "8", title: "Content Writing" },
  { id: "9", title: "Video Editing" },
  { id: "10", title: "Photography" },
  { id: "11", title: "Research" },
  { id: "12", title: "Game Development" },
  { id: "13", title: "Animation" },
  { id: "14", title: "Film Making" },
  { id: "15", title: "Code Review" },
];

const Tasks = () => {
  return (
    <ScrollView style={styles.container}>
      <SearchBar />
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <Image source={require('../assets/filter.png')} style={styles.filter} />
      </View>
      <Text style={styles.testUpdate}>Categories</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <Category
              key={category.id}
              title={category.title}
              tasks={category.tasks}
              image={category.image}
            />
          ))}
        </View>
      </ScrollView>
      <Text style={styles.textUpdate}>Ongoing Tasks</Text>
      <View style={styles.tasksContainer}>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <View style={styles.taskItem}>
              <Text>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F0E8",
  },
  searchContainer: {
    flexDirection: "row",
    padding: 20,
    backgroundColor:'#F7F0E8',
    width: 380,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    padding: 9,
    borderWidth: 1,
    borderColor: "Yellow",
    borderRadius: 10,
    
  },
  textUpdate: {
    fontSize: 20,
    padding: 10,
  },
  testUpdate: {
    fontSize: 19,
    width: 170,
    height: 37,
    color: "#000000",
    top: 0,
  },
  horizontalScroll: {
    paddingVertical: 10,
  },
    filter: {
      width: 40,
      height: 40,
      backgroundColor: '#F0522F',
      top: 6,
      left: 10,
    },
    tasks:{
     fontSize: 10,
    },
  
  categoriesContainer: {
    flexDirection: "row",
    padding: 19,
    
  },
  tasksContainer: {
    padding: 10,
    margin: 5,
  },
  taskItem: {
    padding: 60,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    elevation:2,
  },
});

export default Tasks;