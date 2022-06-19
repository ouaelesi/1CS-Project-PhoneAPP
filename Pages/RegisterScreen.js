// Import React and Component
import React, { useState, createRef } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Pressable,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Loader from "../componants/Auth/Loader";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const RegisterScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  const emailInputRef = createRef();
  const ageInputRef = createRef();
  const addressInputRef = createRef();
  const passwordInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext("");
    if (!userName) {
      alert("Please fill Name");
      return;
    }
    if (!userEmail) {
      alert("Please fill Email");
      return;
    }
    if (!userPassword) {
      alert("Please fill Password");
      return;
    }
    //Show Loader
    setLoading(true);
    var dataToSend = {
      name: userName,
      email: userEmail,
      password: userPassword,
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    console.log(dataToSend);
    navigation.navigate("HomePage");
  };
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#307ecc",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../assets/PointIntPage/images/musee.png")}
          style={{
            height: 150,
            resizeMode: "contain",
            alignSelf: "center",
          }}
        />
        <Text style={styles.successTextStyle}>Registration Successful</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate("LoginScreen")}
        >
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.mainBody}>
      <ImageBackground
        source={require("../assets/bg-auth.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Loader loading={loading} />
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["rgba(40, 51, 59, 0.2)", "rgba(40, 51, 59,0.8)"]}
            style={{
              height: "100%",
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <View
              style={{
                flex: 1,
                paddingTop: 50,
                justifyContent: "center",
                alignContent: "center",
                height: "100%",
              }}
            >
              <KeyboardAvoidingView
                enabled
                style={{
                  flex: 1,
                  paddingVertical: 20,
                  justifyContent: "space-between",
                  alignContent: "center",
                  height: "100%",
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    Logo
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={styles.headerText}>Welcome to </Text>
                  <View
                    style={{
                      borderBottomWidth: 4,
                      borderBottomColor: "#E17E01",
                    }}
                  >
                    <Text style={styles.headerText}>Algerisme</Text>
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  <View style={styles.SectionStyle}>
                    <AntDesign name="user" size={24} color="#8b9cb5" />
                    <TextInput
                      style={styles.inputStyle}
                      onChangeText={(UserName) => setUserName(UserName)}
                      underlineColorAndroid="#f000"
                      placeholder="Name"
                      placeholderTextColor="#8b9cb5"
                      autoCapitalize="sentences"
                      returnKeyType="next"
                      onSubmitEditing={() =>
                        emailInputRef.current && emailInputRef.current.focus()
                      }
                      blurOnSubmit={false}
                    />
                  </View>
                  <View style={styles.SectionStyle}>
                    <Ionicons name="mail-outline" size={24} color="#8b9cb5" />
                    <TextInput
                      style={styles.inputStyle}
                      onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                      underlineColorAndroid="#f000"
                      placeholder="Email"
                      placeholderTextColor="#8b9cb5"
                      keyboardType="email-address"
                      ref={emailInputRef}
                      returnKeyType="next"
                      onSubmitEditing={() =>
                        passwordInputRef.current &&
                        passwordInputRef.current.focus()
                      }
                      blurOnSubmit={false}
                    />
                  </View>
                  <View style={styles.SectionStyle}>
                    <Ionicons name="key-outline" size={24} color="#8b9cb5" />
                    <TextInput
                      style={styles.inputStyle}
                      onChangeText={(UserPassword) =>
                        setUserPassword(UserPassword)
                      }
                      underlineColorAndroid="#f000"
                      placeholder="Password"
                      placeholderTextColor="#8b9cb5"
                      ref={passwordInputRef}
                      returnKeyType="next"
                      secureTextEntry={hiddenPassword}
                      onSubmitEditing={() =>
                        ageInputRef.current && ageInputRef.current.focus()
                      }
                      blurOnSubmit={false}
                    />
                    <Pressable
                      onPress={() => {
                        setHiddenPassword(!hiddenPassword);
                      }}
                    >
                      {hiddenPassword && (
                        <Feather name="eye-off" size={24} color="#8b9cb5" />
                      )}
                      {!hiddenPassword && (
                        <Feather name="eye" size={24} color="#8b9cb5" />
                      )}
                    </Pressable>
                  </View>
                  <Text
                    style={styles.loginTextStyle}
                    onPress={() => navigation.navigate("LoginPage")}
                  >
                    Already have an account ? Login
                  </Text>
                  {errortext != "" ? (
                    <Text style={styles.errorTextStyle}>{errortext}</Text>
                  ) : null}
                </View>

                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}
                  onPress={handleSubmitButton}
                >
                  <Text style={styles.buttonTextStyle}>Sign Up</Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
            </View>
          </LinearGradient>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "900",
    color: "#ffffff",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    paddingHorizontal: 10,
    margin: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderRadius: 10,
    borderBottomColor: "#E17E01",
  },
  buttonStyle: {
    backgroundColor: "#E17E01",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#E17E01",
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
  inputStyle: {
    flex: 1,
    color: "white",
    paddingLeft: 15,
    paddingRight: 15,
  },
  loginTextStyle: {
    color: "#E17E01",
    fontSize: 11,
    paddingRight: 35,
    alignSelf: "flex-end",
    padding: 0,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
  successTextStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    padding: 30,
  },
});
