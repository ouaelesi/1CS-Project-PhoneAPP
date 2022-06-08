import { View, Image, Text,TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ZoneCard = ({navigation}) => {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("ZonePage", { name: "ZonePage" })}>
<View
      style={{
        marginRight: 20,
        padding: 8,
        borderRadius: 30,
        backgroundColor: '#F2F2F2',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        borderColor : "rgba(0, 0, 0, .1)" , 
        borderWidth : 1 , 
        shadowOpacity: 0.25,
        shadowRadius: 8,
        position: "relative",
      }}
    >
      <Image
        source={require("../../assets/ZoneImg.png")}
        style={{ width: 250, height: 120, borderRadius: 25 }}
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
          <Text style={{ fontSize: 28, fontWeight: "600" }}>Oran</Text>
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
            padding: 4,
            paddingLeft: 8,
          }}
        >
          <Ionicons name="star-outline" size={17} color="white" />
          <Text style={{ color: "white", marginLeft: 2 }}>4.6</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "rgba(15,15,15,0.5)",
          width: 40,
          height: 40,
          position: "absolute",
          top: 13,
          right: 13,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Ionicons name="heart-outline" size={25} color="white" />
      </View>
    </View>
    </TouchableOpacity>
    
  );
};

export default ZoneCard;