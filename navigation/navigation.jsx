import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../component/home.component";

import Onlyonehostal from "../component/Onlyonehostal.component";
import Profile from "../component/Profile.component";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="hostelPage" component={Onlyonehostal} />
        <Stack.Screen name="ProfilePage" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
