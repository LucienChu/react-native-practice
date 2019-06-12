import React, { Component } from "react";
import { View, TextInput, Text, Button, TouchableOpacity } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import RegisterPage from "./RegisterPage"
import HomePage from "./HomePage"
export class LoginPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textfields}>
                    <TextInput style={styles.input}
                        placeholder="Username"
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <TextInput style={styles.input}
                        placeholder="Password"
                        returnKeyType="go"
                        secureTextEntry
                        ref={(input) => this.passwordInput = input}
                        onSubmitEditing={() => this.passwordInput = input}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <TouchableOpacity style={styles.buttoncontainer}
                        onPress={() => this.props.navigation.push("Home")}>
                        <Text style={styles.buttontext}>Login</Text>
                    </TouchableOpacity>

                    <Button
                        title="Register"
                        color="blue"
                        onPress={() => this.props.navigation.navigate("Register")}
                    />
                </View>
            </View>
        );
    }
}

// export default class App extends Component {
//     render() {
//         return(
//             <AppStackNavigator />
//         )
//     }
// }

const AppStackNavigator = createStackNavigator({
    Login: LoginPage,
    Register: RegisterPage,
    Home: HomePage
})


const App = createAppContainer(AppStackNavigator);

export default App
const styles = {
    container: {
        padding: 20,
        flex: 1,
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
        color: "green"
    },

    buttoncontainer: {
        height: 50,
        borderRadius: 50,
        backgroundColor: "yellow",
        paddingVertical: 10,
        justifyContent: "center"
    },

    buttontext: {
        textAlign: "center",
        color: "red",
        fontSize: 20
    }
}