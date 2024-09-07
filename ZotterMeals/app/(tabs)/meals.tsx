import { ImageBackground, StyleSheet, Platform, TouchableOpacity, View, Button, Text, Image, FlatList, Pressable } from 'react-native';
import Header from '@/components/Header';
import MealList from '@/components/MealList';
import Ionicons from '@expo/vector-icons/Ionicons';
import {useState} from 'react';
import DiningInfoModal from '@/components/DiningInfoModal';

export default function meals() {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View style={styles.container}>
            <Header title={"Meals"}/>
            <ImageBackground source={require('../../assets/images/anteatery.png')} style={styles.image}>
                <Text style={styles.title}>Anteatery</Text>
                <View style={styles.icons}>
                    <View style={styles.leftIcons}>
                        <Ionicons style={styles.iconSwap} name="swap-horizontal"></Ionicons>
                        <Ionicons style={styles.iconCalendar} name="calendar-clear-outline"></Ionicons>
                    </View>
                    <Text style={styles.openText}>Open for Breakfast</Text>
                    <DiningInfoModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Ionicons style={styles.iconAlert}name="information-circle-outline"></Ionicons>
                    </Pressable>
                </View>
            </ImageBackground>
            
            <MealList></MealList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    
    image: {
        width: '100%',
        height: 180,
        justifyContent: 'flex-end'
    },

    title: {
        marginBottom: 30,
        textAlign: 'center',
        fontSize: 50,
        color: 'white',
        fontWeight: 'bold',
    },

    openText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 15
    },

    iconSwap: {
        color: 'white',
        fontSize: 24
    },

    iconCalendar: {
        color: 'white',
        fontSize: 24,
    },

    iconAlert: {
        color: 'white',
        fontSize: 24
    },

    icons: {
        margin: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    leftIcons: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5
    }
})