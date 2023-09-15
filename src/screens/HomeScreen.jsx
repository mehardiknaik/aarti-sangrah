import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { useDataStore } from "../store/store";
import { Card, Surface, Text, TouchableRipple } from "react-native-paper";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import randomcolor from "randomcolor";

const HomeScreen = () => {
  const [aartis, searchValue] = useDataStore((s) => [s.aartis, s.searchValue]);
  const navigation = useNavigation();
  return (
    <Header
      color={randomcolor({
        luminosity: "dark",
        seed: "header",
      })}
    >
      <FlatList
        data={aartis}
        renderItem={({ item }) => (
          <Surface style={{ margin: 5 }}>
            <TouchableRipple
              onPress={() => {
                navigation.navigate("Detail", { id: item.key });
              }}
            >
              <Text style={{ margin: 20 }} variant="bodyMedium">
                {item.title}
              </Text>
            </TouchableRipple>
          </Surface>
        )}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
    </Header>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
