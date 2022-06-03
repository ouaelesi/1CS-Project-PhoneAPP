import { Text, StyleSheet, View, Image, SafeAreaView } from "react-native";
import NavBar from "../componants/NavBar";
import GoTOMap from "../componants/HomePage/GoTOMap";

const ExplorePage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ paddingHorizontal: 10, flex: 1 , paddingTop : 30 ,backgroundColor:"#FFFFFF"}}>
        <View style={styles.zoneGeoView}>
            <Image style={styles.zoneGeoLogo} source={require('../assets/zoneGeo.png')}></Image>
            <Text style={styles.zoneGeoText}>Zone géographique</Text>
            <Text style={styles.zoneGeoName}>Oran</Text>
        </View>
      


      <GoTOMap />

      <View style={styles.btnContainer}>
            <Text></Text>
      </View>

      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
};

export default ExplorePage;
const styles = StyleSheet.create({
    zoneGeoView:{
        flexDirection:'row',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        
    

    },
    zoneGeoText: {
        

    },
    zoneGeoLogo: {
        
    },
    zoneGeoName: {
        
        
    },
    btnContainer: {
        backgroundColor:'#F2F2F2',
        width: '100%',
        height: '40%',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "rgba(0, 0, 0, .1)",

    }
       
      
    });
    