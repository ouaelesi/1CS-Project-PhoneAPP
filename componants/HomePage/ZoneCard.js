import { View, Image, Text } from "react-native";

const ZoneCard = (props) => {
  return (
    <View
      style={{
        marginRight: 20,
        padding: 8,
        borderRadius: 30,
        backgroundColor : "#F2F2f9",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8 ,
        position : "relative"
   
      }}
    >
      <Image
        source={require("../../assets/ZoneImg.png")}
        style={{ widht: 150, height: 120, borderRadius: 25 }}
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
          }}
        >
          <Image
            source={require("../../assets/star.svg")}
            style={{ width: 20, height: 20, marginLeft: 8, marginTop: 3 }}
          />
          <Text style={{ color: "white", padding: 4 }}>4.6</Text>
        </View>
      </View>
      <View style={{backgroundColor:"rgba(15,15,15,0.5)" ,width:40 ,height:40 , position:"absolute" , top: 13, right : 13 , borderRadius : 20 , alignItems:"center" , justifyContent:"space-around"}}>
          <Image source={require('../../assets/heart.svg')} style={{width:20 ,height:20}}></Image>
      </View>
    </View>
  );
};

export default ZoneCard;