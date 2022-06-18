import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";

import {
  EvilIcons,
  Octicons,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { Dimensions } from "react-native";
2;
3;
const { width, height } = Dimensions.get("window");

export default function CommentPage() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {/*   Top of the screen    */}
          <View style={styles.top}>
            <ImageBackground
              source={require("../assets/Musee.png")}
              resizeMode="cover"
              style={styles.image}
              imageStyle={{ borderRadius: 20 }}
            >
              <Text style={styles.text}>Musée des Beaux art </Text>
              <Text style={styles.textLocation}>Alger </Text>
            </ImageBackground>
          </View>
          {/*   Body of the screen    */}
          <View style={styles.body}>
            {/*   horaires rt moyenne de transport part    */}
            <View style={styles.row}>
              <View style={styles.row1}>
                <EvilIcons name="clock" size={width / 11} color="#E17E01" />
                <Text style={styles.bText}>Horaires d’accés</Text>
              </View>
              <Text>9AM-4PM</Text>
            </View>
            {/*  séparateur   */}
            <View
              style={{
                marginLeft: width / 15,
                marginVertical: width / 25,
                width: width - (width * 2) / 15,
                borderBottomColor: "#B2B1B1",
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
            <View style={styles.row}>
              <View style={styles.row1}>
                <MaterialIcons
                  name="emoji-transportation"
                  size={width / 12}
                  color="#E17E01"
                />
                <Text style={styles.bText}>Moyenne de transport</Text>
              </View>
              <View style={styles.row2}>
                <Ionicons
                  name="ios-car-sport-outline"
                  size={width / 15}
                  color="#E17E01"
                />
                <Ionicons
                  name="subway-outline"
                  size={width / 15}
                  color="#E17E01"
                />
                <Ionicons
                  name="md-airplane-outline"
                  size={width / 15}
                  color="#E17E01"
                />
              </View>
            </View>
            {/*  séparateur   */}
            <View
              style={{
                marginLeft: width / 15,
                marginVertical: width / 25,
                width: width - (width * 2) / 15,
                borderBottomColor: "#B2B1B1",
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
            {/*   Galerie part    */}
            <Text style={styles.Gtext}>Galerie</Text>
            <View>
              <View style={styles.galerie}>
                <Image
                  source={require("../assets/Musee.png")}
                  style={styles.Igalerie}
                />
                <Image
                  source={require("../assets/Musee.png")}
                  style={styles.Igalerie}
                />
                <Image
                  source={require("../assets/Musee.png")}
                  style={styles.Igalerie}
                />
              </View>
              <View style={styles.galerie}>
                <Image
                  source={require("../assets/Musee.png")}
                  style={styles.Igalerie}
                />
                <Image
                  source={require("../assets/Musee.png")}
                  style={styles.Igalerie}
                />
                <Image
                  source={require("../assets/Musee.png")}
                  style={styles.Igalerie}
                />
              </View>
              <View style={styles.galerie}>
                <Image
                  source={require("../assets/Musee.png")}
                  style={styles.Igalerie}
                />
                <Image
                  source={require("../assets/Musee.png")}
                  style={styles.Igalerie}
                />
                {/*  derniere image ou se trouve SEE MORE pour voir plus de photos   */}
                <ImageBackground
                  source={require("../assets/Musee.png")}
                  style={styles.Igalerie}
                  blurRadius={15}
                  imageStyle={{ borderRadius: 10 }}
                >
                  {/*  ajouter onPress pour afficher plus de photos   */}
                  <TouchableOpacity>
                    <Text style={styles.textLast}>Voir Plus</Text>
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            </View>
            {/*  séparateur    */}
            <View
              style={{
                marginLeft: width / 15,
                marginVertical: width / 25,
                width: width - (width * 2) / 15,
                borderBottomColor: "#B2B1B1",
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
            {/*  Commentaire part   */}
            <Text style={styles.Atext}>Ajouter Un commentaire</Text>
            <TextInput
              multiline
              placeholder="Votre commentaire"
              style={styles.Input}
            />
            <View style={styles.stars}>
              <Octicons name="star" style={styles.starActive} />
              <Octicons name="star" style={styles.starActive} />
              <Octicons name="star" style={styles.starActive} />
              <Octicons name="star" style={styles.starActive} />
              <Octicons name="star" style={styles.star} />
            </View>
            <View style={styles.bottom}>
              {/*  ajouter onPress pour le retour de page  */}
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="arrow-left-circle"
                  size={width / 8.5}
                  color="#E17E01"
                />
              </TouchableOpacity>
              {/*  ajouter onPress pour ajouter commentaire  */}
              <TouchableOpacity>
                <View style={styles.bu}>
                  <Text style={styles.Btext}>Ajouter</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    left: width / 14,
    color: "white",
    fontSize: width / 13,
    fontWeight : "500"
  },
  textLocation: {
    left: width / 14,
    color: "white",
    fontSize: width / 18,
  },
  header: {
    padding: 20,
    height: 200,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 30,
  },
  top: {
    paddingTop: 10,
    borderRadius: 20,
    height: 160,
    paddingHorizontal : 10 , 
    paddingBottom: 0,
  },
  header: {
    borderRadius: 30,
  },
  bText: {
    color: "black",
    fontSize: width / 29,
    paddingLeft: 10,
    color: "#6B6B6B",
  },
  body: {
    paddingTop: 10,
  },
  row: {
    paddingHorizontal : 15, 
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  row1: {
    flexDirection: "row",
    alignItems: "center",
  },
  row2: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  Gtext: {
    paddingLeft: width / 15,
    fontWeight: "bold",
    fontSize: width / 20,
    color: "#28333B",
  },
  Atext: {
    paddingLeft: width / 15,
    fontWeight: "bold",
    fontSize: width / 20,
    color: "#28333B",
    paddingBottom: 15,
  },
  galerie: {
    flexDirection: "row",
    paddingHorizontal : 15 , 
    paddingTop: height / 85,
  },
  Igalerie: {
    borderRadius: 10,
    marginRight: 6,
    height: height / 7,
    width: width / 3.5,
    alignItems: "center",
    justifyContent: "center",
  },
  Input: {
    height: 180,
    marginHorizontal : 15 , 
    backgroundColor: "#F2F2F2",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    borderRadius: 10,
    padding: 10,
  },
  stars: {
    paddingTop: 15,
    flexDirection: "row",
    paddingLeft: width / 15,
  },
  starActive: {
    color: "#E17E01",
    fontSize: width / 18,
    paddingRight: width / 40,
  },
  star: {
    color: "black",
    fontSize: width / 18,
    paddingRight: width / 10,
  },
  bottom: {
    justifyContent: "space-between",
    paddingHorizontal: width / 15,
    paddingVertical: height / 40,
    flexDirection: "row",
  },
  bu: {
    borderRadius: 20,
    backgroundColor: "#E17E01",
    width: width / 4,
    height: height / 19,
    justifyContent: "center",
    alignItems: "center",
  },
  Btext: {
    color: "white",
    fontSize: width / 22,
    fontWeight : '600'
  },
  textLast: {
    color: "white",
    fontWeight: "bold",
  },
});
