import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import Dashboard from "../screen/Home";
import TopUpScreen from "../screen/TopUpScreen";
import TransferScreen from "../screen/TransferScreen";
import { Image } from "react-native";

const send_button = require('../assets/SendButton.png');

const plus_button = require('../assets/PlusButton.png');

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIconStyle: { display: "none" }, // Menghilangkan ikon bawaan
        headerShown: false,
        tabBarStyle: {
          flexDirection: "columns",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#ffffff",
          paddingVertical: 10,
          borderTopWidth: 1,
          borderTopColor: "#ddd",
        },
        tabBarLabelStyle: {
          fontSize: 14,
          color: "black",
          fontWeight: "bold",
        },
      }}
    > 
      <Tab.Screen 
      name="Home" 
      component={Dashboard} />
      <Tab.Screen 
      name="Top Up" 
      component={TopUpScreen} />
      <Tab.Screen name="Transfer" component={TransferScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default TabNavigator;
