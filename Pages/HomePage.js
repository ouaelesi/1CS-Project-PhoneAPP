import { Text, StyleSheet, View, Image } from "react-native";
import NavBar from "../componants/NavBar";
import CategoriesSwiper from "../componants/HomePage/CategoriesSwiper";
import ZoneSwiper from "../componants/HomePage/ZoneSwiper";

const HomePage = ({ navigation }) => {
  return (
    <View style={{ paddingHorizontal: 10, flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/profil.png")}
            style={{ width: 40, height: 40 }}
          ></Image>
          <Text
            style={{ fontSize: 30, fontWeight: "semibold", marginLeft: 10, color: '#28333B' }}
          >
            Hi, Ouael
          </Text>
        </View>

        <View>
          <Image
            source={require("../assets/search.svg")}
            style={{ width: 35, height: 35 }}
          ></Image>
        </View>
      </View>
      <View style={{ paddingTop: 20 }}>
        <Text style={{ fontSize: 35, fontWeight: "bold", color: '#28333B',position : "relative"  }}>
          Let’s Discover Algeria!
          <View  style={{width :120 , height:12, backgroundColor : "#E17E01" , position : "absolute" , right:40 , bottom:0 , borderRadius : 20 ,zIndex: -10}}/>
        </Text>
      </View>

      {/* Categories Swiper  */}
      <CategoriesSwiper/>

      {/* Zones Swiper */}
      <ZoneSwiper/>

      <NavBar navigation={navigation} />
    </View>
  );
};

export default HomePage;
