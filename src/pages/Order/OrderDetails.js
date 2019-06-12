import React from "react";
import { SectionList, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class DetailsScreen extends React.Component {
  renderMap() {
    return (
      <Text>A map would be rendered here</Text>
    )
  }
  renderText = ({ index, section: { data } }) => {
    return (
      <TouchableOpacity onPress={() => { console.log("pressed") }}>
        <Text key={index} style={{ paddingLeft: 20 }}>{data}</Text>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <SectionList
        style={{ width: "90%", alignSelf: "center" }}
        renderSectionHeader={({ section: { sectionTitle } }) => {
          return (
            <Text style={{ fontWeight: 'bold' }}>{sectionTitle}</Text>
          )
        }}
        sections={[
          { sectionTitle: 'To', data: ['Lucien Chu\n1445 Rue Towers\nMontreal QC, H3H 2E2\nCanada'], renderItem: this.renderText },
          { sectionTitle: 'From', data: ['Restaurant One\nApt 402, 2000 Clark \nMontreal QC, H2T 2V3\nCanada'], renderItem: this.renderText },
          { sectionTitle: 'Comment', data: ['N/A'], renderItem: this.renderText },
          { sectionTitle: 'Map', data: [4], renderItem: this.renderMap },
        ]}
        SectionSeparatorComponent={() => {
          return (
            <View style={{ height: 5, backgroundColor: "gray", width: "98%", alignSelf: "center" }}></View>
          )
        }}
        keyExtractor={(item, index) => item + index}
      />
    );
  }
}
