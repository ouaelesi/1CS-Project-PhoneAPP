import { View, Image, Text } from "react-native";

const PointIntCard = (props) => {
  return (
    <View
      style={{
        width: "48%",
        marginRight: 5,
        padding: 8,

        borderRadius: 30,
        backgroundColor : "#F2F2F2",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8 ,
        position : "relative",
        
      }}
    >
      <Image
        source={require("../../assets/Musee.png")}
        style={{ width: "98%", height: "50%", borderRadius: 25 }}
      ></Image>
      <View
        style={{
          flexDirection: "column",
          padding: 5,
          paddingTop: 20,
          paddingBottom: 5,
          justifyContent: "space-between",
        }}
      >
        <View style={{paddingBottom: 5}}>
          <Text style={{ fontSize: 12, fontWeight: "600" }}>Musée des Beaux Arts</Text>
          <Text style={{ fontSize: 10, fontWeight: "500" ,color:"#6B6B6B"}} >Alger</Text>
        </View>
        <View 
            style={{
              flexDirection: "row",
              justifyContent: "space-between"}}
              >
            <Text style={{ fontSize: 10, fontWeight: "500" ,color:"#6B6B6B"}} >9AM -4PM</Text>
            <Text>Icons</Text>
          </View>
       
      </View>
      {/* <View style={{backgroundColor:"rgba(15,15,15,0.5)" ,width:40 ,height:40 , position:"absolute" , top: 13, right : 13 , borderRadius : 20 , alignItems:"center" , justifyContent:"space-around"}}>
          <Image source={require('../../assets/heart.svg')} style={{width:20 ,height:20}}></Image>
      </View> */}
    </View>
  );
};

export default PointIntCard;
