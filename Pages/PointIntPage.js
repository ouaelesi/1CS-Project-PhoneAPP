import React from 'react';
import {View} from 'react-native';
import PointIntList from '../componants/PointIntPage/PointIntList'


const PointIntPage = () => {
    return(
        <View
            style={{
                flex: 1,
                justifyContent: "center" ,
                alignItems: "center",
                padding: "2%"
            }}
        >
           
            <PointIntList/>
        </View>
    )
}
export default PointIntPage;