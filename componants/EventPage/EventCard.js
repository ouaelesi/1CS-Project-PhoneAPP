import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useFonts, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold} from '@expo-google-fonts/poppins';

const EventCard = () => {
    let [fontsLoaded] = useFonts({Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold});

    return (

        <View style={styles.container}>
            <View style={styles.information}>
                <Text
                    style={{
                    fontFamily: "Poppins_500Medium",
                    fontSize: "20%",
                    marginBottom: "2%",
                    color: "#28333B",
                    // width: "30%"
                }}>Exposition d'art moderne</Text>
                <Text
                    style={{
                    fontFamily: "Poppins_500Medium",
                    fontSize: "14%",
                    marginBottom: "4%",
                    color: "#6B6B6B",
                    //  width: "30%"
                }}>Cet
                    évènement est un rendez-vous incontournable organisé chaque automne à Oran et
                    destiné à tous les amateurs d'art contemporain.</Text>

                <View style={styles.more}>

                    <View >

                        <View style={styles.dateplace}>
                            <Image
                                source={require("../../assets/EventPage/clock.png")}
                                style={styles.clock}></Image>
                            <Text
                                style={{
                                fontFamily: "Poppins_500Medium",
                                fontSize: "12%",
                                color: "#6B6B6B"
                            }}>10 mars 2022</Text>

                        </View>
                        <View style={styles.dateplace}>
                            <Image
                                source={require("../../assets/EventPage/location.png")}
                                style={styles.clock}></Image>
                            <Text
                                style={{
                                fontFamily: "Poppins_500Medium",
                                fontSize: "12%",
                                color: "#6B6B6B"
                            }}>Musée des Beaux Arts - Oran</Text>

                        </View>

                    </View>

                    <View style={styles.notify}>

                        <Image
                            source={require("../../assets/EventPage/notification.png")}
                            style={styles.clock}></Image>
                        <Text
                            style={{
                            fontFamily: "Poppins_500Medium",
                            fontSize: "15%",
                            marginLeft: "4%",
                            color: "#FFF"
                        }}>Notify Me</Text>

                    </View>
                </View>
            </View>

            {/* <Image
                source={require("../../assets/PointIntPage/images/musee.png")}
                style={styles.image}></Image> */}
                {/* <View  style={styles.image}>

                </View> */}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: "row",

        padding: "4%",
        alignSelf: "center",
        width: "94%",
        height: "36%",
        backgroundColor: "#000",

        borderRadius: 25,
        backgroundColor: "#F2F2F2",

        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,

        position: 'relative'
    },
    information: {},

    more: {

        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dateplace: {
        flexDirection: 'row',
        alignItems: "center"

    },
    clock: {
        marginRight: "2%"
    },

    notify: {
        borderRadius: 25,
        padding: "2%",
        width: '38%',
        height: "100%",
        backgroundColor: "#E17E01",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center'
    }, 
    image: {
        width: "10%",
        height: 130,
        borderRadius: 25,
        backgroundColor: "#000"
    }
});

export default EventCard;