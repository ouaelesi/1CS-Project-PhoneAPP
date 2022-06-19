import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const GoTOMap = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("MapPage", { name: "MapPage" })}
    >
      <View style={Styles.container}>
        <ImageBackground
          source={require("../../assets/map.png")}
          style={{ flex: 1, justifyContent: "center" }}
          imageStyle={{ borderRadius: 40 }}
        >
          <LinearGradient
            colors={["transparent", "rgba(15,15,15,0.6)"]}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 38,
              justifyContent: "space-around",
            }}
          >
            <View>
              <Ionicons
                name="search"
                size={45}
                style={{ alignSelf: "center" }}
                color="white"
              />
              <Text style={Styles.GoToMap}>Go To Map</Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};
const Styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 160,
    alignSelf: "center",
    marginTop: 15,
    borderRadius: 40,
    borderColor: "#E17E01",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.12,
    shadowRadius: 2.22,
    elevation: 10,
  },
  GoToMap: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "500",
    marginTop: 5,
    color: "white",
  },
});

export default GoTOMap;
