import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useDataStore } from "../store/store";
import { Card, Surface, Text } from "react-native-paper";
import { ScrollView } from "react-native";
const DetailScreen = ({ navigation, route: { params } }) => {
  const { id } = params;
  const [aarti, setAarti] = useState(null);
  const [aartis, fontSize] = useDataStore((s) => [s.aartis, s.fontSize]);

  useEffect(() => {
    setAarti(aartis.find((x) => x.key == id));
  }, []);
  if (!aarti) return null;
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <Card style={styles.container}>
        <Text style={{ fontSize }}>{aarti?.body}</Text>
      </Card>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 5,
  },
});
