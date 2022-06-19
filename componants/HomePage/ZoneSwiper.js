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

const ZoneSwiper = ({ navigation }) => {
  return (
    <View style={{ marginTop: 8, paddingLeft: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "600", color: "#28333B" }}>
        Best Zones
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row", marginTop: 10, padding: 4 }}>
          {zonesData.map((zone, key) => (
            <ZoneCard key={key} navigation={navigation} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ZoneSwiper;
