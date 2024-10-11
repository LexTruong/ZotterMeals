import Ionicons from '@expo/vector-icons/Ionicons'
import { ImageBackground, Image, StyleSheet, Text, View, Pressable } from 'react-native'
import MealInfoModal from './MealInfoModal'
import { memo, useState } from 'react'
import {collection, addDoc, setDoc, doc, updateDoc, arrayUnion, getDoc} from "firebase/firestore"
import {FIREBASE_AUTH, FIRESTORE_DB } from '../firebaseConfig.js'
import * as Haptics from 'expo-haptics';

export interface MealCardInfo {
    name: string,
    description: string,
    nutrition: {
        isVegan: boolean | null,
        isVegetarian: boolean | null,
        servingSize: string | null,
        servingUnit: string | null,
        calories: string | null,
        protein: string | null,
        caloriesFromFat: string | null,
        totalFat: string | null,
        transFat: string | null,
        cholesterol: string | null,
        sodium: string | null,
        totalCarbohydrates: string | null,
        dietaryFiber: string | null,
        sugars: string | null,
        iron: string | null,
        vitaminA: string | null,
        vitaminC: string | null,
        calcium: string | null,
        saturatedFat: string | null,
        isEatWell: boolean | null,
        isPlantForward: boolean | null,
        isWholeGrains: boolean | null,
    }
}

interface Props {
    mealType: string,
    info: MealCardInfo
}

function MealCard({mealType, info}: Props) {
    const [modalVisible, setModalVisible] = useState(false)

    const currentUserId = FIREBASE_AUTH.currentUser?.uid

    const addMealFirebase = async () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
        
        if (currentUserId) {
            try {
                const docRef = doc(FIRESTORE_DB, "users", currentUserId);
                const docSnap = await getDoc(docRef);
                
                if (docSnap.exists()) {
                    const currentMeals = docSnap.data().currentDay

                    console.log(mealType)

                    if (mealType == "breakfast") {
                        currentMeals[0].data.push(info)
                    } else if (mealType == "lunch") {
                        currentMeals[1].data.push(info)
                    } else if (mealType == "dinner") {
                        currentMeals[2].data.push(info)
                    }
                    
                    await updateDoc(docRef, {
                        currentDay: currentMeals
                    })

                    alert("Added " + info.name)
                } else {
                    console.log("No such document!")
                }

                console.log("Added " + info.name);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <View style={styles.details}>
                    <Text style={styles.name}>{info.name}</Text>
                    <Pressable onPress={addMealFirebase}>
                        <Ionicons style={styles.addIcon} name="add-circle-outline"></Ionicons>
                    </Pressable>
                </View>
            <View style={styles.details}>
                    <Text>{info.nutrition.calories} Calories</Text>
                    <Text>{info.nutrition.protein}g Protein</Text>
                    <MealInfoModal modalVisible={modalVisible} setModalVisible={setModalVisible} info={info}/>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Ionicons style={styles.iconAlert} name="information-circle-outline"></Ionicons>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default memo(MealCard)

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
        },
        height: 80
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
        paddingVertical: 10,
        paddingLeft: 10,
        shadowColor: 'black',
    },

    addIcon: {
        color: 'black',
        fontSize: 24,
        marginRight: 11,
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
        color: '#433131'
    },

    details: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 13,
    }

})