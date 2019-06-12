import React from "react"
import { View, Text, Button } from "react-native"
import SegmentedControlTab from "react-native-segmented-control-tab"
export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0
    };
  }
  handleIndexChange = index => {
    console.log(`selected index: ${index}`)
    console.log(`was: ${this.state.selectedIndex}`)
    this.setState({
      selectedIndex: index
    });
    console.log(`now: ${this.state.selectedIndex}`)
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <SegmentedControlTab
          values={["First", "Second", "Third"]}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
        />
        <Text>LoginScreen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('mainTab')}
        />
      </View>
    );
  }
}