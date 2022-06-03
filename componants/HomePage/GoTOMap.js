import { View, ImageBackground, Text , Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

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
             <Image source={require('../../assets/WhiteSearch.svg')} style={{width:40 , height:40 , marginHorizontal :"auto"}}></Image>
              <Text style={{textAlign:"center"  ,fontSize : 25 , fontWeight:"500" , marginTop : 7 , color : "white"}}>Go To Map</Text>
             </View>
              
          </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default GoTOMap;
