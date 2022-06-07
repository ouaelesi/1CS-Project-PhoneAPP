import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const EventCard = () => {

    return (

        <View style={styles.container}>
            <View style={styles.information}>
                <Text
                    style={{
                    fontFamily: "Poppins_500Medium",
                    fontSize: 16,
                    marginBottom: "2%",
                    color: "#28333B",
                    width: "90%"
                }}>Exposition d'art moderne</Text>
                <Text
                    style={{
                    fontFamily: "Poppins_500Medium",
                    fontSize: 12,
                    marginBottom: "4%",
                    color: "#6B6B6B",
                    width: "90%"
                }}>Cet
                    évènement est un rendez-vous incontournable destiné à tous les amateurs d'art
                    contemporain.</Text>

                <View style={styles.more}>

                    <View >

                        <View style={styles.dateplace}>
                            <Image
                                source={require("../../assets/EventPage/clock.png")}
                                style={styles.clock}></Image>
                            <Text
                                style={{
                                fontFamily: "Poppins_500Medium",
                                fontSize: 8,
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
                                fontSize: 8,
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
                            fontSize: 11,
                            marginLeft: "5%",
                            color: "#FFF"
                        }}>Notify Me</Text>

                    </View>
                </View>
            </View>

            <Image
                source={require("../../assets/PointIntPage/images/musee.png")}
                style={styles.image}></Image>  
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",

        marginVertical: "4%",
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
    information: {
        flex: 3
    },

    image: {
        alignSelf: "center",
        flex: 1,
        width: "8%",
        height: "98%",
        borderRadius: 15,
        backgroundColor: "#000"
    },

    more: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "90%"
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
    }
});

export default EventCard;