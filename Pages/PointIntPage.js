import React from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import PointIntList from '../componants/PointIntPage/PointIntList';
import DropDown from '../componants/PointIntPage/Dropdown';
import CityCard from '../componants/CityCard';

const PointIntPage = () => {

    return (

        <SafeAreaView style={styles.container}>
            <CityCard/>

            <View style={styles.searchContainer}>

                <View style={styles.searchCritere}>
                    <Text
                        style={{
                        fontSize: 25,
                        fontWeight: "500",
                        color: "#28333B",
                        margin: "1%",
                        fontFamily: 'Poppins_500Medium'
                    }}>Catégorie</Text>
                    <DropDown/>
                </View>

                <View style={styles.searchCritere}>
                    <Text
                        style={{
                        fontSize: 25,
                        fontWeight: "500",
                        color: "#28333B",
                        margin: "1%",
                        fontFamily: 'Poppins_500Medium'
                    }}>Thème</Text>
                    <DropDown/>
                </View>

                <Image
                    source={require("../assets/PointIntPage/icones/search-normal.png")}
                    style={styles.searchIcon}></Image>

            </View>

            <View style={styles.line}></View>
            <View style={{
                flex: 1
            }}>
                <Text
                    style={{
                    fontSize: 25,
                    fontWeight: "500",
                    color: "#28333B",
                    margin: "5%",
                    fontFamily: 'Poppins_500Medium'
                }}>Points d'interêts
                </Text>

                <PointIntList/>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        padding: 0
    },
    searchContainer: {
        flex: 0,
        flexDirection: "row",
        padding: "2%"
    },
    searchCritere: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "2%"
    },
    searchIcon: {
        alignSelf: "flex-end",
        margin: "4%",
        marginBottom: "3%"
    },
    line: {
        alignSelf: "center",
        flex: 0,
        height: 0,
        width: "90%",
        borderBottomWidth: 1,
        borderBottomColor: "#b2b1b1",
        opacity: "0.2"
    }
});

export default PointIntPage;