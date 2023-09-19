import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeTab";
import DetailScreen from "./DetailScreen";
import useCombinetheme from "../hooks/useCombineTheme";
import DashboardScreen from "./DashboardScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const theme = useCombinetheme();
  return (
    <NavigationContainer theme={theme} linking={linking}>
      <Stack.Navigator
        screenOptions={
          {
            // headerTransparent: true,
          }
        }
      >
        <Stack.Screen
          name="Dashboard"
          options={{
            headerShown: false,
          }}
          component={DashboardScreen}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const linking = {
  config: {
    screens: {
      Dashboard: {
        path: "",
        screens: {
          Home: "home",
          Settings: "settings",
        },
      },
      Detail: {
        path: "detail/:id",
      },
    },
  },
};

export default Navigation;
