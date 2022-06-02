import { ScrollView, View, Text } from "react-native";

const SearchFilter = () => {
  const filterOptions = [
    "select type",
    "select type1",
    "ouael",
    "ouael",
    "select type",
  ];
  return (
    <View style={{ flexDirection: "row", marginTop: 10,paddingLeft:20 }}>
      <View
        style={{
          backgroundColor: "#28333B",
          borderRadius: 50,
          width: 35,
          height: 35,
        }}
      ></View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row" }}>
          {filterOptions.map((option, key) => (
            <View
              key={key}
              style={{
                backgroundColor: "#28333B",
                borderRadius: 50,
                marginLeft: 10,
                height: 35,
                paddingHorizontal: 20,
                paddingTop: 8,
              }}
            >
              <Text style={{ color: "white",fontSize:12 }}> {option}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchFilter;
