import { View, ImageBackground, Text , Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from "@expo/vector-icons";

const GoTOMap = () => {
  return (
    <View
      style={{
        width: "80%",
        height: 160,
        alignSelf : "center" , 
        marginTop: 15,
        borderRadius: 40,
        borderColor : "#E17E01",
        borderWidth:2,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5 ,
      }}
    >
      <ImageBackground
        source={require("../../assets/map.png")}
        style={{ flex: 1, justifyContent: "center" }}
        imageStyle={{ borderRadius: 40 }}
      >
          <LinearGradient colors={['transparent', 'rgba(15,15,15,0.6)']} style={{width : "100%" , height:"100%" ,borderRadius:38 , justifyContent :"space-around"}}>
             <View>
<Ionicons name="search" size={45} style={{alignSelf : "center"}} color="white"/>
              <Text style={{textAlign:"center"  ,fontSize : 25 , fontWeight:"500" , marginTop : 5 , color : "white"}}>Go To Map</Text>
             </View>
              
          </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default GoTOMap;
