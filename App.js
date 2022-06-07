import {StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomePage from "./Pages/HomePage";
import MapPage from "./Pages/MapPage";
import PointIntPage from "./Pages/PointIntPage"
import EventPage from "./Pages/EventPage";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                headerShown: false
            }}>
                {/* <Stack.Screen name="HomePage" component={HomePage}/>
                <Stack.Screen name="MapPage" component={MapPage}/> */}
                {/* <Stack.Screen name="PointInt" component={PointIntPage}/> */}
                <Stack.Screen name="EventPage" component={EventPage}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        paddingHorizontal: 10,
        flex: 1,
        position: "relative"
    }
});
