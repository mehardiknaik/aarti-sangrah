import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { PaperProvider } from "react-native-paper";
import Navigation from "./src/screens/Navigation";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
}
