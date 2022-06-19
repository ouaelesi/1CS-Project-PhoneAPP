import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import CircuitSelectionBox from "../componants/CircuitPage/CircuitSelectionBox";
import MapCircuit from "../componants/CircuitPage/MapCircuit";
import NavBar from "../componants/NavBar";

const CircuitPage = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Définir votre Circuit </Text>
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <Image></Image>
        <Text>Selectinner les Points d'interets</Text>
      </View>
      <CircuitSelectionBox />
      <MapCircuit />

      <TouchableOpacity style={{}}>
        <View
          style={{
            backgroundColor: "#E17E01",
            alignSelf: "center",
            borderRadius: 40,
            paddingHorizontal: 15,
            paddingVertical: 15,
            width: "50%",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "800",
              fontSize: 20,
            }}
          >
            Start
          </Text>
        </View>
      </TouchableOpacity>
      <Image
        source={require("../assets/routing.png")}
        style={{
          position: "absolute",
          top: 20,
          right: 5,
          width: 100,
          height: 100,
        }}
      ></Image>
      <NavBar navigation={navigation} ActivePage={"MapPage"} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 10,
    postion: "relative",
  },
  title: {
    fontWeight: "800",
    fontSize: 26,
  },
});
export default CircuitPage;
