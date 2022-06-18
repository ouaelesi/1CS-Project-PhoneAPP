import React from 'react';
import { View ,Text , StyleSheet} from 'react-native';

import NavBar from '../componants/NavBar';
const ProfilePage = ({navigation}) => {
    return (
        <View style={{paddingTop:80  , flex: 1}}>
            <View>

            </View>
            <NavBar  navigation={navigation} ActivePage={"ProfilePage"} />
        </View>
    );
};

const Styles = StyleSheet.create({
   Header : {
       
   }
}
)

export default ProfilePage;