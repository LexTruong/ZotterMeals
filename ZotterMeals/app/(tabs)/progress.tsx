import { ImageBackground, StyleSheet, Platform, TouchableOpacity, View, Button, Text, Image, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '@/components/Header';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function progress() {
    return (
        <View>
            <Header title="Progress"></Header>
           


            <View style={styles.titleIcons}>
                <Text style={styles.myMeals}>My Meals</Text>
                <View style={styles.icons}>
                    <Ionicons style={styles.icons} name="add-circle-outline"></Ionicons>
                    <Ionicons style={styles.icons} name="podium-outline"></Ionicons>
                    <Ionicons style={styles.icons} name="calendar-clear-outline"></Ionicons>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    myMeals: {
        fontSize: 25,
        fontWeight: 'bold',
    },

    titleIcons: {
        flexDirection: 'row',
    },

    icons: {
        flexDirection: 'row',
        marginLeft: 'auto',
        justifyContent: 'flex-end',
        gap: 10,
        marginRight: 10,
        fontSize: 28,
    },


})
