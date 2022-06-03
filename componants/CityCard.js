import {View, Image, Text, StyleSheet} from "react-native";

const CityCard = () => {
    return (
        <View style={styles.container}>
            <Text style={{
                color: "#FFF"
            }}>Oran</Text>
            <Text style={{
                color: "#FFF"
            }}>Front de mer</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "20%",
        width: "98%",
        backgroundColor: "#000",
        alignSelf: "center"
    }
});

export default CityCard;
