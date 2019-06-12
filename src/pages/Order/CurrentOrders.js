import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar, colors } from "react-native-elements";
import SegmentedControlTab from "react-native-segmented-control-tab";

export default class OrdersScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    selectedIndex: 0,
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
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
  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderHeader = () => {
    return(
        <SegmentedControlTab
          values={["First", "Second", "Third"]}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
        />
    )
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    return (
      <View style = {{paddingHorizontal: 10}}>
          <SegmentedControlTab
          values={["On the way", "To Be Picekd up"]}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
        />
        <FlatList style = {{paddingVertical: 20}}
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              title={`${item.name.first} ${item.name.last}`}
              subtitle={item.email}
              leftAvatar={{ source: {uri: item.picture.thumbnail }}}
              containerStyle={{ borderBottomWidth: 0 }}
            />
          )}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.renderSeparator}
        //   ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
        />
      </View>
    );
  }
}

// import React from "react"
// import {View, Text, Button} from "react-native"
// export default class OrdersScreen extends React.Component {
//     render() {
//       return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//           <Text>Home Screen</Text>
//           <Button
//             title="Go to Details"
//             onPress={() => this.props.navigation.navigate('Details')}
//           />
//         </View>
//       );
//     }
//   }