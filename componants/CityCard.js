import { View, Image, Text, StyleSheet, SafeAreaView } from "react-native";

const CityCard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/PointIntPage/images/oran.jpg")}
        style={styles.image}
      />
      <View style={styles.imgText}>
        <Text
          style={{
            color: "#FFF",
            fontSize: 50,
          }}
        >
          Oran
        </Text>
        <Text
          style={{
            color: "#FFF",
            fontSize: 20,
          }}
        >
          Front De Mer
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "24%",
    width: "98%",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 25,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: "98%",
    height: "100%",
    borderRadius: 25,
    alignSelf: "center",
  },

  imgText: {
    margin: "8%",
    position: "absolute",
    alignItems: "flex-start",
    top: "5%",
    left: 0,
  },
});

export default CityCard;
