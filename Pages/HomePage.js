import { Text, StyleSheet, View, Image } from "react-native";
import NavBar from "../componants/NavBar";
import CategoriesSwiper from "../componants/HomePage/CategoriesSwiper";
import ZoneSwiper from "../componants/HomePage/ZoneSwiper";
import GoTOMap from "../componants/HomePage/GoTOMap";

const HomePage = ({ navigation }) => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        flex: 1,
        paddingTop: 50,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 5,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/profil.png")}
            style={{ width: 40, height: 40 }}
          ></Image>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "semibold",
              marginLeft: 20,
              color: "#28333B",
            }}
          >
            Hi, Ouael
          </Text>
        </View>

        <View>
          <Image
            source={require("../assets/search.svg")}
            style={{ width: 35, height: 35, marginRight: 10 }}
          ></Image>
        </View>
      </View>
      <View style={{ paddingTop: 20 }}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: "#28333B",
          }}
        >
          Let’s Discover Algeria!
          <View
            style={{
              width: 120,
              height: 12,
              backgroundColor: "#E17E01",
              position: "absolute",
              right: 0,
              bottom: 0,
              borderRadius: 20,
            }}
          />
        </Text>
      </View>

      {/* Categories Swiper  */}
      <CategoriesSwiper />

      {/* Zones Swiper */}
      <ZoneSwiper />

      <GoTOMap />

      <NavBar navigation={navigation} />
    </View>
  );
};

export default HomePage;
