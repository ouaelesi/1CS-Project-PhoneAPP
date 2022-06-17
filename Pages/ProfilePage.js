import React from 'react';
import { View ,Text } from 'react-native';

import NavBar from '../componants/NavBar';
const ProfilePage = ({navigation}) => {
    return (
        <View style={{paddingTop:80  , flex: 1}}>
            <Text>Profil Page</Text>
            <NavBar  navigation={navigation} ActivePage={"ProfilePage"} />
        </View>
    );
};

export default ProfilePage;