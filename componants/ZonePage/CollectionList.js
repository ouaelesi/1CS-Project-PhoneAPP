import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  TouchableOpacity,
  Platform,
  TextInput,
  Alert,
  SafeAreaView,
  Animated,
  FlatList,
  StatusBar,
  ScrollView
} from 'react-native';





const CollectionList= () => {

    const DATA = [
        {
          id: 1,
          
        },
        {
          id: 2,
         
        },
        {
          id: 3,
         
        },
        
     
      ];


  
  const ItemRender = ({ name , year , gender}) => (
    <View style={styles.container}>

        <Image source={require('../../assets/smallImg.png')} />

    </View>
  );
 
 
  return (
  

        <SafeAreaView   style={styles.flatlist} >
    
              
              <FlatList
                data={DATA}
                renderItem={({ item }) => <ItemRender />}
                keyExtractor={item => item.id.toString()}
                horizontal={false}
                />

          
         
        </SafeAreaView>
        
 
  );
}

export default CollectionList;

const styles = StyleSheet.create({

  container: {
    margin: 5,
  },
  
  flatlist: {
    position: 'absolute',
    alignSelf:'flex-end',
    paddingRight: 20,
    top: '32%'
    
  },
  
});