import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import { useTheme } from "react-native-paper";
import DetailScreen from "./DetailScreen";
const Stack = createNativeStackNavigator();
const Navigation = () => {
  const theme = useTheme();
  console.log(theme);
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const linking = {
  config: {
    screens: {
      Home: {
        path: "",
        screens: {
          Setting: "setting",
          Dashboard: "dashboard",
        },
      },
      Detail: {
        path: "detail/:id",
      },
    },
  },
};

export default Navigation;
