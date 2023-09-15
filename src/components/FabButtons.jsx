import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FAB, Portal, PaperProvider } from "react-native-paper";
import { useDataStore } from "../store/store";

const FabButtons = () => {
  const [open, setOpen] = React.useState(false);

  const onStateChange = ({ open }) => {
    setOpen(open);
  };

  const [setFontSize, fontSize] = useDataStore((s) => [
    s.setFontSize,
    s.fontSize,
  ]);
  return (
    <Portal>
      <FAB.Group
        open={open}
        visible
        icon={open ? "close" : "plus"}
        backdropColor="transparent"
        actions={[
          {
            icon: "plus",
            label: "Star",
            onPress: () => setFontSize(fontSize + 2),
          },
          {
            icon: "minus",
            label: "Email",
            onPress: () => setFontSize(fontSize - 2),
          },
        ]}
        onStateChange={onStateChange}
        onPress={() => {}}
      />
    </Portal>
  );
};

export default FabButtons;

const styles = StyleSheet.create({});
