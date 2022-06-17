import React from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import CityCard from "../componants/CityCard";
import EventCard from "../componants/EventPage/EventCard";

import { LinearGradient } from "expo-linear-gradient";

const EventPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CityCard />
      <Text
        style={{
          fontSize: 18,
          color: "#28333B",
          margin: "5%",
          marginBottom: "2%",
        }}
      >
        Évènement à venir
      </Text>

      <View style={styles.line}></View>
      <ScrollView
        style={styles.scrollview}
        showsVerticalScrollIndicator={false}
      >
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </ScrollView>
      <LinearGradient
        colors={["transparent", "rgba(15,15,15,0.6)"]}
        style={{
          width: "120%",
          height: 100,
          position: "absolute",
          bottom: "0%",
        }}
      ></LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 15,
    backgroundColor: "#FFF",
  },
  scrollview: {
    marginHorizontal: "4%",
  },
  line: {
    alignSelf: "center",
    flex: 0,
    height: 0,
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: "#b2b1b1",
    marginBottom: "4%",
  },
});

export default EventPage;
