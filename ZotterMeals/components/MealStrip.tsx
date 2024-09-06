import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, Text, View } from 'react-native'

interface MealCardInfo {
    name: string,
    calories: number,
    protein: number
}

export default function MealStrip({info}: {info: MealCardInfo}) {
    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Text style={styles.name}>{info.name}</Text>
                <View style={styles.details}>
                    <Text>{info.calories} Calories</Text>
                    <Text>{info.protein}g Protein</Text>
                </View>
            </View>
            <Ionicons style={styles.iconAlert} name="information-circle-outline"></Ionicons>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        marginVertical: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },

    text: {
        paddingVertical: 5,
        shadowColor: 'black'
    },

    iconAlert: {
        color: 'black',
        fontSize: 24,
    },

    name: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 5,
    },

    details: {
        display: 'flex',
        flexDirection: 'row',
        gap: 40,
    }
})