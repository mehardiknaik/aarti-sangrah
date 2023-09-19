import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import ThemeSetting from "../components/ThemeSetting";
import Version from "../components/Version";

const SettingTab = () => {
  return (
    <ScrollView>
      <ThemeSetting />
      <Version />
    </ScrollView>
  );
};

export default SettingTab;

const styles = StyleSheet.create({});
