import { ImageBackground, StyleSheet, Platform, TouchableOpacity, View, Button, Text, Image, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MealCard from '@/components/MealCard';
import Header from '@/components/Header';
import MealList from '@/components/MealList';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function meals() {
    return (
        <View style={styles.container}>
            <Header title={"Meals"}/>
            <ImageBackground source={require('../../assets/images/anteatery.png')} style={styles.image}>
                <Text style={styles.title}>Anteatery</Text>
                <View style={styles.icons}>
                    <Ionicons style={styles.iconSwap} name="swap-horizontal"></Ionicons>
                    <Ionicons style={styles.iconCalendar} name="calendar-clear-outline"></Ionicons>
                    <Text style={styles.openText}>Open for Breakfast</Text>
                    <Ionicons style={styles.iconAlert} name="information-circle-outline"></Ionicons>
                </View>
            </ImageBackground>
            
            <MealList></MealList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // textAlign: 'center',
        // flexDirection: 'column',
    },

    image: {
        width: '100%',
        height: 150,
        justifyContent: 'flex-end'
    },

    title: {
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
    },

    openText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center',
    },

    iconSwap: {
        color: 'white',
        fontSize: 24,
        marginLeft: 10,
    },

    iconCalendar: {
        color: 'white',
        fontSize: 24,
        marginLeft: -55,
        marginRight: -35,
    },

    iconAlert: {
        color: 'white',
        fontSize: 24,
        marginRight: 10,
    },

    icons: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

})