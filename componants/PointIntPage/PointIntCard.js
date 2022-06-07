import {View, Image, Text, StyleSheet} from "react-native";

const PointIntCard = (props) => {
    return (
        <View style={styles.container}>

           {/*  <Image
                source={require("../../assets/PointIntPage/images/musee.png")}
                style={styles.image}></Image>
            <View style={styles.header}>
                <View style={styles.musee}>
                    <Text
                        style={{
                        fontSize: "13%",
                        fontWeight: "600",
                        color: "rgba(40, 51, 59, 1)"
                    }}>Musée des Beaux Arts</Text>
                    <Text
                        style={{
                        fontSize: "10%",
                        fontWeight: "500",
                        color: "#6B6B6B"
                    }}>Oran</Text>
                </View>
                <View style={styles.footer}>

                    <View style={styles.hours}>
                        <Image
                            source={require("../../assets/PointIntPage/icones/clock.png")}
                            style={styles.clock}></Image>

                        <Text
                            style={{
                            marginLeft: "5%",
                            fontSize: "10%",
                            fontWeight: "500",
                            color: "#6B6B6B"
                        }}>9AM -4PM</Text>

                    </View>
                    <View style={styles.transport}>
                        <Image
                            source={require("../../assets/PointIntPage/icones/car.png")}
                            style={styles.transportIcons}></Image>
                        <Image
                            source={require("../../assets/PointIntPage/icones/airplane.png")}
                            style={styles.transportIcons}></Image>
                        <Image
                            source={require("../../assets/PointIntPage/icones/bus.png")}
                            style={styles.transportIcons}></Image>

                    </View>
                </View>

            </View> */}
            {/* <View style={{backgroundColor:"rgba(15,15,15,0.5)" ,width:40 ,height:40 , position:"absolute" , top: 13, right : 13 , borderRadius : 20 , alignItems:"center" , justifyContent:"space-around"}}>
          <Image source={require('../../assets/heart.svg')} style={{width:20 ,height:20}}></Image>
      </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "45%",
        margin: 2,
        padding: 8,
        paddingBottom: 0,
        marginBottom: "5%",
        borderRadius: 25,
        backgroundColor: "#F2F2F2",

        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        position: "relative"
    },
    image: {
        alignSelf: "center",
        backgroundColor: "#000",
        width: "98%",
        height: 130,
        borderRadius: 25

    },
    header: {
        flexDirection: "column",
        padding: "4%",
        marginTop: "4%",
        justifyContent: "space-between"
    },
    musee: {
        paddingBottom: "10%"
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "8%"
    },
    hours: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    transport: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    transportIcons: {
        marginLeft: "3%"
    }
});

export default PointIntCard;
