import { ScrollView, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
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
          backgroundColor: "rgba(40,51,59,0.9)",
          borderRadius: 50,
          width: 35,
          height: 35,
        }}
        
      >
        <Ionicons name="filter" size={20} color="white" style={{alignSelf:"center" , marginTop:8}}/>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row" }}>
          {filterOptions.map((option, key) => (
            <View
              key={key}
              style={{
                backgroundColor: "rgba(40,51,59,0.9)",
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
