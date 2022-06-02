import { View, Image, Text, StyleSheet } from "react-native";

const PointIntCard = (props) => {
  return (
    <View
      style={styles.container}
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
        <View style={{paddingBottom: "2%"}}>
          <Text style={{ fontSize: "13%", fontWeight: "600" }}>Musée des Beaux Arts</Text>
          <Text style={{ fontSize: "10%", fontWeight: "500" ,color:"#6B6B6B"}} >Alger</Text>
        </View>
        <View 
            style={{
              flexDirection: "row",
              justifyContent: "space-between"}}
              >
            <Text style={{ fontSize: "10%", fontWeight: "500" ,color:"#6B6B6B"}} >9AM -4PM</Text>
            <Text>Icons</Text>
          </View>
       
      </View>
      {/* <View style={{backgroundColor:"rgba(15,15,15,0.5)" ,width:40 ,height:40 , position:"absolute" , top: 13, right : 13 , borderRadius : 20 , alignItems:"center" , justifyContent:"space-around"}}>
          <Image source={require('../../assets/heart.svg')} style={{width:20 ,height:20}}></Image>
      </View> */}
    </View>
  );
};




const styles = StyleSheet.create({
  container : {
    width: "40%",
    margin: 2,
    padding: 8,

    borderRadius: 30,
    backgroundColor : "#F2F2F2",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2 ,
    position : "relative",
  }
});

export default PointIntCard;

