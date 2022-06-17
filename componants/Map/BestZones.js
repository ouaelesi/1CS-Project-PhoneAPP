import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BestZones = ({navigation}) => {
  const Zones = ["", "", "", "", ""];
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Best Zones</Text>
      <ScrollView horizontal>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          {Zones.map((zone, key) => (
            <TouchableOpacity key={key} onPress={() => {
                navigation.navigate("ExplorePage", { name: "ExplorePage" });
              }}>
              <View style={styles.zoneCard}>
                <Image
                  source={require("../../assets/ZoneImg.png")}
                  style={{ width: 90, height: 90, borderRadius: 15 }}
                ></Image>
                <View style={styles.rating}>
                  <Ionicons name="star-outline" size={10} color="white" />
                  <Text style={{ color: "white", marginLeft: 2, fontSize: 10 }}>
                    4.6
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(40,51,59,0.9)",
    borderRadius: 20,
    paddingVertical: 10,
    alignSelf: "center",
    paddingLeft: 20,
    borderColor: "#E17E01",
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 5.22,
    elevation: 3,
    width: "92%",
    position: "absolute",
    bottom: 80,
  },
  rating: {
    backgroundColor: "#E17E01",
    width: 40,
    height: 20,
    borderRadius: 20,
    flexDirection: "row",
    padding: 3,
    paddingLeft: 8,
    position: "absolute",
    bottom: 5,
    right: 5,
  },
  zoneCard: {
    width: 90,
    height: 90,
    backgroundColor: "gray",
    marginRight: 10,
    borderRadius: 15,
  },
});

export default BestZones;
