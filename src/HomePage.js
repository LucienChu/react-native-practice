import React, { Component } from "react";
import { View, Text, } from "react-native";

export default class HomePage extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.Text}> Welcome </Text>
            </View>
        )
    }
}

const styles = {
    container: {
        padding: 20,
        felx: 1,
        backgroundColor: "#ecf0f1",
        justifyContent: "center",
        alignItems: "stretch"
    },

    text: {
        textAlign: "center",
        color: "black",
        fontSize: 20
    }
}