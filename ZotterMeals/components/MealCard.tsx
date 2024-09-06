import Ionicons from '@expo/vector-icons/Ionicons'
import { Image, StyleSheet, Text, View } from 'react-native'

interface MealCardInfo {
    name: string,
    calories: number,
    protein: number
}

export default function MealCard({info}: {info: MealCardInfo}) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/burger.jpg')} />
            </View>
            <View style={styles.text}>
                <Text style={styles.name}>{info.name}</Text>
                <View style={styles.details}>
                    <Text>{info.calories} Calories</Text>
                    <Text>{info.protein}g Protein</Text>
                    <Ionicons style={styles.iconAlert} name="information-circle-outline"></Ionicons>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        marginVertical: 10,
        shadowOpacity: .5,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 5
        }
    },

    imageContainer: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden'
    },

    image: {
        height: 200,
        width: '100%',
        objectFit: 'cover'
    },

    text: {
        paddingVertical: 5,
        paddingLeft: 10,
        shadowColor: 'black'
    },

    iconAlert: {
        color: 'black',
        fontSize: 24,
        marginRight: 10,
    },

    name: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 5,
    },

    details: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

})