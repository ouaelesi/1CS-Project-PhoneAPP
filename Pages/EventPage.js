import React from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';

import EventList from '../componants/EventPage/EventList';

const EventPage = () => {

    return (

        <SafeAreaView style={styles.container}>
            <EventList/>
       
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
    }
});

export default EventPage;