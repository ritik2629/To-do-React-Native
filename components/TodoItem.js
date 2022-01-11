import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const TodoItem = ({ item, PressHandler }) => {
  const { text, id } = item;
  return (
    <TouchableOpacity onPress={() => PressHandler({ id })}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={24} color="red" style={{textAlign:"center"}} />

        <Text style={styles.itemText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    color: "blue",
    padding: 16,
    marginTop: 10,
    textAlign: "center",
    backgroundColor:"yellow",
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 13,
    borderStyle: "dashed",
    flexDirection:'column'
  },
  itemText:{
      color:"blue",
      fontSize:18,
      textAlign:"center"
  }
});

export default TodoItem;
