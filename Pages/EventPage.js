import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    StyleSheet
} from 'react-native';
import CityCard from '../componants/CityCard';
import EventCard from '../componants/EventPage/EventCard';

const EventPage = () => {

    return (

        <SafeAreaView style={styles.container}>

            <CityCard/>
            <Text
                style={{
                fontSize: 18,
                color: "#28333B",
                margin: "5%",
                marginBottom: "2%",
            }}>
                Évènement à venir
            </Text>

            <View style={styles.line}></View>
            <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false}>
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        padding: 0,
        backgroundColor: "#FFF"
    },
    scrollview: {
        marginHorizontal: "4%"
    },
    line: {
        alignSelf: "center",
        flex: 0,
        height: 0,
        width: "90%",
        borderBottomWidth: 1,
        borderBottomColor: "#b2b1b1",
        opacity: "0.2",
        marginBottom: "4%"
    }
});

export default EventPage;