import { Text, StyleSheet, View, Image, SafeAreaView } from "react-native";
import NavBar from "../componants/NavBar";
import GoTOMap from "../componants/HomePage/GoTOMap";

const ExplorePage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ paddingHorizontal: 10, flex: 1 , paddingTop : 30 ,backgroundColor:"white"}}>
        <View>
            <Image source={require('../assets/zoneGeo.png')}></Image>
        </View>
      


      <GoTOMap />

      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
};

export default ExplorePage;
