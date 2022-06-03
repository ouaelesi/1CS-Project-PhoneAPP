import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar
} from 'react-native';
import EventCard from '../EventPage/EventCard';

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
    }, {
        id: '8',
        title: 'Third Item'
    }
];

// const Item = ({ title }) => (   <View style={styles.item}>     <Text
// style={styles.title}>{title}</Text>   </View> );

const Item = () => (<EventCard/>);

const EventList = () => {
    const renderItem = ({item}) => (<Item title={item.title}/>);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
          />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    item: {
 
       margin: 0
    },
    title: {
        fontSize: 32
    }
});

export default EventList;