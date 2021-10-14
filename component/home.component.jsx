import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";

import data from "../data/dummy.data";

const Home = ({ navigation }) => {
  const [Hostals, setHostals] = useState(data);
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={Hostals}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("hostelPage")}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0ff",
    alignItems: "center",
    justifyContent: "center",

    // borderRadius:100,
  },
  item: {
    marginTop: 24,
    padding: 100,
    backgroundColor: "lightblue",
    fontSize: 24,
    textAlign:'center',
    borderRadius:100,
  },
});

export default Home;
