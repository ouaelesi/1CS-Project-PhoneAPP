import { View, Image, Text, StyleSheet , TouchableOpacity } from "react-native";

const PointIntCard = (props) => {
  return (
      <TouchableOpacity style={styles.container} onPress={()=>props.navigation.navigate("CommentPage" , {name : "CommentPage"})}>
 <View  >
      <Image
        source={require("../../assets/PointIntPage/images/musee.png")}
        style={styles.image}
      ></Image>
      <View style={styles.header}>
        <View style={styles.musee}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: "600",
              color: "rgba(40, 51, 59, 1)",
              fontFamily: "Poppins_500Medium",
            }}
          >
            Musée des Beaux Arts
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "500",
              color: "#6B6B6B",
              fontFamily: "Poppins_500Medium",
            }}
          >
            Oran
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.hours}>
            <Image
              source={require("../../assets/PointIntPage/icones/clock.png")}
              style={styles.clock}
            ></Image>

            <Text
              style={{
                marginLeft: "5%",
                fontSize: 10,
                fontWeight: "500",
                color: "#6B6B6B",
                fontFamily: "Poppins_500Medium",
              }}
            >
              9AM -4PM
            </Text>
          </View>
          <View style={styles.transport}>
            <Image
              source={require("../../assets/PointIntPage/icones/car.png")}
              style={styles.transportIcons}
            ></Image>
            <Image
              source={require("../../assets/PointIntPage/icones/airplane.png")}
              style={styles.transportIcons}
            ></Image>
            <Image
              source={require("../../assets/PointIntPage/icones/bus.png")}
              style={styles.transportIcons}
            ></Image>
          </View>
        </View>
      </View>
      {/* <View style={{backgroundColor:"rgba(15,15,15,0.5)" ,width:40 ,height:40 , position:"absolute" , top: 13, right : 13 , borderRadius : 20 , alignItems:"center" , justifyContent:"space-around"}}>
          <Image source={require('../../assets/heart.svg')} style={{width:20 ,height:20}}></Image>
      </View> */}
    </View>
      </TouchableOpacity>
   
  );
};

const styles = StyleSheet.create({
  container: {
    width: "45%",
    margin: 2,
    paddingVertical: 5,
    paddingBottom: 0,
    marginBottom: 10,
    position: "relative",
    borderRadius: 20,
    backgroundColor: "#F2F2F2",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 0,
    },
    shadowOpacity: 0.12,
    shadowRadius: 10.22,
    elevation: 7,
    borderWidth : 1 , 
    borderColor : "rgba(0,0,0,.03)" ,
  },
  image: {
    alignSelf: "center",
    backgroundColor: "#000",
    width: "98%",
    height: 100,
    borderRadius: 20,
  },
  header: {
    flexDirection: "column",
    padding: 5,
    paddingHorizontal :7 ,
    marginTop: 5,
    justifyContent: "space-between",
  },
  musee: {
    paddingBottom: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  hours: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  transport: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  transportIcons: {
    marginLeft: "3%",
  },
});

export default PointIntCard;
