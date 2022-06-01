import { View, StyleSheet, Image, Pressable } from "react-native";
const navitmes = [
  {
    linkTo: "MapPage",
    icon: require("../assets/category.svg"),
  },
  {
    linkTo: "MapPage",
    icon: require("../assets/map.svg"),
  },
  {
    linkTo: "MapPage",
    icon: require("../assets/home.svg"),
  },
  {
    linkTo: "MapPage",
    icon: require("../assets/notification.svg"),
  },
  {
    linkTo: "MapPage",
    icon: require("../assets/user.svg"),
  },
];
const NavBar = ({ navigation }) => {
  return (
    <View style={styles.navContainer}>
      {navitmes.map((itm, key) => (
        <Pressable
          onPress={() => navigation.navigate(itm.linkTo, { name: "MapPage" })}
        >
          <Image
            source={itm.icon}
            style={{ width: 25, height: 25, fill: "red" }}
          />
        </Pressable>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: "#28333B",
    borderRadius: 50,
    padding: 15,
    alignSelf : "center" , 
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
    position: "absolute",
    bottom: 8,
    width: "100%",
    height : 60
  },
  navItems: {
    color: "red",
  },
});

export default NavBar;
