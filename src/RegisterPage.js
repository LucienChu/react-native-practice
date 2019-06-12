import React, { Component } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";



export default class RegisterPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                    placeholder="Enter your name"
                    returnKeyType="next"
                    onSubmitEditing={() => this.emailinput.focus()}
                />

                <TextInput style={styles.input}
                    placeholder="Enter your email"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    // autoCapitalize = 
                    ref={(input) => this.emailinput = input}
                />

                <TextInput style={styles.input}
                    placeholder="Enter your password"
                    returnKeyType="go"
                    secureTextEntry
                    ref={(input) => this.passwordInput = input}
                />

                <TouchableOpacity
                    style={styles.buttoncontainer}
                    onPress={() => this.props.navigation.navigate("Login")}>
                    <Text style={styles.buttontext}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
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

    input: {
        paddingLeft: 20,
        borderRadius: 50,
        height: 50,
        fontSize: 25,
        backgroundColor: "white",
        borderColor: "green",
        borderWidth: 1,
        marginBottom: 20,
        color: "#34495e"
    },

    buttoncontainer: {
        height: 50,
        borderRadius: 50,
        backgroundColor: "#labc9c",
        paddingVertical: 10,
        justifyContent: "center"
    },

    buttontext: {
        textAlign: "center",
        color: "#ecf0f1",
        fontSize: 20
    }
}