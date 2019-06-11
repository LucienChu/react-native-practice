/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'; // Version can be specified in package.json
import loginScreen from "./src/pages/Login/LoginPage"
import OrderScreen from "./src/pages/Order/CurrentOrders"


class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const yourOrderNavigationStack = createStackNavigator(
  {
    Home: {
      screen: OrderScreen,
      navigationOptions: {
        headerTitle: "This is the login screen",
        headerRight: <Button
              title="Cool"
            />}
          
      },
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
const RootStack1 = createStackNavigator(
  {
    Details: DetailsScreen,
    Home: OrderScreen,
  },
  {
    initialRouteName: 'Details',
  }
);

const rootTab = createBottomTabNavigator({
  "Your Orders": {screen: yourOrderNavigationStack
},
  Map: {screen: RootStack1},
  Settings: {screen: yourOrderNavigationStack
},
});

const appRoot = createStackNavigator({
  Login: {screen: loginScreen},
  mainTab: {screen: rootTab}
},
{
  defaultNavigationOptions: {
    header: null
  }
});

const AppContainer = createAppContainer(appRoot);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

