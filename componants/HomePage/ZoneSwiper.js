import { View, Text, ScrollView } from "react-native";
import ZoneCard from "./ZoneCard";

const zonesData = [
  {
    photo: "",
    title: "",
    subTitle: "",
    stars: 4.6,
  },
  {
    photo: "",
    title: "",
    subTitle: "",
    stars: 4.6,
  },
  {
    photo: "",
    title: "",
    subTitle: "",
    stars: 4.6,
  },
];

const ZoneSwiper = () => {
  return (
    <View style={{ marginTop: 15 , paddingLeft:20 , }}>
      <Text style={{ fontSize: 25, fontWeight: "600", color: "#28333B" }}>
        Categories
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row"  , marginTop : 20 , padding:4}}>
          {zonesData.map((zone, key) => (
            <ZoneCard key={key} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ZoneSwiper;
