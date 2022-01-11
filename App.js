import React, { useState } from "react";
import { FlatList, StyleSheet,Keyboard, TouchableWithoutFeedback, View } from "react-native";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "working on React-Native", id: "1" },
    { text: "practicing on javaScript", id: "2" },
    { text: "give typing test", id: "3" },
  ]);

  const PressHandler = ({ id }) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id != id);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prev) => {
        return [{ text: text, id: Math.random().toString }, ...prev];
      });
    } else {
      alert("OOPS!!enter the text with more then 3 letter");
    }
  };
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss()
      console.log("clicked")
    }}>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} PressHandler={PressHandler} />
            )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
  content: {
    padding: 40,
    flex:1,
    // backgroundColor:"pink"
  },
  list: {
    margin: 20,
  },
});
