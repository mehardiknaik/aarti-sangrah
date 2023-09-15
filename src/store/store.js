import { create } from "zustand";
import data from "../shared/data.json";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const useDataStore = create(
  devtools(
    persist(
      (set) => ({
        aartis: data.map((x) => ({
          ...x,
          isRemovable: false,
          isFavorite: false,
        })),
        aarti: null,
        fontSize: 20,
        searchValue: "",
        displayMode: "light",

        toggleFav: (key) =>
          set((state) => {
            const index = state.aartis.findIndex((x) => x.key === key);
            if (index !== -1)
              state.aartis[index].isFavorite = !state.aartis[index].isFavorite;
          }),
        setAarti: (key) =>
          set((state) => ({
            aarti: state.aartis.find((x) => x.key == key),
          })),
        addAarti: (aarti) =>
          set((state) => {
            state.aartis.push(aarti);
          }),
        updateAarti: (aarti) =>
          set((state) => {
            const index = state.aartis.findIndex((x) => x.key === aarti.key);
            if (index !== -1) state.aartis[index] = aarti;
          }),
        deleteAarti: (key) =>
          set((state) => {
            const index = state.aartis.findIndex((x) => x.key === key);
            if (index !== -1) state.aartis.splice(index, 1);
          }),
        setFontSize: (size) =>
          set((state) => ({
            fontSize: size,
          })),
        setSearchValue: (text) =>
          set((state) => {
            state.searchValue = text;
          }),
        setDisplayMode: (mode) =>
          set((state) => {
            state.displayMode = mode;
          }),
      }),
      {
        name: "aarti-storage",
        storage: createJSONStorage(() => AsyncStorage),
      }
    )
  )
);
