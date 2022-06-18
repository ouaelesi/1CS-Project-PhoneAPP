import { View, Text, ScrollView, StyleSheet } from "react-native";

const CategoriesSwiper = () => {
  return (
    <View style={{ marginTop: 5, paddingLeft: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "600", color: "#28333B" }}>
        Categories
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <View style={[styles.filterCard, { backgroundColor: "#28333B" }]}>
            <Text style={{ fontSize: 15, fontWeight: "500", color: "white" }}>
              Type 1
            </Text>
          </View>
          <View style={[styles.filterCard, { backgroundColor: "#E17E01" }]}>
            <Text style={{ fontSize: 15, fontWeight: "500", color: "white" }}>
              Type 1
            </Text>
          </View>
          <View style={[styles.filterCard, { backgroundColor: "#F2F2F0" }]}>
            <Text style={{ fontSize: 15, fontWeight: "500", color: "#28333B" }}>
              Type 1
            </Text>
          </View>
          <View style={[styles.filterCard, { backgroundColor: "#28333B" }]}>
            <Text style={{ fontSize: 15, fontWeight: "500", color: "white" }}>
              Type 1
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  filterCard: {
    width: 120,
    height: 40,
    paddingTop: 8,
    alignItems: "center",
    marginRight: 15,
    marginBottom: 10,
    borderRadius: 17,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 30.22,
    elevation: 5,
    borderWidth : 1 , 
    borderColor : "rgba(0,0,0,.01)" ,
  },
});

export default CategoriesSwiper;
