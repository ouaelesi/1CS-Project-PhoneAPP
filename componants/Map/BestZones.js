import React from 'react';
import { StyleSheet ,View ,Text,ScrollView} from 'react-native';

const BestZones = () => {
    const Zones =[
        "","","","",""
    ]
    return (
        <View style={styles.container}>
            <Text style={{color:"white"}}>Best Zones</Text>
            <ScrollView horizontal>
                <View style={{flexDirection :"row" ,marginTop :5}}>
 {
     Zones.map((zone,key)=>(
         <View style={{width:90 , height:90 , backgroundColor : "gray" , marginRight:10}}>

         </View>
     ))
 }
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        backgroundColor: "#28333B",
        borderRadius: 20,
        paddingVertical: 15,
        alignSelf: "center",
        paddingLeft: 20,
        borderColor: "#E17E01",
        borderWidth: 2,
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        width: "92%",
        position: "absolute" ,
        bottom : 80 , 

    }
})

export default BestZones;