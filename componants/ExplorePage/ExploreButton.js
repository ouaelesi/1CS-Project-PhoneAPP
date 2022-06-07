import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const ExploreButton = (props) => {
//var  image = img? img : '';
 return(
     <TouchableOpacity  style={[styles.btnContainer,
        {backgroundColor: props.color,
         borderColor: props.borderColor , 
         width: props.small ? "46%" : "95%",}]}>
        
            <Text style={styles.text}>{props.text}</Text>
{/*             <Image source={require(image)}/> */}
         
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
        marginVertical: '4%',
        padding: '5%',
        margin : '1%',

    },
    text: {
        fontSize : 20,
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'left'
    },
  });