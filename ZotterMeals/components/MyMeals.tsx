import { StyleSheet, Platform, TouchableOpacity, View, Button, Text, Image, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import MealStrip from './MealStrip'
import { MealCardInfo } from './MealCard';

interface Props {
    meals: MealCardInfo[],
    updateData: Function
}

export default function MyMeals({meals, updateData}: Props) {

    return (
        <View style={styles.container}>
            <FlatList style={styles.list}
                data={meals}
                renderItem={({item}) => <MealStrip info={item} updateData={updateData}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },

    list: {
        backgroundColor: 'white'
    }
})