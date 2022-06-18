import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { Dimensions } from "react-native";
2;
3;
const { width, height } = Dimensions.get("window");

export default function StartPage({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bg-auth.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.header}>
          <Text style={styles.logo}>Logo</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.text}>Let's Make</Text>
          <Text style={styles.textBold}>Your Dream </Text>
          <Text style={styles.textBoldLine}>Vacation.</Text>
          <View
            style={{
              position: "absolute",
              width: 220,
              height: 15,
              backgroundColor: "#E17E01",
              bottom: 8,
              left: 22,
              borderRadius: 20,
            }}
          ></View>
        </View>
        <View style={styles.bottom}>
          {/*  ajouter onPress pour aller & SIGN UP page  */}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("LoginPage", { name: "LoginPage" })
            }
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    color: "white",
    fontSize: width / 7,
    marginLeft: 20,
    fontWeight: "300",
  },
  textBold: {
    color: "white",
    fontWeight: "900",
    fontSize: width / 7,
    marginLeft: 20,
  },
  textBoldLine: {
    color: "white",
    fontWeight: "bold",
    fontSize: width / 7,
    marginLeft: 20,
    zIndex: 600,
  },
  logo: {
    color: "white",
    textAlign: "center",
    fontSize: width / 15,
    fontWeight: "500",
  },
  header: {
    right: 50,
    left: 50,
    position: "absolute",
    top: 30,
  },
  body: {
    position: "absolute",
    bottom: 170,
  },
  bottom: {
    alignItems: "center",
    right: 50,
    left: 50,
    position: "absolute",
    bottom: 50,
  },
  button: {
    textAlignVertical: "center",
    width: width / 1.2,
    height: height / 10,
    borderRadius: 25,
    backgroundColor: "#E17E01",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWight: "bold",
    fontSize: width / 15,
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "auto",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
