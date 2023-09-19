import { StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Card, Text, TouchableRipple } from "react-native-paper";
import Animated, { FadeInDown, FadeOut } from "react-native-reanimated";
import { withAnimated } from "./withAnimated";

const AniCard = withAnimated(Card);
const AniText = withAnimated(Text);
const SingleItme = ({ id, title }) => {
  const navigation = useNavigation();
  return (
    <AniCard
      entering={FadeInDown.delay(parseInt(id) * 50)
        // .duration(1000)
        .springify()}
      exiting={FadeOut}
      style={{ margin: 5 }}
    >
      <TouchableRipple
        onPress={() => {
          navigation.navigate("Detail", { id, title });
        }}
      >
        <AniText
          sharedTransitionTag={`title-${title}`}
          style={{ margin: 20 }}
          variant="bodyMedium"
        >
          {title}
        </AniText>
      </TouchableRipple>
    </AniCard>
  );
};

export default SingleItme;

const styles = StyleSheet.create({});
