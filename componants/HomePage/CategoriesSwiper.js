import { View, Text, ScrollView, StyleSheet } from "react-native";

const CategoriesSwiper = () => {
  return (
    <View style={{ marginTop: 15 ,  paddingLeft:20 ,  }}>
      <Text style={{ fontSize: 25, fontWeight: "600", color: "#28333B" }}>
        Categories
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View style={[styles.filterCard, { backgroundColor: "#28333B" }]}>
            <Text style={{ fontSize: 18, fontWeight: "500", color: "white" }}>
              Type 1
            </Text>
          </View>
          <View style={[styles.filterCard, { backgroundColor: "#E17E01" }]}>
            <Text style={{ fontSize: 18, fontWeight: "500", color: "white" }}>
              Type 1
            </Text>
          </View>
          <View style={[styles.filterCard, { backgroundColor: "#F2F2F2" }]}>
            <Text style={{ fontSize: 18, fontWeight: "500", color: "#28333B" }}>
              Type 1
            </Text>
          </View>
          <View style={[styles.filterCard, { backgroundColor: "#28333B" }]}>
            <Text style={{ fontSize: 18, fontWeight: "500", color: "white" }}>
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
    width: 150,
    height: 50,
    paddingTop: 9,
    alignItems: "center",
    marginRight: 15,
    marginBottom: 10,
    borderRadius: 17,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5 ,
  },
});

export default CategoriesSwiper;
