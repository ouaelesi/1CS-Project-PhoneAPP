import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useFonts } from 'expo-font';


const ExploreButton = (props) => {

    let [fontsLoaded] = useFonts({
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
      });

 return(
     <TouchableOpacity  style={[styles.btnContainer,
        {backgroundColor: props.color,
         borderColor: props.borderColor , 
         width: props.small ? "46%" : "95%",}]}>
        
            <Text style={styles.text}>{props.text}</Text>
                { props.id == 1 ? (
                    <Image style={styles.icon} 
                    source={require("../../assets/choisirPtInteret.png")}/>
                ): 
                props.id == 2 ? (
                        <Image style={styles.icon} 
                        source={require("../../assets/voirEvent.png")}/>
                    ) : (
                          <Image style={styles.icon} 
                          source={require("../../assets/choisirCircuit.png")}/>
                        )
                }
         
     </TouchableOpacity>
    


    );
};

export default ExploreButton;
const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor:'#F2F2F2',
        alignSelf:'center', 
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "rgba(0, 0, 0, .1)",
        marginVertical: '2%',
        padding: '5%',
        marginHorizontal : '1%',

    },
    text: {
        fontSize : 16,
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'left'
    },
    icon:{
        alignSelf: 'flex-end',
        position: "absolute",
        bottom: "10%",
        right: '5%'
    }
  });