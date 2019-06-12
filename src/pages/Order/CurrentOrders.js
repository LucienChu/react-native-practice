import React from "react";
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
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

  static navigationOptions = {
    title: 'Home!',
  };
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
      <View style={{ paddingHorizontal: 10 }}>
        <SegmentedControlTab
          values={["On the way", "To Be Picekd up"]}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
        />
        <FlatList style={{ paddingVertical: 20 }}
          data={this.state.data}
          renderItem={({ item }) => (
            this.renderListItem(item)
          )}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
        />
      </View>
    );
  }

  renderListItem(item) {
    return (
      <TouchableOpacity onPress={() => {
        console.log("Pressed");
        this.props.navigation.navigate("Details")
      }}>
        <ListItem
          roundAvatar
          title={`${item.name.first} ${item.name.last} ${item.name.last} ${item.name.last} ${item.name.last} `}
          subtitle={`${item.email} ${item.email} ${item.email} ${item.email} ${item.email} ${item.email} `}
          leftAvatar={{ source: { uri: item.picture.thumbnail } }}
          containerStyle={{ borderBottomWidth: 0 }}

        />
      </TouchableOpacity>
    )
  }
}