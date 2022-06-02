import React from 'react';
import {Text ,View} from 'react-native';
import PointIntCard from '../componants/PointIntPage/PointIntCard';


const Test = () => {
    return(
        <View
            style={{
                flex: 1,
                justifyContent: "center" ,
                alignItems: "center"
            }}
        >
           
            <PointIntCard/>
        </View>
    )
}
export default Test;