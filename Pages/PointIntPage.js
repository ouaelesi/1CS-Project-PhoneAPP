import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import PointIntList from '../componants/PointIntPage/PointIntList';
import DropDown from '../componants/PointIntPage/Dropdown'



const PointIntPage = () => {

    return(
       
        <SafeAreaView
            style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center" ,
                padding: 0        
            }}
        >

     
        <View
         style={{
                flex: 0,
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "2%",

            }}
        
        >

        <View  style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: "2%",

            }}>
            <Text style={{ 
               
               fontSize: "25%", 
               fontWeight: "500" ,
               color:"#28333B",
               margin: "1%"}} >Catégorie</Text>
            <DropDown/>
        </View>
           
        <View  style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: "2%",

            }}>
            <Text style={{ 
               
               fontSize: "25%", 
               fontWeight: "500" ,
               color:"#28333B",
               margin: "1%"}} >Thème</Text>
            <DropDown/>
        </View>


        <View  style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: "2%",

            }}>
            <Text>Icon</Text>
        </View>
           
           
        </View> 


        <View 
            style={{
                alignSelf: "center",
                flex: 0,
                height: 0,
                width: "90%" ,
                borderBottomWidth: 1,
                borderBottomColor: "#b2b1b1",
                opacity: "0.2" 
            }}>
        </View>

        
        <Text style={{ 
                
          fontSize: "25%", 
          fontWeight: "500" ,
          color:"#28333B",
          margin: "5%"}} >Points d'interêts
          </Text>



        <PointIntList/>
         
        </SafeAreaView>
      
    )
}
export default PointIntPage;