import * as React from "react";
import { StyleSheet, View } from "react-native";
import { RadioButton, Card, Text } from "react-native-paper";
import { useDataStore } from "../store/store";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ThemeSetting = () => {
  const [setDisplayMode, displayMode] = useDataStore((s) => [
    s.setDisplayMode,
    s.displayMode,
  ]);
  return (
    <Card style={styles.container}>
      <Text variant="headlineSmall">
        <MaterialCommunityIcons name="theme-light-dark" size={24} />
        Theme
      </Text>
      <RadioButton.Group
        onValueChange={(newValue) => setDisplayMode(newValue)}
        value={displayMode}
      >
        <View style={styles.radioContainer}>
          <Text>Light</Text>
          <RadioButton value="light" />
        </View>
        <View style={styles.radioContainer}>
          <Text>Dark</Text>
          <RadioButton value="dark" />
        </View>
        <View style={styles.radioContainer}>
          <Text>Automatic</Text>
          <RadioButton value="auto" />
        </View>
      </RadioButton.Group>
    </Card>
  );
};

export default ThemeSetting;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 5,
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
