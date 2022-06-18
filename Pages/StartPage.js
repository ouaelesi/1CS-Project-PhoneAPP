import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

import { Dimensions } from 'react-native';
2
3
const {width, height} = Dimensions.get("window");

export default function StartPage() {
    return(
        <View style={styles.container}>

        <ImageBackground source={require('../assets/bg-auth.png')} resizeMode="cover" style={styles.image}>
          <View style={styles.header}>
            <Text style={styles.logo}>Logo</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.text}>Let's Make</Text>
            <Text style={styles.textBold}>Your Dream </Text>
            <Text style={styles.textBoldLine}>Vacation.</Text>
          </View>
          <View style={styles.bottom}>
          {/*  ajouter onPress pour aller & SIGN UP page  */}
            <TouchableOpacity >
            <View style={styles.button}>
                <Text style={styles.buttonText} >Get Started</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
         
      <StatusBar style="auto" />
    </View>
    
    );
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: 'white',
    fontSize: width/11,
    marginLeft:50,
  },
  textBold: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: width/10,
    marginLeft:50,
  },
  textBoldLine: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: width/10,
    marginLeft:50,
    textDecorationLine: 'underline ',
  },
  logo: {
    color: 'white',
    textAlign: 'center', 
    fontSize: width/15,
    fontWeight: 'w500',
  },
  header: {
    right:50,
    left:50,
    position: 'absolute',
    top: 30,
  },
  body: {
    position: 'absolute',
    bottom: 140,
  },
  bottom: {
    alignItems:'center',
    right: 50,
    left: 50,
    position: 'absolute',
    bottom: 30,
  },
  button: {
    textAlignVertical: 'center',
    width:width/1.5,
    height: height/14,
    borderRadius: 30,
    backgroundColor: '#E17E01',
    justifyContent: 'center',
    alignItems:'center',
  },
  buttonText: {
    color: '#fff',
    fontWight: 'bold',
    fontSize: width/15,
    textAlign: 'center',
    fontWeight: 'bold',
    textAlignVertical: 'auto',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});


