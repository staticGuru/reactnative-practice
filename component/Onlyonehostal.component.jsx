import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import SECTIONS from "../data/Sections.data";

const Onlyonehostal = ({ navigation }) => {
  const ListItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={() => navigation.navigate("ProfilePage")}>
          <Text style={styles.itemText}>{item.text}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return;
            <ListItem item={item} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0ff",
  },
  sectionHeader: {
    fontWeight: "800",
    fontSize: 18,
    color: "white",
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
    backgroundColor: "dodgerblue",
    borderRadius:10,
  },

  itemText: {
    color: "white",
    marginTop: 5,
    padding: 50,
    fontSize:18,
  },
});

export default Onlyonehostal;
