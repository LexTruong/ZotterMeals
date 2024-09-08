import Ionicons from '@expo/vector-icons/Ionicons'
import { ImageBackground, Image, StyleSheet, Text, View, Pressable } from 'react-native'
import MealInfoModal from './MealInfoModal'
import { useState } from 'react'

interface MealCardInfo {
    name: string,
    calories: number,
    protein: number
}

export default function MealCard({info}: {info: MealCardInfo}) {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageBackground style={styles.image} source={require('../assets/images/burger.jpg')}>
                    <Pressable onPress={() => console.log('21s')}>
                        <Ionicons style={styles.addIcon} name="add-circle-outline"></Ionicons>
                    </Pressable>
                </ImageBackground>
            </View>
            <View style={styles.text}>
                <Text style={styles.name}>{info.name}</Text>
                <View style={styles.details}>
                    <Text>{info.calories} Calories</Text>
                    <Text>{info.protein}g Protein</Text>
                    <MealInfoModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Ionicons style={styles.iconAlert} name="information-circle-outline"></Ionicons>
                    </Pressable>
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

    addIcon: {
        color: 'white',
        textAlign: 'right',
        fontSize: 35,
        marginRight: 10,
        marginTop: 10,
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