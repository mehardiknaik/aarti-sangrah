import { StyleSheet, View } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { Text } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

const version = Constants.expoConfig.version;

const Version = () => {
  return (
    <View style={{ alignItems: "center", marginVertical: 10 }}>
      <Text>Version {version}</Text>
      <Text>
        Made with <AntDesign name="heart" size={16} color="red" />
      </Text>
    </View>
  );
};

export default Version;

const styles = StyleSheet.create({});
