import { View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const navitmes = [
  {
    linkTo: "HomePage",
    icon: "home-outline",
  },
  {
    linkTo: "MapPage",
    icon: "map-outline",
  },

  {
    linkTo: "CommentPage",
    icon: "notifications-outline",
  },
  {
    linkTo: "ProfilePage",
    icon: "person-outline",
  },
];
const NavBar = ({ navigation, ActivePage }) => {
  const [activePage, setActivepage] = useState(ActivePage);
  console.log(activePage);
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
            size={activePage === itm.linkTo ? 27 : 25}
            color={`${activePage === itm.linkTo ? "#E17E01" : "white"}`}
          />
          {activePage === itm.linkTo && <View style={styles.navUnder}></View>}
        </Pressable>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: "rgba(40,51,59,0.9)",
    borderRadius: 50,
    padding: 12,
    alignSelf: "center",
    paddingHorizontal: 30,
    borderColor: "#E17E01",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    position: "absolute",
    bottom: 8,
    width: "92%",
    height: 60,
  },
  navItems: {
    color: "red",
  },
  navUnder: {
    backgroundColor: "#E17E01",
    width: 15,
    height: 5,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 3,
  },
});

export default NavBar;
