import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { useDataStore } from "../store/store";
import SingleItme from "../components/SingleItme";

const HomeTab = () => {
  const [aartis, searchValue] = useDataStore((s) => [s.aartis, s.searchValue]);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={aartis}
        renderItem={({ item }) => <SingleItme {...item} id={item.key} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeTab;

const styles = StyleSheet.create({});
