/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import loginScreen from "./src/pages/login/LoginPage"
import OrderScreen from "./src/pages/order/CurrentOrders"
import DetailsScreen from "./src/pages/order/OrderDetails"
import MapScreen from "./src/pages/map/MapPage"


// Order navigation stack
const yourOrderNavigationStack = createStackNavigator(
  {
    Home: {
      screen: OrderScreen,
      navigationOptions: {
        headerTitle: "Your Orders"
      }

    },
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);


const RootStack1 = createStackNavigator(
  {
    Details: MapScreen,
    Home: OrderScreen,
  },
  {
    initialRouteName: 'Details',
  }
);

// tab bars
const rootTab = createBottomTabNavigator({
  "Your Orders": {
    screen: yourOrderNavigationStack
  },
  Map: { screen: RootStack1 },
  Settings: {
    screen: yourOrderNavigationStack
  },
});


// the top structure of the app
const appRoot = createStackNavigator({
  Login: { screen: loginScreen },
  mainTab: { screen: rootTab }
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

