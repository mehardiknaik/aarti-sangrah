import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationLightTheme,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { useDataStore } from "../store/store";

export default function useCombinetheme() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme({ fallbackSourceColor: "#3E8260" });
  const displayMode = useDataStore((s) => s.displayMode);

  const CombinedDarkTheme = {
    ...NavigationDarkTheme,
    ...MD3DarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...MD3DarkTheme.colors,
      ...theme.dark,
    },
  };
  const CombinedLightTheme = {
    ...NavigationLightTheme,
    ...MD3LightTheme,
    colors: {
      ...NavigationLightTheme.colors,
      ...MD3LightTheme.colors,
      ...theme.light,
    },
  };

  let mainTheme = CombinedLightTheme;

  if (displayMode === "dark") {
    mainTheme = CombinedDarkTheme;
  } else if (displayMode === "auto") {
    mainTheme =
      colorScheme === "light" ? CombinedLightTheme : CombinedDarkTheme;
  }

  return mainTheme;
}
