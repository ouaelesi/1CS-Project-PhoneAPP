import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NavBar from "../componants/NavBar";
const ProfilePage = ({ navigation }) => {
  const lieuVisite = ["", "", "", "", "", "", "", "", "", ""];
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 150,
          width: "100%",
          backgroundColor: "rgba(40,51,59,0.9)",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 40,
            paddingHorizontal: 10,
            postion: "relative",
          }}
        >
          <View style={{ width: 20 }}></View>
          <View>
            <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
              Profile
            </Text>
          </View>
          <Ionicons
            name="ellipsis-vertical-outline"
            size={25}
            color="white"
          ></Ionicons>
        </View>
        <Image
          source={require("../assets/profilBig.png")}
          style={{
            width: 90,
            height: 90,
            alignSelf: "center",
            bottom: -35,
            position: "absolute",
          }}
        ></Image>
      </View>
      <View
        style={{ flexDirection: "row", marginTop: 40, alignSelf: "center" }}
      >
        <Ionicons
          name="camera-reverse-outline"
          size={25}
          color="#E17E01"
        ></Ionicons>
        <Text style={{ padding: 4 }}>Change Photo</Text>
      </View>

      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: "600" }}>Bio</Text>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 5,
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Ionicons
              name="person-outline"
              size={25}
              color="#E17E01"
            ></Ionicons>
            <Text style={{ padding: 5, paddingHorizontal: 10, fontSize: 15 }}>
              User Name
            </Text>
          </View>
          <Text style={{ padding: 5, paddingHorizontal: 10, fontSize: 15 }}>
            Ouael Sahbi
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "rgba(0,0,0,0.1)",
          }}
        ></View>

        <View
          style={{
            flexDirection: "row",
            paddingVertical: 5,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="mail-outline" size={25} color="#E17E01"></Ionicons>
            <Text style={{ padding: 5, paddingHorizontal: 10, fontSize: 15 }}>
              Email
            </Text>
          </View>
          <Text style={{ padding: 5, paddingHorizontal: 10, fontSize: 15 }}>
            jo_sahbi@esi.dz
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "rgba(0,0,0,0.1)",
          }}
        ></View>
        <View
          style={{ flexDirection: "row", marginLeft: "auto", marginTop: 15 }}
        >
          <Ionicons name="create-outline" size={25} color="#E17E01"></Ionicons>
          <Text style={{ fontSize: 14, padding: 3 }}>Edit Profil</Text>
        </View>
        <Text style={{ fontSize: 17, fontWeight: "500", marginVertical: 15 }}>
          Historique des lieu Visités
        </Text>
        <ScrollView style={{ height: "30%" }}>
          {lieuVisite.map((elem, key) => (
            <View key={key}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingVertical: 8,
                }}
              >
                <Text>Musée des Beaux .. </Text>
                <Text style={{ color: "#E17E01", fontSize: 12 }}>
                  Ajouter un feedback
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  height: 1,
                  backgroundColor: "rgba(0,0,0,0.1)",
                }}
              ></View>
            </View>
          ))}
        </ScrollView>
      </View>

      <NavBar navigation={navigation} ActivePage={"ProfilePage"} />
    </View>
  );
};

const Styles = StyleSheet.create({
  Header: {},
});

export default ProfilePage;
