import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CircuitInfos = (props) => {
  return (
    <View
      style={[
        Styles.container,
        { backgroundColor: props.bgColor, borderColor: props.color },
      ]}
    >
      <Text
        style={{
          color: props.color,
          fontSize: 18,
          fontWeight: "900",
        }}
      >
        {props.text}
      </Text>
      <Text
        style={{
          color: props.color,
          marginLeft: "auto",
          fontWeight: "900",
          fontSize: 30,
        }}
      >
        {props.value}
      </Text>
      <Text
        style={{
          color: props.color,
          marginLeft: "auto",
          fontWeight: "900",
          fontSize: 15,
          marginTop: -10,
        }}
      >
        {props.unit}
      </Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 6,

    padding: "5%",
    marginHorizontal: 1,
    paddingHorizontal: 10,
    width: "100%",
  },
});

export default CircuitInfos;
