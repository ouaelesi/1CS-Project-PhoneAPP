import { StyleSheet ,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import HomePage from "./Pages/HomePage";
import MapPage from "./Pages/MapPage";

const Stack = createNativeStackNavigator();

export default function App() {
  const [ActivePage , setActivepage] = useState("HomePage")
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomePage" component={HomePage}  />
        <Stack.Screen name="MapPage" component={MapPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 10,
    flex: 1,
    position: "relative",
  },
});
