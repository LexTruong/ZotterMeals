import { StyleSheet, Platform, TouchableOpacity, View, Button, Text, Image, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import MealStrip from './MealStrip'


export default function MyMeals() {
    const DATA = [
        {
            name: "Burger",
            calories: 1000,
            protein: 30
        },
        {
            name: "Oatmeal",
            calories: 200,
            protein: 9,
        },
        {
            name: "Brownie",
            calories: 300,
            protein: 4,
        },
    ]

    return (
        <View style={styles.container}>
            <FlatList style={styles.list}
                data={DATA}
                renderItem={({item}) => <MealStrip info={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },

    list: {
        backgroundColor: 'white',
        paddingBottom: '100%'
    }
})