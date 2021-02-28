import React from "react";
import { render } from "react-dom";
import { View, StyleSheet, Text } from "react-native";

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
  },
});

const Profile = () => {
  return (
    <View style={styles1.container}>
      <Text style={styles1.text}>
        Hello Guruvignesh, Your in the Profile screens
      </Text>
    </View>
  );
};

export default Profile;
