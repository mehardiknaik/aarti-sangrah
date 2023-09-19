import { PaperProvider } from "react-native-paper";
import Navigation from "./src/screens/Navigation";
import useCombinetheme from "./src/hooks/useCombineTheme";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const theme = useCombinetheme();
  return (
    <PaperProvider theme={theme}>
      <Navigation />
      <StatusBar style={theme.dark ? "light" : "dark"} />
    </PaperProvider>
  );
}
