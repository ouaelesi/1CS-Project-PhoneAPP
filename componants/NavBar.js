import { View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const navitmes = [
  {
    linkTo: "ZonePage",
    icon: "grid-outline",
  },
  {
    linkTo: "MapPage",
    icon: "map-outline",
  },
  {
    linkTo: "HomePage",
    icon: "home-outline",
  },
  {
    linkTo: "MapPage",
    icon: "notifications-outline",
  },
  {
    linkTo: "ExplorePage",
    icon: "person-outline",
  },
];
const NavBar = ({ navigation, activePag }) => {
  const [activePage, setActivepage] = useState("HomePage");
  return (
    <View style={styles.navContainer}>
      {navitmes.map((itm, key) => (
        <Pressable
          key={key}
          onPress={() => {
            navigation.navigate(itm.linkTo, { name: "MapPage" });
          }}
        >
          <Ionicons
            name={itm.icon}
            size={activePage === itm.linkTo ? 29 : 25}
            color={`${activePage === itm.linkTo ? "#E17E01" : "white"}`}
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
    padding: 12,
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
    position: "absolute",
    bottom: 8,
    width: "92%",
    height: 60,
  },
  navItems: {
    color: "red",
  },
});

export default NavBar;
