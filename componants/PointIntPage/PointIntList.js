import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar
} from 'react-native';
import PointIntCard from '../PointIntPage/PointIntCard';

const DATA = [
    {
        id: '1',
        title: 'First Item'
    }, {
        id: '2',
        title: 'Second Item'
    }, {
        id: '3',
        title: 'Third Item'
    }, {
        id: '4',
        title: 'Second Item'
    }, {
        id: '5',
        title: 'Third Item'
    }, {
        id: '6',
        title: 'Second Item'
    }, {
        id: '7',
        title: 'Third Item'
    }
    , {
      id: '8',
      title: 'Third Item'
  }
];

// const Item = ({ title }) => (   <View style={styles.item}>     <Text
// style={styles.title}>{title}</Text>   </View> );

const Item = () => (<PointIntCard/>);

const PointIntList = () => {
    const renderItem = ({item}) => (<Item title={item.title}/>);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                columnWrapperStyle={{
                justifyContent: 'space-around'
            }}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 0
    },
    title: {
        fontSize: 32
    }
});

export default PointIntList;