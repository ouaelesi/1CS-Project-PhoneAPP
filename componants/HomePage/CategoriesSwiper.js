import { View, Text, ScrollView, StyleSheet } from "react-native";

const CategoriesSwiper = () => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 25, fontWeight: "600", color: "#28333B" }}>
        Categories
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View style={[styles.filterCard, { backgroundColor: "#28333B" }]}>
            <Text style={{ fontSize: 20, fontWeight: "500", color: "white" }}>
              Type 1
            </Text>
          </View>
          <View style={[styles.filterCard, { backgroundColor: "#E17E01" }]}>
            <Text style={{ fontSize: 20, fontWeight: "500", color: "white" }}>
              Type 1
            </Text>
          </View>
          <View style={[styles.filterCard, { backgroundColor: "#fff" }]}>
            <Text style={{ fontSize: 20, fontWeight: "500", color: "#28333B" }}>
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
    height: 60,
    paddingTop: 13,
    alignItems: "center",
    marginRight: 20,
    marginBottom: 10,
    borderRadius: 20,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: { widht: 5, height: 5 },
  },
});

export default CategoriesSwiper;
