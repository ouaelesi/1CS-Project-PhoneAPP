import { Text, 
         StyleSheet,
         View,
         Image,
        ScrollView,
        SafeAreaView,
        TouchableOpacity,
        FlatList} from "react-native";

import { useFonts } from 'expo-font';
import CollectionList from '../componants/ZonePage/CollectionList'


const ZonePage = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
  });
  return (
    <SafeAreaView style={{ paddingHorizontal: 10, flex: 1 , paddingTop : 30 ,backgroundColor:"white",  }}>
        <Image
          source={require("../assets/oran.png")}
          style={styles.img} />

  

        <TouchableOpacity style={styles.backBtn}>
          <Image source={require("../assets/backButton.png")} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.likeBtn}>
          <Image source={require("../assets/likeButton.png")} />
        </TouchableOpacity>

        <CollectionList style={styles.collectionList}/>
          

        <View style={styles.imgText}>
          <Text style={styles.imgTextVille}>Oran</Text>
          <Text style={styles.imgTextRue}>Rue El Akid Lotfi</Text>
        </View>

        <View style={styles.boxes}>

          <View style={styles.box}>
            <Image  source={require("../assets/distance.png")} style={styles.boxIcon} />
            <View>
              <Text style={styles.boxValue}>460 km</Text>
              <Text style={styles.boxTitle}>Distance</Text>
            </View>
            
          </View>
          <View style={styles.box}>
           <Image  source={require("../assets/rating.png")} style={styles.boxIcon} />
            <View>
              <Text style={styles.boxValue}>4.6</Text>
              <Text  style={styles.boxTitle}>Rating</Text>
            </View>
            
          </View>


        </View>

        <View>

        </View>

          <Text style={styles.title}>Description</Text>     
          <ScrollView style={{backgroundColor:'white'}}>
            
              <Text style={styles.desc}>
                Bienvenue à Oran, ville de la Méditérranée, la ville ou il fait bon vivre. 
              Oran est une ville chargé d’histoire avec ses monuments, ses places historiques et ses lieux ou il fait bon flâner le soir comme le Front de Mer offrant aux visiteurs une bouffée d’air frais et une vue magnifique sur la mer Méditérranée et la montagne du Murdjajo.
              Oran (en arabe : وهران (Wahrān), prononcé localement [wɑhren], en berbère : ⵡⴰⵀⵔⴻⵏ (Wahren). Surnommée « la radieuse » (en arabe : الباهية, el-Bāhia), est la deuxième plus grande ville d’Algérie2 et une des plus importantes villes du Maghreb.
              C’est une ville portuaire de la mer Méditerranée, située au nord-ouest de l’Algérie, à 432 km de la capitale Alger, et le chef-lieu de la wilaya du même nom, en bordure du golfe d’Oran. La ville est située au fond d’une baie ouverte au nord et dominée directement à l’ouest par la montagne de l’Aïdour (ou Murdjajo), d’une hauteur de 420 mètres, ainsi que par le plateau de Moulay Abdelkader al-Jilani.
              L’agglomération s’étend de part et d’autre du ravin de l’oued Rhi, maintenant couvert.
              </Text>
              
          </ScrollView>

        <TouchableOpacity ctiveOpacity={0.9} style={styles.btn}>
          <Text style={styles.btnText}>Explorer</Text> 
        </TouchableOpacity>


    </SafeAreaView>
  );
};

export default ZonePage;
const styles = StyleSheet.create({
  img: { 
    width:"100%",
    height:"58%",
    borderRadius: 25 },

    imgText:{
    position:'absolute',
    alignItems: 'flex-start',
    top: '48%',
    left: '8%'
    },
    imgTextVille:{
      color:'white',
      fontFamily:'Poppins-SemiBold',
      fontSize: 40,
      marginBottom: -15
    
      },

      imgTextRue:{
        color:'white',
        fontFamily:'Poppins-Medium',
        fontSize: 20
        },

    title: {
      paddingHorizontal: 10,
      fontSize: 30,
      fontFamily:"Poppins-SemiBold"
    },
    desc: {
        color: '#828282',
        paddingHorizontal: 10,
        fontSize: 15,
        fontFamily:'Poppins-Regular',
    },
     btn: {
      backgroundColor:"#E17E01",
      width: "60%",
      height:"8%",
      borderRadius: 35,
      alignSelf:'center',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: "1%"
      
    },
    btnText:{
      color: '#FFFFFF',
      fontSize: 25,
      fontFamily:"Poppins-Medium",
      textAlign: "center",
    },
    boxes:{
      flexDirection: "row",
      paddingRight: 20,
      justifyContent:'space-between',
      paddingTop: "1.5%",
      paddingBottom:"3%"

    },
    boxIcon:{
      
    },
    box:{
      flexDirection: "row",
      alignItems:'center'
    },
    boxValue:{
      fontFamily:'Poppins-Medium',
    },
    boxTitle:{
      color:'#CCCCCD',
      fontFamily:'Poppins-Medium',
    },
    backBtn:{
      position:'absolute',
      paddingLeft: 20,
      alignSelf:'flex-start',
      top: '6%'
    },
    likeBtn:{
      position:'absolute',
      paddingRight: 20,
      alignSelf:'flex-end',
      top: '6%'
    },
    collectionList: {
      alignSelf:'flex-end',
      
    }
     
    
  });
  

