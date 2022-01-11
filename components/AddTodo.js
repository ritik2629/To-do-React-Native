import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        placeholder="add todo....."
        onChangeText={changeHandler}
        style={styles.input}
      />
      <Button title="add" color="red" onPress={() => submitHandler(text)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    padding: 8,
    borderBottomColor: "red",
    borderBottomWidth: 1,
  },
});

export default AddTodo;
