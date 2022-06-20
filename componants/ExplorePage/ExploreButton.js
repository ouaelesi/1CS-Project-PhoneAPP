import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useFonts } from "expo-font";

const ExploreButton = (props) => {
  let [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
  });

  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate(props.linkTo, { name: "MapPage" });
      }}
      style={[
        styles.btnContainer,
        {
          backgroundColor: props.color,
          borderColor: props.borderColor,
          width: props.small ? "46%" : "95%",
        },
      ]}
    >
      <Text style={styles.text}>{props.text}</Text>
      {props.id == 1 ? (
        <Image
          style={styles.icon}
          source={require("../../assets/choisirPtInteret.png")}
        />
      ) : props.id == 2 ? (
        <Image
          style={styles.icon}
          source={require("../../assets/voirEvent.png")}
        />
      ) : (
        <Image
          style={styles.icon}
          source={require("../../assets/choisirCircuit.png")}
        />
      )}

      <View
        style={[styles.circle, { backgroundColor: props.borderColor }]}
      ></View>
    </TouchableOpacity>
  );
};

export default ExploreButton;
const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: "#F2F2F2",
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "rgba(0, 0, 0, .1)",
    marginVertical: "2%",
    padding: "5%",
    marginHorizontal: "1%",
  },
  text: {
    fontSize: 16,
    textAlign: "left",
  },
  icon: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: "10%",
    right: "5%",
  },
  circle: {
    position: "absolute",
    width: 12,
    height: 12,
    borderRadius: 20,
    margin: 4,
    right: 5,
    top: 5,
  },
});
