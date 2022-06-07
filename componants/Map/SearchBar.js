import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.navContainer}>
      <View style={{flexDirection : "row"}}>  
      <Ionicons name="search" size={30} color="gray" style={{ marginLeft:19 ,marginTop :10}} />
      <TextInput placeholder="Search Zone ..." placeholderTextColor="gray" style={{color:"white" , marginHorizontal:3}}></TextInput>
      </View>
      <Image
            source={require("../../assets/profil.png")}
            style={{ width: 40, height: 40, margin:7 }}
          ></Image>
    </View>
  );
};
const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: "#28333B", 
    borderRadius: 50,
    alignSelf: "center",
    borderColor: "#E17E01",
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "space-between",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    width: "92%",
     height: 60,
    flexDirection :"row"
  },
});
export default SearchBar;
