import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useDataStore } from "../store/store";
import { Card, Surface } from "react-native-paper";
import { ScrollView, Text } from "react-native";
import { withAnimated } from "../components/withAnimated";
import DetailButtons from "../components/DetailButtons";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";

const AniText = Animated.createAnimatedComponent(Text);

const DetailScreen = ({ navigation, route: { params } }) => {
  const { id, title } = params;
  const [aarti, setAarti] = useState(null);
  const [aartis, fontSize] = useDataStore((s) => [s.aartis, s.fontSize]);

  const style = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(fontSize, { duration: 700 }),
    };
  });

  useEffect(() => {
    const ar = aartis.find((x) => x.key == id);
    if (ar) {
      setAarti(ar);
      navigation.setOptions({
        headerTitle: ar?.title,
      });
    }
  }, []);
  if (!aarti) return null;
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Card style={styles.container}>
          <AniText sharedTransitionTag={`title-${title}`} style={style}>
            {aarti?.body}
          </AniText>
        </Card>
      </ScrollView>
      <DetailButtons />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 5,
  },
});
