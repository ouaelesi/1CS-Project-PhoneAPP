import { View, Image, Text, TouchableOpacity , StyleSheet} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ZoneCard = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ZonePage", { name: "ZonePage" })}
    >
      <View
        style={Styles.container}
      >
        <Image
          source={require("../../assets/ZoneImg.png")}
          style={{ width: 250, height: 135, borderRadius: 25}}
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
            <Text style={{ fontSize: 22, fontWeight: "600" }}>Oran</Text>
            <Text style={{fontSize : 12}}>Rue de Wlad Fayet</Text>
          </View>
          <View
            style={{
              backgroundColor: "#E17E01",
              width: 55,
              height: 25,
              borderRadius: 20,
              marginTop: 15,
              flexDirection: "row",
              padding: 4,
              paddingLeft: 8,
            }}
          >
            <Ionicons name="star-outline" size={15} color="white" />
            <Text style={{ color: "white", marginLeft: 3 , fontSize:12}}>4.6</Text>
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

const Styles = StyleSheet.create({
  container : {
    marginRight: 20,
    padding: 3,
    paddingHorizontal :5 , 
    borderRadius: 30,
    backgroundColor: "#F2F2F2", 
    borderWidth : 1 , 
    borderColor : "rgba(0,0,0,.01)" , 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.12,
    shadowRadius: 30.22,
    elevation: 5,
    position: "relative",
    marginBottom:3
  }
})

export default ZoneCard;
