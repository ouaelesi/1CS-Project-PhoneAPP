import { View, Text, StyleSheet, Image, TextInput } from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.navContainer}>
    <TextInput placeholder="Search Zone ..." placeholderTextColor="gray" style={{color:"white"}}></TextInput>
    </View>
  );
};
const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: "#28333B",
    borderRadius: 50,
    padding: 15,
    alignSelf: "center",
    paddingHorizontal: 30,
    borderColor: "#E17E01",
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "space-between",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    width: "100%",
    height: 60,
  },
});
export default SearchBar;
