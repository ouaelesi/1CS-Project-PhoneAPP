
 
// Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
  Pressable
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
 
import Loader from '../componants/Auth/Loader';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'; 
const LoginScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [hiddenPassword, setHiddenPassword] = useState(true)
 
  const passwordInputRef = createRef();
 
  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    //setLoading(true);
    let dataToSend = {email: userEmail, password: userPassword};
    // let formBody = [];
    // for (let key in dataToSend) {
    //   let encodedKey = encodeURIComponent(key);
    //   let encodedValue = encodeURIComponent(dataToSend[key]);
    //   formBody.push(encodedKey + '=' + encodedValue);
    // }
    console.log(dataToSend)
    navigation.navigate('HomePage')

    //formBody = formBody.join('&');
    
    // fetch('http://localhost:3000/api/user/login', {
    //   method: 'POST',
    //   body: {
    //     "email": "augue%40lectusquis.co.uk",
    //     "password": "12345"
    //   },
    //   headers: {
    //     //Header Defination
    //     //'Content-Type':
    //     //'application/x-www-form-urlencoded;charset=UTF-8',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     //Hide Loader
    //     setLoading(false);
    //     console.log(responseJson);
    //     // If server response message same as Data Matched
    //     if (responseJson.status === 'success') {
    //       AsyncStorage.setItem('user_id', responseJson.data.email);
    //       console.log(responseJson.data.email);
    //       navigation.replace('DrawerNavigationRoutes');
    //     } else {
    //       setErrortext(responseJson.msg);
    //       console.log('Please check your email id or password');
    //     }
    //   })
    //   .catch((error) => {
    //     //Hide Loader
    //     setLoading(false);
    //     console.error(error);
    //   });
  };
 
  return (
    <View style={styles.mainBody}>
      <ImageBackground source={require('../assets/bg-auth.png')} resizeMode="cover" style={styles.image}>
        <Loader loading={loading} />
        <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
          <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['rgba(40, 51, 59, 0.2)', 'rgba(40, 51, 59,0.8)']}
          style={{
            height: "100%",
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
          }} >
            <View style={{
              flex: 1,
              paddingTop: 50,
              justifyContent: "center",
              alignContent: "center",
              height: "100%",
            }}>
            <KeyboardAvoidingView enabled style={{
              flex: 1,
              paddingVertical: 20,
              justifyContent: "space-between",
              alignContent: "center",
              height: "100%",
            }}>
              <View style={{alignItems: 'center'}}>
                <Text style={{
                  color: "white",
                  fontSize: 20,
                }}>Logo</Text>
              </View>
              <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: "center",
                }}>
                <Text style={styles.headerText}>Welcome to </Text>
                <View style={{
                  width: "auto",
                  alignSelf: "center"
                }}>
                  <Text style={styles.headerText}>Algerisme</Text>
                  <View style={{ height: 10,
                    width: 140,
                    position: "absolute",
                    bottom: 2,
                    elevation: -1,
                    backgroundColor: "#E17E01",

                  }}></View>
                </View>
                
              </View>
              <View style={{ flex: 1}}>
                <View style={styles.SectionStyle}>
                  <Ionicons name="mail-outline" size={24} color="#8b9cb5" />
                  <TextInput
                    style={styles.inputStyle}
                    onChangeText={(UserEmail) =>
                      setUserEmail(UserEmail)
                    }
                    placeholder="Enter Email" //dummy@abc.com
                    placeholderTextColor="#8b9cb5"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    returnKeyType="next"
                    onSubmitEditing={() =>
                      passwordInputRef.current &&
                      passwordInputRef.current.focus()
                    }
                    underlineColorAndroid="#f000"
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
                    placeholder="Enter Password" //12345
                    placeholderTextColor="#8b9cb5"
                    keyboardType="default"
                    ref={passwordInputRef}
                    onSubmitEditing={Keyboard.dismiss}
                    blurOnSubmit={false}
                    secureTextEntry={hiddenPassword}
                    underlineColorAndroid="#f000"
                    returnKeyType="next"
                  />
                  <Pressable
                    onPress={() => {
                      setHiddenPassword(!hiddenPassword)
                    }}
                  >
                    {
                      hiddenPassword && <Feather name="eye-off" size={24} color="#8b9cb5" />
                    }
                    {
                      !hiddenPassword && <Feather name="eye" size={24} color="#8b9cb5" />
                    }
                    
                  </Pressable>
                  
                </View>
                <Text
                  style={styles.registerTextStyle}
                  onPress={() => navigation.navigate('RegisterPage')}>
                  New Here ? Register
                </Text>
                {errortext != '' ? (
                    <Text style={styles.errorTextStyle}>
                      {errortext}
                    </Text>
                  ) : null}
              </View>
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={handleSubmitPress}>
                <Text style={styles.buttonTextStyle}>Sign In</Text>
              </TouchableOpacity>
              
            </KeyboardAvoidingView>
          </View>
        </LinearGradient>
        
      </ScrollView>
      </ImageBackground>
      
      
    </View>
  );
};
export default LoginScreen;
 
const styles = StyleSheet.create({

  mainBody: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: "900",
    color: "#ffffff",
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
    paddingHorizontal: 10,
    margin: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderRadius: 10,
    borderBottomColor: '#E17E01',
  },
  buttonStyle: {
    backgroundColor: '#E17E01',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: 'rgba(0,0,0,0.25)',
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 15,
    fontSize: 18,
    fontWeight: "bold"
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
  },
  registerTextStyle: {
    color: '#E17E01',
    fontSize: 11,
    paddingRight: 35,
    alignSelf: 'flex-end',
    padding: 0,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
