import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";
import { useDataStore } from "../store/store";

const DetailButtons = () => {
  const [setFontSize, fontSize] = useDataStore((s) => [
    s.setFontSize,
    s.fontSize,
  ]);

  return (
    <View style={styles.container}>
      <IconButton
        icon="plus"
        size={20}
        onPress={() => setFontSize(fontSize + 2)}
        disabled={fontSize > 50}
      />
      <IconButton
        icon="minus"
        size={20}
        onPress={() => setFontSize(fontSize - 2)}
        disabled={fontSize < 20}
      />
    </View>
  );
};

export default DetailButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
  },
});
