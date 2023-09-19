import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTab from "./HomeTab";
import SettingTab from "./SettingTab";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const DashboardScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <AntDesign name="home" {...props} />,
          headerTitle: "Aarti Sangraha",
        }}
        name="Home"
        component={HomeTab}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <AntDesign name="setting" {...props} />,
        }}
        name="Settings"
        component={SettingTab}
      />
    </Tab.Navigator>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({});
