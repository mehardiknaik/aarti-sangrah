import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import { useDataStore } from "../store/store";
import { Surface, Text } from "react-native-paper";
import FabButtons from "../components/FabButtons";
import randomColor from "randomcolor";
const DetailScreen = ({ navigation, route: { params } }) => {
  const { id } = params;
  const [aarti, setAarti, fontSize] = useDataStore((s) => [
    s.aarti,
    s.setAarti,
    s.fontSize,
  ]);

  useEffect(() => {
    setAarti(id);
    return () => setAarti(-1);
  }, []);
  return (
    <Header
      color={randomColor({
        seed: id,
        luminosity: "dark",
      })}
    >
      <Surface style={styles.container}>
        <Text style={{ fontSize }}>{aarti?.body}</Text>
      </Surface>
      <FabButtons />
    </Header>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 5,
  },
});
