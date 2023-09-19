import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useDataStore } from "../store/store";
import { Card, Surface, Text } from "react-native-paper";
import { ScrollView } from "react-native";
import { withAnimated } from "../components/withAnimated";

const AniText = withAnimated(Text);

const DetailScreen = ({ navigation, route: { params } }) => {
  const { id, title } = params;
  const [aarti, setAarti] = useState(null);
  const [aartis, fontSize] = useDataStore((s) => [s.aartis, s.fontSize]);

  useEffect(() => {
    const ar = aartis.find((x) => x.key == id);
    if (ar) {
      setAarti(ar);
      navigation.setOptions({
        headerTitle: () => <AniText>{ar?.title}</AniText>,
      });
    }
  }, []);
  if (!aarti) return null;
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <Card style={styles.container}>
        <AniText sharedTransitionTag={`title-${title}`} style={{ fontSize }}>
          {aarti?.body}
        </AniText>
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
