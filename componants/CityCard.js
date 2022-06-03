import {View, Image, Text, StyleSheet, SafeAreaView} from "react-native";
import {useFonts, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold} from '@expo-google-fonts/poppins';

const CityCard = () => {

    let [fontsLoaded] = useFonts({Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold});

    return (
        <SafeAreaView style={styles.container}>

            <Image
                source={require("../assets/PointIntPage/images/oran.jpg")}
                style={styles.image}/>
            <View style={styles.imgText}>
                <Text
                    style={{
                    color: "#FFF",
                    fontSize: "50%",
                    fontFamily: 'Poppins_600SemiBold'
                }}>Oran</Text>
                <Text
                    style={{
                    color: "#FFF",
                    fontSize: "20%",
                    fontFamily: 'Poppins_500Medium'
                }}>Front De Mer</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "24%",
        width: "98%",
        alignSelf: "center",
        justifyContent: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.4,
        shadowRadius: 5,
    },
    image: {
        width: "98%",
        height: "100%",
        borderRadius: 25,
        alignSelf: "center",
    },

    imgText: {
        margin: "8%",
        position:'absolute',
        alignItems: 'flex-start',
        top: '5%',
        left: 0
    }
});

export default CityCard;
