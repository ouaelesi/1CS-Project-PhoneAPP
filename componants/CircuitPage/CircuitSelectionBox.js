import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import PointIntList from "../PointIntPage/PointIntList";

const CircuitSelectionBox = () => {
  const Points = ["", "", "", "", "", "", "", "", "", "", "", ""];
  return (
    <View style={Styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Text>Category</Text>
        </View>
        <View>
          <Text>Theme</Text>
        </View>
      </View>
      <ScrollView style={{ height: 150, marginTop: 20 }}>
        {Points.map((elem, key) => (
          <View>
            <Text style={{ paddingVertical: 4 }}>Point d'intert</Text>
            {/* <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={Styles.checkbox}
            /> */}
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
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.05)",
    alignSelf: "center",
    width: "94%",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "rgba(0, 0, 0, .1)",
    marginVertical: "4%",
    padding: 5,
    paddingHorizontal: 10,
    position: "relative",
  },
  checkbox: {
    alignSelf: "center",
  },
});

export default CircuitSelectionBox;
