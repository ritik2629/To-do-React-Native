import React from "react";
import {StyleSheet, Text, View } from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>To-Do-List</Text>
        </View>
    )
}

const styles= StyleSheet.create({
header:{
    height: 80,
    paddingTop: 38,
    backgroundColor:"red"
},title:{
    textAlign:'center',
    fontSize: 30,
    fontWeight:"bold",
    color:"#fff"
}
})

export default Header
