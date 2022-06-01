import { View, Text, StyleSheet } from "react-native";
import NavBar from "../componants/NavBar";
import Map from "../componants/Map/Map";
import SearchBar  from "../componants/Map/SearchBar";
import SearchFilter from "../componants/Map/SearchFilter";

const MapPage = ({ navigation }) => {
  
  return (
    <View style={{ paddingHorizontal: 20, flex: 1, paddingTop: 50 }}>
        <SearchBar/>
        <SearchFilter/>
        <Text>ouael</Text>
        <Map/>
        <NavBar navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapPage;
