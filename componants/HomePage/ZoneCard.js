import { View, Image, Text } from "react-native";

const ZoneCard = (props) => {
  return (
    <View
      style={{
        width: 300,
        backgroundColor: "#fff",
        marginRight: 20,
        padding: 8,
        borderRadius: 30,
      }}
    >
      <Image
        source={require("../../assets/ZoneImg.png")}
        style={{ widht: 200, height: 150, borderRadius: 30 }}
      ></Image>
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          paddingTop: 5,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 30, fontWeight: "600" }}>Oran</Text>
          <Text>Rue de Wlad Fayet</Text>
        </View>
        <View
          style={{
            backgroundColor: "#E17E01",
            width: 60,
            height: 30,
            borderRadius: 20,
            marginTop: 20,
            flexDirection: "row",
          }}
        >
          <Image
            source={require("../../assets/map.svg")}
            style={{ width: 20, height: 20, marginLeft: 8, marginTop: 3 }}
          />
          <Text style={{color:"white" , padding:4}}>4.6</Text>
        </View>
      </View>
    </View>
  );
};

export default ZoneCard;
