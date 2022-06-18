import { Text, StyleSheet, View, Image, SafeAreaView } from "react-native";
import NavBar from "../componants/NavBar";
import GoTOMap from "../componants/HomePage/GoTOMap";
import CityCard from "../componants/CityCard";
import ExploreButton from "../componants/ExplorePage/ExploreButton";
import ZoneMap from "../componants/ExplorePage/ZoneMap";
import { useFonts } from "expo-font";

const ExplorePage = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>font loaded</Text>;
  }

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 10,
        flex: 1,
        paddingTop: 30,
        backgroundColor: "#FFFFFF",
      }}
    >
      <CityCard />

      <View style={styles.zoneGeoView}>
        <Image
          style={styles.zoneGeoLogo}
          source={require("../assets/zoneGeo.png")}
        ></Image>
        <Text style={styles.zoneGeoText}>Zone géographique</Text>
        <Text style={styles.zoneGeoName}>Oran</Text>
      </View>

      <ZoneMap />

      <View style={styles.btnContainer}>
        <View style={styles.circlesContainer}>
          <View style={[styles.circles , {backgroundColor : "#E17E01"}]}></View>
          <View style={[styles.circles , {backgroundColor : "#BAB2A0"}]}></View>
          <View style={[styles.circles , {backgroundColor : "#3C464D"}]}></View>
        </View>
        <View style={styles.rowButton}>
          <ExploreButton
            text={"Choisir un \npoint \nd'interet"}
            color={"rgba(225,126,1,.3)"}
            borderColor={"#E17E01"}
            small={true}
            id={1}
            linkTo={"PointInt"}
            navigation={navigation}
          />
          <ExploreButton
            text={"Voir les \névénements \nà venir"}
            color={"rgba(186,178,160,.5)"}
            borderColor={"#BAB2A0"}
            small={true}
            id={2}
            linkTo={"EventPage"}
            navigation={navigation}
          />
        </View>

        <ExploreButton
          text={"Choisir un circuit à suivre"}
          color={"rgba(60,70,77,.2)"}
          borderColor={"#3C464D"}
          small={false}
          id={3}
          linkTo={""}
          navigation={navigation}
        />
      </View>

      <NavBar navigation={navigation} ActivePage={"MapPage"} />
    </SafeAreaView>
  );
};

export default ExplorePage;
const styles = StyleSheet.create({
  zoneGeoView: {
    marginTop: "3%",
    marginBottom: "1%",
    marginHorizontal: "4%",
    paddingBottom: "2%",
    flexDirection: "row",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    alignItems: "center",
  },
  zoneGeoText: {
    fontFamily: "Poppins-Medium",
  },
  zoneGeoLogo: {
  
  },
  zoneGeoName: {
    fontFamily: "Poppins-Medium",
    position: "absolute",
    right: "0%",
  },
  btnContainer: {
    backgroundColor: "#F2F2F2",
    alignSelf: "center",
    width: "94%",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "rgba(0, 0, 0, .1)",
    marginVertical: "4%",
    padding: "1.5%",
    position: "relative",
    paddingTop :25 , 
  },
  rowButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  smallBtn: {
    width: "50%",
  },
  circles : {
    width : 12 , 
    height :12 , 
    borderRadius : 50 , 
    margin : 4
  } , 
  circlesContainer : {
    position : "absolute" , 
    flexDirection : "row",
    right :15 ,
    top :5
  }
});
